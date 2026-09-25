#!/usr/bin/env python3
"""YouTube-videó címének és leírásának lekérése / frissítése (YouTube Data API v3).

A titkos fájlok a repón KÍVÜL élnek:
  ~/.config/huszonegy-yt/client_secret_*.json  — OAuth kliens (Desktop app)
  ~/.config/huszonegy-yt/token.json            — az első engedélyezés után jön létre

Futtatás a külön venv-ből:
  ~/.local/share/huszonegy-yt/venv/bin/python scripts/yt_meta.py auth
  ~/.local/share/huszonegy-yt/venv/bin/python scripts/yt_meta.py get <video_id>
  ~/.local/share/huszonegy-yt/venv/bin/python scripts/yt_meta.py set <video_id> [--title T] [--desc-file F] [--apply]
  ~/.local/share/huszonegy-yt/venv/bin/python scripts/yt_meta.py retention E117 [E116 ...]

A `set` alapból csak megmutatja a különbséget; élesíteni csak `--apply`-jal lehet.
"""
import argparse
import datetime
import difflib
import glob
import json
import os
import re
import sys

from google.auth.exceptions import RefreshError
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

CONFIG_DIR = os.path.expanduser("~/.config/huszonegy-yt")
TOKEN_PATH = os.path.join(CONFIG_DIR, "token.json")
SCOPES = ["https://www.googleapis.com/auth/youtube.force-ssl",
          "https://www.googleapis.com/auth/yt-analytics.readonly"]


def client_secret_path():
    files = glob.glob(os.path.join(CONFIG_DIR, "client_secret_*.json"))
    if len(files) != 1:
        sys.exit(f"Pontosan egy client_secret_*.json kell ide: {CONFIG_DIR} (talált: {len(files)})")
    return files[0]


def credentials():
    creds = None
    if os.path.exists(TOKEN_PATH):
        with open(TOKEN_PATH) as f:
            granted = set(json.load(f).get("scopes") or [])
        # Új jogosultságnál (pl. Analytics) a régi token nem elég — újra be kell jelentkezni.
        if set(SCOPES) <= granted:
            creds = Credentials.from_authorized_user_file(TOKEN_PATH, SCOPES)
    if creds and creds.valid:
        return creds
    try:
        if not (creds and creds.expired and creds.refresh_token):
            raise RefreshError
        creds.refresh(Request())
    except RefreshError:
        # Testing módban a refresh token 7 nap után lejár — ilyenkor újra be kell jelentkezni.
        flow = InstalledAppFlow.from_client_secrets_file(client_secret_path(), SCOPES)
        creds = flow.run_local_server(port=0, open_browser=True)
    fd = os.open(TOKEN_PATH, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
    with os.fdopen(fd, "w") as f:
        f.write(creds.to_json())
    return creds


def youtube():
    return build("youtube", "v3", credentials=credentials())


def analytics():
    return build("youtubeAnalytics", "v2", credentials=credentials())


def fetch(yt, video_id):
    items = yt.videos().list(part="snippet", id=video_id).execute().get("items", [])
    if not items:
        sys.exit(f"Nincs ilyen videó, vagy nem ennek a fióknak a videója: {video_id}")
    return items[0]


def cmd_auth(_):
    yt = youtube()
    ch = yt.channels().list(part="snippet", mine=True).execute().get("items", [])
    print("Engedélyezve. Csatorna:", ", ".join(c["snippet"]["title"] for c in ch) or "(nincs)")


def cmd_get(args):
    s = fetch(youtube(), args.video_id)["snippet"]
    print(s["title"])
    print("-" * 40)
    print(s.get("description", ""))


def cmd_set(args):
    yt = youtube()
    video = fetch(yt, args.video_id)
    old = video["snippet"]
    new = dict(old)
    if args.title is not None:
        new["title"] = args.title
    if args.desc_file is not None:
        with open(args.desc_file, encoding="utf-8") as f:
            new["description"] = f.read().rstrip("\n")

    if old["title"] != new["title"]:
        print(f"CÍM:\n- {old['title']}\n+ {new['title']}\n")
    diff = list(difflib.unified_diff(
        old.get("description", "").splitlines(), new.get("description", "").splitlines(),
        "élő leírás", "új leírás", lineterm=""))
    print("\n".join(diff) if diff else "A leírás nem változik.")

    if not args.apply:
        print("\n(Próbafutás — élesítéshez: --apply)")
        return
    # Az API a snippetet egészben cseréli: a categoryId kötelező, a tageket és a nyelvet megtartjuk.
    body = {"id": args.video_id, "snippet": {
        k: new[k] for k in ("title", "description", "categoryId", "tags",
                            "defaultLanguage", "defaultAudioLanguage") if k in new}}
    yt.videos().update(part="snippet", body=body).execute()
    print("\nFrissítve.")


PODCASTS_TS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "src", "data", "podcasts.ts")
RETENTION_POINTS_MIN = (1, 2, 5, 10)


def episode_video_ids():
    """Epizód-azonosító → YouTube-videóazonosító a podcasts.ts-ből."""
    with open(PODCASTS_TS, encoding="utf-8") as f:
        src = f.read()
    return {m[1]: m[2] for m in re.finditer(
        # A keresés nem léphet át a következő epizód `id:` mezőjén; a yt-link rövid és hosszú alakban is előfordul.
        r'id: "([ER]\d+)"(?:(?!id: ").)*?yt: "https://(?:youtu\.be/|www\.youtube\.com/watch\?v=)([A-Za-z0-9_-]+)"',
        src, re.S)}


def iso_seconds(duration):
    m = re.match(r"PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?", duration)
    return int(m[1] or 0) * 3600 + int(m[2] or 0) * 60 + int(m[3] or 0)


def cmd_retention(args):
    """Megtartási görbe feliratkozókra és új nézőkre bontva, a retention-learnings.md alapértékeivel összevethető pontokon."""
    ids = episode_video_ids()
    yt, ya = youtube(), analytics()
    today = datetime.date.today()
    for ep in args.episodes:
        vid = ids.get(ep, ep)
        v = yt.videos().list(part="snippet,contentDetails", id=vid).execute()["items"][0]
        if "duration" not in v["contentDetails"]:
            print(f"{ep} ({vid}) — még nem jelent meg (premierre vár), nincs megtartási adat.")
            continue
        dur = iso_seconds(v["contentDetails"]["duration"])
        published = datetime.date.fromisoformat(v["snippet"]["publishedAt"][:10])
        age = (today - published).days
        total = ya.reports().query(ids="channel==MINE", startDate=published.isoformat(), endDate=today.isoformat(),
                                   metrics="views,averageViewDuration,averageViewPercentage",
                                   filters=f"video=={vid}").execute().get("rows", [[0, 0, 0]])[0]
        print(f"{ep} ({vid}) — {published}, {age} napos, {dur // 60} perc | {total[0]} megtekintés, "
              f"átl. {int(total[1]) // 60}:{int(total[1]) % 60:02d} ({total[2]:.1f}%)")
        if age < 14:
            print("  ⚠ 14 napnál fiatalabb — a görbe még nem végleges, csak tájékoztató.")
        for status, label in (("UNSUBSCRIBED", "új nézők  "), ("SUBSCRIBED", "feliratkozók")):
            rows = ya.reports().query(ids="channel==MINE", startDate=published.isoformat(), endDate=today.isoformat(),
                                      metrics="audienceWatchRatio", dimensions="elapsedVideoTimeRatio",
                                      filters=f"video=={vid};subscribedStatus=={status};audienceType==ORGANIC"
                                      ).execute().get("rows", [])
            if not rows:
                print(f"  {label}: még nincs adat")
                continue
            at = lambda sec: min(rows, key=lambda r: abs(r[0] * dur - sec))[1] * 100
            print(f"  {label}: " + "  ".join(f"{m}p {at(m * 60):3.0f}%" for m in RETENTION_POINTS_MIN))


def main():
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)
    sub.add_parser("auth").set_defaults(func=cmd_auth)
    g = sub.add_parser("get")
    g.add_argument("video_id")
    g.set_defaults(func=cmd_get)
    s = sub.add_parser("set")
    s.add_argument("video_id")
    s.add_argument("--title")
    s.add_argument("--desc-file")
    s.add_argument("--apply", action="store_true")
    s.set_defaults(func=cmd_set)
    r = sub.add_parser("retention")
    r.add_argument("episodes", nargs="+", help="epizód-azonosító (pl. E117) vagy YouTube-videóazonosító")
    r.set_defaults(func=cmd_retention)
    args = p.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
