# HUSZONEGY átirat szépítés — Instrukciók

## Fájlok helye
public/transcripts_clean mappában
fájlok neve E01 esetén epE01_ kezdetű
corrections.md a gyökérben

## Etalon

Az **E95** (`epE95_FttsWvmTlDY.md`) a referencia. Olvasd el, mielőtt bármit csinálsz. Minden szépített átiratnak ezt a minőséget kell elérnie.

## Mit jelent a szépítés?

Nyers, beszélt nyelvi szöveget alakítunk olvasható, linkelt, strukturált prózává – miközben a tartalom, hangulat és podcast-jelleg megmarad.

1. Bekezdéstörések (beszélőváltás, logikai egységek)
2. Hezitálások, ismétlések, egyszavas reagálások eltávolítása
3. Elírások, speech-to-text hibák javítása (lásd `corrections.md`)
4. Linkek beillesztése (lásd `corrections.md`)
5. `21` → `HUSZONEGY` ahol a podcast nevére utal
6. Eredmény: `.md` fájl, ugyanabban a mappában

## Fájltípusok — mit csinálj velük

- **Csak .txt van (E01–E20, R01–R07):** Teljes feldolgozás – mondatokra tördelés, írásjel-pótlás, bekezdéselés, töredékes mondatok összefésülése. Ez a legnehezebb.
- **Van .md, de nyers (E21–E50 körül):** Szinte teljes átdolgozás – alig van írásjel, nincs struktúra, nincs link.
- **Van .md, de tele hezitálással (E50–E92 körül):** Közepes átdolgozás – mondatok rendben, de hezitálások, ismétlések, linkek hiányoznak.
- **Szerkesztett md (E94, E95, E96):** NE nyúlj hozzá.

## Szerkesztési szabályok

**Eltávolítandó:** hezitálások ("és és", "a a", "ö"), egyszavas reagálások ("Igen.", "Ja.", "Ühüm."), félbehagyott mondatok, töltelékszavak ("na most", "szóval", "tudod").

**Megtartandó:** természetes hangvétel, beszélők egyéni stílusa, humor, minden érdemi tartalom.

**Bekezdések:** egy bekezdés = egy gondolati egység, 3-8 mondat. Többtémás bekezdéseket bontsd, töredékeket fésüld össze.

**Beszélőváltás:** gondolatjellel (`–`). Utána nem kell név. Nem kell minden megszólalást jelölni – ha egyértelmű, ki beszél, elhagyható.

**Nevetés:** `(nevetés)` formátumban, csak ahol humoros kontextust ad.

**Elírások, nevek, linkek:** lásd `corrections.md`.

## Ami NEM a feladatod

- NE adj hozzá saját tartalmat, véleményt
- NE alakítsd cikk-stílusúvá (heading-ek, H1/H2)
- NE használj bold kiemeléseket a szövegtestben
- NE törölj érdemi tartalmat – ha kétséges, hagyd bent
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
