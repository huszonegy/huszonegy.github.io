# Thumbnail-tanulások — negyedéves CTR-elemzés

Ez a fájl a HUSZONEGY-epizód-thumbnailok **negyedéves CTR-elemzésének** összesített tanulságait gyűjti. A folyamat leírása az [`instructions.md`](instructions.md) **„Negyedéves cím- és thumbnail-tanulás"** szakaszában — a cím-tanulással együtt fut, ugyanazon a CTR-adat-exporton.

Minden negyedéves elemzés egy szakaszként kerül be — dátummal, top/bottom adatokkal, megfigyelt mintázatokkal, és kritérium-javaslattal. Ha egy negyedévnyi tanulság az `instructions.md` 5. szakaszának (Indexkép) kritériumait módosítja, azt itt is rögzítjük (mit, mikor, miért).

## Sablon egy bejegyzéshez

```markdown
## YYYY Q[1-4] (YYYY.MM.DD–YYYY.MM.DD)

**Időszak epizódjai:** E### – E### (összesen N epizód)

**Top 3 CTR-thumbnail:**
1. E### — leírás (vendég-arc igen/nem, motívum, kicker pozíciója, paletta, dominánk szín), CTR%, N impressions
2. …
3. …

**Bottom 3 CTR-thumbnail:**
1. E### — leírás (vendég-arc igen/nem, motívum, kicker pozíciója, paletta, dominánk szín), CTR%, N impressions
2. …
3. …

**Megfigyelt mintázatok:**
- (pl. „vendég-arccal +X% CTR, mint arc nélkül")
- (pl. „kicker felül +Y% CTR, mint oldalt")
- (pl. „sötét paletta a HUSZONEGY-feedben kiemelkedik")
- (pl. „a recommended-feed sanity check elhagyása esetén szignifikánsan alacsonyabb a CTR")

**Javaslat a kritériumokra:**
- (vagy „nincs változtatás")
- ha módosul, az `instructions.md` 5. szakasza is frissül egy kommittel
```

---

## Bejegyzések

## 2026 Q2 — előzetes (E112 adatpont, 2026.06.30)

> **Megjegyzés:** a teljes negyedéves top3/bottom3 még Árpi YouTube Studio quarter-exportjára vár. Addig az E112 friss adatpontját rögzítem — más epizódhoz CTR-t nem tippelek.

**E112 thumbnail** — vendég-arc **igen** (Tamás karikatúra, bal harmad, jobbra néz); motívum: eső piros gyertyák + aranyló 200 hetes támaszvonal + **nagyító a koccanási ponton**; kicker **felül** („MÉG LEJJEBB?"); paletta **sötét navy** + amber/arany/piros; magas kontraszt, egyfókuszú.
- **CTR 6,1%** (23,4 E megjelenítés) · harangértesítés-CTR 2,6% (a tipikus 0,5–2,5% fölött)

**Megfigyelt mintázat (előzetes):** vendég-arc + felső kicker + sötét, visszafogott paletta + egyetlen tiszta fókuszpont (a koccanás-glow) → kiemelkedik a kripto-feedben, 6%+ CTR. A recommended-feed sanity check megtörtént a brief-fázisban.

**Javaslat a kritériumokra:** egyetlen adatpontból nincs változtatás — megerősíti az 5. szakaszt (vendég-arc, felső kicker, sötét visszafogott paletta, egyfókuszú motívum). A teljes Q2-vel véglegesítjük.

## 2026 Q2 (végleges) + Q3 (előzetes, 2026.04.01–2026.09.24)

> Forrás: YouTube Studio „Feltöltés óta" export (2026.09.24.), az indexképeket vizuálisan átnéztem (E100–E116, R08–R15). A cím és a kép együtt hozza a CTR-t, ezért a mintázatok együttállást mutatnak, nem ok-okozatot. A 2026.08.21. utáni mérési anomáliát lásd a [`title-learnings.md`](title-learnings.md) azonos bejegyzésében.

**Top CTR (teljes adások):**
1. E101 — 5,82% — **nincs arc**; világos háttér, egy kéz + lila Krak-kártya + terminál ₿-vel; kicker: „SPÁRBAN FIZETTEM"
2. E100 — 5,78% — **nincs arc**; sötét világtérkép narancs hálózattal; nagy „100." + kis „mi építjük"
3. E114 — 5,77% — vendég-karikatúra (bal), kicker „ÁLLAMPAPÍR CSAPDA", omló papírtekercs
4. E112 — 5,73% — vendég-karikatúra (bal), kicker „MÉG LEJJEBB?", gyertyák + nagyító (28,7 E megjelenítés)
5. E102 — 5,72% — **nincs arc**; templomos lovag + „VIRTUS" + ₿, pergamen-háttér

**Bottom CTR (teljes adások):**
1. E103 — 3,72% — **csak szöveg**: kétsoros szlogen („JAVÍTSD MEG A PÉNZT! JAVÍTSD MEG A VILÁGOT!") repedezett térképen, nincs fókuszpont
2. E113 — 3,88% — **generikus**, nem valós résztvevő arca + agy-motívum, kicker „GÉP VAGY EMBER?"
3. E105 — 4,24% — **kettéosztott (split)** kompozíció: romló bankjegy vs. ₿-érme, „ROMLANDÓ PÉNZ?"
- a közelükben: E111 4,43% (szem + igazolvány, hosszú kicker „MINDENT A BIZTONSÁG JEGYÉBEN"), E106 4,54% (csak szám + szöveg: „3× 10 ÉV")

**Megfigyelt mintázatok:**
- **Az arc önmagában nem döntő.** A valós vendég-karikatúrás képek egyenletesek (E104, E107, E109, E110, E112, E114: 5,1–5,8%; kivétel E108 4,41%), de a legjobb két CTR arc nélküli képé. **A generikus, kitalált arc** (E113 3,88%, E115 4,81%) nem hozza a valós arc előnyét.
- **Ami a jókban közös:** egyetlen konkrét, azonnal felismerhető motívum (kártya a terminálnál, „100.", lovag, omló papír, gyertyák) + **rövid, 1–2 szavas kicker**.
- **Ami a gyengékben közös:** nincs fókuszpont (csak szöveg), **hosszú kicker** (4+ szó), elvont motívum (agy, szem), vagy **split** kompozíció. A split tilalmát (5. szakasz) az E105 megerősíti.
- **A sötét paletta nem feltétel:** az E101 világos, lapos illusztrációval lett a periódus legjobbja. A kontraszt és az egy fókuszpont számít, nem a háttér sötétsége.
- **Válogatások:** az R08 (aggódó férfi + kamera + „450/1000" pontszám-kártya, „TOTÁLIS KONTROLL?") 6,90%-kal a legjobb, de csak 3,7 E megjelenítésen; az R11 (füstbe írt kifogások + férfi elhárító kézzel) 3,23% 10,7 E megjelenítésen — sok, apró szöveges réteg.

**Javaslat a kritériumokra:**
- **5. szakasz, kicker:** a „max 3–5 szó" legyen inkább **1–3 szó**; a 4+ szavas kickerek a gyengébbek között vannak.
- **5. szakasz, stílus:** ha nincs valós vendég, **ne generikus kitalált arcot** rajzoltassunk, hanem vagy a házigazda valós karikatúráját, vagy arc nélküli, erős tárgy-motívumot.
- **5. szakasz, színvilág:** a „sötét = mély/tét" maradhat, de rögzítsük, hogy a világos paletta is működik, ha egy tárgy-fókusz van rajta.
- A „vendég-arc" preferencia marad (egyenletes, 5%+ körüli eredmény), de nem kötelező elem.
