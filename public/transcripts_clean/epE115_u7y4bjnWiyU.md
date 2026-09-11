Teljesen friss dolog, ez két vagy három napja történt, hogy a Liquid, ami a Blockstream nevű cégnek a layer 2-es, második szintű tranzakciós megoldása, és volt benne 4000 bitcoin fedezet a Liquidben.

– És ezt így pikk-pakk kilopta valaki egy az egyben, egy tranzakcióval, mert átverte a rendszert. Valami olyasmi volt, hogy fedezetlen tartalék Liquid tokeneket váltottak át sikeresen bitcoinra, amit nem lehetett, nem lett volna szabad.

Hogyha fölötte van az árfolyam, akkor mondhatjuk, hogy bull market van, ha alatta van, akkor meg bear market.

Igyekszünk mindig megvilágítani a Bitcoinnak azokat az oldalait, amit a Portfolio cikkeiből nem fogtok tudni kiolvasni.

Sziasztok! Üdvözlök mindenkit! Ez a HUSZONEGY podcast újabb adása. Ez a 115. adás, és Tamás ismét a vendégünk. Sok olyan témát fogunk feldolgozni, ami a nyáron történt, aktualitás is, de főleg a Bitcoin hálózatával és a fontosabb kérdésekkel kapcsolatban feszegetjük az ismereteiteket, amit szerintem nem árt tudni minden egyes bitcoinernek. Ez nem azt jelenti, hogy enélkül nem tudod elkölteni a bitcoinodat, de sokkal jobb, hogyha tudsz róla, mert magabiztosabban fogod tudni megítélni azt, hogy mennyire vannak biztonságban a coinjaid.

Tamás, a nyáron mi az, ami veszélyeztetett minket, és mivel fogunk most foglalkozni ebben az adásban?

– Ó, hát minden veszélyeztetett minket. Annyi minden történt ezen a nyáron, hogy tényleg már második adást tudjuk vele megtölteni. Kezdeném a BIP-110-es tragikomédiával, lesz aztán még rosszabb is. A BIP-110-ről már csináltunk régebben egy hosszabb adást valamikor a tavasszal, hogyha valaki nem látta, akkor szerintem nézze meg!

Akkor kezdjük az elején: mi az a BIP? A BIP az a Bitcoin Improvement Proposal, a Bitcoin fejlesztési előterjesztéseknek a listái, ahol a Bitcoin közösség megpróbál valamifajta konszenzusra jutni, hogy hogyan fejlesztgessük tovább a bitcoint, vagy hogyan változzon a Bitcoin. Hát ez sokszor sikerül, néha nem sikerül ezen megegyezni. Általában úgy szokott működni, hogy a node-üzemeltetőknek a 90 valahány százaléka, 98 százaléka mire valamivel egyetért, akkor azt be lehet vezetni. Most itt a mi esetünkben, a BIP-110 esetén nem ez történt.

Röviden az a történet, hogy van ez a Luke nevű figura, aki kitalálta, hogy oldjuk meg a spamek, NFT-k és egyéb nagy adatállományok kérdését a Bitcoinon, amik régebben néha bedugították a hálózatot, manapság nem annyira. Ami egyébként egy nemes cél lenne, csak technikailag nem nagyon van rá lehetőség. Tehát ők egy olyan megoldást találtak ki, ami valami részmegoldást jelent, de igazából meg lehet kerülni. Valahogy ebből sikerült egy ilyen kultuszharcot kirobbantani, főleg a közösségi médiában. Egyébként a fejlesztők, a tőzsdék, a walletszolgáltatók és a bányászok nem nagyon zavartatták emiatt magukat. És szerintem aki nem olvas X-et, régebbi nevén Twittert, az nem is hallott róla, tehát aki csak egyszerű Bitcoin felhasználó. Ennek ellenére ott a közösségi médiában ez egy komoly harcnak tűnt.

Aztán valamikor augusztus vége felé, 27-én eljött az a pillanat, amikor a BIP-110 előterjesztés szerint a bányászoknak el kellett volna kezdeniük jelezni, hogy ők ezentúl ezt elfogadják. Ez egy soft fork lett volna egyébként, tehát hogy bizonyos fajta tranzakciókat innentől kezdve nem bányásznak ki a bányászok, amit eddig bányászhattak volna. Ez azért soft fork, mert ehhez nem kell a node-okat különösebben upgradelni, hiszen a régi node-ok is elfogadják, mivel bizonyos fajta tranzakciók nem érkeznek, tehát nem lesz olyan, hogy valaki valamit nem fogad el. És akkor egy idő után, azt hiszem egy hónappal később be akarták volna vezetni azt, hogy már a node-ok sem fogadják el, hogyha egy bányász ilyen blokkot vagy tranzakciót kibányászik. Emögött az lett volna az elmélet, hogy akkor majd a bányászok pánikszerűen kapitulálnak, és nem fognak ilyen tranzakciókat bányászni.

De igazából mivel a Bitcoin Core fejlesztői közössége, ami elég sok fejlesztőből áll, és egyébként a bányászok, a tőzsdék és a tárcaszolgáltatók, tehát akik a valódi gazdasági teljesítményt teszik a Bitcoin mögé, azokat nem nagyon érdekelte ez a dolog, tehát nem volt támogatása. Ennek ellenére azok a node-ok, amik ezt a módosított szoftvert futtatták, ezt a Knots nevű node-ot, azok bevezették, hogy innentől kezdve a bányászoknak jelezniük kéne a BIP-110 támogatást. Ennek eredményeképpen lett egy durva láncszakadás.

– Hogy mindenki képszerűen megértse azt, hogy miről van szó: különböző Bitcoin szoftverek vannak egyébként is. Tehát nem az van, hogy a Bitcoin szoftvere, hanem ennek van legalább szerintem hat-nyolc futtatott ága. Ez azt jelenti, hogy mindegyiket legalább 80-100 ember futtatja, valamelyiket több százezer ember is futtatja. És ezek valamilyen módon picit eltérnek egymástól, de természetesen ezeket, mint egy szoftveres update-et, csak frissítgették, és az emberek vagy frissítettek egy szoftvert, vagy nem.

A Knots ugye egy teljesen másik frissítést vezetett be, mint amit egyébként addig megtapasztaltunk. Ők úgy gondolták, hogy vannak olyan tranzakciók, amik szerintük nem hasznosak. És hogy melyik a hasznos tranzakció és melyik nem, azt alapvetően a bitekből és a bájtokból kevésbé lehet kiszűrni. Egy idő után eljuthatunk oda, hogy ami a Luke-nak vagy a Knots hálózatnak vagy a propagálóknak nem tetszik tranzakció, az nem megy át. Mert ugye egy aktív szűrés lenne rajta, nem pedig egy kereslet-kínálat alapú tranzakció-propagálás.

És ugye voltak a bányászok. A bányászok azt csinálják, hogy fogadják a tranzakciókat a csomópontokból, legyen az Knots, legyen az Bitcoin Core, satöbbi. És a legutóbbi blokkot fogják, és elkezdik a saját, általuk összeállított tranzakciós listához keresni azt az egy darab számot, amivel blokkot tudnak formálni. És amikor a Knots feldobta a bányászoknak a kérdést, a bányászoknak arról kellett dönteniük, hogy rendben, akkor én bányászok-e olyan szigorú feltételekkel, ahogy a Knots gondolta. Mert alapvetően lehetett olyan blokk, ami a Knotson is ugyanúgy átmegy, és a hagyományos Bitcoin Core programon is. Igaz, Tamás? És hol vált külön?

– Illetve nem teljesen, mert azért jött létre a fork, mert itt a BIP-110 előírta azt, hogy a bányászoknak már kötelező bebillenteni egy bitet a blokkban, hogy ők támogatják a BIP-110-et. Még szűrni nem kell, tehát még akármilyen tranzakció jöhetett, csak ezt a támogatást kellett volna bekapcsolniuk. Na most erre egyedül az Ocean pool volt hajlandó abban a pillanatban, hogy ilyen blokkot bányásszon. És egyébként első körben kettő darab blokkot ki is bányásztak, ezt az első kettőt. Aztán ez itt egy jó időre megállt. Ezen az ábrán nem látszik, hogy utána hogy folytatódott, azt majd mondom.

De az a lényeg, hogy itt látszik, hogy a harmadik, az azután következő blokkot a normál Bitcoin láncon, tehát a hagyományoson, ahol nem változott semmi, megint az Ocean pool bányászta. Tehát ez egy érdekes dolog, hogy két blokkot kibányásztak itt, és aztán rájöttek, hogy rossz helyen vagyunk, és pánikszerűen visszamentek a Bitcoin Core-os, vagy hát az eredeti láncra. Ez azért is jött létre, mert az Oceannél te rakod össze a block template-et, tehát azt, hogy milyen tranzakciókat akarsz kibányászni. Ez az egyik. A másik meg, hogy ez a Luke volt ott valami technikai vezető, tehát volt némi ráhatása ott a dolgokra.

– Előtte még egy pillanattal, mielőtt még a fork megtörtént, és a bányászoknak jelezniük kellett azt, hogy a Knotsszal tartanak-e, és egy adatalapú szűrést akarnak-e bevezetni vagy nem: egy bányász miért maradt a Core-nál, és miért nem ment át a Knotshoz?

– A bányászoknak nyilván nem érdeke az, hogy ne bányásszanak ki egy tranzakciót, amiért fizetnének nekik. Ráadásul, ha nagy tranzakció, pláne, tehát amire sok adat van. A bányászok szeretik ezeket a nagy adattartalmú tranzakciókat, mert azért sok pénzt kapnak.

– A kereslet-kínálat alapján alapvetően ők érdekeltek abban, hogy minél drágább blokkot bányásszanak ki.

– Igen. És ennél erősebb indokot senki nem talál. A fejlesztők szerint is ez így oké, mert hogyha valaki nagyon sokat akar fizetni valami haszontalan dologért, hát hagyd, tegye, nem tudunk ellene mit tenni. Ez még mindig sokkal jobb, mint az e-mail spam, ami gyakorlatilag ingyen van.

– Mert itt a spammernek, hogyha spamként tekintjük, bár ő nyilván nem tekinti spamnek, mert neki van valami haszna vele vagy valami szándéka vele, így legalább fizet érte a bányászoknak.

– Jó, tehát akkor eljött a jelzés pillanata, és alapvetően az Oceanön kívül mindenki más maradt a Bitcoin hálózatán. Hát aztán az Ocean is, itt van az Oceannek egy része, tehát az így kettévált valamennyire, ahogy én ezt értem. Van ez a vicces halálugrás videó. A Luke és a Mechanic az a Knotsnak a főforrásai.

– És hát így zuhantak a mélybe, amikor ott a két blokk után megállt a csodaláncuk, és rájöttek, hogy senki nem fogja támogatni, főleg a tőzsdék.

Ami még érdekes egyébként, és ezzel párhuzamot tudnék mondani a körülbelül 10 évvel ezelőtti blocksize warhoz képest, hogy akkoriban, tehát 10 évvel ezelőtt rengeteg nagy cég állt a mögé, hogy a bitcoinnak a blokkmérete legyen nagyobb. Az, hogy ez miért jó vagy miért nem jó, hogy nagyobb legyen, ennek fizikai oka van. Egy nagyobb blokk, csak egy duplával nagyobb blokk, azt gondoljuk, hogy miért probléma az, hogy egy helyett 2 MB területet kell foglalni egy blokknak? Hát hogyha ezt felszorozzuk, és ezt a 10 percenkénti blokkot megtartjuk, akkor teljesen más nagyságrendű tárolókapacitásra jutunk, mint most. És nagyon fontos az, hogy az egyes csomópontok olcsón tudjanak üzemelni bármelyik időszakban, bármelyik évet írjuk is, azért, hogy minél szabadabb, minél több, minél hozzáférhetőbb legyen a hálózat.

Akkor nagyon sok cég állt amellé, hogy nekik ez nem probléma, legyen nagyobb blokk, hogy gyorsabban, több tranzakció tudjon átmenni, és majd ők megoldják, majd ők szerverparkot építenek, majd ők üzemeltetik a hálózatot nekünk, szimpla embereknek. Te ne kezdjél el csomópontot építeni! Nem is probléma ez. Ők ezt mondták, és nem sikerült nekik. A hálózatot alkotó emberek, a bányászok, a csomópontok úgy döntöttek, hogy ez így nem lesz jó, és maradt minden a régiben.

Most pedig nagyon sok celeb és podcaster és nyilvános közszereplő állt a Knots mellé. Rengeteg BIP-110-es jelzésű nickname került fel a Twitterre, és mindenki azt mondta, hogy ezt itt változtatni kell, és akkor legyen forradalom.

– Hát nem mindenki.

– Nagyon sokan. Ez megint egy fontos dolog. A Bitcoinnak van 30 millió felhasználója, de mondjuk van 1000 darab olyan név, aki meghatározza a Bitcoin ökoszisztémának a nyilvános hangját. Nagyon fontos: a nyilvános hangját. Aztán utána hazamennek, otthon vannak a userek, és neki kialakul egy véleménye, hogy tudom, hogy azt mondja nekem a kedvenc podcasterem, például a Matthew, hogy jó ez a BIP-110, de én mégis úgy gondolom, hogy nem. És én szépen otthon eldöntöm magamnak, hogy akkor marad úgy, ahogy volt eddig is, szerintem jó lesz úgy. És hiába hangoskodnak bármit a Twitteren, az nem ér semmit. Nem ért volna akkor se semmit, hogyha a bányászok kezdenek el hangoskodni ennek ellenére, mert a programomat nem tudják megváltoztatni.

Úgyhogy kérlek, ezzel folytassuk akkor, hogy mi történt azóta, hogy különvált a két lánc, mert hogy ez megint nem sikerült. Akkor egy kicsit spoilerezek, igaz, Tamás?

– Igen, hát azóta olyan rettenetesen egyébként nem követtem, de annyit tudok, hogy megváltoztatták a bányászati algoritmust azon a láncon, és ezáltal most újra keletkezett még egy pár blokk, de hát ennek már semmi köze a bitcoinhoz.

– Egy kicsit még megint megállnék, mert ez egyébként egy nagyon jó életszerű példa volt, és erről szerintem lesz a konferencián is szó, ami november 20. és 22. között lesz Miskolcon, a [Bitcoin Miskolc](https://bitcoinmiskolc.hu) konferencián: hogy élőben tudtuk azt letesztelni, hogy milyen az, hogyha jön egy bad actor, egy rossz szereplő, és azt mondja, hogy megváltoztatom a kódot, mert jön a BlackRock. Most a Knots lehetett volna a BlackRocknak a Bitcoinja is, lehetett volna az USA coin is, ami Bitcoinra akar rátelepülni. És miért nem sikerült neki? És mi történt azóta?

Tehát az történt, hogy egyrészről a hálózatot folytatta a Knots, mert úgy gondolta, hogy nem egy teljesen új bitcoint indít, hanem egyszerűen csak leválik róla, és majd ő lesz a főlánc. Anélkül, hogy technikai kérdésbe mennénk bele, nagyon gyorsan elmondom azt, hogy nem az számít, hogy hány blokkot produkálsz, hanem az, hogy milyen mennyiségű munka van elvégezve, milyen erősségű munka. És gondoljátok el, a Knots 1%-nál kevesebbnyi számítási kapacitással, de ugyanazt kellett kiszámolnia, mint a hálózat többi részének, aki 99%-kal rendelkezett. És gyakorlatilag a Knots talált két blokkot, és utána már annyira lemaradt a főlánctól, amit egyébként is használtunk régebben, és most is ugyanaz a lánc maradt, hogy szinte behozhatatlan, tehát nem szinte, tehát fizikailag lehetetlen, hogy behozzák.

És ez a lényeg egyébként, és ezért jó a Bitcoin, hogy ki van egyensúlyozva: nem csak az embereknek a kezében van a hatalom, hanem ott van egy másik szereplő és egy harmadik szereplő is, és ők igazából együtt alkotnak egy egyensúlyt. Hogyha a bányászok nem adnak támogatást a Knotsnak, akkor ők már be is fulladtak, ugye ez lett a vége. De tegyük fel, hogy egy bányász közben meggondolja, hogy én mégis bányászok rajta. És el kell, hogy teljen egy bizonyos blokkszám, amíg ez a nehézségi szint csökkenni fog. És akkor tök jó, akkor egy nagy bányász mögé áll, mondjuk 30%-kal, elkezdenek nagyon gyorsan egy másik bitcoint termelni. Ugyanaz a bitcoin, csak az nem érvényes, vagy nem tudja felhasználni, a valós életben elkölteni a mi hálózatunkon, ami a főhálózat, mert annak nincs olyan nehézségi szintje. Igaz, Tamás? Tehát jól értelmezem: hiába bányászik az, aki most a Knotsra bányászik, mert azt nem tudja elkölteni a főláncon.

– Ott az a baj, hogy most innentől kezdve ez egy centralizált dolog lett. Elvesztette az a lánc a Bitcoin decentralizált jellegét, elvesztette azt, hogy ott valami konszenzus, nagyon sok egymástól független szereplő konszenzusának kéne lennie ahhoz, hogy valami változzon, ami a Bitcoinra igaz. És az az egyetlen dolog a világon, amire ez igaz, hogy mindenkinek konszenzusban kell lennie, ezért gyakorlatilag egy shitcoin lett belőle, olyan, mint az Ethereum meg akármi. Mert a Bitcoin mögött lévő bányászok, tőzsdék, mindenféle olyan szereplők, akik nagyon sok Bitcoin tranzakciót mozgatnak a saját módjuk alapján, őnekik anyagi veszteség, hogyha itt valamit rosszul csinálnak. Tehát ők azok, akik százszor meggondolják, és nagyon vigyáznak arra, hogy a Bitcoin értékes, hogy a bitcoinjuk értékes maradjon. Tehát ők nem tehetik azt, hogy egy ember kezébe adják innentől kezdve az irányítást, és ezt nem is teszik, és ezért maradt meg, és ezért gyakorlatilag a Bitcoin nem változott.

– Hogy értéktelen dolgot bányásznak, és azt a rengeteg energiát, azt a rengeteg infrastruktúrát egy olyan dolognak a kibányászására használják, ami igazából nem ér semmit.

– De nem is olyan rengeteget, mert hogyha már tudnak gyorsabban bányászni, az azt jelenti, hogy lecsökkentették valahogy a nehézséget, vagy lecsökkent, az nem fog annyit érni. Tehát egy ilyen knotsos bitcoin, ha lenne is egy olyan tőzsde, amelyik belistázná…

– Most már van egyébként.

– Lehet, hogy már van. Az nem ugyanannyit ér.

– Persze, most 2-3000 dolláron forog.

– Hát az is sok.

– Még az is sok érte. Majd kialakul a piaci egyensúly. (nevetés) Viszont ez nagyon fontos dolog, és szerintem itt az átlagfelhasználókat ezúton edukálnunk kell, vagy tájékoztatni, hogy neked nem kell semmit tenned ilyenkor. Tehát hogyha kettéválik a főlánc, és a főláncon van a bitcoinod, akkor ilyenkor, hogyha valaki megpróbál egy ilyen kísérletet, neked azon a hálózaton is lesz ugyanannyi bitcoinod, ugyanazokon a címeken, ugyanazokkal a privát kulcsokkal. Elviekben nem ajánlom senkinek, de egyébként elkölthettek annyi mennyiségű bitcoint azon az alternatív láncon is, mint amennyivel jelenleg rendelkeztek. Viszont ezt azért nem ajánlom senkinek, mert nagyon technikai, érteni kell hozzá, mivel ilyenkor a publikus kulcsotok megjelenik.

– Meg az aláírás. És hogyha ugyanazt a tranzakciót elfogadja az a lánc is, tehát ugyanaz a tranzakció érvényes mind a két láncon, akkor az igazi Bitcoin is elköltődhet azzal.

– Így van. Nézik azt, hogy azon az alternatív láncon ki az, aki tranzaktált, és egyből nézik is, vajon el tudják-e költeni ugyanazt a főláncon. Tehát ne nyúljatok hozzá! Egyébként sem ér semmit, és túl veszélyes ahhoz, hogy megmozdítsátok az ujjatokat is érte.

– Szerintem ennyi elég is a BIP-110-ről. De akit jobban érdekel, az utána tud nézni.

**Ha olyan Bitcoin-only alkalmazást keresel, amiben egyszerűen tudsz bitcoint venni úgy, hogy a privát kulcsokat te kezeled, nézd meg a Relai-t!**

A [Relai](https://bitcoinmentor.hu/relai) 🇨🇭 egy svájci app MiCA-engedéllyel, és kimondottan a hosszú távú megtakarítóknak tervezték. Bármikor vehetsz bitcoint azonnal, és beállíthatsz heti vagy havi automatikus vásárlást is. Ráadásul havi egy automatikus vásárlás 100 euróig teljesen díjmentes. Regisztrációnál add meg a HUSZONEGY kódot, így 10%-kal csökken a vásárlási díjad, és a podcast működését is támogatod ezzel.

**Részletes leírás: [bitcoinmentor.hu/relai](https://bitcoinmentor.hu/relai)**

– Hát ezt is feljegyezzük így a hajónaplóba, hogy a blocksize war után volt egy ilyen BIP-110, és akkor izgultunk, megrágtuk, nagyon sok kérdést feszegettünk. Szerintem egyébként ezzel tanult a Bitcoin közösség, sok szinten tanultunk, mégha ez egy energiazabáló beszélgetés és törekvés is volt, mert megtanultuk azt, hogy miért Bitcoin a Bitcoin megint, mi a cenzúraállóság. Megtanultuk azt, hogy hiába hangoskodnak a celebek, a többség még mindig máshogy dönthet. Úgyhogy szerintem ez nem volt haszontalan kör.

Úgy, ahogy nem volt haszontalan kör szerintem a COLDCARD-nak az esete sem, mert utána elterjedt egy mém, szerintem a nyáron ezzel sokan találkoztatok az X-en, hogy az új flexelés az, hogyha casino grade dobókockáid vannak. És hogy ez miért érdekes, azt Tamás el tudja hozni.

– Na hát ez már szomorúbb történet volt. A COLDCARD az egy hardvertárca-gyártó, és úgy volt eddig a köztudatban, hogy a legjobb, legbiztonságosabb, legnagyobb tudású, vagy lehet, nem a legnagyobb tudású, de mondjuk a legbiztonságosabb és leginkább a Bitcoin szellemiségének megfelelő hardvertárca. Például a főfunkciója az, hogy nem kell kábelen soha összekötni számítógéppel, hanem QR-kódokon keresztül tud kommunikálni, kamerával és QR-kóddal, ahol teljesen jól ellenőrizhető, hogy milyen adat megy át, és mindig csak egy irányba. Azért egy USB-kábellel, ha összedugok valamit a számítógépemmel, akkor ott nem tudhatom azt, hogy nem közlekedik-e azon át mondjuk egy privát kulcs, aminek nem kéne.

És akkor itt egy kicsit a konkrét esettől eltávolodva onnan kezdeném, hogy mi is ez a [privát kulcs](https://inflacio.eu/mik-azok-a-titkos-es-nyilvanos-kulcsok). Szeretünk mi bitcoint edukálni is, hát az alapokat. A Bitcoin maga mint kriptovaluta, ebben a kriptó szó a kriptográfiára utal. A Bitcoin tárcáknak a kezelése a nyilvános kulcsú titkosítás vagy aláírás algoritmusra alapul, ami egyébként már egy régi technológia, amit a 70-es, 80-as években találtak fel a matematikusok. És arról szól a dolog, hogy van két kulcsom: van egy titkos, privát kulcsom és egy nyilvános kulcsom, amit nyilvánosságra hozhatok. És a Bitcoin esetében ez kábé azt jelenti, hogy a nyilvános kulcsom az az én Bitcoin címem, amire bárki tud küldeni bitcoint, de ahhoz, hogy én elköltsem azt a bitcoint, ahhoz a privát kulcsommal kell aláírni a tranzakciót, és azért a privát kulcsomra nagyon vigyázni kell.

És a COLDCARD esetén itt az történt, hogy sajnos ezeket a privát kulcsokat ki tudták találni hackerek, annak ellenére, hogy a COLDCARD soha nem volt összekötve kábellel semmilyen internetes eszközzel. És hogy ez hogy lehetséges? Ugye az volt mondva, hogy ez nem lehet.

Hát itt ennek a matematikájába megint bele kéne menni. A privát kulcs igazából egy véletlen szám, egy 256 bites véletlen szám, ami 10-es számrendszerben kifejezve körülbelül azt jelenti, hogy az egyes után 70 darab nullát kéne leírni. Tehát egy akkora nagy szám, arra már nincs is név, csak a matematikusok is úgy mondják, hogy ez egyes után 70. És ez egy akkora szám, elméletileg körülbelül nagyságrendileg, mint az ismert világegyetemben lévő atomok száma. Tehát az összes galaxis, összes csillag, mindenben lévő összes atomnak a száma az körülbelül ennyi. Ez a nagyságrend.

Tehát úgy lehet elképzelni, amikor én egy tárcát létrehozok, egy Bitcoin tárca létrehozása az azzal ekvivalens, hogyha én a világegyetemben elindulok, és valahol valamelyik galaxisban, valamelyik csillagon, valamelyik bolygón, akárhol kiválasztok egy darab atomot, és azt mondom, hogy akkor én ezen az atomon fogom eldugni a bitcoinjaimat. És tulajdonképpen ez biztosítja azt, hogy elméletben meg lehetne találni, mert valaki mehet, és végignézheti a világ összes atomját, de a gyakorlatban erre az összes időnk és összes létező számítógépünk soha nem lesz elegendő. Pláne, hogy ahhoz, hogy az atomon észrevegyük, hogy ott van bitcoin, ahhoz a blokkláncot is végig kell pásztázni az után a kulcs után. Tehát az is egy ideig eltart. Mindenféle nagyon okos matematikus szerint ez teljesen biztonságos, 1000%-ig biztonságos elrejtőzési módszer.

És akkor hogyha megtaláltuk ezt az atomot, akkor mondjuk azt, hogy nyitunk hozzá egy csillagkaput innen a Földről, ami oda, egy irányba odavezet ahhoz az atomhoz, és hogyha valaki beledob egy bitcoint, akkor az megérkezik az én atomomba. És azt a csillagkaput fölállíthatom, és megmutathatom, hogy ez az én Bitcoin címem. Tehát körülbelül így működik a Bitcoin fogadás és küldés.

Na most mi történt a COLDCARD-dal? Hát itt a véletlenszám-generálással volt probléma. Ugyanis a véletlenszám-generálás egyébként a számítógépeknek egy nehéz dolog, mert a számítógépek algoritmusokat futtatnak, és ha egy algoritmust sokszor lefuttatsz, annak mindig ugyanaz az eredménye. Tehát ahhoz, hogy igazán jó véletlen számot tudjon egy számítógép generálni, ahhoz nem elég egy jó program, ahhoz valamilyen hardveres támogatásra van szükség, ami valami atomok zizegéséből vagy valamiből indul ki. Például szoktak olyat csinálni, ilyen banki alkalmazásnál láttam, hogy az első belépéskor mozgasd az egeredet össze-vissza a képernyőn, és akkor abból alakul ki egy privát kulcs. Ez is egy módszer. Illetve a COLDCARD-nak is van olyan funkciója, amit említettél, hogy lehet dobókockával dobni nagyon sokszor, és akkor abból alakul ki ez a véletlen szám. Na, aki ezt csinálta, azzal nem is volt probléma.

Most sajnos a COLDCARD szoftverében volt egy hiba, de már valamikor öt évvel ezelőtt rakták bele, csak mostanra sikerült kihasználni, ami nem ezt a hardveres véletlenszám-generálást használta, hanem valami tartalékmódszert, ami csak algoritmikus volt. És azt úgy lehet mondjuk elképzelni, hogy én nem az egész világegyetemből választom ki a kis atomomat, ahova eldugom a bitcoint, hanem mondjuk fogok egy kockacukrot, lerakom magam elé, és azon a kockacukron belül keresgélek egy atomot. Ami még mindig elég sok egyébként, tehát elsőre nem tűnik föl, hogy hol lehet, de az már olyan mérettartományba került, amit elég hosszú idő alatt, miután egy támadó rájött erre, egy csomó olyan Bitcoin címet össze tudott benne gyűjteni, amin volt bitcoin. És akkor ez azt hiszem augusztusban történt, ha jól emlékszem.

– Júliusban.

– Vagy júliusban elkezdték egyszerre eltranszferálni ezeket a bitcoinokat ezekről a címekről.

– Tehát konkrétan az történt, hogy az ismert univerzum összes atomja, ez egy hatalmas tér, viszont a támadó le tudta szűkíteni ezt a teret. Tehát magyarul a kódban észrevették, azért valószínű segít…

– Nem a támadó, hanem a kód nem szűkítette le eleve.

– Hát nem feltétlenül, hanem én úgy tudom, hogy az AI talált egy biztonsági hibát a kódban. Innen kezdődött minden. Ez a hiba egyébként ott volt 2021 óta. És ez a hiba definiálta azt, hogy nem a hardveres segítséget vette figyelembe, ami ott van a COLDCARD-ban. Tehát nem eleve rosszul volt megépítve az eszköz, hanem az eszköz frissített programját, amit 2021-ben frissítettek, azt rosszul írták meg, és visszaesett egy fallbackre, azaz egy tartalékmegoldásra, ami szoftveres volt. És azt pontosan tudták, hogy ez a szoftver milyen gombnyomások és milyen inputok alapján lesz véletlen, úgymond véletlen. Tehát hogy milyen inputok alapján választja ki a kulcsokat. Elvileg 4 milliárd kulcs körüli az a mennyiség, amit ez a hardver így össze tudott hozni nekünk szoftveresen, tehát hardveres eszköz nélkül.

És konkrétan ez történt, hogy a támadó le tudta azt úgymond szűkíteni, magyarul leírva, hogy tudta azt, hogy a Föld nevű bolygón, Budapesten belül a 12. kerület, mit tudom én, milyen utca 12. szám alatt, abban a helyiségben, azon az asztalon ott van egy kockacukor, és abban a kockacukorban keresd a kulcsokat.

– Ahelyett, hogy a végtelen nagy univerzumban kellene valakinek keresgélni.

– Úgyhogy tudtommal nem nagyon derült ki eddig, hogy ki volt a támadó. Néhány ezer bitcoint tudtak így ellopni egyébként. Ha kicsit relativizálni akarjuk, a 2022-es mindenféle ponzi csődökben ennek a sokszorosa veszett el vagyonban, de hát nyilván akit ez érint, annak az ő vagyona számít.

– Így van. Ebből is az egyik tanulság, hogy nagyon sokan, akik követték az eseményeket, megtanultuk azt, hogy mit jelent az entrópia, ugye az a véletlenszerűség. És most már nem csak azt mondjuk, hogy a saját kulcsod, a saját bitcoinod, hanem a saját entrópiád, a saját véletlenszerű kulcsod, és akkor az a saját bitcoinod. És most te kiábrándultál a COLDCARD-ból, mert tudod, hogy te nagy COLDCARD-felhasználó vagy, te kiábrándultál belőle, vagy használod tovább?

– Én használom tovább.

– Sokakat úgy láttam, hogy személyesen és érzelemmel érintette meg, hogy őket átverte az NVK vagy a fejlesztő, mert milyen csúnya módon vezették az ügymenetet. Egyébként igazuk van a kritikusoknak, tehát nagyon gáz, amit műveltek. Még nem derült ki egyébként, hogy direkt volt-e, egy ember direkt tette-e bele, vagy egyszerű, teljesen buta hanyagság volt az, ami idáig vezetett. Viszont maga az eszköz szerintem jó.

Én teszteltem kockadobással. Azt tudnotok kell, hogyha 12 szavas [seedet](https://inflacio.eu/mi-az-a-seed-phrase) generáltok magatoknak, azaz abból készül egy tárcátok, akkor a nagy mondás az, hogy 55 darab dobás az, ami elegendő, vagy 50 darab dobás. A 24 szavasnál akkor 99 darab dobás elegendő. Én odáig mentem, hogy többször sikerült tárcát is generálnom magamnak élesben, mert mindig rájöttem, hogy mindig valami hibát elkövettem. Például kockadobálásnál azt el lehet követni, hogy dobsz mondjuk 100-szor kockával, de hogyha nem egy kockával dobsz, hanem többel, és hogyha nincs egy szisztémád arra, hogy te melyik számokat írod be először a gépbe vagy a programba, hanem csak úgy intuitíve, amit éppen meglátsz, azokat beírod, akkor már csökken az entrópiája, a véletlenszerűség. És az agyunk mindig valamilyen minta alapján választja ezeket ki. Tehát az nem elég.

És én arra a következtetésre jutottam, hogy a 204 darab dobás az már elegendő az én kutatásaim alapján, meg mások is ezt megerősítették. Az még úgy is elegendő, hogyha egy irányba olvasod össze a kockákat a legkisebbtől a legnagyobbig, akkor is elég entrópiával tudsz rendelkezni. Én olyan párti vagyok, nekem most az a véleményem, hogy ezt a kockadobálást nem szabad elspórolni, amikor egy tárcát elkészítesz magadnak. Én már soha többet nem fogok megbízni egyetlen egy hardvertárca vagy szoftveres megoldásában sem. Minek bíznék, mikor fogok legalább egy darab dobókockát, vagy mondjuk öt darabot, vagy hat darabot, és elkezdek dobálni 204 darab dobást, szépen egymás után beírogatom az eszközbe, ami ezt a seedet létre tudja hozni. Ebből a dobásokból is készen vagyok.

Én ezt le is ellenőriztem egyébként a COLDCARD-dal, leellenőriztem párhuzamosan egy másik hardverrel, egy másik applikációval, és ugyanaz jön ki. Tehát a COLDCARD tök jól előállította azt, hogy adott típusú dobásból determinisztikusan, azaz mindig ugyanaz a tárca fog neked megnyílni. Természetesen kétszer ugyanolyan sorozatot nem fogsz tudni dobni, hogyha 204-et dobsz.

Úgyhogy én úgy gondolom, hogy ez egy jó módszer lehet. Itt nem kell foglalkozni azzal, ami a mémben is volt, hogy casino grade dobókocka legyen. Alapvetően teljesen mindegy, hogy milyen dobókockával dobsz, ha 204-szer dobsz. A dobókockának vannak felületei, és mivel bízunk benne, hogy mindegyik oldal más számot mutat, ezért más az inerciája, más a tömege, más a perdülete. És hogyha ez nincsen kiegyensúlyozva, akkor alapvetően valamilyen irányba csalhat az a dobókocka. Viccesen szoktam mondani, hogy a feleségem érdekes módon mindig hatost dob, amikor azt kell dobni a társasjátékban, úgyhogy rá nem bízom a dobásokat. (nevetés) Lehet például pénzérme-feldobással is ugyanilyen módszereket találni az interneten. Ezek is szerintem jók.

– Az a legegyszerűbb, mert 256 pénzfeldobás és kész.

– Így van, azt nem teszteltem.

– 256 bit.

– Annak is lehetnek különböző, általam még nem felkutatott entrópiaromboló emberi hatásai. De így van. És én ezt nem spórolnám ki senki helyében, megmondom őszintén. Így nem kell attól tartanod, hogy bejön a Ledger, vajon a Trezor jól generál-e nekem tárcát. Ha te 204-szer dobsz, a fizika meg a természet elintézi helyetted, és ennyi.

– Megint tömegeket riasztottunk el a bitcointól, azt hiszem. (nevetés)

– Hát nézd, nem biztos, hogy mindenkinek kockázni is kell.

– Hát aki ezt nem tudja megugorni, szerintem akkor inkább ne tartson hardvertárcában bitcoint. Én most már tényleg ezen az állásponton vagyok.

– Hát azért ez egy eléggé konkrét és egyedi hiba volt talán.

– Hát figyelj, és akkor beszélhetünk tovább egyébként, mert az egyedi hibákról emlékszem én ám még, amikor ez megtörtént, a COLDCARD-fiaskó, én az Aqua walletnek és a Liquidnek is a posztjaira, hogy a náluk elhelyezett bitcoinok azok teljes biztonságban vannak, ők pipa, náluk rendben van minden. És akkor most milyen napra ébredtünk, Tamás, a Liquid hálózattal kapcsolatban?

– Ja igen, ez egy teljesen friss dolog. Ez két vagy három napja történt, hogy a Liquid, ami a Blockstream nevű cégnek a layer 2-es, második szintű tranzakciós megoldása, és volt benne 4000 bitcoin fedezet a Liquidben.

– És ezt így pikk-pakk kilopta valaki egy az egyben, egy tranzakcióval, mert átverte a rendszert. Valami olyasmi volt, hogy fedezetlen tartalék Liquid tokeneket váltottak át sikeresen bitcoinra, amit nem lehetett, nem lett volna szabad. Konkrétan megkétszerezte a Liquid L-BTC-nek a mennyiségét egy programhiba miatt, amit egyébként három hete pont az egyik HUSZONEGY-es csoporttársunk is jelzett, és még sokan mások is. És a történet úgy szól tovább, hogy mivel nem jelentkezett senki a Blockstreamtől, hogy akkor ezt javítják, ezt a hibát, ezt a tudott hibát egyébként…

– Ezt a nyilvános hibát.

– Ezért egy fehér kalapos, white hat típusú hacker, ő ennek gondolja magát. Hát ez ennél összetettebb. Sőt, még összefügg a BIP-110-zel is egyébként.

– Akkor fejtsd ki, kérlek!

– A tranzakcióba beleírták egy ilyen OP_RETURN parancsba, amit ugye pont a BIP-110 próbált volna kiirtani a Bitcoinból, hogy mi white hat, tehát fehér kalapos hackerek vagyunk, és kontaktáljunk, és akkor kijavítjátok a hibát, akkor visszaadjuk a bitcoint. És akkor innentől kezdve elindult egy ilyen bitcoin tranzakciókon keresztüli kommunikáció ezzel a hackerrel, a Blockstream és a hacker között, ahol egy idő után átváltottak titkosított formába, ahol ilyen OP_RETURN utasításokba tudták berakni a titkosított leveleket egymásnak. Ugye hogyha a BIP-110 érvényes lenne, akkor ez nem működött volna. Hát az lett a vége, hogy kijavították a hibát elvileg a Blockstreamnél, és két nap múlva a 4000 bitcoinból 3600-at visszaküldtek nekik.

Tehát ezt lehet úgy is értelmezni, hogy jó trükk, mert hogyha én ellopok 600 bitcoint, akkor tolvaj vagyok. Hogyha ellopok 4000-et, és visszaadok 3600-at, akkor fehér kalapos hacker. De az eredmény valahol ugyanaz.

– Szóval itt is az történt egyébként, hogy van ennek egy ilyen morális tanulsága is, hogy szerintem ez volt az a nyár, amikor az AI-pillanat elhozta nekünk azt, hogy alapvetően senki ne üljön annyira magas lovon, hogy ő biztonságban legyen. Azt is látjuk, hogy az open source, nyitott szoftverek, amiket nagyon sokan vizsgálnak, azok nagyobb biztonságban lehetnek. Rengeteg biztonsági rés befoltozása és javítás történt meg az elmúlt egy hónapban, amióta olyan jellegű mesterséges intelligencia modellek jelentek meg, akik képesek ezeket a biztonsági hibákat megtalálni, de még mindig nincs meg minden. Sőt, volt olyan hálózat, például a Boltz, ami le is állt, illetve a Lightning Networkön is volt egy olyan frissítés, amit gyorsan kiküldtek mindenkinek, hogy azt tegye meg.

– De csak az egyik implementációban volt, nem maga a protokoll volt. A BTCPay szervert is hetente frissítem mostanában, mert jönnek a security update-ek.

– Így van. Tehát ami nagyon fontos, hogy ezek olyan megoldások, amik a Bitcoin hálózatára, főhálózatára épülnek rá. A Liquid és a COLDCARD esetében sem a Bitcoinnak a kódját törték meg, nem abban találtak biztonsági hibát, hanem egy arra épülő szoftverben volt olyan jellegű kódhiba vagy lehetőség, amit eddig nem vettünk észre, és most valaki ezt kiaknázta. És ez még csak az első lépés ebben az új világban.

A Bitcoin volt az első, az egyetlen olyan eszköz, ami villámgyorsan transzportálható két pont között, tehát gyorsan el lehet lopni. Ott van kint szabadprédának, ugyanis a teljes hálózat nyílt, auditálható, látható, és ha a kulcsokat megszerzed, akkor alapvetően a Bitcoin a tiéd lesz. Semmilyen más ilyen eszköz nincs most jelenleg még a világon, ezért természetes módon, amikor az első ilyen AI-modell megjelent, akkor természetes, hogy ezt kezdték el támadni. Én úgy gondolom, hogy ezekből a támadásokból mi tanulunk mindannyian, hogyha követitek az eseményeket, meg mi természetesen tájékoztatunk titeket is ezekről az eseményekről, és megpróbáljuk lefordítani közérthető nyelvre, de a fejlesztők is tanulnak belőle. De én úgy gondolom, hogy már ezáltal jobb hardvertárcák jöhetnek létre, új megoldásokon, új szisztémákon gondolkodnak, egyébként maga a tárcaformációkon is gondolkodnak egyes fejlesztők. Úgyhogy a nap végén a Bitcoin ebből profitálni tud.

És hát kik azok, akik áldozatul estek? Azok, akik odaadták a kulcsaikat másnak. Lásd a Liquid, mert akármennyire is egy jó név a Blockstream, akármennyire is Adam Back ott az igazgató és a főtulajdonos, aki egyébként a Bitcoin ökoszisztémának is egy fedhetetlen tagja, mert tényleg hatalmas tudása van, rengeteg respekt neki, de ember, illetve az általa vezetett szervezet is emberekből áll, és ő is hibázhat. Ott van a COLDCARD, ahol megbíztunk egy olyan hardvergyártóban, akiről úgy tűnt, és az látszott, hogy minden tudás birtokában áll, mindenki felett áll, és mégis hibáztak. Azok buktak el, akik kevés entrópiában bíztak, akiknek nem volt multisig aláírásuk, akik sajnos hittek annak, hogy ez így működni fog. Egyébként én is köztük voltam, meg sokan mások, annyi, hogy én egy újabb változatot használtam, és nem egy régebbit, ami sérülékeny volt.

Úgyhogy körültekintően tartsuk magunknál a bitcoinunkat! És visszacsatolok ahhoz is, megkövetem magam: nem feltétlenül kell mindenkinek kockát dobálni, aki bitcoint akar tárolni. Ehhez ki kell találni viszont a megfelelő iparági megoldásokat. De én most jelenleg nagyon kevés olyan hardvertárca-gyártót látok, ami nekem például tetszik, ami az én fejlettebb igényeimet kielégíti, amikor látom, hogy mi történik, amikor én kontrollálok dolgokat. Én várom, hogy jöjjön egy COLDCARD-hoz hasonló cég, aki tényleg tud egy bombabiztos, profi eszközt létrehozni. És várom azokat a cégeket is, akik olyan tárcaszolgáltatást tudnak nyújtani, ahol nem sérül még az egyedi szabadságod, de megkönnyítik a technológia által a Bitcoin tartását.

– De most mondok erre egy durva ellenpéldát. Ugye Satoshi Nakamoto 2009-ben valami Windowsos laptopon, hát tudjuk, hogy Windowson dolgozott, Windowsos laptopon generált magának kulcsokat, ahova a bányászott bitcoint tette, azok a bitcoinok azóta ott vannak, és azokat még mindig nem tudták ellopni. Ráadásul ott eleinte még a publikus kulcs is teljesen nyilvános volt, nem csak a hash, mint a mai címeknél. Tehát hogyha egy kvantumszámítógép, az azt törné fel először, de még az se történt meg.

– Igen, de attól, hogy egy számítógép tudja a kulcsodat, az még nem lopja el. Tehát hogyha Satoshi nem adta át a kulcsait, tehát nem adta át a Liquid hálózatnak a kulcsait és akármilyen tőzsdének…

– Csak ezzel még esetleg a hardvertárca létjogosultságát is lehet egy kicsit ellensúlyozni. Tehát hogyha valakinek van egy biztonságosan tartott, másra nem nagyon használt sima laptopja, az is jó. És azon egy bármilyen szoftveres wallet, az is jó lehet. Hát csak általában a legtöbb embernek nincs ilyen, tehát akkor már jobb a hardvertárca.

– Így van. Hát ezekről a hardvertárca-megoldásokról szerintem újra fogunk majd beszélgetni a Bitcoin konferencia keretében. És én kiemelt témaként kezelem azt, hogy tényleg azokat a nagyon fontos és létfontosságú biztonsági lépéseket közöljük mindenképpen, amit mindenkinek tudnia kell. És akkor legyen egy olyan rész is, amit azoknak szánunk, akik kicsit tovább akarnak lépni, mert a COLDCARD-ból megint az volt a tanulság, hogy sok olyan ember használta a COLDCARD-ot egyébként, aki teljesen amatőr volt, és nem sajátította el azt, hogy végül is milyen eszközt fog a kezében. Olyan, mintha egy nagyon halálos, éles lőfegyvert adtál volna egy teljesen amatőr ember kezébe. Sokan egyébként még a költésben sem voltak biztosak, hány olyan celeb volt, aki mondta, hogy újra kellett tanulnia, hogy hogyan kell a saját COLDCARD-ján küldeni bitcoint, mert nem tudja.

– Ja, hát igen, az úgy nem jó.

– Ezek voltak a legfőbb támadások egyébként. Kábé mindegyiket említettük, valamelyiket sokkal mélyebben, valamelyiket felületesebben. És én úgy gondolom, hogy egy olyan élő organizmusnak, mivel emberek alkotják a Bitcoin hálózatát, nem csak chipek és az áram, egy ilyen élő organizmusnak minden egyes ütés, amit túlél, az erősíti. És én hiszek abban, hogy ezáltal tényleg erősebb lesz a Bitcoin hálózata, de úgy lesz erősebb, hogyha tanulunk belőle természetesen.

Kérlek, majd írjátok meg azt is, hogy ti mit gondoltok ezekről a témákról, és ti hogy látjátok ezeket! Szoktuk olvasni a kommenteket, válaszolunk is rá folyamatosan, és merítkezünk is mindig az ötletekből, amiket adtok azzal kapcsolatban, hogy mi legyen a következő adásokban, milyen témákat szeretnétek hallani. Tamás, esetleg így a podcast végén elköszönésként van-e még valami?

– Igen, eszembe jutott, hogy meg akartam említeni, hogy az előző heti adásunkat egy hétvége alatt több mint 1500-an megnézték, úgyhogy ezt nagyon szépen szeretném megköszönni, mert ez inspirálólag hat rám, legalábbis hogy itt jó dolgokat mondunk, meg sok embert érdekel, és csak így tovább. Meg elég sok lájkot is kaptunk, úgyhogy szerintem szuper.

– Így van, köszönjük szépen.

– Remélem, most is sikerült érdekes dolgokat mondani.

– Én úgy gondolom. Ja, nem néztük meg az árfolyamot, azt szoktuk a végén. Nézzünk egyet, hogy kicsit oldjuk a feszültséget, mert hát azért ami volt ma, az kicsit sok.

Böngésszétek a HUSZONEGY folyamatosan fejlődő honlapját, a [huszonegy.world](https://huszonegy.world) címen! Olvassátok a [Bitcoin blog](https://bitcoinmentor.hu/bitcoin-blog/) cikkeit a [bitcoinmentor.hu](https://bitcoinmentor.hu) honlapon! És szintén itt találtok információt Bitcoin tanácsadási, mentorálási szolgáltatásunkról.

**Támogatóink Miskolctapolca és Hajdúszoboszló bitcoint elfogadó és bitcoint tartalékoló négycsillagos wellness szállodái, a [Hotel Aurora](https://hotelaurora.hu) és a [Hotel Atlantis](https://hotelatlantis.hu).**

És a [Firefish](https://app.firefish.io/auth/sign-up?ref=HUSZONEGY) 🔥🐟 üzeni, hogy ne adjátok el a bitcoinotokat!

– Hát egyébként egy hét alatt nagyon sok minden nem történt, mert ilyen oldalazás volt, de ez azt jelenti, hogy mondjuk legalább vissza se zuhantunk. Elvileg pánikolnunk kéne a kördiagram alapján. Senki nem pánikol most, úgyhogy biztos, hogy elcsúsztunk ettől. Szerintem itt majd lehet, hogy módosítani kell az ábrán valamit, vagy majd ezután jön a pánik. Hát meglátjuk. Ez mindig két esélyes, a technikai jellemzés egyébként: vagy föl, vagy le.

– Tehát akkor az árfolyamot látjuk most, menjünk vissza a hetesre, a Bitcoin dollár árfolyamot. Itt most annyi érdekesség történt, hogy az ötven hetes mozgóátlaghoz nagyon odakeveredtünk, és kicsit már fölé is ment. Most épp alatta van ez az ötven hetes, ez a sárgás-zöldes csík. Ez elég jól mutatja, hogy mikor van bear market, meg mikor van bull market. Hogyha fölötte van az árfolyam, akkor mondhatjuk, hogy bull market van, ha alatta van, akkor meg bear market.

– Látod, ott az utolsó bear marketnél.

– 2022 december. Ezt már korábban is láttuk. Látod, ott a sárgával, az ötven hetessel.

– Igen, itt volt hasonló. Én valami hasonlót várok egyébként, hogy még picit oldalazunk, bár én azt látom, hogy a következő egy hétben inkább még felfelé fogunk menni, de egy ilyen oda-vissza oldalazás, csapkodás lesz szerintem lefelé, és kábé ilyen szeptember vége, október elejére szerintem egy erősebb megindulás benne van még megint a piacban felfelé.

– Hát igen, hogyha rímelünk a történelemre, akkor ez lesz, vagy ez várható.

– Szerintem is.

– Nagyon szépen köszönjük a figyelmet! Reméljük, hogy tényleg informatív volt a beszélgetésünk. Igyekszünk mindig megvilágítani a Bitcoinnak azokat az oldalait, amit a Portfolio cikkeiből nem fogtok tudni kiolvasni. Várjuk a kommenteiteket, a kérdéseiteket, a témafelvetéseiteket, és alapvetően bármiről szeretünk beszélgetni, ami Bitcoin. Szép napot nektek, jó hetet, és találkozunk egy hét múlva! Sziasztok!

– Sziasztok!
