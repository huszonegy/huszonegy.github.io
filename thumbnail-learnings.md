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
