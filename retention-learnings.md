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
| E117 | Teljes összhang: cím + indexkép + teaser + a leírás első mondata ugyanazt ígéri (újravágott teaser). Az intro utáni bevezető **nem** rövidült (~70 mp). | 2026.10.09. | 54 / 40 / 33 / 28 | 57 / 51 / 45 / 40 | Lekérdezve 2026.10.15. (20 napos), átl. 13:34 (27,2%). Az 1. perc átlagos, de a 2., 5. és 10. percnél 4–5 ponttal az alapátlag felett — a cím–kép–teaser összhang a bevezető rövidítése nélkül is megtartotta az új nézőket a 2. perc után. |
| E118 | Az A) fázis szerinti vágás: az intro és az első érdemi mondat között legfeljebb 20–30 mp (a köszöntés után Karo 1:36-kor már a könyvéről beszél). Teaser = a cím kérdése (kiszedhető-e a seed). Indexkép: vendég-karikatúra helyett a vendég sárkányjelmeze. | 2026.10.16. | 39 / 25 / 17 / 16 | 61 / 51 / 46 / 43 | Lekérdezve 2026.10.16. (14 napos), átl. 12:34 (26,4%). Az új nézők görbéje a leggyengébb eddig: már az 1. percnél 15 ponttal az átlag alatt, a feliratkozóké viszont kiemelkedő. A gyors kezdés önmagában nem tartotta meg az új nézőket; az esés az első percben történik, ezért valószínűleg a cím–kép (12 szó + sárkányjelmez) olyan nézőt hozott, akit a technikai tartalom nem tartott meg. |
| E119 | Gördülékeny kezdés: a köszöntés és a bemutatkozás üresjáratai mondatszinten kivágva (kb. egy perc), a fő téma (Argentarius) így a 3. percben indul. Teaser = a cím ígérete négy rövid részletben (105 éves levél → libabőr → meglopják a megtakarítókat → „mikor következik be?”). Indexkép: vendég-karikatúra + világító levél nagy, narancs ₿-viaszpecséttel (a címben nincs „bitcoin”, a kép hozza a bitcoin-jelet), kicker „105 ÉVE MEGÍRTA”. | 2026.10.23. | 66 / 50 / 38 / 36 | 51 / 45 / 42 / 41 | Lekérdezve 2026.11.04. (26 napos), 1036 megtekintés, átl. 15:47 (31,2%). Az eddigi legjobb új-néző-görbe: minden ponton 10–14 ponttal az alapátlag felett, és az 1. és 2. perc közötti esés csak 16 pont. A mondatszintű kezdővágás és a cím ígéretét négy részletben felépítő teaser együtt működött; a fő téma a 3. percben már elindult. |
| E120 | Gördülékeny kezdés: kb. 2 perc 10 mp kivágva az elejéből (köszöntés, kérdés-felvezetés, meta-mondatok), a fő sztori (a takarító 25 bitcoinja) a 3:20-nál indul. Teaser = a cím kérdésének válasza („20 dollárért 4 karamell macchiatót kapok”) + új rejtély (privát kulcsok e-mailben). Cím a vendég csatornanevével, kérdéses csattanóval („Erre ő?”); indexkép tárgy-szembeállítás egy jelenetben (4 kávéspohár vs. nagy bitcoinkupac) + **első festményszerű, félig realisztikus vendégportré** (karikatúra helyett, a felismerhetőségért; cinkos félmosoly, szemkontaktus a nézővel), kicker „4 KÁVÉÉRT?”. | 2026.10.30. | 57 / 34 / 32 / 30 | 56 / 43 / 42 / 41 | Lekérdezve 2026.11.04. (19 napos), 3475 megtekintés (a legnagyobb elérés a sorban), átl. 15:24 (27,1%). Az 1. perc átlagos, a 2. percnél viszont 23 pontot esik (átlag alatti), utána 5 és 10 percnél 4–6 ponttal az átlag felett. A nagy elérés sok kíváncsi új nézőt hozott, akik közül sokan a fő sztori indulása (3:20) előtt kiléptek; aki megvárta, az maradt. |
| E121 | **Cím–tartalom szerkezeti eltérés:** a cím és a ~70 mp-es teaser (proof of stake olimpia → hamisítható Ethereum-lánc → „nem értik a különbséget”) a proof of stake-et ígéri, de az adás az első 22 percben hackekről (Ledger, tanúsítvány, kvantum) szól, a fő téma csak 24:52-kor indul; a köszöntésben elhangzik, hogy később jön. Kezdővágás csak ~12 mp (a jegybankelnök-rész maradt). Indexkép: **első fotószerű (nem festett) vendégportré** (ChatGPT, utólag rátett **piros lézerszemmel**) + aranyérem ezüstérmék előtt, **nagy, kétsoros** kicker „AKI FIZET, NYER”; a festett változat 2026.10.22-én lecserélve. | 2026.11.06. | 51 / 40 / 37 / 32 | 54 / 53 / 45 / 42 | Lekérdezve 2026.11.06. (14 napos), 1499 megtekintés, átl. 16:50 (32,5%). Az 1. perc 3 ponttal az átlag alatt, a 2., 5. és 10. percnél viszont 4–9 ponttal fölötte, és az 1. és 2. perc közti esés csak 11 pont; a feliratkozók is erősek. A cím és a tartalom szerkezeti eltérése nem okozott látható lemorzsolódást az első 10 percben: a hackekkel induló első rész megtartotta a nézőket. |
| E122 | **Kezdővágás nélkül** (Árpi döntése; a fő téma az adásban 05:51-kor indul). A teaser csak a vendéggel, ~42 mp, négy részletben (a tárca kiírja az összeget → hogyan ellenőrizhető → kamu tranzakció → a képernyőn látott szám nem biztos). Rövid, 32 karakteres, kérdő cím a „hamis” szóval. Indexkép: festett vendégavatar lupéval és narancs bitcoinérmével, kicker „ELHIHETED?”. | 2026.11.20. | esedékes | | |
| E123 | Teaser a „tőzsdén tartod?” ívvel (Feri: az ismerősök tőzsdén tartják → Openoms: harmadik fél, Binance, 17 000 bitcoin → „és ezt meg tudjuk tanulni”), kb. 50 mp. Kezdővágás ~15 mp (a köszöntés utáni meta-mondatok) + a korábbi adásra visszautaló ~27 mp. Cím: „Jobban, mint a Binance: így vigyázz a bitcoinodra!” (brandnév a hook elején, módszer-ígéret). Indexkép: a vendég festett robotavatarja (arc nélkül) + megrepedt üvegszéf bitcoinnal, kicker „TŐZSDÉN TARTOD?”. | 2026.11.27. | esedékes | | |
