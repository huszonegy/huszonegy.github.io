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
  ~/.local/share/huszonegy-yt/venv/bin/python scripts/yt_meta.py thumb <video_id> <kep.jpg>
  ~/.local/share/huszonegy-yt/venv/bin/python scripts/yt_meta.py lang <video_id> [--audio en]
  ~/.local/share/huszonegy-yt/venv/bin/python scripts/yt_meta.py upload <video.mp4> --title T --desc-file F \
      [--tags A,B] [--thumb kep.jpg] [--playlist NÉV] [--publish-at ISO-IDŐ] [--apply]
  ~/.local/share/huszonegy-yt/venv/bin/python scripts/yt_meta.py playlist "LISTA NEVE" --desc-file F [--apply]

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


def cmd_lang(args):
    # A Riverside-feltöltés angol szövegnyelvet és üres hangnyelvet hagy; ezt állítja magyarra.
    yt = youtube()
    old = fetch(yt, args.video_id)["snippet"]
    print(f"ELŐTTE: szöveg={old.get('defaultLanguage')}, hang={old.get('defaultAudioLanguage')}")
    body = {"id": args.video_id, "snippet": {
        k: old[k] for k in ("title", "description", "categoryId", "tags") if k in old}}
    body["snippet"]["defaultLanguage"] = "hu"
    body["snippet"]["defaultAudioLanguage"] = args.audio
    new = yt.videos().update(part="snippet", body=body).execute()["snippet"]
    print(f"UTÁNA:  szöveg={new.get('defaultLanguage')}, hang={new.get('defaultAudioLanguage')}")


def cmd_thumb(args):
    """Indexkép feltöltése (1280×720 JPEG, 2 MB alatt)."""
    from googleapiclient.http import MediaFileUpload
    yt = youtube()
    fetch(yt, args.video_id)
    r = yt.thumbnails().set(videoId=args.video_id,
                            media_body=MediaFileUpload(args.file, mimetype="image/jpeg")).execute()
    best = max(r["items"][0].values(), key=lambda t: t.get("width", 0))
    print(f"Indexkép feltöltve: {best['url']} ({best.get('width')}×{best.get('height')})")


def latest_category(yt):
    """A csatorna legutóbb feltöltött videójának kategóriája — hogy az új feltöltés ugyanabba kerüljön."""
    ch = yt.channels().list(part="contentDetails", mine=True).execute()["items"][0]
    uploads = ch["contentDetails"]["relatedPlaylists"]["uploads"]
    item = yt.playlistItems().list(part="contentDetails", playlistId=uploads, maxResults=1).execute()["items"][0]
    return fetch(yt, item["contentDetails"]["videoId"])["snippet"]["categoryId"]


def playlist_id(yt, title):
    """A megadott nevű saját lejátszási lista azonosítója; ha nincs ilyen, nyilvánosként létrehozza."""
    req = yt.playlists().list(part="snippet", mine=True, maxResults=50)
    while req is not None:
        resp = req.execute()
        for pl in resp.get("items", []):
            if pl["snippet"]["title"] == title:
                return pl["id"], False
        req = yt.playlists().list_next(req, resp)
    pl = yt.playlists().insert(part="snippet,status", body={
        "snippet": {"title": title, "defaultLanguage": "hu"},
        "status": {"privacyStatus": "public"}}).execute()
    return pl["id"], True


def cmd_playlist(args):
    """Saját lejátszási lista leírásának frissítése (név alapján)."""
    yt = youtube()
    req = yt.playlists().list(part="snippet", mine=True, maxResults=50)
    pl = None
    while req is not None and pl is None:
        resp = req.execute()
        pl = next((p for p in resp.get("items", []) if p["snippet"]["title"] == args.name), None)
        req = yt.playlists().list_next(req, resp)
    if pl is None:
        sys.exit(f"Nincs ilyen nevű lejátszási lista: {args.name}")
    old = pl["snippet"]
    with open(args.desc_file, encoding="utf-8") as f:
        desc = f.read().rstrip("\n")
    if "<" in desc or ">" in desc:
        sys.exit("A YouTube nem enged < vagy > jelet a leírásban.")

    diff = list(difflib.unified_diff(
        old.get("description", "").splitlines(), desc.splitlines(),
        "élő leírás", "új leírás", lineterm=""))
    print(f"LISTA: {args.name} → https://www.youtube.com/playlist?list={pl['id']}")
    print("\n".join(diff) if diff else "A leírás nem változik.")

    if not args.apply:
        print("\n(Próbafutás — élesítéshez: --apply)")
        return
    # A snippetet itt is egészben cseréli az API: a címet és a nyelvet megtartjuk.
    body = {"id": pl["id"], "snippet": {
        k: old[k] for k in ("title", "defaultLanguage") if k in old}}
    body["snippet"]["description"] = desc
    yt.playlists().update(part="snippet", body=body).execute()
    print("\nFrissítve.")


def cmd_upload(args):
    """Videó feltöltése magyar nyelvbeállítással, indexképpel és lejátszási listával."""
    with open(args.desc_file, encoding="utf-8") as f:
        desc = f.read().rstrip("\n")
    if "<" in args.title + desc or ">" in args.title + desc:
        sys.exit("A cím és a leírás nem tartalmazhat < vagy > karaktert (az API elutasítja).")
    if len(args.title) > 100:
        sys.exit(f"A cím legfeljebb 100 karakter lehet (most {len(args.title)}).")
    tags = [t.strip() for t in args.tags.split(",") if t.strip()] if args.tags else []
    # Időzített közzétételhez az API privát állapotot kér; a publishAt-kor válik nyilvánossá.
    status = {"privacyStatus": "private" if args.publish_at else args.privacy,
              "selfDeclaredMadeForKids": False, "embeddable": True, "license": "youtube"}
    if args.publish_at:
        status["publishAt"] = args.publish_at

    print(f"FÁJL:      {args.file}")
    print(f"CÍM:       {args.title}")
    print(f"CÍMKÉK:    {', '.join(tags) or '(nincs)'}")
    print(f"NYELV:     szöveg=hu, hang={args.audio}")
    print(f"ÁLLAPOT:   {status['privacyStatus']}" + (f", közzététel: {args.publish_at}" if args.publish_at else ""))
    print(f"INDEXKÉP:  {args.thumb or '(nincs)'}")
    print(f"LISTA:     {args.playlist or '(nincs)'}")
    print("-" * 40)
    print(desc)
    if not args.apply:
        print("\n(Próbafutás — élesítéshez: --apply)")
        return
    if not os.path.isfile(args.file):
        sys.exit(f"Nincs ilyen fájl: {args.file}")

    from googleapiclient.http import MediaFileUpload
    yt = youtube()
    body = {"snippet": {"title": args.title, "description": desc, "tags": tags,
                        "categoryId": args.category or latest_category(yt),
                        "defaultLanguage": "hu", "defaultAudioLanguage": args.audio},
            "status": status}
    media = MediaFileUpload(args.file, mimetype="video/mp4", chunksize=16 * 1024 * 1024, resumable=True)
    req = yt.videos().insert(part="snippet,status", body=body, media_body=media)
    resp = None
    while resp is None:
        prog, resp = req.next_chunk()
        if prog:
            print(f"\rFeltöltés: {prog.progress() * 100:5.1f}%", end="", flush=True)
    vid = resp["id"]
    print(f"\rFeltöltve: https://youtu.be/{vid}  (kategória: {body['snippet']['categoryId']})")

    if args.thumb:
        yt.thumbnails().set(videoId=vid, media_body=MediaFileUpload(args.thumb, mimetype="image/jpeg")).execute()
        print("Indexkép beállítva.")
    if args.playlist:
        pid, created = playlist_id(yt, args.playlist)
        yt.playlistItems().insert(part="snippet", body={"snippet": {
            "playlistId": pid, "resourceId": {"kind": "youtube#video", "videoId": vid}}}).execute()
        print(f"Lejátszási lista{' (új)' if created else ''}: {args.playlist} → https://www.youtube.com/playlist?list={pid}")


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
    t = sub.add_parser("thumb")
    t.add_argument("video_id")
    t.add_argument("file")
    t.set_defaults(func=cmd_thumb)
    la = sub.add_parser("lang")
    la.add_argument("video_id")
    la.add_argument("--audio", default="hu", help="a hang nyelve (angol hangú videónál: en)")
    la.set_defaults(func=cmd_lang)
    u = sub.add_parser("upload")
    u.add_argument("file")
    u.add_argument("--title", required=True)
    u.add_argument("--desc-file", required=True)
    u.add_argument("--tags", help="vesszővel elválasztva")
    u.add_argument("--thumb", help="indexkép (1280×720 JPEG, 2 MB alatt)")
    u.add_argument("--playlist", help="lejátszási lista neve; ha nincs ilyen, létrehozza")
    u.add_argument("--publish-at", help="időzített közzététel, pl. 2026-10-30T19:00:00+01:00")
    u.add_argument("--privacy", default="private", choices=["private", "unlisted", "public"])
    u.add_argument("--audio", default="hu", help="a hang nyelve")
    u.add_argument("--category", help="kategória-azonosító; alapból a legutóbbi videóé")
    u.add_argument("--apply", action="store_true")
    u.set_defaults(func=cmd_upload)

    pl = sub.add_parser("playlist")
    pl.add_argument("name", help="a lejátszási lista neve")
    pl.add_argument("--desc-file", required=True)
    pl.add_argument("--apply", action="store_true")
    pl.set_defaults(func=cmd_playlist)

    r = sub.add_parser("retention")
    r.add_argument("episodes", nargs="+", help="epizód-azonosító (pl. E117) vagy YouTube-videóazonosító")
    r.set_defaults(func=cmd_retention)
    args = p.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
