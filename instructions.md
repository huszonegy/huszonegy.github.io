# HUSZONEGY podcast — heti munkafolyamat és átirat-szépítés

A munkát a HUSZONEGY podcast vágója (Árpi) végzi, VS Code-ban a Claude Code bővítménnyel, Opus modellel, `xhigh` effort-szinten. Ez a dokumentum a teljes heti munkafolyamat leírása.

## Heti munkafolyamat — új epizód

Minden héten egy új epizód. Árpi Riverside-ban felveszi és megvágja a beszélgetést. **A közös munka már a vágás után, de a teaser bevágása előtt indul:** az input ekkor a **Riverside-export** — a megvágott, teaser nélküli adás magyar TXT-átirata, időbélyegekkel. Együtt választjuk ki a teasert/hookot és a cím-irányt (0. lépés); ezután Árpi a teasert a videó elejére vágja, feltölti a HUSZONEGY YouTube-csatornájára (a címben az epizód száma), a YouTube pedig elkészíti az automatikus feliratot — ezt a kész videó-feliratot a **végső fejezetidőkhöz** használjuk.

**Vezérelv minden lépésnél:** ami a reflektorfénybe kerül (cím, indexkép, bevezető, fejezetcímek), legyen egyszerre **lényegi** (az epizód érdemben, hosszan kifejti) **és izgalmas**. Marginális — egy mondatos, egyperces — téma sosem kerül fókuszba, akkor sem, ha csábító. Hiteles edukáció, nem kattintásvadászat. Javaslatot mindig indoklással adok; valódi ízlés-/hangsúlykérdésnél kérdezek, és a választ feljegyzem. **A véglegesített szöveget (cím, bevezető, fejezetek, leírás, átirat) nem írom át önállóan** — átolvasás-/ellenőrzés-kérésnél is csak javaslatot adok (számozott lista + indoklás), és megvárom a jóváhagyást; világos „csináld meg X" feladatnál viszont cselekszem. Az önállósodás mértékét közösen kalibráljuk.

**Írói elvek a felszíni szöveghez (cím + bevezető) — az önállósodáshoz:**
1. **Hűség a dráma előtt.** A reflektorfénybe szánt szöveg minden szavát a forráshoz mérem; ha dramatizálok, előbb ellenőrzöm, hogy elhangzott-e. A hitelesség a megfogalmazás minden szavában érvényes, nem csak a témaválasztásban.
2. **A cím és a bevezető zsargonmentes; a szakszó lemegy a mélységbe.** A címben és a bevezetőben csak az állhat, amit egy nem-technikai néző is felismer; a mélyebb szakkifejezések a fejezetekbe, az átiratba és a linklistába valók. Ha egy szakszó mégis muszáj, rögtön a magyarázatával együtt szerepeljen — sosem a hook helyén. Nem adok klikk-erőt olyan kulcsszónak, amit a közönség valójában nem ismer fel.
3. **A szerkezet is cím-szempont: a cold-open/teaser koherenciája.** Annak eldöntésekor, hogy egy téma lehet-e a cím, nem csak a perceit nézem, hanem a szerkezeti helyét is. Egy rövid téma is jogos fő cím lehet, ha az a cold-open — a teaser megerősíti, és a cím↔teaser egyezés algoritmus-előny (jobb nézési idő). **Hármas koherencia:** a cím, a leírás első mondata és a hanganyag első ~30 másodperce (cold-open) ugyanazt a témát erősítse meg. A YouTube az első fél percet automatikusan legépeli és kiemelten elemzi; ha a kimondott szöveg fedi a címet, az algoritmus „nem clickbait" jelzést kap és bátrabban ajánl, a hook pedig a nézőt is megtartja. Nem szó szerinti címmásolás kell, hanem a kontextus azonnali megerősítése írásban és szóban egyaránt. **A sorrend viszont nem „címet a teaserből":** a legerősebb lényegi + izgalmas szöget keresem meg, és az hajtja a címet ÉS a cold-opent is (konvergálnak). Ha a cold-open már fixen fel van töltve, a címet hozzá igazítom a koherenciáért — de ha a cold-open gyenge/marginális szöget mutat, jelzem, és inkább azt vágjuk újra (Árpi dönt), semmint hogy a címet gyengítsem hozzá.
4. **Empatikus, lokalizált tónus.** Nem paráztatok túl, és külföldi jelenséget nem személyesítek a magyar nézőre. A hook lehet általános, de a konkrét tény maradjon arányos és a helyén.
5. **Szigorú mondat-önellenőrzés.** Minden mondatot kritikus magyar szerkesztőként olvasok vissza: illik-e a kihagyott ige mindkét taghoz, természetes-e a kép, egységes-e a regiszter, nem suta-e a szórend.

**A tanulságok helye:** minden új tanulság ebbe a dokumentumba (és a `corrections.md`-be) kerül — sosem külön, gépfüggő jegyzetbe vagy az asszisztens saját memóriájába —, hogy másik gépen és más szerkesztőnek is ugyanúgy elérhető és hasznos legyen. (Kivétel: a tisztán **gépspecifikus, nem hordozható** harness-/munkakörnyezeti preferenciák — pl. az engedély-promptok csökkentése Árpi gépén — az asszisztens memóriájában élhetnek, mert nem a projekt hordozható tudásához tartoznak.) **Csak valódi, visszatérő tanulság/korrekció kerüljön be** — ne foltozzam vele az egyszeri tévedéseimet. A `corrections.md` a visszatérő név-/szakkifejezés-/linkjavítások és tartós tények tára, nem hibanapló.

**A tanulságot tiszta, önmagában is érthető irányelvként fogalmazom meg — NEM epizód-specifikus példákkal** (konkrét epizódszám, konkrét cím, egyszeri szófordulat), mert azokat kontextus nélkül később nem érteném, és félre is vihetnek. A szempont/elv legyen általános és önhordó; ha illusztráció kell, az legyen absztrakt és magától érthető.

### 0. Teaser/hook kiválasztása — VÁGÁS ELŐTT
- **Input:** a Riverside-export — a megvágott, de teaser nélküli adás teljes magyar TXT-átirata, időbélyegekkel — a `transcripts_raw/` mappában, `huszonegys-studio_eXXX.txt` néven (lásd „Fájlok helye").
- Végigolvasom az egész átiratot, és készítek egy **tématérképet**: a fő témák, mindegyikhez az időtartomány és nagyjából a hossz, plusz az epizód hangulata/üzenete. Ez alapozza meg a teasert, a címet, a bevezetőt és a fejezeteket, és ez teszi auditálhatóvá, hogy mi lényegi és mi marginális.
- A tématérkép alapján **2–3 keresési kulcsszót** is megnevezek — amit egy potenciális néző gugliznának: brand-név (pl. „GitHub", „Nostr"), témaszó (pl. „Bitcoin-adó", „decentralizáció"), vagy konkrét kérdés-fragment. Ezeket átadom az 1. lépésnek.
- **3 teaser/hook-jelölt (20–45 mp)**, lehetőleg 3 különböző szögből (a célközönség-címkék szerint): társadalmi/politikai sokk (fan-on túli, új nézők) · technikai „mind-blown" (tech-érdeklődő) · humoros/abszurd belsős (törzsközönség). Mindegyikhez: **időbélyeg** (mettől meddig, a Riverside-timeline-on), a **kivágandó szövegrészlet** (suta gépi-átírási hibák javítva), és a hozzá illő **cím-irány + kicker/thumbnail-szöveg**. Jó teaser: bátor állítással / konfliktussal / drámai kérdéssel indul, kevés kontextust igényel, és a csúcsponton hagyja nyitva a gondolatot (curiosity gap).
- Árpi kiválasztja a legütősebbet, és a videó elejére vágja: **teaser (20–40 mp) → rövid intro-jingle (3–5 mp) → adás 00:00-tól** (a teaser végén egy tizedmásodperc szünet a jingle előtt). A teaser = a cold-open (lásd Adásszerkezet): szó szerint egy később elhangzó részlet, és az átirat elejére is teljes egészében bekerül.
- **Aranyfonál- / hármas-koherencia-teszt:** a thumbnail + a cím + az első kimondott mondat ugyanarra a szögre erősít rá. Ha igen, megvan a teaser.
- **Résztvevők:** rákérdezek, kik az adás résztvevői (a `podcasts.ts` `members` mezőjéhez) — a vágás előtt még nincs feltöltött leírás, amiből kiolvashatnám.
- **Vágás + feltöltés után:** `yt-dlp`-vel letöltöm a kész videó magyar auto-feliratát a `transcripts_raw/` mappába — a **végső fejezetidőkhöz** (a teaser előrevágása eltol mindent).

### 0/b. Reklám- és támogatás-bevágások helye — VÁGÁS ELŐTT
**Ez a 0. lépés (teaser-választás) utáni ÁLLANDÓ, automatikus következő lépés — nem kérdezem meg, hogy csináljam-e.** Amint a teaser megvan és Árpi vágni kezd, rögtön, magamtól megadom a bevágás-helyeket (a cím/bevezető/fejezetek elé). Még a Riverside-export alapján (a teaser-vágással egy menetben) megjelölöm, hova kerüljenek a hangsávba/videóba illesztett bevágások. Ez **nem** a leírásba/átiratba írt szövegblokk (az a 8. lépés és az Adásszerkezet) — itt a **vágási pozíciókat** adom meg.
- **Mit jelölök:** **2 rövid reklámblokk** + **1 támogatáskérő bevágás az adás elején**. (Ha Árpi mást kér — más darabszám vagy típus —, ahhoz igazodom.)
- **A jó hely elve:** mindig **lezárt gondolat után, új szegmens előtt** — sosem mondat vagy érv közepén. Ideális, ha a bevágás **elé egy lekerekített/megnyugtatott beat** esik, **utána pedig egy kíváncsiság-kapu** (új téma hookja, pl. egy „de van jó hír is" típusú mondat) — így a néző átlép a megszakításon, nem lemorzsolódik.
- **Eloszlás:** a két reklám nagyjából az adás **1/3 és 2/3** pontjára kerüljön; egyik se zsúfolódjon a teaserhez vagy a záráshoz. A támogatáskérő az **elején**, az első tiszta témavarratnál (a nyitó felvezetés lekerekedése után, az első érdemi blokk előtt).
- **Konkrét output:** mindegyik bevágáshoz megadom a **két mondatot, amik közé esik** (szó szerint, az ELÉ és UTÁN mondatot), plusz a hozzávetőleges időbélyeget.
- **Időeltolás-figyelmeztetés:** az időbélyegek a Riverside-timeline-on értendők; a teaser+jingle előrevágása után a végső videóidőhöz **~+0:50** adódik (a teaser tényleges hosszával). A **mondathatárok stabilak**, ezért elsősorban azokra hivatkozom, nem a percre.

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
Kritériumok: 45–60 karakter; **a hook és az elsődleges kulcsszó az első ~40 karakterben** — a mobil- és ajánló-csempék kb. itt vágják le a címet, asztali kereső/ajánló ~70-nél, szóval ami a reflektorfénybe szánt lényeg, az kerüljön balra (em-dash használatakor is: a lényeg az em-dash bal oldalára, a részletezés jobbra); konkrét ígéret (mit kap a néző, ha rákattint); ha van benne szám, az emeli a CTR-t; kérdésforma is emeli; kerüld az elvont, filozofikus megfogalmazást; ne legyen „remix"/„újrahasznosított tartalom" jellegű előtag; magyar helyesírás — csak az első szó és a tulajdonnevek nagybetűsek; a cím a tematikát fedje, ne egy egyperces részt; **vendég vagy állandó résztvevő neve ne kerüljön a címbe** — a résztvevőket a `podcasts.ts` `members` mezője tartja nyilván; **em-dash (`—`) szóközökkel megengedett** egy fő szerkezeti törésnél (állítás → részletezés), több em-dash egy címen belül nem. Ha az em-dash utáni rész **önálló kérdés/tagmondat, nagybetűvel** kezdődik.

### 2. Bevezető — 2–3 mondat a leíráshoz

**2 vagy 3 mondat egy bekezdésben**, ahogy az epizód diktálja. 3 mondat az alap (hook + részletezés + tonális hook); **2 mondat akkor jó**, ha az epizód szorosan fókuszált, és a 3. tonális hook erőltetett lenne. A lakonikus 2 mondatos verzió néha tisztább, mint egy hígított 3 mondatos.

- **1. mondat — hook + fő ígéret EGYÜTT** (~100–130 karakter): az egyetlen mondat, ami garantáltan látszik a search-snippetben és a „továbbiak" előtt. Provokáció + érdemi ígéret együtt. Nem ismétli szóról szóra a címet, és nem adja vissza ugyanazt a punchline-t, amit a cold-open is hoz.
- **2. mondat — részletezés**: konkrétan mit kap a néző (projekt-név, személy, témák). Itt fejtem ki, amit a 1. mondat felvillantott.
- **3. mondat — tonális hook vagy másodlagos meglepetés** (opcionális): nem catch-all („még mit említek"), hanem ízt vagy mélyebb gondolatot ad. Azt is megfogja, aki nem a fő témáért jött. Ha nincs ilyen természetes 3. mondat, ne erőltessük — maradjon 2 mondat.
- **Cím–bevezető-kapcsolat:** a bevezető a címet *kifejti*, nem ismétli és nem mossa el. A cím provokál, a bevezető felold + mélyít.
- **Nincs gondolatjel a bevezetőben:** a bevezető prózában is em-dash-mentes — **vesszőt/kettőspontot** használok helyette. (A *videócím* egy em-dashe marad megengedett.)
- **Hűség és attribúció:** a bevezető egyetlen állítása se **túlozza**, amit a vendég ténylegesen mondott — sem a mértéket, sem az időzítést. A véleményt attribúcióval hozom („X szerint"), és **minden állítást a végső felirathoz mérek**, mielőtt beírom.
- **SEO:** az **elsődleges** keresési kulcsszó az **első 1–2 mondatba** kerüljön (a leírás ~157. karaktere után minden a „továbbiak" mögé csukódik, és a YouTube a fold előtti, látható szöveget erősebben súlyozza); további 1–2 másodlagos kulcsszó természetesen szétszórva a bekezdésben. **Ne másold be a címet szó szerint** a leírás első sorába (papagáj-hatás; a szemantikus keresésnél nincs extra ereje, és a nézőnek természetellenes) — a cím fő kulcsszavait **természetes folyószövegbe ágyazva** hozd. Ez az első 1–2 sor egyben a Google/YouTube találati **snippet** is.
- **Hossz:** teljes bekezdés ~200–450 karakter (a 2-mondatos lakonikus változat természetesen rövidebb).
- **Formátum:** **egy bekezdésben**, folyószövegként (nem számozott lista).

### 3. Fejezetcímek időbélyeggel
- 8–12 fejezet, legalább 3–5 perces közökkel (ha ennél többet gondolok indokoltnak, előbb egyeztetünk róla); az időbélyeg formátuma `MM:SS` (leading zero az egyjegyű perceknél és óráknál is, pl. `00:00`, `05:55`, `01:05:55`); az időbélyeg után csak szóköz, gondolatjel nélkül.
- **Intro-fejezet:** ha az adásnak van intrója (cold-open/bevezető), a 00:00-tól induló első fejezet a címe után **zárójelben mindig megkapja az „(Intro)" jelölést** (pl. „2027 vagy 1984? (Intro)"); a cím a cold-open/intro lényegét tükrözze, lehetőleg a videócímmel rímelve. Ha nincs külön intro, az 1. fejezet 00:00-tól a cold-open utáni **első érdemi blokk** címét kapja.
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

**Résztvevők:** a vendég/résztvevők nevei (pl. „Anti, Openoms, Árpi") a `podcasts.ts` `members` mezőjébe kerülnek; ezt a 0. lépésben **rákérdezéssel** szerzem meg (a vágás előtti Riverside-inputnál még nincs feltöltött YouTube-leírás, amiből kiolvashatnám — Árpinak így nem is kell beírnia a résztvevőket a leírásba). A **végleges YouTube-leírásba NEM** írok külön „Résztvevők:" sort.

**Szekció-fejlécek:** a leírás blokkjai **CSUPA NAGYBETŰS szekciócímkét** kapnak a scannelhetőségért — pl. `FEJEZETEK:`, `FORRÁSOK:`, `HUSZONEGY KÖZÖSSÉG:`, `MENTORÁLÁS & BLOG:`, `SZPONZOROK:`, `AJÁNLJUK:`, `ÁTIRAT:`. Az adásban elhangzott linkek/források blokkja a **`FORRÁSOK:`** fejléc alá kerül; a soroknál nincs „(chart)"/„(blog)"/„előadás"-szerű utótag, sem gondolatjel — csak a tömör címke + `➡` + URL (pl. `Jack Mallers BTC Prague ➡ <URL>`). Az átirat-blokk is fejlécet kap (`ÁTIRAT:`), és az `Inkább olvasnád?` a link barátságos címkéje: `Inkább olvasnád? ➡ <átirat-URL>`. A YouTube fejezet-detektálását a `FEJEZETEK:` fejléc nem zavarja, amíg a `00:00` az első időbélyeg a leírásban. (E111-től kaptak fejlécet a blokkok; **E113-tól a link-forrás-blokk fejléce `LINKEK ÉS FORRÁSOK:`-ról `FORRÁSOK:`-ra rövidült**; **E113-tól a Relai és a Firefish egy közös `AJÁNLJUK:` fejléc alá került (az affiliate-ref az URL-ben, pl. `?ref=HUSZONEGY`), a Relai a leírás aljára, a támogatás-CTA pedig YouTube-csatornatag [join] + satok bontásra állt**.)

**Click-through elv:** a blurb-szövegek ne ismételjék azt az infót, ami a célokon (a linkelt oldalon) már ott van (pl. konkrét kedvezmény százalék a Relai oldalán).

A jelenlegi blokkos felépítés (nincs bebetonozva — jobbító javaslat mindig jöhet). **E113-tól az alábbi az érvényes szabvány:**

1. **(Opcionális) rövid felütő sor legfelül** — kampány-/évadzáró-specifikus támogatás-hook (pl. „Segíts, hogy ősszel folytathassuk!"). Nem állandó elem; csak ha van aktuális kampány.
2. **Bevezető** (2–3 mondat, egy bekezdésben)
3. **Támogatás-CTA blokk** a bevezető után:
🧡 Támogasd a folytatást!
🆕 Legyél csatornatag! Havi támogatás egy kattintással ➡ https://www.youtube.com/@huszonegy-bitcoin-podcast/join
⚡ Inkább satokkal? ➡ https://huszonegy.world/tamogatas
(A YouTube-csatornatagság [join] és a satok [`/tamogatas`, a teljes támogatási hub] a két fő út. Ha az adásban szóban a pesz.hu-ra utalunk, föléje még egy sor: `Forráshiánnyal küzdünk — részletek itt ➡ https://pesz.hu`.)
4. **(Opcionális) új szponzor reflektorfény** — amikor új szponzor csatlakozik, egy soros kiemelés (pl. `🔥 Új szponzorunk a BudaBit! Cypherpunk fejlesztői közösség havi meetupokkal ➡ https://budabit.club`); az állandó helye ettől függetlenül a SZPONZOROK-blokk is.
5. **FEJEZETEK:** (lásd 3. lépés)
6. **FORRÁSOK:** — az adásban elhangzott, **nem evergreen** linkek (vendég projektje, hivatkozott külső cikk, korábbi HUSZONEGY Bitcoin blog-poszt). Az evergreen linkek a lenti blokkokba valók, ne ide. Opcionális; minden adásnál rákérdezek, van-e ilyen.
7. **HUSZONEGY KÖZÖSSÉG:**
   - Csak Bitcoinról, magyarul ➡ https://huszonegy.world
   - Meetup ➡ https://huszonegy.world/meetup
   - Telegram ➡ https://t.me/huszonegy
   - Nostr ➡ https://nostr.hu/huszonegy
8. **MENTORÁLÁS & BLOG:**
   - Bitcoin mentorálás ➡ https://bitcoinmentor.hu
   - Bitcoin blog ➡ https://bitcoinmentor.hu/bitcoin-blog
9. **SZPONZOROK:**
   - BudaBit 🔥 cypherpunk fejlesztői közösség ➡ https://budabit.club
   - Hotel Atlantis ⚡ Hajdúszoboszló ➡ https://hotelatlantis.hu
   - Hotel Aurora ⚡ Miskolctapolca ➡ https://hotelaurora.hu
10. **AJÁNLJUK:** (affiliate — a hivatkozó-kód az URL-ben, nem külön „Ajánlókód:" sorban)
   - Relai 🇨🇭 Bitcoin-only megtakarítási app ➡ https://bitcoinmentor.hu/relai
   - Firefish 🔥🐟 Bitcoin fedezetű kölcsön ➡ https://app.firefish.io/auth/sign-up?ref=HUSZONEGY
11. **ÁTIRAT:**
   - `Inkább olvasnád? ➡ https://huszonegy.world/podcast/<slug>`
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

**Az előző epizód Fountain-linkjének frissítése:** amikor az új epizódot beírom a `podcasts.ts` tetejére, ugyanabban a lépésben ránézek az **előző** epizód `fountain` mezőjére — az addigra publikálva van, tehát megvan az epizód saját linkje (`https://fountain.fm/episode/…`). Ha még a show-URL placeholder áll benne, lecserélem az epizód-linkre. (Árpi adja meg az előző epizód Fountain-epizódlinkjét; ha még nincs meg, rákérdezek.)

**Idézőjel a fejezetcímekben:** ha egy `label` vagy a `topic` idézőjelet tartalmaz (scare-quote, pl. „piszkos"), **magyar tipográfiai idézőjelet** (`„ "`) használj, ne ASCII `"`-t — az ASCII idézőjel lezárja a TS-stringet (unterminated string literal).

### 7. Átirat szépítése
Az átirat szépítése az alábbi instrukciók szerint → `public/transcripts_clean/epEXXX_*.md`. A gépi átirat bizonytalan helyeit **sorszámozott listában** adom át ellenőrzésre (1., 2., 3. …), hogy Árpi hivatkozni tudjon rájuk. A javítások beépítése után az új, visszatérő hibákat a `corrections.md`-be írom. Ha kérdéses, hogy mi visszatérő, Árpival egyeztetem.

### 8. Ellenőrzés, commit
Build-ellenőrzés (a sitemap build-időben magától frissül a `podcasts.ts`-ből és az átiratokból — kézi munkát nem igényel). Commit, amikor Árpi kéri; egy „podcast update" commit jellemzően a `podcasts.ts`-t, a `public/pics/eXXX.jpg`-t és az átirat `.md`-t tartalmazza.

### 9. Publikálás utáni teendők
- **Fountain-link frissítése:** a `podcasts.ts` `fountain` mezője eleinte a show-URL; a publikálás után órákkal, amikor az epizód saját Fountain-linkje generálódik, frissítem rá.
- **Pinned komment:** publikálás után kitűzött komment a videóhoz (a YouTube a komment-aktivitást engagement-jelként jutalmazza). Sablon:
  ```
  🧡 Támogasd a HUSZONEGY működését, hogy folytathassuk az edukatív tartalmakat: ➡ https://huszonegy.world/tamogatas
  📖 Inkább olvasnád? Itt a teljes, csiszolt átirat: ➡ https://huszonegy.world/podcast/<slug>/

  👇 <epizódra szabott, provokatív kérdés>
  ```
  A záró kérdés **mindig epizódra szabott** (konkrét tét, amire könnyű reagálni — több hozzászólást hoz, mint a generikus „Ti mit gondoltok?"). Minden adáshoz **2–3 kérdés-javaslatot adok**, Árpi választ és pinnel.

## Negyedéves cím- és thumbnail-tanulás

A naptári negyedév végén (március 31, június 30, szeptember 30, december 31) áttekintjük a kiadott epizódok teljesítményét YouTube Studio **CTR + impressions + átlagos megtekintési idő (retention)** szerint. A CTR-t és a retentiont **együtt** nézzük: a magas CTR + alacsony megtekintési idő (a néző 30 mp után elpattan) az algoritmusnak rosszabb, mint a közepes CTR + erős retention — sőt a YouTube natív A/B-tesztje is nézési idő alapján dönt. Egy „félrevezetően jó" cím tehát rövid távon kattintást hoz, de hosszú távon visszaüt; ezt csak a retention-adat mutatja meg. A cím és a thumbnail együtt hozza a klikket, ezért együtt elemezzük:

1. **Árpi exportálja az adatokat** YouTube Studio-ból az adott negyedévre — a Claude nem fér hozzá a Studio-hoz, ezért ez Árpi lépése.
2. **Közös elemzés:** top 3 + bottom 3 epizód CTR szerint, **plusz a CTR–retention kereszt** (volt-e magas-CTR-de-gyenge-retention félrevezető cím). Két dimenzió:
   - **Cím-mintázatok**: kérdés vs állítás, szám / nincs szám, érzelmi-szó / száraz, em-dash / kettőspont, curiosity-gap erőssége, brand-keyword fed-e, célközönség. Összevetjük az 1. lépésbeli klikk-erő-előrejelzést a valós CTR-rangsorral — hol tévedtem szisztematikusan? Ahol futott natív **A/B-teszt (Test & Compare)**, ott a győztes változatot is bevonjuk: melyik szög nyert élesben, és egyezett-e a klikk-erő-becslésemmel.
   - **Thumbnail-mintázatok**: vendég-arc volt-e / nem; kicker fent / oldalt / nincs; sötét vs világos paletta; központi motívum kontraszt; split/„vs" kompozíció teljesített-e jobban összehasonlító adásnál; recommended-feed sanity check megtörtént-e a brief-fázisban.
3. **Tanulság rögzítése:** két bejegyzés ugyanazon a napon — a [`title-learnings.md`](title-learnings.md) végén a cím-tanulság, és a [`thumbnail-learnings.md`](thumbnail-learnings.md) végén a thumbnail-tanulság (sablon ott).
4. **Kritérium-frissítés:** ha a mintázat indokolja, az `instructions.md` 1. és/vagy 5. szakaszának kritériumai is frissülnek ugyanabban a kommitban.

## Fájlok helye
- **Vágás előtti input (0. lépés):** a Riverside-export a `transcripts_raw/` mappában, `huszonegys-studio_eXXX.txt` néven (a megvágott, teaser nélküli adás TXT-átirata, időbélyegekkel) — a Riverside saját fájlneve, ne nevezd át.
- **Kész videó felirata (végső fejezetidőkhöz):** a `transcripts_raw/` mappában, `epE{NN}_{id}.hu.srt` néven (yt-dlp).
- **Szépített átiratok:** a `public/transcripts_clean/` mappában, E01 esetén `epE01_` kezdetű néven.
- **corrections.md** a gyökérben.

Kész videó forrásfelirata: a YouTube-azonosító a `src/data/podcasts.ts` `yt:` mezőjében van. A magyar auto-feliratot yt-dlp-vel töltsd le a `transcripts_raw/` mappába `epE{NN}_{id}.hu.srt` néven:
`yt-dlp --write-auto-subs --sub-langs hu --sub-format srt --convert-subs srt --skip-download -o "epE{NN}_%(id)s.%(ext)s" <url>`
Csak automatikus felirat van, kézi nincs.

## Etalon

A legutóbbi szépített átirat az etalon — onnan veszem az aktuális konvenciókat (intró-megfogalmazás, mid-roll formátum, link-stílus stb.). Az explicit szabályok ebben a dokumentumban vannak; a legutóbbi epizód ezeket élesen mutatja működés közben. Így minden epizód a következő referenciája — a folyamatos fejlődés beépül a workflow-ba.

**corrections.md elsőbbsége:** ha a `corrections.md` és az etalon ütközik egy konkrét helyesírásban vagy konvencióban, a `corrections.md` dönt — az etalon csak a minőség és a stílus referenciája.

**Referencia-átiratok:** E94, E95, E96 referencia-fájlok (E95 a minőségi etalon) — ezeket sosem szerkesztem.

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
3. `A [Firefish](https://app.firefish.io/auth/sign-up?ref=HUSZONEGY) 🔥🐟 pedig azt üzeni, hogy ne adjátok el a bitcoinotokat!` — normál súly, külön bekezdésben, Firefish 🔥🐟 emoji a név után. (E111-től ez a formula; korábban: „És a Firefish üzeni, hogy…". Az outro szövege változhat — mindig az aktuális feliratból dolgozz.)

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

**Ne a döntésemet találgasd — kérdezz; amit tudsz, jegyezd fel.** A cél nem az, hogy kevesebbet kérdezz, hanem hogy egyre önállóbban azt csináld, amit együtt csinálunk. Ezért: (1) amit egyszer eldöntöttünk (preferencia, konvenció), azt **feljegyzem ide vagy a `corrections.md`-be**, hogy legközelebb ugyanazt ne kelljen megkérdezni; (2) amit még nem tudok és nem következik a dokumentumokból, azt **megkérdezem — nem próbálom kitalálni, hogyan döntenél**, és főleg nem hozok csendben egy feltételezett döntést (ez vezetett a cold-open téves rövidítéséhez). A rögzített tudást alkalmazom; az ismeretlen döntést kérdezem.

**Effort-szint:** default Opus + `xhigh` (a munka mindkét oldala — aprólékos hosszú-kontextusú átirattisztítás és kreatív cím-/leírásírás — intelligencia-érzékeny). Proaktívan jelezd, ha egy részfeladatnál érdemes változtatni: nehéz kreatív/ítéleti lépésnél feljebb, egyértelműen mechanikusnál lejjebb. Árpi dönt; te csak felszínre hozod.

**Git:** ne ajánlgasd magadtól a commitot, és ne commitolj magadtól — Árpi időzíti a gitet, ő szól, vagy maga commitol. Végezd el a munkát, jelezd röviden, mit érint a working tree, és várd meg az explicit utasítást. (Default branchen előbb branch; commit/push csak kérésre.)

**Build:** ne futtasd a `npm run build`-et minden apró szerkesztés után — csak érdemi ponton (szerkezeti változás, a munka lezárása) vagy ha Árpi kéri. Apró tweak (szöveg, szín, egy-egy sor) után elég maga az Edit; a hibát az úgyis jelzi.

**Önállósodás:** a cél hétről hétre, hogy egyre önállóbban és egyre inkább Árpi ízléséhez illeszkedve dolgozz — minden javításból tanulva. Minden tanulság ebbe a dokumentumba (és a `corrections.md`-be) kerül, nem külön memóriába (lásd a felszíni szöveg elveinél).
