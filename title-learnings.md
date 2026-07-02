# Cím-tanulások — negyedéves CTR-elemzés

Ez a fájl a HUSZONEGY-epizódcímek **negyedéves CTR-elemzésének** összesített tanulságait gyűjti. A folyamat leírása az [`instructions.md`](instructions.md) **„Negyedéves cím-tanulás"** szakaszában.

Minden negyedéves elemzés egy szakaszként kerül be — dátummal, top/bottom adatokkal, megfigyelt mintázatokkal, és kritérium-javaslattal. Ha egy negyedévnyi tanulság az `instructions.md` 1. szakaszának (Cím) kritériumait módosítja, azt itt is rögzítjük (mit, mikor, miért).

## Sablon egy bejegyzéshez

```markdown
## YYYY Q[1-4] (YYYY.MM.DD–YYYY.MM.DD)

**Időszak epizódjai:** E### – E### (összesen N epizód)

**Top 3 CTR:**
1. E### — „cím" — CTR%, N impressions, célközönség: …
2. …
3. …

**Bottom 3 CTR:**
1. E### — „cím" — CTR%, N impressions, célközönség: …
2. …
3. …

**Megfigyelt mintázatok:**
- (pl. „kérdésforma 1.5× CTR az állításformához képest")
- (pl. „brand-név [GitHub, Bitcoin] első szóban +X%")
- (pl. „em-dash-es címek CTR-je megegyezik a kettőspontosokkal — nem differenciátor")

**Klikk-erő-becslés vs valós CTR:**
- Egyezett-e az előzetes klikk-erő-rangsor a valós CTR-rangsorral? Hol tévedtem szisztematikusan?

**Javaslat a kritériumokra:**
- (vagy „nincs változtatás")
- ha módosul, az `instructions.md` 1. szakasza is frissül egy kommittel
```

---

## Bejegyzések

## 2026 Q2 — előzetes (E112 adatpont, 2026.06.30)

> **Megjegyzés:** a teljes negyedéves top3/bottom3 még Árpi YouTube Studio quarter-exportjára vár. Addig az E112 friss, erős adatpontját rögzítem — más epizódhoz CTR-t nem tippelek.

**E112 — „A grafikon, ami sosem hazudott — Hol a Bitcoin valódi alja?"**
- **CTR 6,1%** (23,4 E megjelenítés) · 2,1 E megtekintés (+1,6 E a szokásos fölött) · +28 feliratkozó
- A megjelenítések **96,4%-a YouTube-ajánlásból** (Tallózás 64% + Javasolt 21%) — erős algoritmikus terjesztés
- Átlagos megtekintés ~11:25–11:53 (~22,6% retention, 54 perces videó) — szolid hosszformára
- Cím-jegyek: **kérdésforma** (em-dash + „Hol … alja?"), érzelmi/curiosity hook („sosem hazudott"), **brand-keyword (Bitcoin)** jelen, szám nincs; célközönség: fan + új tech-érdeklődő

**Megfigyelt mintázat (előzetes):** kérdésforma + curiosity-gap + brand-keyword a hook elején + egyfókuszú tét-üzenet → erős Browse/Suggested-terjesztés és 6%+ CTR. A klikk-erő-becslésem (5) egyezett a valós erős teljesítménnyel.

**Javaslat a kritériumokra:** egyetlen adatpontból nincs változtatás — megerősíti a jelenlegi 1. szakaszt (kérdésforma + curiosity-gap + brand-keyword a hook első ~40 karakterében). A teljes Q2-rangsorral véglegesítjük.
