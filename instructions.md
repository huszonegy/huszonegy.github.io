# HUSZONEGY podcast — heti munkafolyamat és átirat-szépítés

A munkát a HUSZONEGY podcast vágója (Árpi) végzi, VS Code-ban a Claude Code bővítménnyel, Opus modellel, `xhigh` effort-szinten. Ez a dokumentum a teljes heti munkafolyamat leírása.

## Heti munkafolyamat — új epizód

Minden héten egy új epizód. Árpi Riverside-ban megvágja és feltölti a HUSZONEGY YouTube-csatornájára — ekkor a címben az epizód száma szerepel, a leírásban pedig a résztvevők (pl. „Anti, Tamás, Árpi") —, a YouTube elkészíti az automatikus feliratot. Innen indul a közös munka; az input az új epizód **YouTube-linkje**.

**Vezérelv minden lépésnél:** ami a reflektorfénybe kerül (cím, indexkép, bevezető, fejezetcímek), legyen egyszerre **lényegi** (az epizód érdemben, hosszan kifejti) **és izgalmas**. Marginális — egy mondatos, egyperces — téma sosem kerül fókuszba, akkor sem, ha csábító. Hiteles edukáció, nem kattintásvadászat. Javaslatot mindig indoklással adok; valódi ízlés-/hangsúlykérdésnél kérdezek, és a választ feljegyzem. **A véglegesített szöveget (cím, bevezető, fejezetek, leírás, átirat) nem írom át önállóan** — átolvasás-/ellenőrzés-kérésnél is csak javaslatot adok (számozott lista + indoklás), és megvárom a jóváhagyást; világos „csináld meg X" feladatnál viszont cselekszem. Az önállósodás mértékét közösen kalibráljuk.

### 0. Átirat letöltése, megértése
- `yt-dlp`-vel a magyar auto-felirat a `transcripts_raw` mappába (lásd „Fájlok helye"), és a leírás letöltése (`--print '%(description)s'`) a `members`-hez.
- Végigolvasom az egész átiratot, és készítek egy tématérképet: a fő témák, mindegyikhez az időtartomány és nagyjából a hossz, plusz az epizód hangulata/üzenete. Ez alapozza meg a címet, a bevezetőt és a fejezeteket, és ez teszi auditálhatóvá, hogy mi lényegi és mi marginális.
- A tématérkép alapján **2–3 keresési kulcsszót** is megnevezek — amit egy potenciális néző gugliznának: brand-név (pl. „GitHub", „Nostr"), témaszó (pl. „Bitcoin-adó", „decentralizáció"), vagy konkrét kérdés-fragment (pl. „GitHub alternatíva", „Nostr magyar"). Ezeket átadom a 1. lépésnek, hogy a cím-változatok mellett tudjam jelölni, melyik fed le belőlük.

### 1. Cím
**3–5 változat**, lehetőleg **különböző szögekből** (kérdés / szám / konkrét értékígéret / meglepő állítás / tét), de **az erő veri a változatosságot**: jobb 3 valóban ütős változat 2 szögből, mint 5 erőltetett változat 5 szögből. Ha egy szögnek nincs jó változata az adott epizódhoz, hagyjuk ki. Mindegyiknél: karakterszám, **klikk-erő (1–5)** egy mondat érveléssel, **curiosity-gap (1–3)** — mennyire hagy nyitva egy kérdést, amit csak a kattintás old fel (de csak ha valódi tartalom van mögötte; üres tátongás = clickbait, az nem ér pontot) —, **melyik 0. lépésbeli keresési kulcsszót fedi** (vagy egyik se), **kit céloz elsősorban** (fan / új tech-érdeklődő / búvárkodó), miért működik, melyik epizódrész fedezi. A klikk-erő **összehasonlító** (nem abszolút): a felkínált halmazon belül adok rangsort. Az ajánlott változat a legmagasabb klikk-erővel + a stratégiai szempontoknak (lényegi, izgalmas, hiteles) is megfelelő — és ha lehet, **legalább egy keresési kulcsszót is fed**.

**Back-katalógus-ütközés:** a cím véglegesítése előtt ránézek a `podcasts.ts` közelmúltbeli, hasonló témájú adásaira. Ha egy korábbi cím már elhasználta ugyanazt a szöget vagy szerkezetet, a feedben ne legyen majdnem-klón — az új adás a friss, még le nem fedett szögre menjen. (Pl. E110-nél kiderült, hogy az E105 már vitte a „…etikus jegybank kontra Bitcoin" felállást, ezért lett E110 a „Miért nem jut el a tömeg a Bitcoinig?".)

**Klikk-erő skála** (HUSZONEGY-kontextusra kalibrálva — hiteles edukáció, nem általános clickbait CTR-re):
- **5** — Erős érzelmi hook + konkrét ígéret együtt; nagy CTR várható
- **4** — Egy domináns erő (érzelmi / kérdés / ígéret) erősen üt
- **3** — Korrekt, működő, de nem kiemelkedő
- **2** — Gyenge hook vagy hiányzó ígéret
- **1** — Lapos, nem tartja meg a figyelmet

**Cím–thumbnail-kombó sanity check:** minden változathoz adok egy mondatos thumbnail-vázlatot — **kicker-szöveg + központi vizuális motívum** —, hogy lássuk, a cím nem zsákutca képileg. (A teljes brief az 5. lépésben jön; itt csak annyi a cél, hogy ne válasszunk olyan címet, amihez nincs tisztességes thumbnail-elképzelés.) A CTR-t a cím és a thumbnail **együtt** hozza, ezért már a cím-választáskor szem előtt tartom a párját.

**Élesben tesztelés — YouTube „Test & Compare" (A/B):** ahol van rá értelmes alternatíva, ne dobjuk el a 2. és 3. legjobb változatot, hanem **ütköztessük élesben**. A YouTube Studio natív A/B-funkciójával egyszerre 3 variáns tesztelhető (cím-only, thumbnail-only vagy cím+thumbnail-kombó). Ez a per-epizód ground-truth — gyorsabb és tisztább, mint megvárni a negyedéves visszacsatolást —, és pont a klikk-erő-becslésemet kalibrálja a valósághoz. Gyakorlati keret (ezt Árpi állítja be a Studióban, mert a Claude nem fér hozzá): **desktop-only**, engedélyezni kell az advanced features-t, **egyszerre egy változót váltsunk** (vagy címet, vagy thumbnailt) a tiszta attribúcióért, futtassuk **legalább 7 napig** a szignifikanciáig, és **ne állítsuk le korábban**. Fontos: a YouTube a győztest **nézési idő** (nem puszta kattintás) alapján hozza ki — ezért a tesztből levont tanulság a megtekintési időt is figyelembe veszi, nem csak a CTR-t. A tesztek eredménye táplálja a negyedéves tanulást (lásd lent). Amelyik epizódnál nincs tét vagy nincs jó alternatíva (egyértelmű győztes), ott kihagyható.

**Cél-közönség címkék** (változatonként egy elsődleges, másodlagos opcionálisan):
- **Fan** — HUSZONEGY-rajongó, már bízik a brandben; lojalitásból + kíváncsiságból kattint, kevésbé kell magyarázat
- **Új tech-érdeklődő** — Bitcoin/tech-érdeklődő, HUSZONEGY-újonc; ismert fogalom + provokatív állítás fogja meg
- **Búvárkodó** — konkrét témára kereső (SEO-bejövő); keresési kulcsszó + konkrét ígéret kell

Egy epizód értelemszerűen egy elsődleges közönséget céloz; a változatok ezt különböző oldalakról közelítik.
Kritériumok: 45–60 karakter; **a hook és az elsődleges kulcsszó az első ~40 karakterben** — a mobil- és ajánló-csempék kb. itt vágják le a címet, asztali kereső/ajánló ~70-nél, szóval ami a reflektorfénybe szánt lényeg, az kerüljön balra (em-dash használatakor is: a lényeg az em-dash bal oldalára, a részletezés jobbra); konkrét ígéret (mit kap a néző, ha rákattint); ha van benne szám, az emeli a CTR-t; kérdésforma is emeli; kerüld az elvont, filozofikus megfogalmazást; ne legyen „remix"/„újrahasznosított tartalom" jellegű előtag; magyar helyesírás — csak az első szó és a tulajdonnevek nagybetűsek; a cím a tematikát fedje, ne egy egyperces részt; **vendég vagy állandó résztvevő neve ne kerüljön a címbe** — a résztvevők a YouTube-leírásban szerepelnek; **em-dash (`—`) szóközökkel megengedett** egy fő szerkezeti törésnél (állítás → részletezés), több em-dash egy címen belül nem.

### 2. Bevezető — 2–3 mondat a leíráshoz

**2 vagy 3 mondat egy bekezdésben**, ahogy az epizód diktálja. 3 mondat az alap (hook + részletezés + tonális hook); **2 mondat akkor jó**, ha az epizód szorosan fókuszált, és a 3. tonális hook erőltetett lenne. A lakonikus 2 mondatos verzió néha tisztább, mint egy hígított 3 mondatos.

- **1. mondat — hook + fő ígéret EGYÜTT** (~100–130 karakter): az egyetlen mondat, ami garantáltan látszik a search-snippetben és a „továbbiak" előtt. Provokáció + érdemi ígéret együtt. Nem ismétli szóról szóra a címet, és nem adja vissza ugyanazt a punchline-t, amit a cold-open is hoz.
- **2. mondat — részletezés**: konkrétan mit kap a néző (projekt-név, személy, témák). Itt fejtem ki, amit a 1. mondat felvillantott.
- **3. mondat — tonális hook vagy másodlagos meglepetés** (opcionális): nem catch-all („még mit említek"), hanem ízt vagy mélyebb gondolatot ad. Azt is megfogja, aki nem a fő témáért jött. Ha nincs ilyen természetes 3. mondat, ne erőltessük — maradjon 2 mondat.
- **Cím–bevezető-kapcsolat:** a bevezető a címet *kifejti*, nem ismétli és nem mossa el. A cím provokál, a bevezető felold + mélyít.
- **SEO:** az **elsődleges** keresési kulcsszó az **első 1–2 mondatba** kerüljön (a leírás ~157. karaktere után minden a „továbbiak" mögé csukódik, és a YouTube a fold előtti, látható szöveget erősebben súlyozza); további 1–2 másodlagos kulcsszó természetesen szétszórva a bekezdésben.
- **Hossz:** teljes bekezdés ~200–450 karakter (a 2-mondatos lakonikus változat természetesen rövidebb).
- **Formátum:** **egy bekezdésben**, folyószövegként (nem számozott lista).

### 3. Fejezetcímek időbélyeggel
- 8–12 fejezet, legalább 3–5 perces közökkel; az időbélyeg formátuma `MM:SS` (leading zero az egyjegyű perceknél és óráknál is, pl. `00:00`, `05:55`, `01:05:55`); az időbélyeg után csak szóköz, gondolatjel nélkül.
- Nincs „Bevezetés" fejezet — az 1. fejezet 00:00-tól indul, címét a cold-open utáni **első érdemi blokk** adja (a cold-open önmagában csak teaser, nem önálló fejezet).
- Kíváncsiságkeltő, hangzatos címek, nem tartalomjegyzék-szerűek; max 3–4 kérdés, a többi állítás; max ~50 karakter/fejezet, de a **15–30 karakteres tartomány bátrabban használható** — a rövid, scannelhető címek gyorsabban olvasódnak.
- **Lehetnek véleményesek és attitűdösek**, nem csak deskriptívek — a néző a tartalomjegyzékben is érezze a tónust. Pl. „Patkóelmélet csapdája" jobb, mint puszta „Patkóelmélet"; „Trump korrupcióban verhetetlen" élesebb, mint „Trump és a korrupció". Akkor üt, ha a tartalom megvédi (nincs üres clickbait).
- **Scare-quote árnyalás**: egyetlen szó idézőjelben („támogatás", „demokrácia") árnyalt véleményt jelez egy szón belül. Mértékkel, ne minden fejezeten.
- Csak akkor önálló fejezet, ha a téma legalább 2–3 percen át ki van fejtve.
- Az időbélyegeket a felirat időzítéséből állítom elő.

### 4. YouTube-leírás összeállítása

**Formátum:** a linkblokkok multi-line szerkezetűek, soronként **leíró címke + `➡` + URL** (nem `·`-vel zsúfolt egysor — mobilon így scannelhető). Subtle emojik csak ott, ahol funkciójuk van (🇨🇭, ⚡, 🔥🐟, ➡). HUSZONEGY-hangzás: tech-tartalmú, de barátságos.

**Click-through elv:** a blurb-szövegek ne ismételjék azt az infót, ami a célokon (a linkelt oldalon) már ott van (pl. konkrét kedvezmény százalék a Relai oldalán).

A jelenlegi blokkos felépítés (nincs bebetonozva — jobbító javaslat mindig jöhet):

1. **Bevezető** (3 mondat, egy bekezdésben)
2. **Támogatáskérő link** a bevezető és a fejezetek közé így:
🧡 Támogasd a podcastot:
Minden támogatási mód egy helyen ➡ https://huszonegy.world/tamogatas
(Ha az adásban szóban a pesz.hu-ra utalunk, akkor föléje még egy sor: `Forráshiánnyal küzdünk — részletek itt ➡ https://pesz.hu`. A `/tamogatas` a teljes támogatási hub — ne ismételjük a HUSZONEGY-blokkban.)
3. **Relai affiliate link** a támogatáskérés és a fejezetek közé így:
Relai 🇨🇭 Bitcoin-only megtakarítási app:
Önrendelkező svájci bicska ➡ https://bitcoinmentor.hu/relai
4. **Fejezetcímek időbélyeggel** (lásd 3. lépés)
5. **Az adásban elhangzott link(ek) + kapcsolódó cikk** — opcionális. Ide az adásban szóba kerülő, **nem evergreen** linkek mennek (pl. vendég projektje, hivatkozott külső cikk vagy korábbi HUSZONEGY Bitcoin blog-poszt). Az evergreen linkeket a HUSZONEGY-/Mentorálás-/Szponzorok-blokk hozza, ne itt. Minden adásnál rákérdezek, van-e ilyen, mielőtt beleteszem.
6. **HUSZONEGY:**
   - Csak Bitcoinról, magyarul ➡ https://huszonegy.world
   - Meetup ➡ https://huszonegy.world/meetup
   - Telegram ➡ https://t.me/huszonegy
   - Nostr ➡ https://nostr.hu/huszonegy
7. **Mentorálás & blog:**
   - Bitcoin mentorálás ➡ https://bitcoinmentor.hu
   - Bitcoin blog ➡ https://bitcoinmentor.hu/bitcoin-blog
8. **Szponzorok:**
   - Hotel Aurora ⚡ Miskolctapolca ➡ https://hotelaurora.hu
   - Hotel Atlantis ⚡ Hajdúszoboszló ➡ https://hotelatlantis.hu
9. **Firefish 🔥🐟 Bitcoin fedezetű kölcsön:**
   - Magyar platform ➡ https://app.firefish.io/auth/sign-up
   - Ajánlókód: HUSZONEGY
10. **Inkább olvasnád?**
   - `Itt az átirat ➡ https://huszonegy.world/podcast/<slug>/`
   - **Slug-szabály:** a végleges címből származtatva — kisbetűs, ékezetmentes (`ő → o`, `é → e`, `á → a`, `í → i`, `ú → u`, `ü → u`, `ö → o`); brand-nevek és számok ASCII-kisbetűre (`MicroStrategy` → `microstrategy`, `BIP-110` → `bip-110`); írásjelek (`,`, `?`, `!`, `:`, `;`, `'`, em-dash) **eltűnnek nyom nélkül** (nem kerül a helyükre kötőjel); meglévő belső kötőjelek megmaradnak (`Nostr-alternatíva`, `BIP-110`); szavak között egyetlen `-`. Pl. *„Recseg a GitHub — épül a magyar Nostr-alternatíva"* → `recseg-a-github-epul-a-magyar-nostr-alternativa`.

### 5. Indexkép

A briefet az alábbi sorrendben építem fel — **az érzelmi/emberi pillanattól befelé**, mert a thumbnail-en először mindig egy emberi arc fog meg, és minden más (motívum, szöveg, paletta) ezt szolgálja.

1. **Érzelmi pillanatkép-vadászat (időbélyeggel):**
   - Az átiratból / SRT-ből kigyűjtök **3–5 jelölt időpontot**, ahol a vendég (vagy ha nincs vendég, a legenergikusabb házigazda) érzelmi töltődéssel beszél: nevet, lelkesen érvel, megdöbben, cinkos mosollyal viccel, csendben elgondolkodik, döbbenten figyel stb.
   - Mindegyikhez rövid leírás: mit hallani, milyen arckifejezés valószínű.
   - Néhányat ajánlok elsőként indoklással — Árpi a felvételen visszanézi, és kivág a kívánt pillanatból egy frame-et (vagy elveti, és másikat választ a listából).
   - **Short-form mellékhasználat:** ugyanez a 3–5 időbélyeg a függőleges klipek (YouTube Shorts / TikTok / X / Nostr) nyersanyaga is. Ahol egy pillanat short-nak is erős (önmagában megáll, kontextus nélkül is üt), azt **`[short]` jelöléssel** külön kiemelem a listában, hogy Árpi tudja, melyikből vágjon vertikálist. Plusz munka nélküli organikus tölcsér új nézőknek.

2. **Motívum + kicker-szöveg:**
   - **Motívum:** az adás magjának vizuális jele (tárgy, szimbólum, kontextus-tárgy) — ami a YouTube-címet **egészíti ki**, nem ismétli. A motívum lehet bármi, ami az adás más rétegeit hozza vissza, de ikonikus legyen, ne valami elvont dolog.
   - **Kicker-szöveg:** 2–5 szavas felirat a képen, fél-tét — a YouTube-cím oldja fel (lásd kicker-konvenciót lent).

3. **Színvilág:**
   - Melyik paletta passzol az érzelemhez és a motívumhoz: sötét = mély/tét, világos = közeli/barátságos; tematikus tónus (lila = Nostr, narancs/sárga = Bitcoin, zöld = pénz/biztonság).
   - HUSZONEGY-brand hangzás: tech, de barátságos; soha nem rikító.
   - **max 3–4 domináns szín**, visszafogott háttér.

4. **Stílus:**
   - Tisztázzuk, hogy van-e vendég-cutout.
   - Ha van, akkor azt Árpi csatolja Gemininek, és a brief karikatúra-rajz átalakítást kér úgy, hogy hasonlítson az eredetire.
   - Minimalista, lapos vektor érzet; nem fotorealisztikus, nem 3D render.

5. **Kompozíció:**
   - Mi a fókusz (vendég-arc / motívum / mindkettő), mi a háttér.
   - **Rule-of-thirds**: a fő fókuszpont egyik harmadvonal-metszéspontján legyen, ne pontosan középen.
   - **Arc-irány**: ha van vendég-arc, **nézzen a kicker (vagy a kép belső tere) felé** — a néző tekintete követi.
   - **Alsó-bal sáv kerülése**: itt fut a YouTube-időtartam-bar és a play-overlay — fontos elemet ne tegyünk ide.
   - **Kontraszt**: a fő rétegek között **magas kontraszt** — kis méretben (120×68 px) is tisztán elválnak. Praktikus check: hunyorgós szemmel nézve még felismerhetők-e a rétegek?
   - **Mindig számolok a 260×146-os kicsinyítéssel** — a sziluettek és a kicker kis méretben is jól olvashatóak maradjanak.
   - **Split / „vs" kompozíció összehasonlító adásnál:** ha az epizód magja egy szembeállítás (régi rendszer vs. új, GitHub vs. Nostr, centralizált vs. decentralizált), érdemes a képet vizuálisan kettéosztani — a két oldal két motívuma a feszültséget azonnal kommunikálja a csempén. Ez a „max 3–4 réteg" keretbe fér (két motívum + kicker + háttér), és csak akkor használjuk, ha a tartalom valóban összehasonlító.

6. **Mit NE legyen** — epizódra szabva + általános brand-tilalmak:
   - Védjegy-kockázatos logók literálisan (pl. konkrét GitHub Octocat, ha a cím GitHubot tartalmaz).
   - Téma szempontjából félrevezető elemek.
   - Túl sok réteg — max 3–4 vizuális elem (vendég-arc, motívum, kicker, háttér).
   - **AI-slop look** (puhán-mosott, élet nélküli „midjourney-default" vibe) — tudatos stílus-irányítás kell.
   - **Stock-photo klisé** (kézfogás, gondolkodó fej hátterekkel stb.).
   - **Gradient overload / drop-shadow túlhasználat** — visszafogottság.
   - **Túl harsány paletta** (neonok, rikító piros-zöld kombók) — ellentétes a HUSZONEGY-hangzással.

7. **Recommended-feed sanity check**: képzeld el a thumbnailt 10 másik mellett apró méretben (vagy nyiss meg egy hasonló téma recommended-listát) — **kiemelkedik?** Ha igen, miért. Ha nem, mit változtass (kontraszt? központi elem méretezése? színek?). A „magában szépen néz ki" ≠ a „kiemelkedik".

8. **Méretek emlékeztető a briefben:**
   - 1280×720 Geminihez (16:9, közvetlenül a briefben megadom).

**Kicker-konvenció:**
- **Tartalmilag:** provokál, fél-tét; a YouTube-cím oldja fel. Teljes címet NEM ismétli.
- **Hossz:** max 3–5 szó (kis méretben olvashatóság).
- **Tipográfia:** **all caps** (csupa nagybetű), **bold sans-serif** font (vizuális tömeg), nagy betűméret.
- **Szín:** fehér (vagy egyéb, a háttérhez képest magas-kontrasztú szín).
- **Pozíció:** felső harmad vagy felső sáv — ne nyomja a vendég-arcot, és az alsó YouTube-időtartam-bar ne fedje le, de több szavas kicker esetén lehet több soros is, hogy kellően nagy betűméretű tudjon lenni.

**Generálás:** A briefet egy darab chat-üzenetben adom át — magyar koncepció + angol vizuális szakszavak (palette, glow, monolith, flat vector illustration stb.). Árpi copy-paste-eli Geminibe, generál egy képet, és leegyezteti velem, hova másolja a kész PNG-t.

**Vízjelmentesítés:** a vízjelet Árpi távolítja el GIMP-ben.

**Átméretezés:** Árpi átméretezi GIMP-ben — 1280×720 (Árpi tölti fel YouTube/Spotify/Rumble), és 260×146 Árpi menti ide `public/pics/eXXX.jpg`.

**Konzisztencia vs változatosság:** jelenleg **minden epizód külön vizuális világ** (egyedi motívum, egyedi paletta). Ez tudatos brand-döntés: a HUSZONEGY-rajongó a tartalom miatt jön vissza, nem felismerhető vizuális keret miatt. Ha ezt változtatnánk (pl. egységes thumbnail-keret minden adáshoz), az tervezett brand-döntés lenne, nem ad-hoc.

### 6. podcasts.ts — csak amikor minden végleges
Amikor a cím, fejezetek, leírás és kép kész, és megvan a publikálás dátuma: új bejegyzés a `src/data/podcasts.ts` **tetejére** (a legújabb legfelülre). Mezők: `name` (végleges cím), `id` (soron következő E-szám), `chapters` (idő + cím), `img` (`/pics/eXXX.jpg`), `date` (a publikálás napja, `"ÉÉÉÉ.HH.NN."`), `members`, `topic` (a fejezetcímek `" - "`-rel összefűzve), `yt`, `fountain`.

A `fountain` epizódlink csak publikálás után órákkal generálódik — addig ideiglenesen a show-URL megy be (`https://fountain.fm/show/gCVs8tyNdgXfJqaRbL3N`), később frissítjük az epizód saját linkjére.

**Idézőjel a fejezetcímekben:** ha egy `label` vagy a `topic` idézőjelet tartalmaz (scare-quote, pl. „piszkos"), **magyar tipográfiai idézőjelet** (`„ "`) használj, ne ASCII `"`-t — az ASCII idézőjel lezárja a TS-stringet (unterminated string literal).

### 7. Átirat szépítése
Az átirat szépítése az alábbi instrukciók szerint → `public/transcripts_clean/epEXXX_*.md`. A bizonytalan STT-helyeket **sorszámozott listában** adom át ellenőrzésre (1., 2., 3. …), hogy Árpi hivatkozni tudjon rájuk. A javítások beépítése után az új, visszatérő hibákat a `corrections.md`-be írom. Ha kérdéses, hogy mi visszatérő, Árpival egyeztetem.

### 8. Ellenőrzés, commit
Build-ellenőrzés (a sitemap build-időben magától frissül a `podcasts.ts`-ből és az átiratokból — kézi munkát nem igényel). Commit, amikor Árpi kéri; egy „podcast update" commit jellemzően a `podcasts.ts`-t, a `public/pics/eXXX.jpg`-t és az átirat `.md`-t tartalmazza.

## Negyedéves cím- és thumbnail-tanulás

A naptári negyedév végén (március 31, június 30, szeptember 30, december 31) áttekintjük a kiadott epizódok teljesítményét YouTube Studio **CTR + impressions + átlagos megtekintési idő (retention)** szerint. A CTR-t és a retentiont **együtt** nézzük: a magas CTR + alacsony megtekintési idő (a néző 30 mp után elpattan) az algoritmusnak rosszabb, mint a közepes CTR + erős retention — sőt a YouTube natív A/B-tesztje is nézési idő alapján dönt. Egy „félrevezetően jó" cím tehát rövid távon kattintást hoz, de hosszú távon visszaüt; ezt csak a retention-adat mutatja meg. A cím és a thumbnail együtt hozza a klikket, ezért együtt elemezzük:

1. **Árpi exportálja az adatokat** YouTube Studio-ból az adott negyedévre — a Claude nem fér hozzá a Studio-hoz, ezért ez Árpi lépése.
2. **Közös elemzés:** top 3 + bottom 3 epizód CTR szerint, **plusz a CTR–retention kereszt** (volt-e magas-CTR-de-gyenge-retention félrevezető cím). Két dimenzió:
   - **Cím-mintázatok**: kérdés vs állítás, szám / nincs szám, érzelmi-szó / száraz, em-dash / kettőspont, curiosity-gap erőssége, brand-keyword fed-e, célközönség. Összevetjük az 1. lépésbeli klikk-erő-előrejelzést a valós CTR-rangsorral — hol tévedtem szisztematikusan? Ahol futott natív **A/B-teszt (Test & Compare)**, ott a győztes változatot is bevonjuk: melyik szög nyert élesben, és egyezett-e a klikk-erő-becslésemmel.
   - **Thumbnail-mintázatok**: vendég-arc volt-e / nem; kicker fent / oldalt / nincs; sötét vs világos paletta; központi motívum kontraszt; split/„vs" kompozíció teljesített-e jobban összehasonlító adásnál; recommended-feed sanity check megtörtént-e a brief-fázisban.
3. **Tanulság rögzítése:** két bejegyzés ugyanazon a napon — a [`title-learnings.md`](title-learnings.md) végén a cím-tanulság, és a [`thumbnail-learnings.md`](thumbnail-learnings.md) végén a thumbnail-tanulság (sablon ott).
4. **Kritérium-frissítés:** ha a mintázat indokolja, az `instructions.md` 1. és/vagy 5. szakaszának kritériumai is frissülnek ugyanabban a kommitban.

## Fájlok helye
nyers auto-feliratok a transcripts_raw mappában
szépített átiratok a public/transcripts_clean mappában
a fájlok neve E01 esetén epE01_ kezdetű
corrections.md a gyökérben

Új adás forrásfelirata: a YouTube-azonosító a `src/data/podcasts.ts` `yt:` mezőjében van. A magyar auto-feliratot yt-dlp-vel töltsd le a `transcripts_raw/` mappába `epE{NN}_{id}.hu.srt` néven:
`yt-dlp --write-auto-subs --sub-langs hu --sub-format srt --convert-subs srt --skip-download -o "epE{NN}_%(id)s.%(ext)s" <url>`
Csak automatikus felirat van, kézi nincs.

## Etalon

A legutóbbi szépített átirat az etalon — onnan veszem az aktuális konvenciókat (intró-megfogalmazás, mid-roll formátum, link-stílus stb.). Az explicit szabályok ebben a dokumentumban vannak; a legutóbbi epizód ezeket élesen mutatja működés közben. Így minden epizód a következő referenciája — a folyamatos fejlődés beépül a workflow-ba.

## Mit jelent a szépítés?

Nyers, beszélt nyelvi szöveget alakítunk olvasható, linkelt, strukturált prózává – miközben a tartalom, hangulat és podcast-jelleg megmarad.

Ez nem összefoglalás, hanem az élőbeszéd tisztítása. Minden elhangzott érvnek, példának, személyes történetnek és gondolatmenetnek meg kell maradnia teljes részletességgel. Csak a technikai zajt (ö-zés, ismétlés) távolítjuk el. A magyartalan szórendet is szépítem. **A szépítés sebészi, nem újrafogalmazó:** a beszélő konkrét szóválasztását érintetlenül hagyom — nem generálom újra a mondatot, mert akkor észrevétlenül szinonimára vált (pl. „alapján" → „szerint"), és az már hűtlenség, hiába stimmel a jelentés. Átiratot írunk, nem prózát: a darabos, de hiteles megfogalmazás (akár egy nyers „Mészárolják.") marad. Ha kérdéses, erről is egyeztetek.

1. Bekezdéstörések (beszélőváltás, logikai egységek)
2. Hezitálások, ismétlések, egyszavas reagálások eltávolítása
3. Elírások, speech-to-text hibák javítása (lásd `corrections.md`)
4. Linkek beillesztése (lásd `corrections.md`) - az epizódban elhangzott linkelhető témákat is linkelem a leírás linke(i) alapján
5. `21` → `HUSZONEGY` ahol a podcast nevére vagy kuponkódra utal
6. Eredmény: `.md` fájl, ugyanabban a mappában

## Adásszerkezet

- **Cold-open:** az adás gyakran egy figyelemfelkeltő részlettel indul, ami szó szerint egy később elhangzó mondat vagy párbeszéd. Ezt meghagyom az átirat elején.
- **Intró:** „Sziasztok, ez itt a HUSZONEGY Bitcoin Podcast…"
- **Szponzori blokk:** a korábbi, nagyjából állandó outro-szöveg (huszonegy.world, Bitcoin blog, bitcoinmentor.hu, Hotel Aurora/Atlantis, Firefish) újabban gyakran az adás KÖZEPÉN vagy kétharmada körül hangzik el mid-rollként.
- **Beszélőváltás:** csak gondolatjellel (`–`), név nélkül — akkor is, ha hárman beszélgetnek.

### Támogatói-felhívás blokk

Az adásban időnként elhangzik egy támogatói felhívás (pl. „Erőforráshiánnyal küzdünk…", a [huszonegy.world/tamogatas](https://huszonegy.world/tamogatas) oldalra mutatva). Ha elhangzik, az átiratban a Relai/outro mintájára **három részre tagolva** jelenik meg (kivétel a „nincs bold a szövegtestben" szabály alól):

1. A nyitó, figyelemfelkeltő mondat **vastagítva**, külön bekezdésben — pl. `**Álljunk meg egy fontos közlemény erejéig!**`
2. A középső rész normál szöveg: a támogatási módok (alkalomszerű, rendszeres, szponzori) és a részletek a [huszonegy.world/tamogatas](https://huszonegy.world/tamogatas) linkkel.
3. A záró sor **vastagítva**, külön bekezdésben: `**Köszönünk szépen minden eddigi és további támogatást.**`

### Relai affiliate blokk

A Relai affiliate-olvasás (ha elhangzik az adásban) az átiratban **három különálló bekezdésből** áll — ez kivétel az általános „nincs bold a szövegtestben" szabály alól:

1. A nyitó/figyelemfelkeltő mondat **vastagítva**, külön bekezdésben — pl. `**Ha olyan Bitcoin-only alkalmazást keresel, … nézd meg a Relai-t!**`
2. A középső rész normál szöveg. A **Relai** első említése link, közvetlenül utána 🇨🇭 svájci zászló emoji: `A [Relai](https://bitcoinmentor.hu/relai) 🇨🇭 egy svájci app, MiCA-engedéllyel, …` Ez a bekezdés tartalmazza a HUSZONEGY kuponkódot is.
3. A záró sor **vastagítva**, külön bekezdésben: `**Részletes leírás: [bitcoinmentor.hu/relai](https://bitcoinmentor.hu/relai)**`

### HUSZONEGY "szponzori" (outro) blokk

Az állandó HUSZONEGY "szponzori" szöveg az átiratban **három külön bekezdésre tagolva** jelenik meg (nem egy folyamatos blokk, nem kezdődik gondolatjellel). A középső támogatós mondat **vastagítva**:

1. `Böngésszétek a HUSZONEGY folyamatosan fejlődő honlapját, a [huszonegy.world](https://huszonegy.world) címen! Olvassátok a [Bitcoin blog](https://bitcoinmentor.hu/bitcoin-blog/) cikkeit a [bitcoinmentor.hu](https://bitcoinmentor.hu) honlapon! És szintén itt találtok információt Bitcoin tanácsadási, mentorálási szolgáltatásunkról.` — egy bekezdésben, három mondat.
2. `**Támogatóink Miskolctapolca és Hajdúszoboszló bitcoint elfogadó és bitcoint tartalékoló négycsillagos wellness szállodái, a [Hotel Aurora](https://hotelaurora.hu) és a [Hotel Atlantis](https://hotelatlantis.hu).**` — **vastagítva**, külön bekezdésben.
3. `És a [Firefish](https://app.firefish.io/auth/sign-up?ref=HUSZONEGY) 🔥🐟 üzeni, hogy ne adjátok el a bitcoinotokat!` — normál súly, külön bekezdésben, Firefish 🔥🐟 emoji a név után.

## Szerkesztési szabályok

**Eltávolítandó:** hezitálások ("és és", "a a", "ö"), egyszavas reagálások ("Igen.", "Ja.", "Ühüm.", "Bizony.", "Pontosan.", "Persze."), félbehagyott mondatok, töltelékszavak ("na most", "szóval", "tudod").

**Figyelem – NEM eltávolítandó:** a `"Nem tudom"` kifejezés, ha nem töltelék, hanem érdemi megszólalás kezdete vagy gondolkodás kifejezése.

**Megtartandó:** természetes hangvétel, beszélők egyéni stílusa, humor, minden érdemi tartalom. Angol loanword-ök, amiket a beszélők tudatosan használnak (pl. abuzálás, home run, bottom-up, guidance, off-grid, disconnect, number go up, stb.) — NE fordítsd magyarra.

**Bekezdések:** egy bekezdés = egy gondolati egység, 3-8 mondat. Többtémás bekezdéseket bontsd, töredékeket fésüld össze.

**Beszélőváltás:** gondolatjellel (`–`). Utána nem kell név. Nem kell minden megszólalást jelölni – ha egyértelmű, ki beszél, elhagyható.

**Nevetés:** `(nevetés)` formátumban, csak ahol humoros kontextust ad.

**Elírások, nevek, linkek:** lásd `corrections.md`.

## Ami NEM a feladatod

- NE adj hozzá saját tartalmat, véleményt
- NE alakítsd cikk-stílusúvá (heading-ek, H1/H2)
- NE használj bold kiemeléseket a szövegtestben
- NE törölj érdemi tartalmat – ha kétséges, egyeztess. Ez vonatkozik a rövid reakciókra is (pl. „Így van. Erről többször beszéltünk, de nem lehet túl sokszor."), ha érdemi visszajelzést hordoznak
- NE rövidítsd le a mondatokat – ha a speech-to-text-ben egy mondat folytatódik, az egész benne marad
- NE változtasd az outro tartalmát, csak a formázást

## Munkasorrend

Egy epizódon belül ebben a sorrendben dolgozz:

1. Struktúra, bekezdések, beszélőváltás
2. Hezitálások, ismétlések, töltelékszavak
3. Elírások, nevek, szakkifejezések (lásd `corrections.md`)
4. Linkek, outro, végső simítás
5. Tanulságok egyeztetése és az egyeztetés alapján az instrukciók frissítése

## Ellenőrzőlista

- [ ] Hezitálások, ismétlések, egyszavas reagálások eltávolítva?
- [ ] Bekezdések 3-8 mondatosak, egy gondolati egység?
- [ ] Beszélőváltás gondolatjellel jelölve?
- [ ] Elírások, nevek javítva? (corrections.md)
- [ ] Linkek beillesztve? (corrections.md)
- [ ] Minden felszólító mondat felkiáltójellel zárul? (corrections.md)
- [ ] HUSZONEGY egységesítve? (21 → HUSZONEGY)
- [ ] Outro: az eredeti felirat alapján ellenőrizted a pontos tartalmat? Az outro nem mindig azonos – néha más mondat, más vendég, más esemény szerepel benne. Ne a korábbi adásokból másold, hanem mindig az aktuális feliratból dolgozz!
- [ ] Az elkészült átiratot az eredeti felirattal mondatról mondatra összehasonlítottad, és minden kihagyott részt pótoltál?
- [ ] Átolvastál furcsa, értelmetlen vagy félrehallásra utaló mondatok után kutatva? A kétséges helyeket jelöld és egyeztesd!
- [ ] Természetes, podcast-hangvételű maradt?
- [ ] Ha kétséges egy javítás, egyeztetted?
