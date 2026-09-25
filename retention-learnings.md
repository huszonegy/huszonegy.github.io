# Megtartási tanulságok — hol mennek el a nézők

Ez a fájl a HUSZONEGY-epizódok **megtartási görbéjének** (audience retention) tanulságait és az epizódonkénti ellenőrzés naplóját gyűjti. A lekérdezés módja, az automatikus ellenőrzés és a vágási szabályok az [`instructions.md`](instructions.md) 0. lépésében és a 4/b. lépésében vannak.

## Lekérdezés

```
~/.local/share/huszonegy-yt/venv/bin/python scripts/yt_meta.py retention E117 [E116 ...]
```

A parancs a YouTube Analytics API-ból kéri le a görbét a megjelenéstől máig, **organikus** nézőkre, **új nézőkre** (nem feliratkozók) és **feliratkozókra** bontva, az 1., 2., 5. és 10. percnél. Az érték: a nézők hány százaléka nézi még az adott ponton a videót.

**A mérés korlátai:**
- Az API a görbét 100 pontban adja vissza — egy 50 perces adásnál ~30 másodpercenként van adatpont. Egy-egy mondat hatása nem mutatható ki, csak nagyobb szakaszoké.
- A 14 napnál fiatalabb epizód görbéje még mozog; ilyenkor csak tájékoztató.
- 2026.08.21. óta a kezdőlapi automatikus előnézetek feltehetően megtekintésnek számítanak (lásd [`title-learnings.md`](title-learnings.md)), ez az első percet torzíthatja.

## Alapértékek (E109–E116, lekérdezve 2026.09.25.)

| Epizód | Hossz | Új nézők 1p / 2p / 5p / 10p | Feliratkozók 1p / 2p / 5p / 10p | Átl. nézési idő |
|---|---|---|---|---|
| E109 | 66p | 53 / 39 / 30 / 27 | 50 / 45 / 38 / 37 | 14:52 (22,3%) |
| E110 | 51p | 56 / 39 / 31 / 28 | 56 / 45 / 43 / 40 | 13:21 (26,1%) |
| E111 | 48p | 45 / 24 / 17 / 13 | 57 / 51 / 44 / 42 | 10:38 (22,2%) |
| E112 | 52p | 57 / 35 / 25 / 21 | 52 / 41 / 38 / 35 | 12:09 (23,1%) |
| E113 | 54p | 54 / 41 / 34 / 28 | 52 / 46 / 45 / 44 | 17:51 (32,8%) |
| E114 | 51p | 61 / 44 / 32 / 27 | 52 / 47 / 40 / 38 | 14:57 (29,0%) |
| E115 | 45p | 54 / 33 / 27 / 24 | 53 / 43 / 42 / 46 | 11:34 (25,4%) |
| E116* | 51p | 47 / 33 / 24 / 17 | 56 / 51 / 44 / 39 | 12:00 (23,1%) |
| **Átlag (E109–E115)** | | **54 / 36 / 28 / 24** | **53 / 45 / 41 / 40** | |

\* 7 napos volt a lekérdezéskor — nem számít bele az átlagba.

## Megfigyelt mintázatok (2026.09.25.)

- **Az első percben a nézők ~fele kilép — minden adásnál, a tartalomtól függetlenül.** A 30. másodpercnél az új nézők még 90% felett vannak, az 1. percnél ~54%-on. Ez akkor is így van, ha a teaser 30 mp-es, és akkor is, ha 2 perces. Valószínűleg a „belekattintok, megnézem" típusú kilépés, részben a kezdőlapi előnézetek miatt. Vágással keveset lehet rajta javítani; ami segít: a cím, az indexkép és az első kimondott mondat ugyanazt ígérje.
- **Az 1. és a 2. perc között veszíti el a legtöbbet az adás az új nézők közül** (átlagosan ~18 pont egyetlen perc alatt). Ez az intro utáni köszöntés, a „ez a HUSZONEGY podcast X. adása", a vendég bemutatása és a „mivel készültél?" szakasza. **Itt lehet vágással a legtöbbet nyerni.**
- **A gyors kezdés az első perceken segít:** a 2. és 5. percnél azok az adások a legjobbak, ahol az intro után hamar konkrét történet vagy állítás jön (E113: 41/34, E114: 44/32). A 10. percre ez az előny elkopik (27–28% holtverseny) — onnan a téma és a tempó számít.
- **A feliratkozók 2 perc után szinte végig maradnak** (5p: ~41%, 10p: ~40%); a különbséget az új nézők adják.
- **A támogatáskérő bevágás hatása nem mutatható ki:** a veszteség hasonló volt vele és nélküle is.
- **Leggyengébb új-néző-görbe:** E111 (2p: 24%, 10p: 13%) és a még fiatal E116 (10p: 17%).

## Ellenőrzési napló

Minden epizódot **14 nappal a megjelenése után** lekérdezek, és egy sorban összevetem az alapértékek átlagával. Az ellenőrzést nem Árpinak kell kérnie: minden munkamenet elején magamtól lefuttatom azokra az epizódokra, amelyek 14 napnál idősebbek, és ebben a táblázatban „esedékes" állapotúak (lásd `instructions.md`).

| Epizód | Mit próbáltunk ki | Esedékes | Új nézők 1p / 2p / 5p / 10p | Feliratkozók 1p / 2p / 5p / 10p | Tanulság |
|---|---|---|---|---|---|
| E117 | Teljes összhang: cím + indexkép + teaser + a leírás első mondata ugyanazt ígéri (újravágott teaser). Az intro utáni bevezető **nem** rövidült (~70 mp). | 2026.10.09. | esedékes | | |
| E118 | Az A) fázis szerinti vágás: az intro és az első érdemi mondat között legfeljebb 20–30 mp. | megjelenés + 14 nap | esedékes | | |
