# HUSZONEGY podcast — heti munkafolyamat és átirat-szépítés

A munkát a HUSZONEGY podcast vágója (Árpi) végzi, VS Code-ban a Claude Code bővítménnyel, Opus modellel, `xhigh` effort-szinten. Ez a dokumentum a teljes heti munkafolyamat leírása, hogy bárki átvehesse, aki ugyanígy beállítja a Claude Code-ot.

## Heti munkafolyamat — új epizód

Minden héten egy új epizód. Árpi megvágja és feltölti a HUSZONEGY YouTube-csatornájára — ekkor a leírásban csak a résztvevők állnak (pl. „Anti, Tamás, Árpi") —, a YouTube elkészíti az automatikus feliratot. Innen indul a közös munka; az input az új epizód **YouTube-linkje**.

**Vezérelv minden lépésnél:** ami a reflektorfénybe kerül (cím, indexkép, bevezető, fejezetcímek), legyen egyszerre **lényegi** (az epizód érdemben, hosszan kifejti) **és izgalmas**. Marginális — egy mondatos, egyperces — téma sosem kerül fókuszba, akkor sem, ha csábító. Hiteles edukáció, nem kattintásvadászat. Javaslatot mindig indoklással adok; valódi ízlés-/hangsúlykérdésnél kérdezek, és a választ feljegyzem.

### 0. Átirat letöltése, megértése
- `yt-dlp`-vel a magyar auto-felirat a `transcripts_raw/` mappába (lásd „Fájlok helye"), és a leírás letöltése (`--print '%(description)s'`) a `members`-hez.
- Végigolvasom az egész átiratot, és készítek egy tématérképet: a fő témák, mindegyikhez az időtartomány és nagyjából a hossz, plusz az epizód hangulata/üzenete. Ez alapozza meg a címet, a bevezetőt és a fejezeteket, és teszi auditálhatóvá, mi lényegi és mi marginális.

### 1. Cím
Legfeljebb 5 változat, mind más szögből (kérdés / szám / konkrét értékígéret / meglepő állítás / tét). Mindegyiknél: karakterszám, miért működik, és melyik epizódrész fedezi. Megjelölöm az elsőként ajánlottat.
Kritériumok: 45–60 karakter; konkrét ígéret (mit kap a néző, ha rákattint); ha van benne szám, az emeli a CTR-t; kérdésforma is emeli; kerüld az elvont, filozofikus megfogalmazást; ne legyen „remix"/„újrahasznosított tartalom" jellegű előtag; magyar helyesírás — csak az első szó és a tulajdonnevek nagybetűsek; a cím a tematikát fedje, ne egy egyperces részt.

### 2. Bevezető — 3 mondat a leíráshoz
- 1. mondat: önmagában is megáll (ez látszik a keresőben és a „továbbiak" előtt).
- Tartalmazza a fő ígéretet/kérdést, amire az epizód választ ad.
- 3. mondat: amit ennél az epizódnál a leginkább érdemes még megemlíteni.
- A három mondat együtt jól fedje le az epizódot.

### 3. Fejezetcímek időbélyeggel
- 8–12 fejezet, legalább 3–5 perces közökkel; az időbélyeg után csak szóköz, gondolatjel nélkül.
- Nincs „Bevezetés" fejezet — az első is tartalmi.
- Kíváncsiságkeltő, hangzatos címek, nem tartalomjegyzék-szerűek; max 3–4 kérdés, a többi állítás; max ~50 karakter/fejezet.
- Csak akkor önálló fejezet, ha a téma legalább 2–3 percen át kifejtve szerepel.
- Az időbélyegeket a felirat időzítéséből állítom elő.

### 4. YouTube-leírás összeállítása
A jelenlegi blokkos felépítés (nincs bebetonozva — jobbító javaslat mindig jöhet):
1. Bevezető (3 mondat)
2. A legfontosabb / új link(ek) — a bevezető és a fejezetek közé (jelenleg: Relai affiliate; Árpi jelzi, mi kerül ide).
3. Fejezetcímek időbélyeggel
4. `HUSZONEGY:` — huszonegy.world · /meetup · Telegram (t.me/huszonegy) · Lightning (huszonegy@blink.sv) · Nostr (nostr.hu/huszonegy)
5. `Mentorálás & blog:` — bitcoinmentor.hu · bitcoinmentor.hu/bitcoin-blog
6. `Szponzorok:` — Hotel Aurora (Miskolctapolca, hotelaurora.hu) · Hotel Atlantis (Hajdúszoboszló, hotelatlantis.hu)
7. `Firefish:` — app.firefish.io regisztráció, ajánlókód: HUSZONEGY

### 5. Indexkép
- **Brief:** részletes leírást írok a kívánt indexképről — ne legyen túlzsúfolt, ne fotorealisztikus, hanem minimalista, letisztult, és a címmel párban dolgozzon (egészítse ki, ne ismételje).
- **Generálás:** Árpi Geminivel legyártja a képet.
- **Vízjelmentesítés:** epizódonként közösen kiderítjük, meg tudom-e szépen csinálni. A módszer a környező szín ráfestése a vízjelre, finom, lágy szélű kitöltéssel — sima, egyszínű sarkon az ImageMagick is jól megoldja, mintázott háttéren nem. Ha nem lesz tiszta a végeredmény, a vízjelet Árpi viszi GIMP-ben.
- **Átméretezés:** az enyém — 1280×720 (Árpi tölti fel YouTube/Spotify/Rumble), és 260×146 a `public/pics/eXXX.jpg`-hez. Árpi elmenti a kész képet egy elérési útra, onnan dolgozom.

### 6. podcasts.ts — csak amikor minden végleges
Amikor a cím, fejezetek, leírás és kép kész, és megvan a publikálás dátuma: új bejegyzés a `src/data/podcasts.ts` **tetejére** (a legújabb legfelülre). Mezők: `name` (végleges cím), `id` (soron következő E-szám), `chapters` (idő + cím), `img` (`/pics/eXXX.jpg`), `date` (a publikálás napja, `"ÉÉÉÉ.HH.NN."`), `members`, `topic` (a fejezetcímek `" - "`-rel összefűzve), `yt`, `fountain`.

A `fountain` epizódlink csak publikálás után órákkal generálódik — addig ideiglenesen a show-URL megy be (`https://fountain.fm/show/gCVs8tyNdgXfJqaRbL3N`), később frissítjük az epizód saját linkjére.

### 7. Átirat szépítése
Az átirat szépítése az alábbi instrukciók szerint → `public/transcripts_clean/epEXXX_*.md`. A bizonytalan STT-helyeket listázom ellenőrzésre; a javítások beépítése után az új, visszatérő hibákat a `corrections.md`-be írom.

### 8. Ellenőrzés, commit
Build-ellenőrzés (a sitemap build-időben magától frissül a `podcasts.ts`-ből és az átiratokból — kézi munkát nem igényel). Commit, amikor Árpi kéri; egy „podcast update" commit jellemzően a `podcasts.ts`-t, a `public/pics/eXXX.jpg`-t és az átirat `.md`-t tartalmazza.

## Fájlok helye
public/transcripts_clean mappában
fájlok neve E01 esetén epE01_ kezdetű
corrections.md a gyökérben

Új adás forrásfelirata: a YouTube-azonosító a `src/data/podcasts.ts` `yt:` mezőjében van. A magyar auto-feliratot yt-dlp-vel töltsd le a `transcripts_raw/` mappába `epE{NN}_{id}.hu.srt` néven:
`yt-dlp --write-auto-subs --sub-langs hu --sub-format srt --convert-subs srt --skip-download -o "epE{NN}_%(id)s.%(ext)s" <url>`
Csak automatikus felirat van, kézi nincs.

## Etalon

Az **E95** (`epE95_FttsWvmTlDY.md`) a referencia. Olvasd el, mielőtt bármit csinálsz. Minden szépített átiratnak ezt a minőséget kell elérnie.

## Mit jelent a szépítés?

Nyers, beszélt nyelvi szöveget alakítunk olvasható, linkelt, strukturált prózává – miközben a tartalom, hangulat és podcast-jelleg megmarad.

Ez nem összefoglalás, hanem az élőbeszéd tisztítása. Minden elhangzott érvnek, példának, személyes történetnek és gondolatmenetnek meg kell maradnia teljes részletességgel. Csak a technikai zajt (ö-zés, ismétlés) távolítjuk el.

1. Bekezdéstörések (beszélőváltás, logikai egységek)
2. Hezitálások, ismétlések, egyszavas reagálások eltávolítása
3. Elírások, speech-to-text hibák javítása (lásd `corrections.md`)
4. Linkek beillesztése (lásd `corrections.md`)
5. `21` → `HUSZONEGY` ahol a podcast nevére vagy kuponkódra utal
6. Eredmény: `.md` fájl, ugyanabban a mappában

## Fájltípusok — mit csinálj velük

- **Csak .txt van (E01–E20, R01–R07):** Teljes feldolgozás – mondatokra tördelés, írásjel-pótlás, bekezdéselés, töredékes mondatok összefésülése. Ez a legnehezebb.
- **Van .md, de nyers (E21–E50 körül):** Szinte teljes átdolgozás – alig van írásjel, nincs struktúra, nincs link.
- **Van .md, de tele hezitálással (E50–E92 körül):** Közepes átdolgozás – mondatok rendben, de hezitálások, ismétlések, linkek hiányoznak.
- **Szerkesztett md (E94, E95, E96):** NE nyúlj hozzá.

## Adásszerkezet

- **Cold-open:** az adás gyakran egy figyelemfelkeltő részlettel indul, ami szó szerint egy később elhangzó mondat vagy párbeszéd. Ezt hagyd meg az átirat elején (az E95 etalon is így csinálja).
- **Intró:** „Sziasztok, ez itt a HUSZONEGY Bitcoin Podcast…"
- **Szponzori blokk:** az állandó outro-szöveg (huszonegy.world, Bitcoin blog, bitcoinmentor.hu, Hotel Aurora/Atlantis, Firefish) gyakran az adás KÖZEPÉN hangzik el mid-rollként, nem csak a végén — utána még jön érdemi tartalom, ami benne marad.
- **Beszélőváltás:** csak gondolatjellel (`–`), név nélkül — akkor is, ha hárman beszélgetnek.

## Szerkesztési szabályok

**Eltávolítandó:** hezitálások ("és és", "a a", "ö"), egyszavas reagálások ("Igen.", "Ja.", "Ühüm.", "Bizony.", "Pontosan.", "Persze."), félbehagyott mondatok, töltelékszavak ("na most", "szóval", "tudod").

**Figyelem – NEM eltávolítandó:** a `"Nem tudom"` kifejezés, ha nem töltelék, hanem érdemi megszólalás kezdete vagy gondolkodás kifejezése.

**Megtartandó:** természetes hangvétel, beszélők egyéni stílusa, humor, minden érdemi tartalom. Angol loanword-ök, amiket a beszélők tudatosan használnak (pl. abuzálás, home run, bottom-up, guidance, off-grid, disconnect, number go up) — NE fordítsd magyarra.

**Bekezdések:** egy bekezdés = egy gondolati egység, 3-8 mondat. Többtémás bekezdéseket bontsd, töredékeket fésüld össze.

**Beszélőváltás:** gondolatjellel (`–`). Utána nem kell név. Nem kell minden megszólalást jelölni – ha egyértelmű, ki beszél, elhagyható.

**Nevetés:** `(nevetés)` formátumban, csak ahol humoros kontextust ad.

**Elírások, nevek, linkek:** lásd `corrections.md`.

## Ami NEM a feladatod

- NE adj hozzá saját tartalmat, véleményt
- NE alakítsd cikk-stílusúvá (heading-ek, H1/H2)
- NE használj bold kiemeléseket a szövegtestben
- NE törölj érdemi tartalmat – ha kétséges, hagyd bent. Ez vonatkozik a rövid reakciókra is (pl. „Így van. Erről többször beszéltünk, de nem lehet túl sokszor."), ha érdemi visszajelzést hordoznak
- NE rövidítsd le a mondatokat – ha a speech-to-text-ben egy mondat folytatódik, az egész benne marad
- NE változtasd az outro tartalmát, csak a formázást
- NE módosítsd a .txt fájlokat – azok referenciaként maradnak

## Munkasorrend

Egy epizódon belül ebben a sorrendben dolgozz:

1. Struktúra, bekezdések, beszélőváltás
2. Hezitálások, ismétlések, töltelékszavak
3. Elírások, nevek, szakkifejezések (lásd `corrections.md`)
4. Linkek, outro, végső simítás

## Ellenőrzőlista

- [ ] Hezitálások, ismétlések, egyszavas reagálások eltávolítva?
- [ ] Bekezdések 3-8 mondatosak, egy gondolati egység?
- [ ] Beszélőváltás gondolatjellel jelölve?
- [ ] Elírások, nevek javítva? (corrections.md)
- [ ] Linkek beillesztve? (corrections.md)
- [ ] Minden felszólító mondat felkiáltójellel zárul? (corrections.md)
- [ ] HUSZONEGY egységesítve? (21 → HUSZONEGY)
- [ ] Outro: az eredeti felirat alapján ellenőrizted a pontos tartalmat? Az outro nem mindig azonos – néha más mondat, más vendég, más esemény szerepel benne. Ne a korábbi adásokból másold, hanem mindig az aktuális feliratból dolgozz!
- [ ] Az outro UTÁN is elhangzott-e érdemi tartalom? Ha igen, az is benne van?
- [ ] Az elkészült átiratot az eredeti felirattal mondatról mondatra összehasonlítottad, és minden kihagyott részt pótoltál?
- [ ] Átolvastál furcsa, értelmetlen vagy félrehallásra utaló mondatok után kutatva? A kétséges helyeket jelöld és egyeztesd!
- [ ] Természetes, podcast-hangvételű maradt?
- [ ] Ha kétséges egy javítás, az eredeti maradt?
