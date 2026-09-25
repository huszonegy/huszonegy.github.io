# HUSZONEGY podcast — heti munkafolyamat és átirat-szépítés

A munkát a HUSZONEGY podcast vágója (Árpi) végzi, VS Code-ban a Claude Code bővítménnyel, Opus modellel, `xhigh` effort-szinten. Ez a dokumentum a teljes heti munkafolyamat leírása.

## Heti munkafolyamat — új epizód

Minden héten egy új epizód. Árpi Riverside-ban felveszi és megvágja a beszélgetést. A közös munka **két fázisban** zajlik:

- **A) fázis — vágás közben, a teaser bevágása előtt (0. és 0/b lépés):** az input a **Riverside-export** (a megvágott, teaser nélküli adás magyar TXT-átirata, időbélyegekkel). Itt születik meg **egyszerre** a cím, a teaser, az indexkép kickere és motívuma, a leírás első mondata, a reklámbevágások helye és a Gemini-brief. Árpi egy kész csomagot választ, és ennek alapján vág. A döntéseket a `tmp/eXXX_terv.md` tervfájlba mentem.
- **B) fázis — a YouTube-feltöltés után (1–9. lépés, akár új munkamenetben):** Árpi a videót már a végleges indexképpel tölti fel, és megadja a linket. A tervfájlból dolgozom: a YouTube automatikus feliratából készülnek a **végső fejezetidők**, az API-n keresztül felkerül a cím, a leírás és a beállítások, majd jön a Spotify/Rumble-csomag, az átirat és a `podcasts.ts`.

Ezzel a teaser, a cím, az indexkép és a leírás eleve összhangban születik, és nem kell utólag újravágni vagy újra feltölteni.

**Munkamenet eleji rutin — megtartás-ellenőrzés (automatikus, nem kell kérni):** minden HUSZONEGY-munkamenet elején, az instrukciók elolvasása után megnyitom a [`retention-learnings.md`](retention-learnings.md) „Ellenőrzési napló" táblázatát. Minden olyan epizódra, amely **14 napnál idősebb és még „esedékes"**, lefuttatom a `scripts/yt_meta.py retention EXXX` parancsot, beírom az értékeket és egy mondatos tanulságot a naplóba, és 2–3 mondatban beszámolok Árpinak (javult-e az alapértékek átlagához képest, és mi okozhatta). Ha az új epizódot felveszem a `podcasts.ts`-be, a naplóba is felveszek egy „esedékes" sort (mit próbáltunk ki, mikor esedékes). Ha a token lejárt, a bejelentkezést ilyenkor kérem. Ugyanebben a rutinban megnézem a [`title-learnings.md`](title-learnings.md) „Régi adások újracímzése" táblázatát is: ha egy sor ellenőrzése esedékes, lekérem a megtekintéseket és beírom az eredményt.

**Vezérelv minden lépésnél:** ami a reflektorfénybe kerül (cím, indexkép, bevezető, fejezetcímek), legyen egyszerre **lényegi** (az epizód érdemben, hosszan kifejti) **és izgalmas**. Marginális — egy mondatos, egyperces — téma sosem kerül fókuszba, akkor sem, ha csábító. Hiteles edukáció, nem kattintásvadászat. Javaslatot mindig indoklással adok; valódi ízlés-/hangsúlykérdésnél kérdezek, és a választ feljegyzem. **A véglegesített szöveget (cím, bevezető, fejezetek, leírás, átirat) nem írom át önállóan** — átolvasás-/ellenőrzés-kérésnél is csak javaslatot adok (számozott lista + indoklás), és megvárom a jóváhagyást; világos „csináld meg X" feladatnál viszont cselekszem. Az önállósodás mértékét közösen kalibráljuk.

**Írói elvek a felszíni szöveghez (cím + bevezető) — az önállósodáshoz:**
1. **Hűség a dráma előtt.** A reflektorfénybe szánt szöveg minden szavát a forráshoz mérem; ha dramatizálok, előbb ellenőrzöm, hogy elhangzott-e. A hitelesség a megfogalmazás minden szavában érvényes, nem csak a témaválasztásban.
2. **A cím és a bevezető zsargonmentes; a szakszó lemegy a mélységbe.** A címben és a bevezetőben csak az állhat, amit egy nem-technikai néző is felismer; a mélyebb szakkifejezések a fejezetekbe, az átiratba és a linklistába valók. Ha egy szakszó mégis muszáj, rögtön a magyarázatával együtt szerepeljen — sosem a hook helyén. Nem adok klikk-erőt olyan kulcsszónak, amit a közönség valójában nem ismer fel.
3. **A szerkezet is cím-szempont: a cold-open/teaser koherenciája.** Annak eldöntésekor, hogy egy téma lehet-e a cím, nem csak a perceit nézem, hanem a szerkezeti helyét is. Egy rövid téma is jogos fő cím lehet, ha az a cold-open — a teaser megerősíti, és a cím↔teaser egyezés algoritmus-előny (jobb nézési idő). **Hármas koherencia:** a cím, a leírás első mondata és a hanganyag első ~30 másodperce (cold-open) ugyanazt a témát erősítse meg. A YouTube az első fél percet automatikusan legépeli és kiemelten elemzi; ha a kimondott szöveg fedi a címet, az algoritmus „nem clickbait" jelzést kap és bátrabban ajánl, a hook pedig a nézőt is megtartja. Nem szó szerinti címmásolás kell, hanem a kontextus azonnali megerősítése írásban és szóban egyaránt. **A sorrend viszont nem „címet a teaserből":** a legerősebb lényegi + izgalmas fő témát keresem meg, és az hajtja a címet ÉS a cold-opent is (konvergálnak). Ha a cold-open már fixen fel van töltve, a címet hozzá igazítom a koherenciáért — de ha a cold-open gyenge/marginális témát mutat, jelzem, és inkább azt vágjuk újra (Árpi dönt), semmint hogy a címet gyengítsem hozzá.
4. **Empatikus, lokalizált tónus.** Nem paráztatok túl, és külföldi jelenséget nem személyesítek a magyar nézőre. A hook lehet általános, de a konkrét tény maradjon arányos és a helyén.
5. **Szigorú mondat-önellenőrzés.** Minden mondatot kritikus magyar szerkesztőként olvasok vissza: illik-e a kihagyott ige mindkét taghoz, természetes-e a kép, egységes-e a regiszter, nem suta-e a szórend.

**A tanulságok helye:** minden új tanulság ebbe a dokumentumba (és a `corrections.md`-be) kerül — sosem külön, gépfüggő jegyzetbe vagy az asszisztens saját memóriájába —, hogy másik gépen és más szerkesztőnek is ugyanúgy elérhető és hasznos legyen. (Kivétel: a tisztán **gépspecifikus, nem hordozható** harness-/munkakörnyezeti preferenciák — pl. az engedély-promptok csökkentése Árpi gépén — az asszisztens memóriájában élhetnek, mert nem a projekt hordozható tudásához tartoznak.) **Csak valódi, visszatérő tanulság/korrekció kerüljön be** — ne foltozzam vele az egyszeri tévedéseimet. A `corrections.md` a visszatérő név-/szakkifejezés-/linkjavítások és tartós tények tára, nem hibanapló.

**A tanulságot tiszta, önmagában is érthető irányelvként fogalmazom meg — NEM epizód-specifikus példákkal** (konkrét epizódszám, konkrét cím, egyszeri szófordulat), mert azokat kontextus nélkül később nem érteném, és félre is vihetnek. A szempont/elv legyen általános és önhordó; ha illusztráció kell, az legyen absztrakt és magától érthető.

### 0. A) fázis: csomagválasztás a Riverside-exportból — VÁGÁS KÖZBEN
- **Árpi:** a Riverside-exportot a `transcripts_raw/` mappába teszi `huszonegys-studio_eXXX.txt` néven (lásd „Fájlok helye"), és megírja, kik az adás résztvevői (a `podcasts.ts` `members` mezőjéhez). Ennyi a kérés: „itt az EXXX Riverside-exportja".
- **Tématérkép:** végigolvasom az egész átiratot, és összeírom a fő témákat, mindegyikhez az időtartományt és nagyjából a hosszt, plusz az epizód hangulatát/üzenetét. Ez teszi auditálhatóvá, hogy mi lényegi és mi marginális. Megnevezek **2–3 keresési kulcsszót** is (brand-név, témaszó vagy konkrét kérdés-fragment), amit egy potenciális néző beírna.
- **2–3 kész csomag:** mindegyik csomag **egyetlen fő téma** köré épül, és négy, egymáshoz igazított elemet tartalmaz:
  1. **cím** (az 1. lépés szabályai szerint, klikk-erővel és indoklással);
  2. **teaser** (20–45 mp): mettől meddig tart a Riverside-idővonalon, és a kivágandó szöveg (a suta gépi átírási hibák javítva). Lehet több rövid részlet egymás után is;
  3. **indexkép:** 1–3 szavas kicker + a központi motívum egy mondatban;
  4. **a leírás első mondata.**
  
  **A sorrend a lényeg:** előbb a legerősebb, érdemben kifejtett és izgalmas fő témát keresem meg, és **a teaser azt erősíti meg** — nem a teaserhez igazítom utólag a címet. A csomagokat rangsorolom, és megírom, melyik mellett mi szól. **Árpi egy csomagot választ, nem külön-külön elemeket** — így a négy elem eleve összhangban van (hármas koherencia: a cím, az indexkép és az első kimondott mondat ugyanazt erősíti meg).
- **Jó teaser:** bátor állítással, konfliktussal vagy drámai kérdéssel indul, kevés kontextust igényel, és a csúcsponton hagyja nyitva a gondolatot (curiosity gap).
- **A videó eleje:** Árpi a teasert a videó elejére vágja: **teaser (20–45 mp) → intro, vagyis a rövid zenei betét (3–5 mp) → adás 00:00-tól** (a teaser végén egy tizedmásodperc szünet a intro előtt). A teaser = a cold-open (lásd Adásszerkezet): szó szerint egy később elhangzó részlet, és az átirat elejére is teljes egészében bekerül.
- **Az intro utáni első perc:** a megtartási adatok szerint ([`retention-learnings.md`](retention-learnings.md)) az intro utáni köszöntés és bemutatkozás alatt esik ki a legtöbb új néző. Ha az intro és az első érdemi mondat között 20–30 másodpercnél több telik el, megjelölöm, mit érdemes rövidíteni (hosszú köszöntés, általános felvezetés), és hogy melyik mondattal indulhat a tartalom.
- **Gemini-brief:** a választott csomag indexképéhez rögtön megírom a briefet (5. lépés), hogy Árpi az export alatt legenerálhassa, és a videó már a végleges indexképpel kerüljön fel.
- **Tervfájl:** a választott csomagot, a reklámhelyeket és a résztvevőket elmentem a `tmp/eXXX_terv.md` fájlba — a B) fázis (akár új munkamenetben) ebből dolgozik, nem kell semmit újra kitalálni.

### 0/b. Reklámbevágások helye — VÁGÁS KÖZBEN
**Ez a csomagválasztás utáni ÁLLANDÓ, automatikus következő lépés — nem kérdezem meg, hogy csináljam-e.** Ugyanabban a menetben, a Riverside-export alapján megadom, hova kerüljenek a hangsávba/videóba illesztett bevágások. Ez **nem** a leírásba/átiratba írt szövegblokk (az az Adásszerkezet része) — itt a **vágási pozíciókat** adom meg.
- **Mit jelölök:** **2 rövid reklámblokk**: az egyik a bitcoinvásárlási ajánlás (Relai), a másik a szponzorokról szól.
- **A jó hely elve:** mindig **lezárt gondolat után, új szegmens előtt** — sosem mondat vagy érv közepén. Ideális, ha a bevágás **elé egy lekerekített, megnyugtatott rész** esik, **utána pedig egy kíváncsiságot keltő mondat** (új téma felvezetése, pl. „de van jó hír is") — így a néző átlép a megszakításon, nem lemorzsolódik.
- **Eloszlás:** a két reklám nagyjából az adás **1/3 és 2/3** pontjára kerüljön; egyik se zsúfolódjon a teaserhez vagy a záráshoz.
- **Konkrét output:** mindegyik bevágáshoz megadom a **két mondatot, amik közé esik** (szó szerint, az ELÉ és UTÁN mondatot), plusz a hozzávetőleges időbélyeget.
- **Időeltolás:** az időbélyegek a Riverside-idővonalon értendők; a teaser és az intro előrevágása után a végső videóidőhöz a teaser+intro hossza adódik. A **mondathatárok stabilak**, ezért elsősorban azokra hivatkozom, nem a percre. A végső fejezetidőket a B) fázisban a YouTube automatikus feliratából állítom elő (`yt-dlp`, lásd „Fájlok helye").

### 1. Cím
**3–5 változat**, lehetőleg **különböző megközelítésből** (kérdés / szám / konkrét értékígéret / meglepő állítás / tét), de **az erő veri a változatosságot**: jobb 3 valóban ütős változat 2 megközelítésből, mint 5 erőltetett változat 5 megközelítésből. Ha egy megközelítésnek nincs jó változata az adott epizódhoz, hagyjuk ki. Mindegyiknél: karakterszám, **klikk-erő (1–5)** egy mondat érveléssel, **curiosity-gap (1–3)** — mennyire hagy nyitva egy kérdést, amit csak a kattintás old fel (de csak ha valódi tartalom van mögötte; üres tátongás = clickbait, az nem ér pontot) —, **melyik 0. lépésbeli keresési kulcsszót fedi** (vagy egyik se), **kit céloz elsősorban** (fan / új tech-érdeklődő / búvárkodó), miért működik, melyik epizódrész fedezi. A klikk-erő **összehasonlító** (nem abszolút): a felkínált halmazon belül adok rangsort. Az ajánlott változat a legmagasabb klikk-erővel + a stratégiai szempontoknak (lényegi, izgalmas, hiteles) is megfelelő — és ha lehet, **legalább egy keresési kulcsszót is fed**.

**Mért adat a becslés előtt:** a változatok összeállítása előtt ránézek a [`title-learnings.md`](title-learnings.md) bejegyzéseire, és a mért CTR-jegyeket (kérdésforma, curiosity-gap, brand-kulcsszó a hook első ~40 karakterében) beleszámolom a klikk-erő-rangsorba. A saját ízlés-alapú becslésem másodlagos a valós adathoz képest, és ha egy megközelítés mérhetően hozott, a back-katalógus-ütközés önmagában nem érv ellene — a majdnem-klón szerkezetet kerüljük, nem a működő megközelítést.

**A becslés rögzítése:** amikor Árpi véglegesíti a címet, a [`title-learnings.md`](title-learnings.md) „Epizód-előrejelzések" táblázatába felveszek egy sort (epizód, végleges cím, klikk-erő, curiosity-gap, célközönség). A negyedéves elemzésnél ezt vetem össze a valós CTR-rel — enélkül a becslésem pontossága nem mérhető.

**Elvont cím = kisebb, de elkötelezettebb közönség:** a mért adat szerint az elvont/filozofikus címek alacsonyabb CTR-t, de hosszabb nézési időt hoznak. Ha az epizód elsősorban a törzsközönségnek szól, ez vállalható, tudatos döntés; ilyenkor a változatoknál jelzem, hogy a cím az elérés helyett az elköteleződésre optimalizál.

**A cím receptje:** a jól teljesítő címekben három dolog van együtt — egy **megnevezett, ismerős dolog**, amit a néző maga birtokol vagy naponta használ; egy **megtörtént tény**, nem feltételezés; és egy **feszültség**: ellentmondás, hiány, vagy a nézőnek szegezett kérdés. Ha bármelyik hiányzik, a cím lapos marad. A feltételes „mi lenne, ha…" nem tény; a számozott felsorolás és a témalista nem feszültség; az elvont fogalom pedig nem ismerős dolog, hiába érti a beavatott. A cím **egyetlen erős fogást** ígérjen — a teljes lefedettség a fejezetek dolga, nem a címé.

**Back-katalógus-ütközés:** a cím véglegesítése előtt ránézek a `podcasts.ts` közelmúltbeli, hasonló témájú adásaira. Ha egy korábbi cím már elhasználta ugyanazt a megközelítést vagy szerkezetet, a feedben ne legyen majdnem-klón — az új adás a friss, még le nem fedett témára menjen.

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
Kritériumok: 45–60 karakter; **a hook és az elsődleges kulcsszó az első ~40 karakterben** — a mobil- és ajánló-csempék kb. itt vágják le a címet, asztali kereső/ajánló ~70-nél, szóval ami a reflektorfénybe szánt lényeg, az kerüljön balra (em-dash használatakor is: a lényeg az em-dash bal oldalára, a részletezés jobbra); konkrét ígéret (mit kap a néző, ha rákattint); ha van benne szám, az emeli a CTR-t; kérdésforma is emeli; kerüld az elvont, filozofikus megfogalmazást; ne legyen „remix"/„újrahasznosított tartalom" jellegű előtag; magyar helyesírás — csak az első szó és a tulajdonnevek nagybetűsek; a cím a tematikát fedje, ne egy egyperces részt; **vendég vagy állandó résztvevő neve ne kerüljön a címbe** — a résztvevőket a `podcasts.ts` `members` mezője tartja nyilván; **em-dash (`—`) szóközökkel megengedett** egy fő szerkezeti törésnél (állítás → részletezés), több em-dash egy címen belül nem. Ha az em-dash utáni rész **önálló kérdés/tagmondat, nagybetűvel** kezdődik.

### 2. Bevezető — 3–5 mondat a leíráshoz

**3–5 mondat egy bekezdésben**, ahogy az epizód diktálja; a gyakorlatban a kiadott leírások jellemzően négy-öt mondatosak. A bevált ritmus: **tényközlő nyitás** egy nagy állításról, amiben van egy „de" csavar (nem kérdés és nem hook-felkiáltás), **konkrétumokkal sűrített részletezés**, a vendégekkel közös **„sorra vesszük…"**, egy **„szó lesz arról is…"**, végül egy rövid **záró beat** arról, mi jön a végén. Három mondat akkor elég, ha az epizód szorosan fókuszált.

- **1. mondat — hook + fő ígéret EGYÜTT** (~100–130 karakter): az egyetlen mondat, ami garantáltan látszik a search-snippetben és a „továbbiak" előtt. Provokáció + érdemi ígéret együtt. Nem ismétli szóról szóra a címet, és nem adja vissza ugyanazt a punchline-t, amit a cold-open is hoz.
- **2. mondat — részletezés**: konkrétan mit kap a néző (projekt-név, személy, témák). Itt fejtem ki, amit a 1. mondat felvillantott.
- **3. mondat — tonális hook vagy másodlagos meglepetés** (opcionális): nem catch-all („még mit említek"), hanem ízt vagy mélyebb gondolatot ad. Azt is megfogja, aki nem a fő témáért jött. Ha nincs ilyen természetes 3. mondat, ne erőltessük — maradjon 2 mondat.
- **Cím–bevezető-kapcsolat:** a bevezető a címet *kifejti*, nem ismétli és nem mossa el. A cím provokál, a bevezető felold + mélyít.
- **Nincs gondolatjel a bevezetőben:** a bevezető prózában is em-dash-mentes — **vesszőt/kettőspontot** használok helyette. (A *videócím* egy em-dashe marad megengedett.)
- **Hűség és attribúció:** a bevezető egyetlen állítása se **túlozza**, amit a vendég ténylegesen mondott — sem a mértéket, sem az időzítést. A véleményt attribúcióval hozom („X szerint"), és **minden állítást a végső felirathoz mérek**, mielőtt beírom.
- **SEO:** az **elsődleges** keresési kulcsszó az **első 1–2 mondatba** kerüljön (a leírás ~157. karaktere után minden a „továbbiak" mögé csukódik, és a YouTube a fold előtti, látható szöveget erősebben súlyozza); további 1–2 másodlagos kulcsszó természetesen szétszórva a bekezdésben. **Ne másold be a címet szó szerint** a leírás első sorába (papagáj-hatás; a szemantikus keresésnél nincs extra ereje, és a nézőnek természetellenes) — a cím fő kulcsszavait **természetes folyószövegbe ágyazva** hozd. Ez az első 1–2 sor egyben a Google/YouTube találati **snippet** is.
- **Hossz:** teljes bekezdés ~440–520 karakter (a rövidebb, fókuszált változat természetesen kevesebb).
- **Formátum:** **egy bekezdésben**, folyószövegként (nem számozott lista).

### 3. Fejezetcímek időbélyeggel
- 8–12 fejezet, legalább 3–5 perces közökkel (ha ennél többet gondolok indokoltnak, előbb egyeztetünk róla); az időbélyeg formátuma `MM:SS` (leading zero az egyjegyű perceknél és óráknál is, pl. `00:00`, `05:55`, `01:05:55`); az időbélyeg után csak szóköz, gondolatjel nélkül.
- **Intro-fejezet:** ha az adásnak van intrója (cold-open/bevezető), a 00:00-tól induló első fejezet a címe után **zárójelben mindig megkapja az „(Intro)" jelölést** (`<fejezetcím> (Intro)`); a cím a cold-open/intro lényegét tükrözze, lehetőleg a videócímmel rímelve. Ha nincs külön intro, az 1. fejezet 00:00-tól a cold-open utáni **első érdemi blokk** címét kapja.
- Kíváncsiságkeltő, hangzatos címek, nem tartalomjegyzék-szerűek; max 3–4 kérdés, a többi állítás; max ~50 karakter/fejezet, de a **15–30 karakteres tartomány bátrabban használható** — a rövid, scannelhető címek gyorsabban olvasódnak.
- **Lehetnek véleményesek és attitűdösek**, nem csak deskriptívek — a néző a tartalomjegyzékben is érezze a tónust. Pl. „Patkóelmélet csapdája" jobb, mint puszta „Patkóelmélet"; „Trump korrupcióban verhetetlen" élesebb, mint „Trump és a korrupció". Akkor üt, ha a tartalom megvédi (nincs üres clickbait).
- **Scare-quote árnyalás**: egyetlen szó idézőjelben („támogatás", „demokrácia") árnyalt véleményt jelez egy szón belül. Mértékkel, ne minden fejezeten.
- Csak akkor önálló fejezet, ha a téma legalább 2–3 percen át ki van fejtve.
- Az időbélyegeket a felirat időzítéséből állítom elő.
- **Nincs gondolatjel a fejezetcímekben:** kettőspontot vagy vesszőt használok em-dash helyett (a *videócím* egy em-dashe rendben; a fejezetcímeké nem).
- **Változatos hossz és ritmus:** a fejezetcímek ne legyenek egyöntetűen hosszúak/teltek — legyen köztük néhány **rövid, ütős** (~20–30 karakteres) is a hosszabbak mellett. Ha az összes cím a felső hossz-sávba zsúfolódik, rövidítek párat.
- **A cím a szakasz TÉNYLEGES, érdemi tartalmát tükrözze:** a fejezethatárok és -címek a **végső felirat valós tartalmából** készülnek, nem előzetes tématérkép-vázlatból. **A fejezetek véglegesítése előtt átolvasom a teljes átiratot.** Minden fejezet érdemi részét (a bulk-ját) ellenőrzöm, mielőtt címet adok — a cím a szakasz **fő témáját** adja vissza, ne a nyitó pár mondatot/horgot, se egy futólag említett apró elemet.
- **Ne ismétlődjön a szomszédos címek kezdete/szerkezete** (pl. két egyforma nyitókérdés közvetlenül egymás után).
- **Fejezetszám:** hosszabb (~50–55 perces) adásnál a gyakorlati kadencia ~**13–14 fejezet** (~4 perc/fejezet); a 8–12 az alsó irány, a hosszabbaknál a 13–14 is rendben.

### 4. YouTube-leírás összeállítása

**Formátum:** a linkblokkok multi-line szerkezetűek, soronként **leíró címke + `➡` + URL** (nem `·`-vel zsúfolt egysor — mobilon így scannelhető). Subtle emojik csak ott, ahol funkciójuk van (🇨🇭, ⚡, 🔥🐟, ➡). HUSZONEGY-hangzás: tech-tartalmú, de barátságos.

**Résztvevők:** a vendég/résztvevők nevei (pl. „Anti, Openoms, Árpi") a `podcasts.ts` `members` mezőjébe kerülnek; ezt a 0. lépésben **rákérdezéssel** szerzem meg (a vágás előtti Riverside-inputnál még nincs feltöltött YouTube-leírás, amiből kiolvashatnám — Árpinak így nem is kell beírnia a résztvevőket a leírásba). A **végleges YouTube-leírásba NEM** írok külön „Résztvevők:" sort. **Kivétel: közismert, a csatornán kívül is keresett vendég** (ritka eset, pl. országosan ismert közgazdász, közéleti szereplő) — az ő teljes nevét a bevezetőbe írom (lehetőleg a 2. mondatba), mert a keresésben a nevére is rákeresnek (lásd `title-learnings.md`, Keresőszavak). Az állandó és visszatérő résztvevők nevét továbbra sem.

**Szekció-fejlécek:** a leírás blokkjai **CSUPA NAGYBETŰS szekciócímkét** kapnak a scannelhetőségért — pl. `FEJEZETEK:`, `FORRÁSOK:`, `HUSZONEGY KÖZÖSSÉG:`, `MENTORÁLÁS & BLOG:`, `SZPONZOROK:`, `AJÁNLJUK:`, `ÁTIRAT:`. Az adásban elhangzott linkek/források blokkja a **`FORRÁSOK:`** fejléc alá kerül; a soroknál nincs „(chart)"/„(blog)"/„előadás"-szerű utótag, sem gondolatjel — csak a tömör címke + `➡` + URL (pl. `Jack Mallers BTC Prague ➡ <URL>`). Az átirat-blokk is fejlécet kap (`ÁTIRAT:`), és az `Inkább olvasnád?` a link barátságos címkéje: `Inkább olvasnád? ➡ <átirat-URL>`. A YouTube fejezet-detektálását a `FEJEZETEK:` fejléc nem zavarja, amíg a `00:00` az első időbélyeg a leírásban.

**Click-through elv:** a blurb-szövegek ne ismételjék azt az infót, ami a célokon (a linkelt oldalon) már ott van (pl. konkrét kedvezmény százalék a Relai oldalán).

A jelenlegi blokkos felépítés (nincs bebetonozva — jobbító javaslat mindig jöhet). **Az érvényes szabvány:**

1. **Bevezető** (3–5 mondat, egy bekezdésben)
2. **Támogatás-CTA** a bevezető után — **egyetlen sor.** A satos link, a „Támogasd a folytatást!" fejléc és a szponzor-kiemelő sor nem ide való; a szponzorok a `SZPONZOROK:` blokkban vannak:
🧡 Legyél Te is csatornatag! ➡ https://www.youtube.com/@huszonegy-bitcoin-podcast/join

3. **FEJEZETEK:** (lásd 3. lépés)
4. **FORRÁSOK:** — az adásban elhangzott, **nem evergreen** linkek (vendég projektje, hivatkozott külső cikk, korábbi HUSZONEGY Bitcoin blog-poszt). Az evergreen linkek a lenti blokkokba valók, ne ide. Opcionális; minden adásnál rákérdezek, van-e ilyen.
5. **HUSZONEGY KÖZÖSSÉG:**
   - Csak Bitcoinról, magyarul ➡ https://huszonegy.world
   - Meetup ➡ https://huszonegy.world/meetup
   - Telegram ➡ https://t.me/huszonegy
   - Nostr ➡ https://nostr.hu/huszonegy
6. **MENTORÁLÁS & BLOG:**
   - Bitcoin mentorálás ➡ https://bitcoinmentor.hu
   - Bitcoin blog ➡ https://bitcoinmentor.hu/bitcoin-blog
7. **SZPONZOROK:**
   - BudaBit 🔥 cypherpunk fejlesztői közösség ➡ https://budabit.club
   - Hotel Atlantis ⚡ Hajdúszoboszló ➡ https://hotelatlantis.hu
   - Hotel Aurora ⚡ Miskolctapolca ➡ https://hotelaurora.hu
8. **AJÁNLJUK:** (affiliate — a hivatkozó-kód az URL-ben, nem külön „Ajánlókód:" sorban)
   - Relai 🇨🇭 Bitcoin-only megtakarítási app ➡ https://bitcoinmentor.hu/relai
   - Firefish 🔥🐟 Bitcoin fedezetű kölcsön ➡ https://app.firefish.io/auth/sign-up?ref=HUSZONEGY
9. **ÁTIRAT:**
   - `Inkább olvasnád? ➡ https://huszonegy.world/podcast/<slug>`
   - **Slug-szabály:** a végleges címből származtatva — kisbetűs, ékezetmentes (`ő → o`, `é → e`, `á → a`, `í → i`, `ú → u`, `ü → u`, `ö → o`); brand-nevek és számok ASCII-kisbetűre (`MicroStrategy` → `microstrategy`, `BIP-110` → `bip-110`); írásjelek (`,`, `?`, `!`, `:`, `;`, `'`, em-dash) **eltűnnek nyom nélkül** (nem kerül a helyükre kötőjel); meglévő belső kötőjelek megmaradnak (`Nostr-alternatíva`, `BIP-110`); szavak között egyetlen `-`. Pl. *„Recseg a GitHub — épül a magyar Nostr-alternatíva"* → `recseg-a-github-epul-a-magyar-nostr-alternativa`.

### 4/b. Feltöltés a YouTube-ra az API-n keresztül
A cím, a leírás és a videó-beállítások a YouTube Data API-n keresztül kerülnek fel a [`scripts/yt_meta.py`](scripts/yt_meta.py) szkripttel (`get` / `set`; a `set` alapból próbafutás, élesíteni `--apply`-jal lehet). A titkos fájlok a repón kívül vannak: `~/.config/huszonegy-yt/` (OAuth kliens + token), a Python-környezet a `~/.local/share/huszonegy-yt/venv/` mappában. Az OAuth-app **Testing** módban van, ezért a token **7 nap után lejár**: a heti első futtatáskor Árpinak egyszer újra be kell jelentkeznie a böngészőben (a HUSZONEGY csatornát választva).

- **Feltöltés előtt mindig jóváhagyás:** a teljes címet és leírást megmutatom, és csak Árpi rábólintása után küldöm fel; utána visszaolvasom az élő változatot. Az API a leírást egészben cseréli, ezért mindig a teljes szöveget küldöm.
- **Mintának az előző epizód élő leírását veszem**, mert Árpi a Studióban kézzel is javít rajta (az állandó blokkokat onnan viszem át szó szerint).
- **A Riverside-feltöltés nem veszi át a csatorna feltöltési alapértelmezéseit**, ezért minden héten én állítom be az API-n keresztül:
  - a videó hangjának és a cím/leírás nyelvének **magyar** nyelvet (a Riverside angolt hagy benne). **Kivétel: angol hangú videó magyar felirattal** (külföldi előadás, interjú, klip) — ott a **hang nyelve angol**, a **cím/leírás nyelve magyar**; így a YouTube helyes gépi feliratot készít, és a magyar közönség is megtalálja. A valódi hangnyelvet a gépi felirat eredeti nyelvéből ellenőrzöm (`yt-dlp … --print "%(automatic_captions)j"` → a `-orig` végű kulcs);
  - a **címkéket**: a bitcoin + az epizód 5–8 fő témaszava/brandneve + a **márkacímkék minden epizódnál: `huszonegy`, `21 bitcoin podcast`, `21 podcast`, `21`** (a nézők a nevet számmal is keresik — lásd `title-learnings.md`, Keresőszavak). A címkék együtt legfeljebb 500 karakter;
  - a **„módosított vagy szintetikus tartalom: nem”** jelölést (az API nem adja vissza, ezt Árpi a Studióban ellenőrzi);
  - a **„HUSZONEGY Bitcoin podcast”** lejátszási listát (automatikusan rendezett, a legújabb kerül előre). **Csak a premier beállítása után** teszem bele, mert egy nem listázott videó a nyilvános listában idő előtt látható lenne.
- **Árpi a Studióban állítja be** (az API ezeket nem kezeli): a **premiert** (ütemezés, 19:00), a **záróképernyőt** (importálás az előző videóból), valamint kikapcsolja az **„Automatikus helyek”** és a **„Fogalmak automatikus megjelenése”** kapcsolót.

### 4/c. Spotify- és Rumble-szövegcsomag
**Állandó, automatikus lépés — nem kérdezem meg, hogy csináljam-e:** amint a YouTube-os rész kész (a leírás élesben fent van), magamtól elkészítek két bemásolható szövegfájlt, mert Árpi a Spotify for Creatorsre és a Rumble-re is feltölti az epizódot. Ezekhez a platformokhoz nincs feltöltő- vagy szerkesztő-API, ezért a feltöltést és a mezők kitöltését Árpi végzi kézzel.

- **`tmp/eXXX_spotify.txt`**: `CÍM:` + `LEÍRÁS:`
- **`tmp/eXXX_rumble.txt`**: `CÍM:` + `LEÍRÁS:` + `CÍMKÉK:` (vesszővel elválasztva, a YouTube-címkékkel azonosan)
- **Forrás:** a YouTube **élő** címe és leírása (API-ból lehúzva, nem a tervezetből), mert az élesben javított változat az igazság.
- **Egyetlen eltérés:** a YouTube-specifikus `🧡 Legyél Te is csatornatag! ➡ …` sor kimarad. A cím ugyanaz, mint a YouTube-on — **epizódszám-előtag nélkül**. Más különbség nincs.
- **Fejezetidők:** a YouTube-ra feltöltött vágás időbélyegei érvényesek; ha Árpi a Spotifyra/Rumble-re más vágást tölt fel, szólok, hogy az időbélyegeket ahhoz kell igazítani.
- A `tmp/` mappa nincs verziókezelve, a fájlok nem kerülnek commitba.

### 5. Indexkép

A briefet az alábbi sorrendben építem fel — **az emberi arctól befelé**, mert a thumbnail-en először mindig egy emberi arc fog meg, és minden más (motívum, szöveg, paletta) ezt szolgálja.

1. **Arc és arckifejezés:**
   - A vendég arcát (vagy ha nincs vendég, a házigazdáét) a Gemini egy **tetszőleges, jó minőségű fotóból** rajzolja karikatúrává — Árpi szerzi be és csatolja. **Nem vadászok képkockát a felvételből**, és nem gyűjtök időbélyeges pillanatképeket: az arckifejezést az AI bármilyenre meg tudja rajzolni.
   - Az **arckifejezést a briefben írom elő**, az adás hangulatából és a kicker/motívum üzenetéből levezetve (pl. magabiztos, cinkos félmosoly; döbbent; elgondolkodó).

2. **Motívum + kicker-szöveg:**
   - **Motívum:** az adás magjának vizuális jele (tárgy, szimbólum, kontextus-tárgy) — ami a YouTube-címet **egészíti ki**, nem ismétli. A motívum lehet bármi, ami az adás más rétegeit hozza vissza, de ikonikus legyen, ne valami elvont dolog.
   - **Kicker-szöveg:** 1–3 szavas felirat a képen, fél-tét — a YouTube-cím oldja fel (lásd kicker-konvenciót lent).

3. **Színvilág:**
   - Melyik paletta passzol az érzelemhez és a motívumhoz: sötét = mély/tét, világos = közeli/barátságos (a mért adat szerint a világos, lapos illusztráció is kiválóan működik, ha egyetlen tárgy-fókusz van rajta — a sötét háttér nem feltétel, a kontraszt és az egy fókuszpont számít); tematikus tónus (lila = Nostr, narancs/sárga = Bitcoin, zöld = pénz/biztonság).
   - HUSZONEGY-brand hangzás: tech, de barátságos; soha nem rikító.
   - **max 3–4 domináns szín**, visszafogott háttér.

4. **Stílus:**
   - Tisztázzuk, hogy van-e vendég-cutout.
   - **Soha ne generikus, kitalált arcot** rajzoltassunk: az nem hozza a valós arc előnyét. Ha nincs valós vendég, vagy a házigazda valós karikatúrája kerüljön a képre, vagy arc nélküli, erős tárgy-motívum.
   - Ha van, akkor a fotót Árpi csatolja Gemininek, és a brief karikatúra-rajz átalakítást kér úgy, hogy hasonlítson az eredetire, az 1. pontban előírt arckifejezéssel.
   - Minimalista, lapos vektor érzet; nem fotorealisztikus, nem 3D render.

5. **Kompozíció:**
   - Mi a fókusz (vendég-arc / motívum / mindkettő), mi a háttér.
   - **Rule-of-thirds**: a fő fókuszpont egyik harmadvonal-metszéspontján legyen, ne pontosan középen.
   - **Arc-irány**: ha van vendég-arc, **nézzen a kicker (vagy a kép belső tere) felé** — a néző tekintete követi.
   - **Alsó-bal sáv kerülése**: itt fut a YouTube-időtartam-bar és a play-overlay — fontos elemet ne tegyünk ide.
   - **Kontraszt**: a fő rétegek között **magas kontraszt** — kis méretben (120×68 px) is tisztán elválnak. Praktikus check: hunyorgós szemmel nézve még felismerhetők-e a rétegek?
   - **Mindig számolok a 260×146-os kicsinyítéssel** — a sziluettek és a kicker kis méretben is jól olvashatóak maradjanak.
   - **Split / „vs" kompozíció: NE.** Árpi kifejezetten nem szereti a kettéosztott képet, akkor sem, ha az adás magja egy szembeállítás. A feszültséget egyetlen összefüggő jelenetben kell megoldani: a két pólus közül az egyik legyen a látható motívum, a másik a jelenet kontextusa vagy hiánya. Ha egy koncepció csak kettéosztással működne, keress másikat.

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
- **Hossz:** **1–3 szó** (kis méretben olvashatóság; a mért adat szerint a 4+ szavas kickerek a gyengébb CTR-ű képek között vannak).
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

**A `date` mező — a megjelenés napja:** jellemzően a **legközelebbi péntek**, de ezt **mindig egyeztetem**.

**Az előző epizód Fountain-linkjének frissítése:** amikor az új epizódot beírom a `podcasts.ts` tetejére, ugyanabban a lépésben ránézek az **előző** epizód `fountain` mezőjére — az addigra publikálva van, tehát megvan az epizód saját linkje (`https://fountain.fm/episode/…`). Ha még a show-URL placeholder áll benne, lecserélem az epizód-linkre. (Árpi adja meg az előző epizód Fountain-epizódlinkjét; ha még nincs meg, rákérdezek.)

**Az előző epizód élő YouTube-verziójának ellenőrzése:** a cím és a fejezetcímek a feltöltés után még változhatnak a Studióban, ezért a `podcasts.ts` elcsúszhat attól, ami élesben fut. Amikor az új epizódot beírom, ugyanabban a lépésben lehúzom az előző adás élő címét és fejezetlistáját (`yt-dlp --skip-download --print "%(title)s"`, illetve a leírás `FEJEZETEK:` blokkja), és ha eltér, a repót igazítom az éleshez. **Az élő verzió az igazság, nem a repóban tárolt tervezet** — a mért teljesítmény is ahhoz tartozik.

**Címváltoztatás (régi vagy friss epizódnál):** a honlapon az epizód URL-je a `podcasts.ts` `name` mezőjéből képzett slug. Ha a cím változik, a `name` is változik, és **a régi URL-t a `src/router/index.ts`-ben átirányítom az újra** (`{ path: '/podcast/<régi-slug>/', redirect: '/podcast/<új-slug>/' }`). A régi URL ilyenkor az új tartalmat adja, kanonikus hivatkozással az újra, a sitemapből pedig a build automatikusan kizárja az átirányított útvonalakat. Előtte ellenőrzöm, hivatkozik-e máshol a repó vagy a YouTube-leírás a régi URL-re.

**Idézőjel a fejezetcímekben:** ha egy `label` vagy a `topic` idézőjelet tartalmaz (scare-quote, pl. „piszkos"), **magyar tipográfiai idézőjelet** (`„ "`) használj, ne ASCII `"`-t — az ASCII idézőjel lezárja a TS-stringet (unterminated string literal).

### 7. Átirat szépítése
Az átirat szépítése az alábbi instrukciók szerint → `public/transcripts_clean/epEXXX_*.md`. A gépi átirat bizonytalan helyeit **sorszámozott listában** adom át ellenőrzésre (1., 2., 3. …), hogy Árpi hivatkozni tudjon rájuk. A javítások beépítése után az új, visszatérő hibákat a `corrections.md`-be írom. Ha kérdéses, hogy mi visszatérő, Árpival egyeztetem.

### 8. Ellenőrzés, commit
Build-ellenőrzés (a sitemap build-időben magától frissül a `podcasts.ts`-ből és az átiratokból — kézi munkát nem igényel). Commit, amikor Árpi kéri; egy „podcast update" commit jellemzően a `podcasts.ts`-t, a `public/pics/eXXX.jpg`-t és az átirat `.md`-t tartalmazza.

### 9. Publikálás utáni teendők
- **Fountain-link frissítése:** a `podcasts.ts` `fountain` mezője eleinte a show-URL; a publikálás után órákkal, amikor az epizód saját Fountain-linkje generálódik, frissítem rá.

## Negyedéves cím- és thumbnail-tanulás

A naptári negyedév végén (március 31, június 30, szeptember 30, december 31) áttekintjük a kiadott epizódok teljesítményét YouTube Studio **CTR + impressions + átlagos megtekintési idő (retention)** szerint. A CTR-t és a retentiont **együtt** nézzük: a magas CTR + alacsony megtekintési idő (a néző 30 mp után elpattan) az algoritmusnak rosszabb, mint a közepes CTR + erős retention — sőt a YouTube natív A/B-tesztje is nézési idő alapján dönt. Egy „félrevezetően jó" cím tehát rövid távon kattintást hoz, de hosszú távon visszaüt; ezt csak a retention-adat mutatja meg. A cím és a thumbnail együtt hozza a klikket, ezért együtt elemezzük:

1. **Árpi exportálja az adatokat** YouTube Studio-ból — a CTR és a megjelenítések száma API-n nem érhető el, ezért ez Árpi lépése. Menete: Elemzések → jobb felül **Speciális mód** → időszak: **Feltöltés óta** (így minden videó teljes élettartama benne van; az epizódokat én szűröm a negyedévre) → felül a **Tartalom** fül → a **+** gombbal oszlopok: **Indexkép-megjelenítések**, **Indexképek átkattintási aránya**, Megtekintések, Átlagos megtekintési időtartam, Megtekintési átlag (%) → jobb felül lefelé nyíl → **Vesszővel elválasztott értékek (.csv)**. A ZIP a repó `tmp/` mappájába kerül; nekem a benne lévő `A táblázat adatai.csv` kell. A forgalmi forrásokat, eszközöket és a megtartást az Analytics API-ból magam kérem le.
2. **Közös elemzés:** top 3 + bottom 3 epizód CTR szerint, **plusz a CTR–retention kereszt** (volt-e magas-CTR-de-gyenge-retention félrevezető cím). Két dimenzió:
   - **Cím-mintázatok**: kérdés vs állítás, szám / nincs szám, érzelmi-szó / száraz, em-dash / kettőspont, curiosity-gap erőssége, brand-keyword fed-e, célközönség. Összevetjük az 1. lépésbeli klikk-erő-előrejelzést a valós CTR-rangsorral — hol tévedtem szisztematikusan? Ahol futott natív **A/B-teszt (Test & Compare)**, ott a győztes változatot is bevonjuk: melyik változat nyert élesben, és egyezett-e a klikk-erő-becslésemmel.
   - **Thumbnail-mintázatok**: vendég-arc volt-e / nem; kicker fent / oldalt / nincs; sötét vs világos paletta; központi motívum kontraszt; split/„vs" kompozíció teljesített-e jobban összehasonlító adásnál; recommended-feed sanity check megtörtént-e a brief-fázisban.
3. **Megtartás:** a `scripts/yt_meta.py retention` paranccsal lekérem a negyedév epizódjainak görbéjét, és a [`retention-learnings.md`](retention-learnings.md) alapértékeit frissítem, ha a mintázat elmozdult (pl. mely vágási változtatás javított az 1–5. perc között).
4. **Tanulság rögzítése:** két bejegyzés ugyanazon a napon — a [`title-learnings.md`](title-learnings.md) végén a cím-tanulság, és a [`thumbnail-learnings.md`](thumbnail-learnings.md) végén a thumbnail-tanulság (sablon ott).
5. **Kritérium-frissítés:** ha a mintázat indokolja, az `instructions.md` 1. és/vagy 5. szakaszának kritériumai is frissülnek ugyanabban a kommitban.

## Fájlok helye
- **Vágás előtti input (0. lépés):** a Riverside-export a `transcripts_raw/` mappában, `huszonegys-studio_eXXX.txt` néven (a megvágott, teaser nélküli adás TXT-átirata, időbélyegekkel) — a Riverside saját fájlneve, ne nevezd át.
- **Tervfájl (A) fázis → B) fázis):** `tmp/eXXX_terv.md` — a választott csomag (cím, teaser, kicker + motívum, a leírás első mondata), a reklámhelyek és a résztvevők. A `tmp/` nincs verziókezelve.
- **Kész videó felirata (végső fejezetidőkhöz):** a `transcripts_raw/` mappában, `epE{NN}_{id}.hu.srt` néven (yt-dlp).
- **Szépített átiratok:** a `public/transcripts_clean/` mappában, E01 esetén `epE01_` kezdetű néven.
- **corrections.md** a gyökérben.
- **Tanulság-fájlok** a gyökérben: `title-learnings.md` (cím, CTR, epizód-előrejelzések), `thumbnail-learnings.md` (indexkép), `retention-learnings.md` (megtartás: alapértékek + ellenőrzési napló).

Kész videó forrásfelirata: a YouTube-azonosító a `src/data/podcasts.ts` `yt:` mezőjében van. A magyar auto-feliratot yt-dlp-vel töltsd le a `transcripts_raw/` mappába `epE{NN}_{id}.hu.srt` néven:
`yt-dlp --write-auto-subs --sub-langs hu --sub-format srt --convert-subs srt --skip-download -o "epE{NN}_%(id)s.%(ext)s" <url>`
Csak automatikus felirat van, kézi nincs.

## Etalon

A legutóbbi szépített átirat az etalon — onnan veszem az aktuális konvenciókat (intró-megfogalmazás, mid-roll formátum, link-stílus stb.). Az explicit szabályok ebben a dokumentumban vannak; a legutóbbi epizód ezeket élesen mutatja működés közben. Így minden epizód a következő referenciája — a folyamatos fejlődés beépül a workflow-ba.

**corrections.md elsőbbsége:** ha a `corrections.md` és az etalon ütközik egy konkrét helyesírásban vagy konvencióban, a `corrections.md` dönt — az etalon csak a minőség és a stílus referenciája.

**Referencia-átiratok:** E95 és E96 referencia-fájlok (**E96 a minőségi etalon**) — ezeket sosem szerkesztem.

**Összefoglalóvá rövidült régi átiratok — backlog (2026.09.25.):** a korábbi, tömeges „szépítés" több régi átiratot **összefoglalóvá rövidített**, ami ellentmond az átirat-szabályoknak (nem összefoglalunk, hanem az élőbeszédet tisztítjuk, minden elhangzott résszel), és helyenként el sem hangzott szöveget (pl. outrót) is hozzáadott. **Ellenőrzés:** a szépített `.md` és a nyers szöveg (`.txt` vagy SRT) szószámának aránya — egy rendes átiratnál 0,7–0,95; **0,4 alatt összefoglaló-gyanús**. A 2026.09.25-i felmérés szerint érintett: E01–E05, E07–E11, E14, E16, E17, E19–E22, E24, E26–E32, E34–E41, E43–E45, E48, E50–E59, E61, E65–E69, E71, R01–R07 (az E25 már újra elkészült). **Sorrend:** előbb a leginkább keresett/örökzöld adások (E01 „Mi az a Bitcoin?", E16 „Bitcoin bányászat"), majd a régi videók címjavításához kiválasztott adások, végül a többi — hetente néhány, az új epizódok mellett. A teljes újraírás a nyers feliratból történik, a meglévő összefoglalót nem használom alapnak.

**„Hol tartunk":** a `podcasts.ts` epizód-id-jeit vetem össze a `public/transcripts_clean/` `.md` fájljaival; amelyik epizódhoz nincs szépített `.md`, az a backlog.

**Ne tippelj konkrét tényt:** a kontextusból magabiztosan rekonstruálható szót/nevet javítom; de egy nem eldönthető konkrét tényt (évszám, szám, márka-/projektnév) NEM írok be plauzibilis tippként — a tévesen hitelesnek látszó érték rosszabb, mint egy látható hiány, mert átcsúszhat az ellenőrzésen. Láthatóan jelölöm és egyeztetek. (Ezt a bizonytalan szakszó-/névrekonstrukcióra is alkalmazom: ha nem vagyok biztos, flageljem, ne csendben „javítsak".)

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

- **Cold-open:** az adás gyakran egy figyelemfelkeltő részlettel indul, ami szó szerint egy később elhangzó mondat vagy párbeszéd. Ezt meghagyom az átirat elején. **A cold-open akkor is teljes egészében az átirat elejére kerül, ha hosszú (akár egy perc), és ha később szó szerint visszatér** — ilyenkor mindkét előfordulás megmarad (a teaser elöl, az ismétlés a kontextusában). Soha nem rövidítem a cold-opent azzal az indokkal, hogy „később úgyis elhangzik".
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
3. `A [Firefish](https://app.firefish.io/auth/sign-up?ref=HUSZONEGY) 🔥🐟 pedig azt üzeni, hogy ne adjátok el a bitcoinotokat!` — normál súly, külön bekezdésben, Firefish 🔥🐟 emoji a név után. Az outro szövege változhat — mindig az aktuális feliratból dolgozz.

## Szerkesztési szabályok

**Eltávolítandó:** hezitálások ("és és", "a a", "ö"), egyszavas reagálások ("Igen.", "Ja.", "Ühüm.", "Bizony.", "Pontosan.", "Persze."), félbehagyott mondatok, töltelékszavak ("na most", "szóval", "tudod").

**Figyelem – NEM eltávolítandó:** a `"Nem tudom"` kifejezés, ha nem töltelék, hanem érdemi megszólalás kezdete vagy gondolkodás kifejezése.

**Megtartandó:** természetes hangvétel, beszélők egyéni stílusa, humor, minden érdemi tartalom. Angol loanword-ök, amiket a beszélők tudatosan használnak (pl. abuzálás, home run, bottom-up, guidance, off-grid, disconnect, number go up, stb.) — NE fordítsd magyarra.

**Bekezdések:** egy bekezdés = egy gondolati egység, 3-8 mondat. Többtémás bekezdéseket bontsd, töredékeket fésüld össze.

**Beszélőváltás:** gondolatjellel (`–`). Utána nem kell név. Nem kell minden megszólalást jelölni – ha egyértelmű, ki beszél, elhagyható.

**Nevetés:** `(nevetés)` formátumban, csak ahol humoros kontextust ad.

**Helyesírás (visszatérő buktatók):**
- Átvitt értelmű összetétel **egybe**, ha csekély/elhanyagolható jelentésű (pl. *aprópénz*).
- Idegen kifejezés + magyar toldalék **kötőjellel** (pl. *all-time high-on*).
- A gép által **különírt összetételt egybe** javítom, ahol a helyesírás azt kívánja (pl. *többfajta*).
- A beszélt nyelv miatt **elcsúszó ragot/vonzatot** a helyes alakra javítom (pl. helyhatározónál a köznyelvbe becsúszó `-ba/-be` helyett a pontos `-nál/-nél`, ahol az a helyes).

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

## Munkamódszer és együttműködés

**Ki a felhasználó:** a felhasználó maga Árpi — a HUSZONEGY egyik házigazdája (a másik Anti), és aki minden epizódot vág, szerkeszt és publikál. Ha „Árpi" szerepel egy átiratban vagy a `podcasts.ts` `members` mezőjében, az maga a felhasználó. A heti munka az ő kézi lépéseivel váltakozik (felvétel-vágás, YouTube-feltöltés, thumbnail-generálás Geminivel, GIMP, Studio-beállítások); a Claude a website-publikálás előkészítését viszi.

**Egyeztetés a darálás helyett:** nem-triviális elágazásnál kérdezz először — konkrét opciók, ajánlással —, ne dolgozz hosszan önállóan olyasmin, amit aztán át kell írni. Hosszabb generálás (átirat, brief, hosszú lista) előtt egy rövid mondatban erősítsd meg a strukturális döntéseket. A kérdezés/ötletelés a kívánatos; a felesleges token-égetés önállóskodással nem. Ha valami nem egyértelmű a dokumentumokból, kérdezz, ne találgass.

**Érthetően, a tényleges tartalommal — ne rövidítés-utalásokkal.** Árpi NEM olvasta az összes átiratot; a Claude viszont igen. Amikor bármit bemutatok, ami az átiratokból merít (válogatás-terv, szegmens-javaslat, kifogás-lista), a puszta adásszám-hivatkozás („E107 hobbifutó") és a szakzsargon (bookend, reframe, passzus-lock) számára átláthatatlan. Ezért: nevezd meg a beszélőt egyszerűen (Robi, Kata, Mordai…), és **mondd el, MI hangzik el — a tényleges idézettel vagy egyszerű leírással**, ne csak címkével utalj rá. A tömörség itt nem erény: inkább magyarázd végig, mint hogy kódolt hivatkozásokat adj.

**Természetes, emberi magyar nyelven — AI-zsargon nélkül.** Úgy írok, ahogy egy tapasztalt magyar szerkesztő vagy újságíró fogalmaz: folyékonyan, közvetlenül, tisztán és olvasmányosan. Ez a válaszaimra ugyanúgy vonatkozik, mint a leadott szövegre (cím, bevezető, fejezetek, leírás, átirat). Tilos az angol AI-zsargon és a túlformalizált, gépszerű magyar fordulat — a „feladat végrehajtva", „a kérés alapján elvégeztem", „az alábbi lépéseket hajtottam végre" típusú mondatok, az agent- és tool-szótár, a folyamat gépies leltározása. Nem magyarázkodom túl és nem mentegetőzöm: elmondom, mi történt és mi az, amiről Árpinak döntenie kell. A hangnem közvetlen és emberi — ember írjon, ne „AI-agent". **Kerülendő szavak (Árpi kérése):** a „szög" (helyette: fő téma, megközelítés, irány) és a „jingle" (helyette: **intro** — Árpi így hívja a teaser utáni rövid zenei betétet).

**Ne a döntésemet találgasd — kérdezz; amit tudsz, jegyezd fel.** A cél nem az, hogy kevesebbet kérdezz, hanem hogy egyre önállóbban azt csináld, amit együtt csinálunk. Ezért: (1) amit egyszer eldöntöttünk (preferencia, konvenció), azt **feljegyzem ide vagy a `corrections.md`-be**, hogy legközelebb ugyanazt ne kelljen megkérdezni; (2) amit még nem tudok és nem következik a dokumentumokból, azt **megkérdezem — nem próbálom kitalálni, hogyan döntenél**, és főleg nem hozok csendben egy feltételezett döntést (ez vezetett a cold-open téves rövidítéséhez). A rögzített tudást alkalmazom; az ismeretlen döntést kérdezem.

**Effort-szint:** default Opus + `xhigh` (a munka mindkét oldala — aprólékos hosszú-kontextusú átirattisztítás és kreatív cím-/leírásírás — intelligencia-érzékeny). Proaktívan jelezd, ha egy részfeladatnál érdemes változtatni: nehéz kreatív/ítéleti lépésnél feljebb, egyértelműen mechanikusnál lejjebb. Árpi dönt; te csak felszínre hozod.

**Git:** ne ajánlgasd magadtól a commitot, és ne commitolj magadtól — Árpi időzíti a gitet, ő szól, vagy maga commitol. Végezd el a munkát, jelezd röviden, mit érint a working tree, és várd meg az explicit utasítást. (Default branchen előbb branch; commit/push csak kérésre.)

**Build:** ne futtasd a `npm run build`-et minden apró szerkesztés után — csak érdemi ponton (szerkezeti változás, a munka lezárása) vagy ha Árpi kéri. Apró tweak (szöveg, szín, egy-egy sor) után elég maga az Edit; a hibát az úgyis jelzi.

**Önállósodás:** a cél hétről hétre, hogy egyre önállóbban és egyre inkább Árpi ízléséhez illeszkedve dolgozz — minden javításból tanulva. Minden tanulság ebbe a dokumentumba (és a `corrections.md`-be) kerül, nem külön memóriába (lásd a felszíni szöveg elveinél).

## Tanulságok a válogatás-tervezésből (2026.07.14.)

Ezek a hibák egyetlen munkamenetben, egymásra épülve fordultak elő. Mind ugyanabból a gyökérből nőtt ki.

**1. Előbb olvass, aztán rangsorolj.** Ha rangsort vagy válogatás-tervet kérnek olyan anyagból, amit nem olvastam végig, ne gyártsam le részleges ismeretből, hanem mondjam ki, hogy ezt addig nem tudom megcsinálni. A hiányos alapra épített terv minden további körben újabb adósságot hoz a felszínre. **Ha a tudás hiányzik, ne tervet gyárts, hanem szólj.**

**2. Mutatóból ne következtess tartalomra.** Retenció, CTR, adásszám, a vendégek összetétele, egy korábbi jegyzet vagy kivonat: ezek **mind proxyk**, és mindegyik félrevihet. A forrás maga a szöveg — tartalomról szóló állítást csak az olvasás alapoz meg.

**3. „Tudom, miről szól" ≠ „tudom, mi van benne."** Az egysoros összefoglaló nem helyettesíti a szöveget. Rendre kiderül, hogy éppen a legkevésbé ismert anyag a leggazdagabb, a jól ismertnek hitt pedig szegényebb, mint az emléke róla.

**4. Előbb fájl, aztán beszélgetés.** Ami csak a chatben él, azt minden korrekció után emlékezetből kell újraépíteni, így a javítások nem halmozódnak, hanem felülírják egymást. **A tudás a fájlban él, nem a kontextusban.** Hosszú olvasásnál néhány tételenként azonnal jegyzetelj fájlba. Ehhez tartozik, hogy a **saját múltbeli munkámról szóló összefoglalót** se kezeljem úgy, mintha maga a dolog lenne: „X átirat újraírva" nem azonos azzal, hogy „X átiratot ismerek".

**5. Ha nem tudsz valamit, mondd ki.** Ne csomagold magabiztosan hangzó prózába. A díszítés (táblázat, félkövér, figyelmeztető jel, hatásvadász mondattöredék) **a bizonytalanság tünete** — amikor nem biztos a tartalom, azt a munkát végzi, amit a tartalomnak kellene. Írj összefüggő, teljes mondatokban; táblázat csak felsorolható tényekhez.

**Mit jelent a „kerüld a politikát" a válogatásokban (Árpi, 2026.07.27.):** a kerülendő az a **magyar párt-specifikum** — konkrét párt/politikus, választás, „a magyar kormány tenyere", Fidesz-plakát és hasonló. A tágabb, nem-párti rendszerkritika **NEM ebbe a körbe tartozik, és bent maradhat:** WEF/Davos, „nem megválasztott vezetőink", „tücsökevő klub", jegybank-kritika, elit-túlköltés. Ha bizonytalan egy részlet, jelöld és kérdezz — de alapból ne minősíts politikának minden rendszerkritikát.
