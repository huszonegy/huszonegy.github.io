# HUSZONEGY átirat szépítés — Instrukciók

## Fájlok helye
public/transcripts_clean mappában
fájlok neve E01 esetén epE01_ kezdetű
corrections.md a gyökérben

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
- NE törölj érdemi tartalmat – ha kétséges, hagyd bent
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
- [ ] HUSZONEGY egységesítve? (21 → HUSZONEGY)
- [ ] Outro linkjei rendben?
- [ ] Természetes, podcast-hangvételű maradt?
- [ ] Ha kétséges egy javítás, az eredeti maradt?
