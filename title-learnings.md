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

## Epizód-előrejelzések

A véglegesített cím klikk-ereje és curiosity-gap pontja a választáskor, hogy a negyedéves elemzésnél a valós CTR-hez mérhető legyen (lásd `instructions.md`, 1. szakasz).

| Epizód | Végleges cím | Klikk-erő | Curiosity-gap | Célközönség |
|---|---|---|---|---|
| E112 | A grafikon, ami sosem hazudott — Hol a Bitcoin valódi alja? | 5 | – | fan + új tech-érdeklődő |
| E117 | Lehet a bitcoin olyan privát, mint a készpénz? | 5 | 3 | új tech-érdeklődő |
| E118 | Kiszedhető a 12 szó a hardvertárcádból? Így védd meg! | 4 | 3 | új tech-érdeklődő + fan |
| E119 | 105 éves levél: így lopják el a megtakarításod | 4 | 3 | új tech-érdeklődő + fan |
| E120 | 25 bitcoint kínáltak 20 dollárért a Passzív Milliomosnak. Erre ő? | 5 | 3 | új tech-érdeklődő + a vendég közössége (első cím vendég-csatornanévvel; 65 kar., mobilon csonkolódik) |
| E121 | Bitcoin vs kripto: mit nem tud a proof of stake? | 4 | 2 | fan + búvárkodó (közösen, a vendég kérésére finomítva az „átverés”-ből; szakszó a hook helyén, „kripto” keresőszó; a fő téma csak a 23. percben indul) |
| E122 | Küldhetnek neked hamis bitcoint? | 5 | 3 | új tech-érdeklődő + fan (rövid, 32 kar.; a „hamis” a tét szava, a szakszó lemegy a leírásba; teaser csak a vendéggel, kezdővágás nélkül) |
| E123 | Jobban, mint a Binance: így vigyázz a bitcoinodra! | 5 | 2 | új tech-érdeklődő + tőzsdén tartók (a brandnév a 15. karakternél, mobilon is látszik; módszer-ígéret, a teaser „meg tudjuk tanulni” zárása erősíti; A/B-alternatíva: „Jobban vigyázhatsz a bitcoinodra, mint a Binance?”) |

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

## 2026 Q2 (végleges) + Q3 (előzetes, 2026.04.01–2026.09.24)

> Forrás: YouTube Studio „Feltöltés óta" export (2026.09.24.) + YouTube Analytics API (forgalmi forrás, eszköz, feliratkozói státusz). A Q3 még 6 nap hiányával készült; a teljes epizódokat (E100–E116) és a nyári válogatásokat (R08–R15, 14–37 perc) külön kezelem, mert a hosszuk miatt nem összevethetők. A Shortsok kimaradtak.

**Időszak epizódjai:** E100 – E116 (17 teljes adás) + R08 – R15 (8 válogatás)

**Top 3 CTR (teljes adások; az E116 6,35%-a 6 naposan még nem összevethető):**
1. E101 — „Így fizettem bitcoinnal a Spárban - Krak kártya bemutató" — 5,82%, 6,3 E megjelenítés, átl. 11:32 (22,8%)
2. E100 — „Meg tudja váltani a Bitcoin a világot? – 100. adás" — 5,78%, 6,1 E, 14:50 (27,2%)
3. E114 — „Mit tud a Bitcoin, amit az állampapírod nem?" — 5,77%, 8,0 E, 14:55 (29,0%), +11 feliratkozó
   (holtversenyben: E112 — „A grafikon, ami sosem hazudott — Hol a Bitcoin valódi alja?" — 5,73%, **28,7 E**, +36 feliratkozó)

**Bottom 3 CTR (teljes adások):**
1. E103 — „Az ársapka hazudik – és mi az igazság?" — 3,72%, 4,4 E, de **16:45 (34,3%)**
2. E113 — „Ingyen intelligencia jön: Mit ér majd az ember?" — 3,88%, 9,0 E, de **17:37 (32,4%)**
3. E105 — „Lejáratos pénz vagy szabad pénz? – "etikus jegybank" kontra Bitcoin" — 4,24%, 8,8 E, de **17:14**

**Megfigyelt mintázatok:**
- **A szórás kicsi (3,7–5,8%), a különbséget inkább a megjelenítések száma adja:** a legtöbbet az E112 kapta (28,7 E), a legtöbb adás 4–9 E között mozog. Egy kiugró algoritmikus terjesztés többet számít, mint 1 százalékpont CTR.
- **Ismerős, birtokolt, konkrét dolog → magasabb CTR:** Spár + kártya, az állampapírod, a Bitcoin alja, a 100. adás. **Elvont / filozofikus / szakzsargonos cím → alacsonyabb CTR:** ársapka, „ingyen intelligencia", „etikus jegybank", „2027 vagy 1984", GitHub. Ez megerősíti az 1. szakasz cím-receptjét.
- **A kérdésforma önmagában nem differenciátor:** a top 4-ből 3 kérdés, de a bottomban is van kérdés (E113, E105, E106, E111). A kérdés akkor működik, ha ismerős, konkrét dologra kérdez rá.
- **CTR–retention kereszt:** a legalacsonyabb CTR-ű címek hozták a **leghosszabb nézést** (16:45–17:37). Az elvont cím kevesebb, de elkötelezettebb nézőt hoz — ez tudatos választás, nem hiba. Félrevezetően jó (magas CTR + gyenge retention) cím nem volt; a legközelebb az E101 áll (5,82%, 22,8%).
- **Legrosszabb retention:** E108 „Recseg a GitHub" — 4,41% és 9:41 (17,8%). A szakzsargonos cím + mélyen technikai tartalom mindkét mutatón gyenge.
- **Válogatások:** az R08 „Digitális euró és társadalmi pontrendszer: Mi vár ránk?" 6,90% (csak 3,7 E megjelenítés); az R11 „„A Bitcoin túl bonyolult, lekéstem, úgyis betiltják" – tényleg?" 3,23% **10,7 E** megjelenítésen — a hosszú, idézőjeles kifogás-lista nem húzott.

**⚠️ Mérési anomália 2026.08.21-től (R14 →):** a megtekintések 74–86%-a a kezdőlapról (what-to-watch) jön, többségében nem feliratkozóktól, és a megtekintés/kattintás arány 1,5–2×-ről 4–5×-re ugrott (pl. E115: 9,1 E megjelenítés × 4,81% ≈ 440 kattintás, de 2440 megtekintés). A kezdőlapi nézések rövidek (E116: 5:42 vs. feliratkozási feedből 16:19). Valószínűleg a kezdőlapi automatikus előnézet is megtekintésnek számít, de nem kattintásnak. **Következmény:** ettől az időszaktól a nyers megtekintésszám nem a cím sikerét méri; a cím értékelésénél a CTR-t, a feliratkozói nyereséget és a nem-kezdőlapi forrásokból jövő nézési időt kell nézni.

**Klikk-erő-becslés vs valós CTR:**
- Rögzített előrejelzés csak az E112-höz volt (5) — egyezett (a periódus 4. legjobb CTR-je, messze a legnagyobb elérés). A többi epizódnál a választott cím klikk-erejét nem jegyeztük fel, így szisztematikus hibát még nem lehet mérni.

**Javaslat a kritériumokra:**
- Az 1. szakasz cím-receptje (ismerős dolog + megtörtént tény + feszültség; kerüld az elvont megfogalmazást) **megerősítve**, nincs változtatás.
- **Új javaslat:** a véglegesített cím klikk-erejét és curiosity-gap pontját minden epizódnál rögzítsük (pl. ebben a fájlban egy sorban), hogy a következő negyedévben mérhető legyen a becslés pontossága.
- **Új javaslat:** az 1. szakaszba bekerülhet, hogy az elvont/filozofikus cím kisebb, de elkötelezettebb közönséget hoz — ha az epizód a törzsközönségnek szól, ez vállalható döntés.

## Keresőszavak — mivel talál ránk a YouTube-keresés (2026.09.25.)

> Forrás: YouTube Analytics API, `insightTrafficSourceType==YT_SEARCH`, top 25 keresőszó (az API ennél többet nem ad), 90 nap / 1 év / teljes időszak.

- **A keresés kis forrás:** a nézések 4,0% (90 nap), 5,5% (1 év), 5,2% (teljes). A növekedés fő útja továbbra is a kezdőlap és a javasolt videók; a keresésre optimalizálás kiegészítő, nem fő eszköz.
- **Hosszú farok:** a legerősebb szó („bitcoin") is csak 23 megtekintést hozott 90 nap alatt; a forgalom sok, egyenként apró keresésből áll.
- **Témaszavak, amelyekre tartós nézési idő jön:** bitcoin (2017 perc teljes időszakban), bitcoin bányászat (525), bitcoin magyar (418), kripto (479), mi az a bitcoin (300), bitcoin hírek (164), firefish (94 + „firefish bitcoin" 99), nostr (90), robosats (74), kripto validálás (61), bitcoin vásárlás (28).
- **Márkakeresések:** huszonegy (530 perc), huszonegy bitcoin (445), „21", „21 podcast", „21 bitcoin podcast", kovács ferenc. **A nézők a nevet számmal is keresik („21").**
- **Személynevek:** pogátsa zoltán (59 megtekintés, 327 perc), egri andrás; **sebestyén balázs: 53 megtekintés, de ~0 perc nézési idő** — aki így keres, azonnal kilép, vagyis a találat nem azt adja, amit keres.

## Régi adások újracímzése (2026.09.25.)

> Az elvont című, jól megtartó, de kevés megjelenítést kapó régi adások új címet kaptak a YouTube-on ÉS a honlapon (a régi URL-ek a routerben átirányítva). Minden új cím a teljes átirat elolvasása után, a cím-recept szerint készült. **Mérés:** 2026.10.23-án (4 hét) összevetem az utolsó 28 nap megtekintéseit a kiindulási értékkel (Analytics API), és a következő Studio-exportból a CTR-t/megjelenítést is. Az E27, E36, E41 indexképén még a régi cím szerepel — ha új kép készül, azt is jelzem a sorban.

| Epizód | Régi cím | Új cím | Megtekintés az előző 28 napban (2026.08.28–09.24.) | 4 hetes ellenőrzés | Tanulság |
|---|---|---|---|---|---|
| E13 | Bizalom probléma | Miért nem tud ma senki félretenni? | 0 | 2026.11.04.: 0 | |
| E14 | Legalitás és illegalitás határán | Mit lát rólad a hatóság, ha bitcoint használsz? | 1 | 2026.11.04.: 1 (keresés: 1) | |
| E16 | Bitcoin bányászat | Bitcoin bányászat: tényleg pazarlás a sok áram? | 18 | 2026.11.04.: 20 (keresés: 13) | A keresésből érkező nézés megjelent: a „bitcoin bányászat" kulcsszó és a konkrét kérdés találkozik azzal, amit beírnak. |
| E18 | Magas és alacsony időpreferencia | Miért jár sárkányjelmezben egy bitcoiner? | 0 | 2026.11.04.: 0 | |
| E27 | Valódi érték, valódi növekedés, 21 oktató cikk | Így csalják ki a pénzed a bitcoin nevében | 0 | 2026.11.04.: 0 | |
| E36 | Egy igaz pénzügyi rendszer fontossága | Milyen volt az első magyar Bitcoin konferencia? | 0 | 2026.11.04.: 0 | |
| E41 | Anonimitás alapjai a Bitcoin világában | A főbérlőd is látja, mennyi bitcoinod van? | 3 | 2026.11.04.: 3 (keresés: 2) | |
| E01 | Mi az a Bitcoin? | Nem a meggazdagodás a lényeg: miért lettünk bitcoinerek? | 13 | 2026.11.04.: 25 (feliratkozók: 14, ajánlott videó: 9) | A régi cím nem fedte a tartalmat (személyes bemutatkozás, nem magyarázat). Az indexképen még a „Mi az a Bitcoin?" felirat áll. Majdnem kétszeres, főleg a feliratkozóktól és az ajánlásból, keresésből nem. |
| „Mi az a Bitcoin? 3 percben" (IXV_V-7fojQ) | (cím változatlan) | cím változatlan; **2026.09.26.: magyar feliratsáv feltöltve** (angol hangú, beégetett magyar feliratos klip, előtte csak angol gépi felirata volt), **a leírás első sora a keresett kifejezéssel kezdődik**, **új indexkép** (az eredeti Tuttle Twins-kép magyarított felirattal: „MI AZ A BITCOIN? 3 PERCBEN"; előtte fakó képkocka, olvashatatlan felirattal) | 2 | 2026.11.04.: 30 (csatornaoldal: 13, lejátszási lista: 5, külső link: 4; keresés: 0) | A „mi az a bitcoin" keresésből 0 nézés és nem volt az első 28 találat között. Mérés: kapott-e erre keresési nézést, és hányadik a magyar YouTube-keresésben (search.list, 100 egység). |
| „Bitcoinról mindenkinek" 1–4. rész (7D4XPbGXFEI, LczDJKoKMj8, tVENCX12bpE, MXZOxVFcUvo) | Bitcoinról mindenkinek - magyar nyelvű előadás - N. rész | Mi az a Bitcoin? Bitcoinról mindenkinek – N. rész; **2026.09.26.: új leírások** (részenként kulcsszavas első mondat, a teljes sorozat linkjei előre-hátra + lejátszási lista, jelzés az elavult részletekről), **új indexképek** (egységes sorozatkeret Kovács Ferenc karikatúrájával, részenként saját kicker + motívum: MI A PÉNZ? / MIÉRT OLVAD? / LEÁLLÍTHATÓ? / 12 SZÓ; előtte négy szinte azonos, AI-rajzolta osztálytermes kép kitalált előadóval) | 3 / 3 / 1 / 1 | 2026.11.04.: 25 / 7 / 9 / 11 (lejátszási lista: 5 / 4 / 3 / 2) | Az 1. rész a csatorna legnézettebb videója (4040), de 2026 elejére elapadt (havi 2–30 megtekintés); a keresési forgalma („bitcoin", „bitcoin magyar") a 2024–25-ös időszakból származott. A „Mi az a Bitcoin?" kezdés sorozatszinten: a négy rész együtt felel a kérdésre (mi ez → miért kell → hogyan működik → hogyan tárold). |
| E02 | Bitcoin bányászat, csomópontok, blokk jutalom, felezés | Hogyan működik a Bitcoin? Miért csak 21 millió van belőle? | 3 | esedékes | A „hogyan működik a bitcoin" keresésre (automatikus kiegészítésben szerepel). Az indexképen még a „Mi az a Bitcoin?" felirat áll. |

## SEO-újracímzés (2026.11.09.)

> A honlapi oldalak meta descriptionje a bevezetőből készül, a cím pedig a H1 és a title. Ezért ott cseréltük a címet, ahol a régiben nem volt kereshető kifejezés, vagy nem fedte a tartalmat. Ugyanekkor a bevezetők első mondatába is bekerült a cím kulcsszava. A régi URL-ek a routerben át vannak irányítva. **Mérés:** 4 hét múlva (2026.12.07.) az utolsó 28 nap megtekintései és a keresési forgalom, a Search Console-ban pedig az oldalak megjelenései és kattintásai.

| Epizód | Régi cím | Új cím | Kiindulás (28 nap) | 4 hetes ellenőrzés | Tanulság |
|---|---|---|---|---|---|
| E06 | Mi a legnagyobb különbség a fiat valuták és a kriptovaluták között? | Saját Bitcoin node otthon: egy hálózati mérnök útja | | esedékes | |
| E10 | Elválasztjuk a pénzt az államtól | Kriptón bukott 2017-ben, mégis a Bitcoinnál maradt | | esedékes | |
| E12 | Megfontolt megtakarítás | Heti 3000 Ft bitcoinba 2014 óta: mennyi lett volna belőle? | | esedékes | |
| E21 | Visszatekintés, jelenlét, jövőbe tekintés | Bitcoin fork: miért jár jól, aki egyszerűen kivár? | | esedékes | |
| E22 | Bitcoin tárca kezdőknek és Lightning Network felhasználóknak | Blink és Strike: Bitcoin tárca kezdőknek, Lightninggal | | esedékes | |
| E24 | Bitcoin és az amerikai elnökválasztási ígéretek | Trump a Bitcoin konferencián: mit ígért a bitcoinereknek? | | esedékes | |
| E26 | Bitcoin a pénzek királya | Bitcoin, a pénzek királya: ezt mutatta a japán pánik | | esedékes | |
| E28 | Élethosszig tartó tanulás | ChatGPT, Claude vagy Llama: zárt vagy nyílt AI-t használj? | | esedékes | |
| E30 | Függetlenedünk a központi genyózástól | Infláció: 5 forintról 500-ra drágult egy gombóc fagyi | | esedékes | |
| E51 | Bitcoin konferencia + idő faktor = türelem | Most kezdenél bitcoinnal? Ezt tedd az első években | | esedékes | |
| E60 | Bitcoin pszichológia | FOMO, FUD, status quo: a Bitcoin pszichológiája | | esedékes | |
| E68 | Üzleti Bitcoin tartalékképzés és publikálás magyar úttörője | Bitcoin a céges tartalékban: egy magyar úttörő története | | esedékes | |
| E72 | Bitcoin(erek) újratöltve | Bitcoin nyári összefoglaló: árfolyam, törvények, bányagépek | | esedékes | |
| E73 | Jogbizonytalanságtól a bitcoiner lifestyle-ig | MiCA: jogbizonytalanságtól a bitcoiner lifestyle-ig | | esedékes | |
| E76 | Védd ki a csalásokat! - Tippek, technikák, tanulságos esetek | Kripto csalások: így vernek át, és így védd ki | | esedékes | |
| E80 | A gondolat szabadsága – Máltától Prágáig, validáció nélkül | Kripto validálás: ezeket a kivételeket hozta az új rendelet | | esedékes | |
| E85 | Magyar titánium lapka & Bitcoin tanácsadás | Magyar titánium lapka a Bitcoin tárca mentéséhez | | esedékes | |
| E86 | A nemzeti validáló esete a Bitcoin oktatással \| Revolut, validálás, pánik | Kripto validálás és Revolut: mitől pánikolnak ennyien? | | esedékes | |
| E88 | Te még szabadlábon vagy? \| Validátor mizéria | Első kripto validátor: te még szabadlábon vagy? | | esedékes | |
| E93 | Az önrendelkezés fontossága nehéz időkben | Esik a Bitcoin árfolyam: miért most fontos a saját kulcs? | | esedékes | |
| E97 | Tank vagy porcelán? – A szabad piac nem kér engedélyt | Tank vagy porcelán? Egy Bitcoin Core fejlesztő válaszol | | esedékes | |
