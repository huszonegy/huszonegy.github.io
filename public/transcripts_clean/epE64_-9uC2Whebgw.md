Sziasztok! Üdvözlünk titeket Tamással és Árpival a 64. Bitcoin podcastban — ez itt a HUSZONEGY Bitcoin Podcast. A mai alkalommal Tamás hozott nekünk ilyen bemutatnivaló dolgokat, úgyhogy zömével ő fog indítani. És reményeink szerint még kitérünk majd erre az OP_RETURN-balhéra, ami kicsit így megosztotta egy pár napra a társadalmat, de szerencsére azért nem véglegesen.

Mivel készültél ma, Tamás? Tudom, hogy hoztál egy csomó mindent, és amikor te itt vagy, általában a számokról szoktunk beszélgetni. Nem tudom, hogy megint hoztad-e azokat a chartokat, vagy csak úgy örülünk.

– Sziasztok!

– Hát örülünk, hogy itt vagyok, biztos már sokaknak hiányoztam.

– Igen.

– A mai napra én az üzleti Bitcoin elfogadásról gondoltam beszélgetni, mert erről már sokszor volt szó, de így nem mentünk bele soha a mélyébe. És ennek külön apropót ad az, hogy jártam Dunaújvárosban, ahol van egy Corner Hotel és Kávéház nevű hely, ahol is a Bitcoin elfogadás bevezetődött. És külön érdekesség, hogy az én ötletem és javaslatom alapján — tök jó, hogy valaki hallgat rám — az étteremnek az étlapjára fölrakták az árakat így bitcoinban is.

– Ja, ilyen kis vicces módon, aminek hát gyakorlatilag lehetősége nincs, de jól néz ki.

– És úgy csináltuk meg, hogyha előről olvassuk, akkor 0,004, ugye az bitcoin, hogyha hátulról olvassuk a vastagított számokat, akkor meg szatoshiban lehet.

– Az profi, az tényleg jó. Így látszik majd, hogy a mangós almaleves egyre olcsóbb lesz. Az 4003 szat.

– Igen, igen. Hát ez a szatos megjelenítés azért kellemesebb, mert 0,004, az szerintem senkinek nem megy bele az agyába. De az, hogy 4003, az tök hasonló, mint az ilyen hagyományos…

– Igen.

– …pénzegységeknél.

– Ühüm.

– Úgyhogy azért gondoltam, hogy ez így jó. Vagyis nem az én ötletem volt, ezt láttam valahol a neten, de ezt megvalósítottuk.

– Tök jó.

– Egyébként a technológia, amit használnak, ugyanaz, mint Feri hoteljeiben. És itt mutatnék is mindjárt valamit: van most már nekem is egy ilyen demóeszközöm, egy ilyen kis terminál, amit majd mindjárt megkísérelek bemutatni működés közben is.

– Tök jó, hogy legyen egy kis kütyübemutató is. Úgyhogy ha valaki Dunaújváros környékén jár, és éhes, szomjas vagy aludni akar, akkor van ott is egy lehetőség. Hotel és kávéház, ebédelni is lehet — tehát a kávéház ez azt jelenti, hogy étterem.

– Ühüm. Ebben az esetben igen, úgyhogy én is ott ebédeltem.

– Akkor megnézzük, megnézzük.

– Úgyhogy jó kis hely. Na és akkor menjünk bele egy kicsit a technikai részletekbe, mert biztos mindenki arra kíváncsi. Készítettem egy ábrát. Látszik?

– Igen.

– Így kicsit megnövelem.

– Nagyon profi ábra.

– Hát köszi, dolgoztam vele két napot.

– Valamit mesélj róla, hogy értsük is. Mi a probléma, amit meg kell oldani? Mert ugye ezt te oldottad meg, ezt a Bitcoin elfogadást nekik.

– Ja, igen, igen.

– Ezt nem mondtad még?

– Igen, igen, igen. Hát ez nekem most már ilyen kvázi magától értetődő, evidens dolog volt. A megoldandó probléma ugye az, hogy egy üzleti, tehát egy cég működésében egy pénzügyi tranzakció — hogy a vásárló kifizet valamit a cégnek — az nem úgy önmagában áll, mint amikor két magánszemély között megy egy ilyen fizetés, hanem ez általában egy ilyen komolyabb folyamatnak a része.

Ami lehet, hogy egy ilyen étterem esetén nem is annyira izgalmas, de mondjuk ha veszünk egy webshopot, amit erre a képre is rárajzoltam ott a bal felső sarokban — a webshopoknál az van, hogy a vevő kiválogatja a webshopról, hogy mit akar venni, az bekerül a kosárba, akkor ott megadja a különböző adatait, satöbbi, satöbbi. Kifizeti általában bankkártyával, és ha fizetsz, akkor az úgy szokott működni, hogy átirányítanak valamilyen banki fizetőoldalra — mindenki ismer ilyeneket, mondok egy-két példát: OTP SimplePay vagy PayPal vagy ilyesmi. Ott megtörténik a bankkártyás fizetés, és akkor utána visszakerül az ember a webshopba, és megy tovább a folyamat.

Tehát ez egy nagyjából automatizált dolog, és az nagyon fontos, ezt így észrevenni, hogy a fizetés az egy állomás, és onnantól kezdve, hogy a webshop tudja teljesíteni a megrendelést, elkezdje becsomagolni az árut meg feladni a futárnak — ugye az még utána jön, és valahogy nagyjából automatikusan kéne ennek működnie. Tehát ennek az egésznek a menedzseléséhez kell egy külön rendszer vagy egy külön szoftver, ami ezt így meg tudja csinálni, mert erre egy Bitcoin tárca nem lesz képes. Tehát egy Bitcoin tárca nem fogja megmondani a webshopnak, hogy izé, itt ki van fizetve ez a megrendelés, és akkor most már lehet továbbmenni. Erre egy külön ilyen úgynevezett fizetési processzor szoftver kell.

És hát van egy ilyenünk. Ez az ábrán középen is látható, ilyen szögletes, háromszöges, B betűs logós cucc: ez a BTCPay szerver nevű szoftver. Amiről fontos dolog, hogy ez nem egy szolgáltatás, ez egy szoftver. Ez egy nyílt forráskódú szoftver, amit bárki tud üzemeltetni akár a saját szerverén — de hát ezt szerveren kell üzemeltetni egyébként. Umbrelen is lehet, mert Umbrelre is föl lehet telepíteni, bár ott Árpi tud mesélni arról, hogy az mennyire nem jól működik.

– Ühüm. Illetve eleinte nekem jól működött, de aztán három hónap után vége, és lehetetlen volt újra beüzemelni.

– Na igen. Szóval hogy voltak vele problémák, illetve általában az — mint nekem is itt a fejem fölött — az itthon van, de hát egy webshop az általában nem az embernél otthon működik, hanem jobb, hogyha valami professzionális szerverteremben. Úgyhogy én is így csináltam meg: nekem van egy BTCPay szerverem, sőt most már kettő is van, ami így működik, amik normál szervergépek.

– Ugye?

– Hát ilyen virtuális szerverek, de rendes szerverteremben vannak.

– Ühüm.

– És egy ilyen BTCPay szerver az sok webshopot el tud látni, vagy hotelt vagy éttermet vagy bármit, párhuzamosan — nem kell annyi, ahány ilyen elfogadóhely van. És ezzel működnek egyébként jelen pillanatban Feri hoteljei is, hogyha elárulhatok ilyet, meg a Bitcoinbázis is azt használja. Úgyhogy én itten kiépítettem egy kis birodalmat.

Tehát visszatérve az ábrára: akkor így azt gondoltam, hogy megkísérelem elmagyarázni, hogy az egész hogy működik, ha valakit érdekel. Mindenképpen, ahogy mondtam, ez egy folyamat, és itt látszik, hogy vannak ilyen számok meg nyilak. A számok alapján kell sorba menni a nyilakon, és akkor mindegyikről röviden elmondom, hogy mi történik.

Az első lépés az, hogy — itt látszik az egéren, igen — a vásárló webböngészőjében járunk valahol, és annál a lépésnél, hogy ő most ki akarja fizetni a kosarába levő dolgokat. Tehát ott megnyomja, hogy fizetés. Ez az egyes nyíl, eljut ez az információ a webshophoz. És akkor a webshop össze van kapcsolva a háttérben a BTCPay szerverrel. Erről annyit kell tudni, hogy az ilyen népszerűbb webshopmotorokhoz létezik bővítmény, ami egyszerűen összekapcsolható: tehát csak meg kell adni egy API-kulcsot és kész. Vagy sőt, még annyit sem, mert elég egy URL, aztán engedélyezni a kapcsolatot, és össze tudnak könnyen kapcsolódni. Hogyha valakinek valami nagyon egyedi fejlesztése van, akkor ahhoz kicsit programozni kell — majd ilyet is fogok mutatni, mert dolgozom ilyenen is.

– Ühüm, majd a jövőben valamikor, ha elkészült.

– Tehát ezen a kapcsolaton keresztül eljut az információ a BTCPay szerverhez, hogy itt valaki ki akar fizetni valamit. Itt általában csak annyi információ megy át, hogy mekkora az összeg — különösebben más nem kell hozzá —, illetve valami azonosító, mondjuk egy megrendelésszám vagy ügyfélszám. Itt általában az, hogy konkrétan mit vesz az ember, meg mi az ember neve meg ilyesmi, az nem szokott átjutni, mert arra nincs szükség a fizetéshez.

És akkor a BTCPay szerver — majd ezt meg fogom mutatni mindjárt a gyakorlatban is — létrehoz egy ilyen számla nevű dolgot, ami nem pont olyan, hát kicsit hasonlít egy klasszikus számlához, amit az adóhivatal is ismer, de nem magyar adóhivatali jellegű számla, hanem csak a BTCPay szervernek a saját ilyen számlaformátuma.

Minden ilyen beállításhoz kell, hogy tartozzon itt a jobb felső sarokban látható tárca, ami a webshopnak a Bitcoin tárcája. Ez lehet beépítve akár a BTCPay szerverbe is, de nem ezt szoktuk használni általában, egyszerűségi okokból. Legtöbben a Strike-ot vagy a Blinket használják, illetve nekem van egy olyan tesztrendszerem is, amit majd nemsokára megmutatok, ahol egy sima LND, egy Lightning node a tárca a shop mögött. Ugye ez azért kell, mert ide fog érkezni a pénz.

És a BTCPay szerver annyit csinál, hogy utasítja ezt a tárcát, hogy akkor kérek szépen egy payment requestet. Ugye a Lightning-fizetés az úgy működik, hogy a fogadótárca kiállít egy ilyen fizetési kérelmet, angolul payment request. Ez egy ilyen adatcsomag, amit meg lehet jeleníteni QR-kódként — tehát azért írtam ide, hogy QR-kódkérés, a hármas pontba.

Ez visszajut — hát itt a nyilakon nem látszik, de visszajut ugye a BTCPay szerverbe ez az úgymond QR-kód, és mindjárt a négyes pontban el is jut a vásárló webböngészőjébe. Ugye ez az a pont, amikor a vásárló átirányítódik mondjuk a BTCPay szerver oldalára. Illetve úgy is meg lehet csinálni, hogy nem irányítódik át teljesen, csak egy külön ablakban, a webshopon belül megjelenik iframe-ben — ahogy a fejlesztő megálmodja. A lényeg az, hogy a vásárló webböngészőjében ilyenkor megjelenik egy QR-kód. Ilyet mondom, most ebben a pillanatban nem mutatok, mert ilyet már sokan láttatok, de majd mindjárt megmutatom élőben is.

És akkor ezt a QR-kódot kell leolvasni az ötödik szereplővel, ami a vásárló tárcája. Tehát ez mondjuk lehet egy Blink wallet vagy egy Strike vagy egy Umbrel vagy egy Phoenix wallet vagy egy akármi. Ezt én úgy szoktam csinálni ugye, hogy az Umbrelemet távvezérlem a mobilommal — majd ez lesz a… De ilyet már mutattam itt, majd mutatunk.

És akkor ennek alapján meg tud történni a fizetés, a legfontosabb pont, a hatos pontunk. Itt fontos azt látni, hogy a fizetés maga az már teljesen független az összes többi dologtól: az közvetlenül a vásárló tárcájából a webshop tárcájába történik. Tehát itt semmilyen kvázi banki szolgáltatás nem vevődik igénybe, vagy csúnyán mondva, mint egy bankkártyánál. Tehát ott ugye a bankkártya, az egy bankokon megy keresztül, ki tudja, hány bankon, meg a giró, meg minden, azon megy keresztül. Itt közvetlenül a Lightning Networkön a vásárló tárcájából eljut a bitcoin a webshop tárcájába, és akkor a webshop tárca ugye össze van kapcsolva a BTCPay szerverrel, szintén ilyen API-kon keresztül. Ott szól, hogy jött egy fizetés, a BTCPay szerver akkor látja, hogy az mi lett kifizetve. És itt a nyolcas pontban visszaszól, egyszerre általában megjeleníti ott a QR-kód helyén is
egy ilyen pipát — ezt sokan láttátok már, gondolom. Illetve visszaszól a webshopnak is. Ez nagyon fontos, hogy a webshop is értesüljön róla, hogy megtörtént a fizetés, mert mondjuk lehet, hogy a vásárló közben bezárta a böngészőjét, vagy elment máshova, mást nézeget. Bár ez néhány másodperc alatt megtörténik, ez az egész kör, úgyhogy valószínűleg nem, de ki tudja. Tehát itt az a lényeg, hogy a webshop is megtudja, hogy megtörtént a fizetés, mehet tovább a folyamat. És akkor ilyenkor általában a webshop is jelzi a vásárlónak, hogy köszönjük szépen a vásárlást, tralala. Tehát ez így a teljes kör.

– Ühüm.

– Tehát látszik, hogy itt azért maga a BTCPay szerver elég sok mindent csinált oda-vissza, ráadásul ilyen aszinkron módon. Ezért fontos, hogy legyen egy ilyen. Tehát hogyha ezt valaki enélkül próbálná megoldani — mondjuk le lehet nagyon egyszerűen úgy is, hogy a webshop kirak egy Bitcoin címet, hogy akkor ide utalj, és akkor utána másnap megnézi az ember manuálisan, hogy jött-e oda fizetés, és akkor ha igen, akkor örülünk. De hát egy professzionális webshopnak, pláne ha nagy a forgalom, ott nem így kell működni, nem automatizáltan. Úgyhogy ezért szoktam mindenkinek ezt javasolni, hogy így rendesen csináljuk meg.

– Ühüm. Tök jó. Mennyi munka egy ilyennek a beépítése, így szoftverestől? Mondjuk úgy, hogyha megkeres téged egy bolt, hogy szeretne bitcoint elfogadni, vagy egy szálloda vagy egy akármilyen egység, akkor mennyi idő alatt lehet ezt szerinted?

– Hát ugye teljesen attól függ, hogy a webshopja milyen.

– Ühüm.

– Hogyha egy teljesen sztenderd ilyen WooCommerce-es, WordPress-es webshop, azt gyakorlatilag egy nap alatt össze lehet rakni.

– Ühüm.

– Vagy néhány munkaóra alatt. Általában több szokott lenni ennek az adminisztratív része, hogy a cégnek a könyvelője is képbe kerüljön, hogy hogy van, mi van. Illetve hogyha mondjuk Strike-számlát akarnak nyitni, az el szokott tartani egy pár hetet, sok dokumentum megadásával — az kábé ugyanaz, mint egy bankszámlanyitás.

– Hát nem kell feltétlenül a Strike hozzá.

– Nem, nem hiszem.

– Hát de valami azért kell, pláne hogyha váltogatni is akarnak mondjuk euró és bitcoin között.

– Ühüm.

– Hát hogyha teljesen önrendelkező módon akarjuk megcsinálni, tehát mondjuk egy saját LND node-oddal, azt is meg lehet, csak akkor viszont folyamatosan figyelni kell a csatornákra, hogy legyen likviditás.

– Ühüm. Már az ügyfélnek.

– Az ügyfélnek, igen, hát annak, aki ezt üzemelteti. Tehát valahol a Lightning üzemeltetésénél mindig van egy folyamatos munka, valakinek azt el kell végeznie.

– Ühüm.

– Vagy én megcsinálom magam — én magamnak mondjuk megcsinálom, másnak ezt nem nagyon, mert szerintem ez egyébként jogilag már pénzügyi szolgáltatás.

– Ühüm.

– És akkor ezt inkább azt mondom, hogy akkor bízzuk a Strike-ra.

– Ühüm. Azt ők jól megoldják professzionálisan, már az adminisztratív terhek elkerülése végett.

– Igen, hát nem csak adminisztratív, hanem meg vannak ennek követelményei.

– Hát a jogszabályok.

– Tehát ez azt is jelenti ugye…

– Ühüm.

– …hogy legyen egy olyan Lightning node-od, amibe folyamatosan tudnak jönni a fizetések, hogy legyen egy csomó csatornád, amin van feléd irányuló likviditás. Most ezt nem tudom, mennyire volt így érthető, ahogy mondtam.

– Nekem igen, de ugye nekem…

– Hát igen, nektek igen, de csak azt nem tudom, hogy a nézőknek mennyire érthető.

– Szerintem érthető.

– És ahhoz, hogy csatornád legyen, ahhoz mondjuk ha nyitsz egy csatornát, ott bele kell tenni egy csomó bitcoint. Például hogyha közvetlen csatornát akarsz nyitni a Blink wallethez, amire van lehetőség, mert nekem van ilyen — abba 0,1 bitcoint bele kell tenni, és akkor az ott van lekötve, ráadásul azzal a kockázattal, hogy annak a privát kulcsa ott van egy szerveren. Tehát azt a szervert okosan kell üzemeltetni. És akkor még mindig csak kimenő likviditásod van, akkor még meg kell oldani valahogy, hogy — nem tudom — menjenek kifelé előbb fizetések, és akkor utána tudnak visszafelé jönni, ahogy a Lightning működik. Illetve lehet olyat is csinálni, hogy vannak ilyen szolgáltatások, hogy valakinek fizetsz valamennyi bitcoint, nem olyan sokat, mert tranzakciós díjakat meg még valamit, és akkor ő nyit hozzád egy csatornát mondjuk néhány hónapra, és akkor azon keresztül tudnak bejönni a fizetések.

De most már elcsapongtunk egy kicsit itt a Lightning Network rejtelmeibe, de hát valakit az is érdekel. Tehát ezt az egész bonyodalmat elkerülendő én ezt szoktam javasolni mindenkinek, hogy használjon Strike-ot.

– Ühüm.

– Ez a Strike az a céges könyvelők számára is gyakorlatilag pontosan ugyanúgy kezelhető, mint egy bankszámla, ugyanúgy kivonatokat kap róla.

– Ja, az tök jó.

– És így ez beleilleszthető könnyen egy céges működésbe.

– Mutatod a terminált, vagy mi a folytatás?

– Akkor most szerintem próbáljuk meg ezt így élőben is lejátszani.

– Ühüm, jó, nézzük.

– Méghozzá nem webshoppal, mert most webshopom így hirtelen nincs, hanem — ugye ezek a terminálok működnek mind a három hotelben, most már három hotelről beszélhetünk. Ilyen van Feri hoteljeiben is, meg Dunaújvárosban is van egy ilyen. Ez egy sima androidos készülék egyébként. Ja, csak egyszerre kéne látnom, hogy mit csinálok.

– És Bluetoothon kommunikál a számítógéppel?

– Nem, hát úgy, mint egy Android: wifin, interneten.

– Oké.

– Bluetooth is van benne, mert minden van benne. Csak állandóan eltűnik a kép.

– De végül is neki nem kell a számítógéppel kommunikálnia, mert ő egy számítógép.

– Hát önmaga, persze, az pontosan ugyanolyan, mint egy mobil, azt úgy kell elképzelni. Csak annyiból, hogy majd mindjárt a végén meglátjuk, hogy van rajta itt a tetején egy nyomtató, és akkor tud blokkot is nyomtatni például. Meg hát ennek a gyakorlati jelentősége az, hogy ha egy ilyen ki van téve mondjuk a kávéházba, akkor — na, vissza. Így, ez a… És látszik ez a POS-terminál?

– Én csak a megosztásodat látom, a megosztott képet sajnos.

– Ja, akkor azt most kikapcsoljuk.

– Köszi. Ühüm. Á, így jó, köszi. Megvan.

– Tök jó. Tehát ez most egy ilyen egyszerű POS-terminál-képernyő, ez látszik rajta. Egyébként ez egy webböngészőben futó dolog, tehát ezt egy mobiltelefonnal is meg lehetne csinálni, csak…

– Ühüm.

– Hát általában mondjuk egy kávéházban nincs ott egy mobiltelefon, amin ezt csinálják, vagy ha használnak is mobiltelefont, akkor azt használják másra, ott telefonálgatnak vagy ilyesmi.

– Igen.

– Jobb, hogyha van egy dedikált eszköz, mert amikor elég ritkán beesik egy ember, hogy akkor ő most fizetne bitcoinnal, ne akkor kelljen gondolkodni, hogy most akkor úristen, hol az a mobiltelefon, és hova kell kattintani, satöbbi. Ha ezt csak erre használják, akkor nagyobb valószínűséggel fog működni.

– És ha rábökök a képernyőre, mondjuk standbyban van, akkor alapból gondolom ez a felület jön föl, hogy beüthessem az összeget.

– Hát ha nem is, akkor ide ki van rakva egy ikonba, és akkor oda — így csak a képernyőn látom, hogy sikerül-e ráállni.

– Ühüm.

– És akkor bejön ez a POS-terminál-felület. Egyébként ez, miután egy androidos terminál, akár bankkártya-elfogadó appot is lehet rátelepíteni. Tehát mert ez mondjuk, mit tudom én, kerül 90 000 forintba, és hogyha valaki éppen nyit egy kávézót, és ilyet venne, gondolkodik rajta, hogy bankkártya-terminálja is legyen meg ilyesmi — nem kell kettőt venni, mert ezzel meg lehet csinálni bankkártyát is.

– Ühüm.

– Van több olyan szolgáltató is, van ilyen banki szolgáltató, aki sima androidos, akár mobilon is tud bankkártyát elfogadni, az ezen is működni fog. Itt van benne NFC is egyébként, látszik is rajta.

– NFC-s Bitcoin kártya is létezik, Bolt Card néven, a világon. Az még nekem…

– Igen. Meg mindenféle ilyenek is.

– Az nekem nincs. Majd szerintem a következő ilyen demóra már talán olyat is szerzek, és akkor majd azt is beüzemelem.

– Vagy hívd át Katát?

– Igen, Katának van.

– Bonyolultabb, hát igen, csak messze van.

– Openomsnak is vannak ilyen kártyái. Valahogy összehozzuk.

Na, megint eltűnt a képernyő. Na, tehát akkor ez a terminálrész. És akkor most megmutatom előbb a BTCPay szerver felületét is. Jó, így látszik valami?

– Igen.

– Vagy növeljem?

– Jó lesz. Ja, és ott a Strike-logó. Tök jó.

– Igen, igen, amit mondtam, hogy ez most teljesen olyan, mint egy igazi store: tehát a Strike van mögötte. Ez az én demórendszerem vagy tesztrendszerem. És azért jó, hogy a Strike van mögötte, mert így az Umbrelemből viszont tudok fizetni, ugye — mert saját magamnak nem tudnék. Tehát így akkor van két külön tárca, na, egyszerűen mondva.

És itt ez a dashboardja, itt látszanak a legutóbbi tranzakcióim, amiket itt csináltam. Na most akkor mindjárt csinálunk egy újat hozzá. Akkor visszatérünk ide. Ja, és megosztanám az Umbrelt. Nem, azt. Fú, csak egyszerre csak egyet lehet megosztani. Akkor nem az Umbrelt osztom meg, megosztom a mobilomat, amivel fizetni fogok, amin egyből látszik a beérkezés. Látszik?

– Igen, ühüm.

– Most kell ügyesnek lennem, kéne még három kéz. Akkor próbálom ezt így középen mutatni.

– Igen.

– Kódot kér. Tehát itt van az izé. És mondjuk mennyit fizessek?

– 42 forintot. Az pont jó, stílusos.

– Csak úgy kell beütni, hogy 42. Ez filléreket is kezel, úgyhogy az 42,00.

– Ühüm.

– És itt látszik: vannak olyan pénzek ugye a világban, ahol még van váltópénz. A forint már ezt elengedte.

– Igen, igen.

– Lehet adni belőle kedvezményt, lehet adni jattot, tehát ilyeneket is szoktak tudni ezek a terminálok.

– Ühüm.

– Ühüm, adok magamnak 15% jattot, akkor már lett belőle 48,3.

– De rendes vagy. Amerikában azért így néznének rád, nem engednének vissza.

– És akkor megnyomom a charge-ot, és máris kaptam egy QR-kódot. Ekkor már megtörtént a BTCPay szerverrel ez az üzenetváltás, és ez eljutott a Strike-ig, a Strike-tól jött vissza ez a QR-kód — ez az, amit az előbb ott mutogattam az ábrán.

– Ühüm.

– Tehát ez most a Strike-os QR-kód gyakorlatilag. És akkor én ezt most le fogom olvasni a mobilommal. Sikerült is, úgy látom. Na, na, mi történik? Kicsit kommunikál, gondolom, a dolgokat.

– Aha. Mert most a telódról, a node-od tárcájából fizetsz, nem?

– Ja, igen, igen, igen. Majd azt is utána megosztom, csak egyszer csak egyet lehet. Tehát most látszik, hogy 129 szatot kell kifizetnem, megvannak mindenféle adatok róla. És akkor megnyomom, hogy pay.

– Milyen menő kis animáció.

– Zeus. Azt mondja, hogy elküldte. Közben ezt is kellett volna mutatnom, csak ennek meg eltűnt a képernyője.

– Igen.

– Szóval most már azt mutatja, hogy ki van fizetve.

– Ühüm. Meg potyog a konfetti. Király.

– Na, és akkor megyünk tovább, én vagyok a kasszás. Azt mondja, hogy részletek megjelenítése, nyugta megjelenítése.

– Ühüm.

– Az a QR-kódos nyugta. És akkor van itt egy ilyen print gomb, nyomtathatom. Meg még egyszer. Ja,
itt meg kell nyomni. És kinyomtatta.

– Profi.

– És akkor további érdekesség az, hogy ezen van egy QR-kód, kinyomtatta, és még azt is le lehet olvasni. Oké, jó, sikerült. Akkor bejön itt egy ilyen elektronikus nyugta, gyakorlatilag ez a BTCPay szerverről jön le. Tárolja a nyugtát örökre, amíg ki nem töröljük belőle. Úgyhogy nem kell a cédulát őrizgetni, ha valaki meg akarja őrizni ezeket az emlékeket.

– És ezt bárki bárhonnan lecsekkolhatja.

– Igen, ez egy publikus izé ott.

– Igen, tök jó.

– Úgyhogy ez volt ez a kör, amit az előbb bemutattam. Körülbelül így működik.

– Szuper. Hát ez a terminál — esetleg, bocsi — az tudja azt, hogy alapértelmezetten azonnal kinyomtatja a nyugtát?

– Hát az lett volna még egy kényelmi funkció, hogy jó, bejött a pénz, már nyomja is. A jelen setuppal nem tudja, mert ez egy webböngészőben futó izé, és akkor a böngésző nyitja meg a nyomtató appot külön, azért kellett kétszer-háromszor megnyomni.

– Ühüm.

– Egyébként lehetne ráírni egy saját appot, mondjuk aki Android-programozó, és akkor az már azt csinál, amit akar.

– Ühüm.

– De egyébként jogos a kérdés, teljesen jogos a kérdés.

– De hát gondolom, ahogy skálázódik majd, ahogy egyre több fizetés lesz, azt érdemes lesz.

– Hát igen, hát eddig ezzel együtt tudnak élni, akik ezt használják.

– Igen, nap mint nap kell csak egyszer használni. Lehet, hogyha valakinek naponta 100 ilyen fizetést kell csinálni…

– Igen.

– Hogyha állnak sorba a vásárlók egy boltban, akkor ott számíthat az is.

– Ühüm, így van. De hát a bankkártyás terminálok se úgy születtek, ahogy most vannak, hanem fejlesztik őket, nem tudom, 50 éve.

– Igen, azok azért kényelmesebbek egy fokkal, de szerintem rohamléptekkel eljutunk oda, hogy majd ez jobb lesz. Ráadásul nem csóró bankok pénzelik a fejlesztéseket.

– Igen, igen, igen. Ez egy nyílt forráskódú szoftver ahhoz képest.

– Tök jó, király. Bocs, nem kötekedni akartam.

– Hát persze, tudom, ez teljesen jogos kérdés.

És akkor most még megnézhetjük ezt a fizetést az Umbrelben is, hogy tényleg az Umbrellel fizettem ki. Csak frissítem. És itt mutatja, hogy négy perccel ezelőtt…

– Ühüm.

– …fizettem 129-et. Látszik, rákattintok, akkor mutatja, hogy ki is van fizetve.

– Király, tök jó. Úgyhogy hát — és a beérkező oldalt még megmutatod? Azt gondolom, most a BTCPay szerveren lehetne látni, hogy azon is átjött.

– Á, tényleg igazad van, azt nem mutattam.

– Hát egyszerre nem tudsz sok mindent.

– Igen, mert egyszerre csak egyet lehet megosztani.

– Ezzel még kéne javítanotok valamit ezen a stúdión.

– Ja. Itt látszik ez a kis piros izé, ami ott megjelent, az jelzi, hogy történt valami. És akkor ott rákattintok. Fú, itt minden benne van.

– Ühüm.

– Egyébként nem tudom, mennyire látszik a képernyőn. Megpróbálom megnagyítani.

– Szerintem jó ez, majd ránagyít, aki mobilon akar sok mindent látni.

– Tehát hogy — na, kezdjük az elején. A Thomas Store nevű store-ban történt ugye a történet, ki van fizetve Lightninggal. Ez a kis izé, Lightning, azt jelenti, hogy Lightning, tehát nem normál Bitcoin tranzakció volt — az is lehetne éppen. Itt mutatja az összeget: 48,3 forint. Ezen az URL-en volt a fizetés, ezt jelenítette meg a terminál nekünk egyébként. És itt mutatja, hogy 42 forint volt, amit vásároltunk, 15%-os tippel. Itt még egyszer ugyanazt: 42 + 6,3.

– Ühüm.

– Itt mutatja a payment requestet, vagy itt: 37 millió forint az árfolyam.

– Király, igen, igen. Az árfolyamot is mutatja. Forintban milyen durva.

– Nem, forintban nagyon ritkán — pár napja török lírában volt all time high megint.

– Hát azt nem tudom, mennyi volt. Itt olvastam.

– Hát ott mindig hamarabb van all time high.

– Hát általában forintban is hamarabb szokott lenni. Az néha erősödik, meglepő módon, egy kicsit.

– Na, itt van ez a Webhooks rész, ez a programozóknak lehet érdekes. Ez az, ahol visszajelez a BTCPay szerver a webshopnak, hogy megtörtént a fizetés, ezek azok az üzenetek. Tehát ott a — azt hiszem, a nyolcas pont volt az ábrán, az első ábrán.

– Ühüm.

– Ezek azok az üzenetek, tehát még az is látszik. És akkor itt van egy ilyen részletes eseménylista, hogy mi történt, tehát itt abszolút lehet debugolni, ha valami probléma van, valami hiba. Itt ez a piros hiba, az nem hiba, az azt jelenti — csak ahogy azt írja —, hogy túl kicsi az összeg, ezért kizárólag Lightningon vagyunk hajlandóak fogadni, normál Bitcoin tranzakcióval nem. Nagyobb összegeknél ott lehet választani egy ilyen füles megoldással.

– Oké, 100 bitcoin fölött.

– Hát ezt, ha jól emlékszem, lehet konfigurálni is itt a BTCPay beállításainál.

– Igen.

– És akkor megnéztük volna a Strike balance-ot, az elején mondjuk fel van véve, úgyhogy meg lehet nézni, akkor itt többnek kéne lennie — de nem néztem meg.

– Tök jó. Úgyhogy akkor ez a köszönjük szépen a vásárlást, meg a borravalót is.

– Igen, de én kaptam az egészet.

– Hát akkor is, akkor is köszönni az a legjobb. Az áfát utána befizeted?

– Hát hogy befizeted az áfát, hogy azt is Lightningon fizeted?

– Nem, az ennek a rendszernek nem része. Egyébként ha már fölmerült: ez például Feri hoteljeiben úgy működik, hogy emellé az egész történet mellé még a számlázórendszerükkel csinálnak egy áfás számlát, tehát hogy teljesen rendben legyen NAV-ilag is.

– Az se baj, hát egy cégnél ez is fontos.

– Igen. És akkor ők ugye azt csinálják — hogy kerek legyen —, hogy egy forintalapú számlát bocsátanak ki, aminek a fizetési módja az, hogy — mi is? — bankkártya. Bankkártya, ami Bitcoin típusú, ilyen bankkártya van, hogy így tudták megoldani, de ez már a számlázóprogramnak az izéje.

– Aha.

– Ja, és akkor ha itt tartunk, akkor van itt még egy olyan pont, hogy ez a riport. Végül is gondolom az a lényeg, hogy a könyvelésben exaktul, következetesen legyen. Pont ezt akarom megmutatni, hogy itt van ez a reporting, itt van egy ilyen export, amit lehet, hogy ti most nem láttok, de ez egy CSV fájlba letölti gyakorlatilag azt az összes adatot, ami a képernyőn meg volt jelenítve a számláról. Excelbe ki lehet exportálni, és akkor a könyvelők tudnak vele dolgozni, és abban benne van minden: az árfolyam, a fizetett összeg forintban, bitcoinban, maga a payment request is benne van.

– Ühüm.

– Vagy ugye a Bitcoin cím, hogyha layer 1-es tranzakció. Tehát teljesen mindent össze lehet párosítani utólag is, évekkel később, akár egy adóellenőrzésen is: ez látszik, hogy ott van, ott volt kifizetve.

– Tök jó, tehát emiatt nem kell aggódni. Hajrá, könyvelők!

– Igen, de ehhez a részükről kell egy adag nyitottság, hogy ezzel elkezdjenek foglalkozni.

– Hát vagy egy jó főnök, aki megmondja nekik, hogy foglalkozzon vele.

– Igen, igen. Csak ezt már több cégnél hallottam, hogy á, a könyvelőnk hallani se akar róla.

– Ki a főnök?

– Igen, ja. De azt gondolom, hogy ez a BTCPay szerver azért nem áll távol a hagyományos ilyen pénzügyi rendszerektől. Úgyhogy szerintem aki csinált már bankkártya-elfogadást, az nyugodtan beveheti a tarsolyába, nem probléma, nem sokkal messzebb van.

Meg hát ez a jövő ugye, inkább mindenhol csak azt hallani, hogy ilyen cégek kerülnek föl a BTC Mapre, tehát a Bitcoin térképre, hogy fogadják el a bitcoint. És ugye ott jobbára azért valamilyen POS-rendszer van mögötte, tehát többnyire a BTCPay szerver, vagy vannak ilyen androidos fejlesztések is, ami csak így telefonon — ugye ez ilyen egyszerűbb usereknek, mint fodrász, mit tudom én, vagy valami. De nyilván cégeknek jobb ez.

– Hát egy fodrásznak tipikusan egy Blinket.

– Igen.

– Pláne hogyha valami ilyen átalányadózós vagy katás, vagy nem tudom.

– Igen, olyan, ahol nem is kell egyesével könyvelni.

– Ja, tehát egy fodrásznál kicsit szofisztikáltabb üzletnek van szüksége már a BTCPay szerverre.

– Múltkor én állatorvosnál fizettem bitcoinnal. Tökre örültem neki, hogy lehet, így ki volt írva. És amikor megkérdeztem tőlük, hogy ez tényleg így van, akkor mondták, hogy hát igen, de nagyon ritkán csinálunk ilyet. És szegények nagyon zavarba jöttek, de aztán utánanéztek, hogy hogy kell, és végül is baromi egyszerű volt, mert volt egy QR-kód a fogadó tárcacím részéről.

– Aha.

– Amit ha én leolvastam, akkor megadhattam, hogy mennyit fogok küldeni. Onchain utalás volt. Úgyhogy a végén kérdeztem, hogy akkor most megvárjuk, amíg ez bekerül a blockchainre? És akkor mondták, hogy á, nem, ez biztos meg fog jönni, azt mondta a főnök, hogy meg szokott jönni. De aztán mentem én meg vissza, és akkor mondták, hogy minden oké volt. De majd szerintem megkeresem őket, legalábbis a főnököt, hogy érdemes átállni egy profi módszerre és Lightningon fogadni, és lehet, hogy még nem is hallott róla.

– Hát lehet, de tök jó, hogy legalább így sikerült. Egyébként aki twitterezik vagy X-ezik, ott mostanában nagyon megy, hogy Svájcban van egy SPAR áruház, ahol elfogadnak bitcoint, és ott is kiderült az egyik ilyen leírásból, hogy pont így csinálják, ahogy te is mondtad.

– Ühüm.

– Tehát ugye az, hogyha a vevő határozza meg, hogy ő mennyit fizet, nincs benne a QR-kódban az összeg, akkor utána a szegény könyvelőknek az összes haja ki fog hullani.

– Ühüm.

– Utána sok ilyen tranzakció van, hogy akkor most az egyik kicsit több, a másik kicsit kevesebb, meg melyik tartozik össze — nem is lehet automatikusan összepárosítani.

– Nehéz lesz.

– Szóval én ezt így átgondolnám jó előre, hogyha ilyenbe vágnám a fejszémet, hogy ez rendesen legyen megcsinálva.

– Hát azért kell a most bemutatott módszer, nem?

– Hát igen, igen, igen. Hát ezt akartam kifejezni, igen. Jó, hogy ahogy én megterveztem ezt, vagy ahogy csinálom, ebből nem lehet baj.

– Szuper, köszönjük.

– Ja, köszi. Na, és akkor nézzük végre a lényeget, az árfolyamot.

– Igen, mindenki vár, mert olyat is készültél.

– Persze, az előfizetés megvan.

– Nem, hát mindenki ezért jött.

– Még megvan, igen, őszig.

– Nagyon király.

– Majd lehet, hogy sikerül meg is hosszabbítani. Hát itt a szokásos kígyó, ami még mindig nem harapott a farkába. Sőt, hát ilyen business as usual: áthúzik azon a karikán, ami a 100 — hát a 100 ezren, a 100K-n.

– Igen, reméljük. Most már az alá nem fog nagyon menni, de továbbra is nagy talány lesz ez a rész itt.

– Ühüm.

– Hogy itt mi fog történni, ami már háromszor megtörtént: hogy most mibe fogunk belebukni éppen, hogy 80%-ot essünk?

– Hát ki tudja.

– Ühüm. Hát biztos nagyon
sok bitcoin kerül majd a piacra. Én nem lepődnék meg egy Coinbase-hacken vagy egy bank runon sem.

– Igen.

– Vagy hogy kiderül, hogy valaki sok papírbitcoint bocsát ki, és akkor itt a világ vége, most fog nulláig zuhanni. Vagy hogy valakinek, aki azt hiszi, hogy van 550 000 bitcoinja, nincs meg. Hát azon röhögni fogok.

– Csak egyik szemem röhögni, a másik meg sírni.

– Jó, de ne legyünk rossz gondolatúak, mert én nem vagyok. Hát azért tulajdonképpen nem hülye az ember, csak ellenőriz. Arra gondolok, hogy ha van 550 000 bitcoinom, azért ugyan nem árulom el a címeket, hogy hol van, de legalább én tudjam. Vagy ha nem is beszélek róla, akkor lesz durva, amikor több bitcoinja lesz, mint a Coinbase-nek. (nevetés)

– Nem tudom. Hát mi azt tudjuk, hogy a Coinbase-nek mennyi van?

– Azt így ki lehet tippelni, nem?

– Meg hogy ott tartja. Hát nem, de már talán nem az összes van a Strategynek a Coinbase-nél, nem? Azt hiszem, a Fidelitynél is van nekik valamennyi, nem?

– Na mindegy, persze, ne legyünk ilyen izékedők. Legyen mindenkinek bitcoinja, aki akar. Meg ugye még jönnek a többiek, még a TwentyOne Capital be sincs jegyezve, úgyhogy még el se kezdtek vásárolni.

– Hát ugye korábban azt mondta, hogy ő így a második fél évre prognosztizálja ezt a nagy felfutást. Biztos azért, mert gondolta, hogy addigra neki is beérnek ezek a hitelvonalai. És akkor hát ezt a képet…

– Igen. Tehát hogy Jack Mallers is arra tippelt, hogy akkoriban lesz nagyobb igény.

– Meglátjuk ezeket a dolgokat, kell veszegetni szépen. Én simán el tudom hinni, hogy megint lesz egy bull run év végén, mert eddig kétszer átéltem, meg az ábrából láthatóan volt már még háromszor is.

– Ja, én ezt el tudom hinni, de hogy annak meglesz a böjtje, azt is gondolom.

– Ühüm. Hát igen, ez egy ilyen…

– Hát jó, de valami olyasmit kalkulálsz, nem?

– Hogy mondjuk mit kalkulálok?

– Nem adom a szádba a szót, hogy mondjuk fölszaladunk valameddig, és visszazuhan 80%-ot.

– Van egy másik ábra is, amit kikeresek, ahol ez jobban — melyik az? Talán itt. Mert én arra nem számítok, hogy mondjuk most ha jön egy bull run, és fölmegyünk akármeddig, mondjuk 1 millió dollárig, hogy utána ha mondjuk 80%-ot zuhan, akkor ugye 200 000 dollárra zuhant, a mostani árfolyam jó kétszeresére gyakorlatilag zuhanunk. Hát ami biztos, fájdalmas lesz, de azért jól fog esni.

Én ezt az ábrát nézegetném egy kicsit, leveszek róla néhány fölösleges dolgot. Ugye ez ugyanaz, mint a csigabiga ábra, csak kinyújtva rendesen. És azért látszik, hogy ahogy megyünk fölfelé, egyre laposabbak ezek a hullámok, ezen elég jól látszik arányaiban.

– Ühüm.

– Abszolút értékben egyre nagyobbak, de arányaiban egyre laposabbak.

– Ühüm, tehát a logaritmikus ábrázoláson.

– Igen. Itt látszik, hogy én azért olyan, mit tudom én, 200 000 fölé nem lőném idénre a fölfutást.

– Igen, ühüm.

– És akkor abból számolva meg, mit tudom. Ja, maradjunk egy kicsit a realitás talaján: hogyha onnan visszaesik, akkor meg nem sokkal fog 100 000 alá menni. Én talán egy ilyet merek tippelni, de aztán lehet, hogy majd mindenki rajtam röhög, hogy onnan 100 000 alá.

– Aha. Hát igen. Ilyenkor a piac az alá visszazuhan. Lehet, hogy nem, de igen, ki tudja, tényleg senki. Jó, de hát ahhoz, hogy fölmenjen 200 000-re, most akkor nagyon-nagyon nagy FOMO-nak kell lenni a következő hónapokban.

– Igen.

– És azok, akik későn szállnak be, a legnagyobb FOMO végén, a legnagyobb eufória végén, azok el is fogják adni.

– Persze, mindig.

– Ühüm. Meg már nincs is akkora tőkéjük, tehát azért az árat mozgatni egyre nehezebb szerintem, mert ugye azért jobban zsebbe kell nyúlni.

– Inkább az attól függ, hogy mennyi eladó van.

– Igen. És régen volt ez a — micsoda? Ja, hogy mi volt? Hát tudod, ez a stacker army, hogy mindenki így stackkelgetett, és akkor így lehetett érezni, hogy így a plebek meg így. De most már ezt így nem érzed, mert olyan magasságokban az ár, hogy akinek így volt pénze, az már így kifogyott, nem?

– Ühüm. És ez is mutatja, hogy teljesen más nagyságrendekben vásárolnak.

– De nem, hát akkor rosszul gondolkodsz.

– Igen. Hozok még egy ábrát. Na: fiat pénzből egyre több van.

– Aztán igen, az fog most nagyot lökni, hogy megy a pénznyomtató.

– Már megy a pénznyomtatás rendesen az egész világon, csak nem erről szólnak a hírek.

– Értem. Ja.

– És a Bitcoin árfolyama az egy némi pár hónapos késéssel azt elég jól követi.

– Igen, itt látszik. Van is valami olyan ábra, ami azt exaktul mutatja, mert így egymásra vetítették a kettőt, hogy hogy megyünk. Bár ez csak ilyen spekuláció.

– Igen, nem tudományos.

– Nekem a Yellow-nak a chartelemzése tetszett a legjobban, azt meg fogom keresni. Az nagyon jó, ahol ilyen artikulálatlan hangon elemez. (nevetés)

– Olyat bármikor vállalok.

– Az nagyon jó, azt vágjuk be, vigyorogjanak a nézők is.

Ja, szóval igen, vágom ezt a likviditás meg minden. Csak azért — szerintem én az előbb azt mondtam, és nem gondolom, hogy rosszul gondolkodnék, hogy a retail, ami a pici ember, ami olyan, mint te meg én, tehát mi már nem tudjuk jelentősen növelni a bitcoinunk számát. Vagy hát én nem tudom. Szerintem azok, akik itt már évek óta bent vannak, azok nem kerülnek 0%-os kölcsönök közelébe.

Csak a Bitcoin treasury célra csinálnak ilyen elhullott állatokból — mint nyilvánosan kereskedhető cégek, ugye ilyen-olyan börzéken — ezeket fel lehet karolni persze természetesen, meg lehet treasury cégeket csinálni. És akkor ezeket bejáratott ilyen fiat raileken meg lehet pumpálni, hogy vegyenek bitcoint. Ha megoldja valaki ezeknek a custodyját, tehát azt, hogy hova tárolja, és nem kell ilyen papír bitcoint vásárolniuk, akkor ezek jók lesznek.

De jelenleg ugye — hát nem tudom, egyre több ilyen piaci szereplő lép be, egyre több ilyen cég. Most nagy reményekkel tekintünk az üstökös eljövetele irányába, hogy majd Jack Mallersék lesznek azok, akik nem papírbitcoint fognak vásárolni. Meg ezek a picik kvázi, ezek a kicsi japán cégek, meg a német biztosító — ezt se tudjuk, hogy ők hol tárolják.

Nekem az lesz ott furcsa, vagyis ott válik gyanússá, hogy ilyen milliárd dolláros tételeket bevásárolgatnak, és az áron ez meg nem látszódik.

– Tehát szerintem, amire itt nagyon szokott látszani…

– Igen, szokott, szokott.

– Szerintem ami itt nagyon jó lesz a jövőben, az a *don't trust, verify*-nak a verify része. Tehát olyan cégeket…

– Ühüm.

– …látok én jónak, amelyek a verifyt ki tudják, tehát az ellenőrzést meg tudják mutatni, hogy látjátok, itt vagyunk mi. Továbbá azt is meg tudják mutatni — például régen volt a… Ó, gyorsan akartam mondani, hogy hívják azt a csókát, aki az FTX-et bedöntötte a kutakodásával?

– SBF?

– Nem, nem, a kutakodásával — a Kobi, vagy hogy hívják? Na mindegy, majd eszembe jut. Tehát ilyeneket kell végrehajtani. Igenis kell megnézni, hogy hol vannak ezek az IOU-k, mert a Bitcoinnak az volt a lényege, meg az a lényege ugye, hogy ellenőrizhető készlete van. És igenis mindenki kezdjen bele a tesztelésbe, és döntse be azokat, akik kamuznak szerintem, mert nem egészséges. Mert a kamuzó bitcoin treasury cégek azok hátráltatják a Bitcoin elterjedését, mert a *number go up* technológiát szabotálják, tehát gyakorlatilag marketingeszközzé teszik a bitcoint.

Persze ezek idővel hullanak, meg én nem aggódom, tehát nem is félek attól, hogy ne hullanának ki. És amit Tamás itt mondtál is, ez a nagyobb visszaesések időszaka, az általában ugye eljön, ezek a lufik ki szoktak durranni. Mert hogyha így egy kicsit eljátszunk a gondolattal, hogy mondjuk két év múlva, ha ilyen mértékben vásárolgatják a bitcoint ezek a treasury cégek, akkor összeadva a teljes kimutatott készletük biztos, hogy több lesz, mint 21 millió. Szerintem ezt mindenki elismeri, vagyis hogy egyre inkább lehet ezt tudomásul venni, hogy papír bitcoin van, kell, hogy legyen, hiszen egy csomó helyen ki van engedve ez a verify, az ellenőrzés lehetősége. Van erről is chart.

Na, papírbitcoinról nézzük. Többféle ilyen becslés is van, itt ez a két alsó szürke csík. Tehát nem látom a skálát — ezek azt mondják, hogy ilyen 10-15-20% körül.

– Ühüm. Na hát az már azért elég durva. Arra becsülik.

– Annyira becsülik. Tehát hogyha most a kibányászott mennyiség mennyi, 19 pont valamennyi — néztem a chartot.

– Igen, akörül van ugye.

– Hát akkor azt szorozzuk meg 15%-kal, ugye akkor az mennyi? Ez kábé 2, 2,2 millió bitcoin, papír bitcoinnak gondolja a chart itt, a szerzők. Nem tudom, megnézném egyébként azokat a metódusokat, hogy ezt hogy…

– Hát persze. De azért az a papír bitcoin, hogyha orderbook szinten kerül ki eladási oldalon, na akkor letangózunk, és akkor sok hülye idióta barom, aki azt hiszi, hogy meg van mozgatva, meg összedőlt a rendszer, az pánikban fogja eladni. Van egy csomó ilyen.

– Ühüm.

– És akkor lehet nem dilutálni, hanem hígítás helyett sűríteni ugye a papírbitcoinereknek a készletüket, mert akkor ezeket a piacról föl tudják szépen veszegetni, és akkor majd visszatolják a saját körükbe. Hát csúnya játék, de hát ugye nyilvánvalóan nem játszanának így, hogyha nem tudnák, hogy mi a tét. Tehát minden eszközt be kell vetni, mert a tét akkora — tehát őrület, nem? Tehát a Bitcoin előtt nem volt soha ilyen eszközünk.

– Bocs. Érdekes.

– Na, szóval én örülök neki, ha jönnek ilyen cégek és veszik, mert amúgy ez tök jó. És azért jó, minél több cég veszi, meg minél több magánszemély, meg minél több kis állam, meg nagy állam, mert előbb-utóbb ott is rájönnek arra, hogy a papír bitcoinnal pont ugyanazt tudjuk csinálni, mint a fiat pénzzel meg a WC-papírral. Tehát nem sok mindenre jó, de amikor ezek a felhalmozók eljutnak erre a szintre, akkor külön fog válni az értéke az igazi bitcoinnak és a papír bitcoinnak.

Csak nekünk ezt a rendszert meg kell tartanunk úgy, hogy a papír bitcoin ne tudjon visszaszivárogni, tehát ne az legyen, hogy zárt rendszerekben Bitcoin denominációs papír bitcoin is kering majd. Érted? Vagy nem tudom, hát már most is az van.

– Hát abban az esetben, hogyha nem te validálod.

– Igen. Tehát ha mondjuk egy — nem akarok direkt szereplőt
neveket behozni, hogy itt aztán nekem legyen ez alátámasztva. De ha te nem saját tárcába tolod ki, hanem valaki megmutatja neked, hogy itt van, akkor az nincs. Érted?

– Hát igen, de mondjuk szerintem például a SEC-re lehet mutogatni, az amerikai tőzsdefelügyeletre, ugye — hogy is hívják őket. Hát ugye elvileg ők ellenőrzik azokat az intézményeket, akik ezeket a Bitcoin ETF-eket kibocsátják az USA-ban, és ők garantálják azt, hogy tényleg van mögötte bitcoin. Akkor én ezt el is hiszem.

– Szerintem is.

– Hát biztos nem korruptak.

– Persze, hogy nem. Én se lennék.

Na mindegy. Lényeg az, hogy tök jó, hogy egy csomó szereplő bejön, mert szerintem minél kisebb egy szereplő, annál inkább komolyan veszi azt — jó, nyilván egy ésszerű méretig —, hogy neki nem kell ilyen papírcoinos vonalon mozogni. Mert most egy Saylor meg egy ilyen, mit tudom én, több százezer coin birtokosa azt mondhatja, hogy hú, technikailag rohadt nehéz megoldani, meg mi van, hogyha ráesik egy műhold vagy egy zongora, és akkor annyi a kulcsoknak. Tehát technikailag ugye azért persze meg lehet oldani, csak azért ezek a nagy cégek nem egy személyre fogják bízni a kulcsokat, meg a kulcsmenedzsment is egy sokkal összetettebb probléma.

– Persze.

– Tehát valamilyen szinten érthető, meg értem is. És valahogy én a jövőben is úgy látom, hogy valószínűleg papír bitcoin is jelen lesz, csak törekedjünk rá, hogy ellenőrizgessük, és döntsük be azokat a cégeket, akik ilyen szinten csalnak.

– Hát igen, de én is azt javasoltam itt az előadásom elején, hogy egy cég használjon Strike-ot. Hát ja, úgyhogy én is bűnös vagyok.

– Hát ez nem bűnösség, ez csak maga a rendszer.

– De én meg tudtam indokolni.

– Igen.

– Elég jól meg tudtam indokolni, azt hiszem.

– Meg ugye az egy dolog, hogy használja. Tehát végül is nem arra biztattál senkit, hogy aztán véletlenül se utalja ki önrendelkező tárcába.

– Igen. Pont hogy egyébként ezeknél a cégeknél is, akikkel én kapcsolatban vagyok, mindenhol van hardvertárca is, és nagyon helyes, hogy legyen. Szoktak utalni.

– Ja, igen, tehát ez hozzátartozik a teljes képhez. Hát azért csináljuk a bitcoint, hogy saját rendelkezésünkben legyen, nem azért, hogy itt a bankok meg mindenféle őrzők őrizgessék. Ugyanakkor meg az jó, hogyha használjuk ezeket a Bitcoin szolgáltató cégeket arra, amire valók, és amilyen jó szolgáltatásokat nyújtanak, azok azért jól jönnek nekünk is, meg még sok-sok emberkének, főleg a kezdőknek ugye, az első lépésekhez.

– Kezdőknek, igen. Az önrendelkezést meg bármikor hozzá lehet illeszteni.

– Igen. Most én is megtanítottam egy srácot múlt héten bitcoint vásárolni a Strike-on keresztül. Úgyhogy ő angolul is nehézkesen ért, de így részletesen elmondtam neki, hogy akkor most ide kattintasz, akkor az történik — és a végén rájött, hogy hát ez tök egyszerű, és hogy ennyi az egész. És mondom, igen, most akkor vettél bitcoint, és van, és tök jó, most ezt bármikor meg tudod ismételni olyan léptékben, ahogy neked jó. Aztán ha van kedved és energiád beletanulni abba, hogy legyél önrendelkező, akkor szerintem az egy jó következő fokozat. De hogy ez az első lépés, ez meg kihagyhatatlan.

Tehát szerintem ezzel érdemes kezdeni ma, hogy könnyen meglépni egy olyan szolgáltatóval, aki így elintézi neked az egészet, és akkor nyugodt lehetsz annyira, hogy nála van a bitcoinod, mint ahogy nyugodt vagy annyira, hogy mondjuk a bankban van a pénzed — mert ez kábé ugyanaz. De hogyha meg biztos akarsz lenni benne, hogy a te pénzed a tiéd, akkor meg azt meg kell tanulni, hogy hogy tárold otthon a bitcoinodat úgy, hogy ne lehessen elcseszni.

– Igen. Beszélgetünk még az OP_RETURN-drámáról?

– OP_RETURN, tényleg.

– Nyomasd röviden!

– Röviden, jó. Hát nem tudom, hogy hányan hallottak róla, de volt egy — vagy folyik egy — hatalmas vita a Bitcoin fejlesztői, a Bitcoin Core démon fejlesztői körül, egy olyan változtatásról, ami szerintem egy kicsit ilyen vihar egy pohár vízben.

Ez még régebbről indult, onnan, amikor feltalálták az ilyen varázslós meg cicás képeket a Bitcoin hálózaton, ami éveken keresztül eléggé bedugította a blokkláncot, és megnyomta egy vagy 100-200 GB-tal a blokklánc méretét.

– Az NFT nevű innovációra gondolsz?

– Igen, amikor NFT-ket kezdtek csinálni Bitcoinon is. És hát ez mostanra egyébként elmúlt, lecsengett, mert most hogyha megnézzük a mempoolt, akkor kábé üres — általában, pláne a hétvégén vannak olyan blokkok, hogy nincsenek tele tranzakciókkal, félig üres blokkokat bányásznak a bányászok.

De a bitcoind fejlesztői kitaláltak egy olyan fejlesztést, hogy kivesznek egy olyan limitet, amivel ilyen nagyobb adatcsomagokat tartalmazó tranzakciókat ki tudtak szűrni a Bitcoin mempoolból. És itt a lényege, hogy ez miért vihar egy pohár vízben szerintem: hogy egyébként ha egy bányász ennek ellenére kibányászott egy ilyen nagyobb tranzakciót, azt elfogadta az összes node. Tehát gyakorlatilag a blokkláncba be tudott kerülni, csak a node-oknak a várakozó tranzakciói közé nem.

De hát ezt sokan egy ilyen jelzésnek értékelték, hogy hát akkor most már oda is be tud kerülni könnyen, nem kell megkerülni, nem kell trükközni a bányászoknak — akkor ez most felhívás keringőre újra ezeknek az NFT-spammereknek, hogy akkor megint csináljanak nagy NFT-ket a Bitcoinra.

Ez így programozói szemmel értelmezhetetlen, valószínűleg ebből is származott a konfliktus. Tehát hogyha van egy olyan korlát, amit nagyon könnyű megkerülni, akkor azt inkább vegyük ki, mert csak egyszerűsödik az élet. Ráadásul van egy-két optimalizálási előnye is, hogy sokkal egyértelműbbé válik olyankor, hogy egy tranzakció az ilyen adat, amit nem kell hosszú távon megőriznie azoknak a node-oknak, akik csak a pénzügyekkel foglalkoznak.

De akkora botrány lett ebből az egészből — és tényleg ilyen személyeskedő, vérre menő botrányok —, hogy most épp tegnap este láttam, hogy el is halasztották ezt a döntést, és nem került be a következő verzióba. Én szerintem vannak ennél nagyobb problémáink is. Viszont hogyha ebből is ekkora botrány lett, akkor inkább az az aggasztó, hogy mi lesz akkor, hogyha mondjuk a kvantumfenyegetést kell megoldani valahogy. Lehet, hogy akkor majd könnyebb lesz összefogni, úgyhogy lehet. Ja, nekem ez így jött le, ez az egész.

– Igen, ühüm. Ez tök jó, hogy így elmondod, mert én nem sokat értelmeztem ebből az egészből, meg nem volt kedvem utánaolvasgatni részletesen, hogy mi van. És nekem még így most áll össze a kép, hogy mi ez az OP_RETURN-háború.

– Van még egy olyan kiabálás, indok is, hogy egyébként a Bitcoin protokoll az alacsony szinten úgy működik, hogy amikor egy blokkot egy bányász kibányássza és örül neki, hogy megvan, akkor nem küldi szét az egész blokkot a hálózaton, ami ilyen több megabájt…

– Ühüm.

– …hanem gyakorlatilag csak a fejlécét meg a benne lévő tranzakcióknak az azonosítóit, ami sokkal kevesebb adat. És abból minden node össze tudja rakni a saját mempooljából — mert onnan már benne vannak a tranzakciók —, össze tudja rakni ugyanazt a blokkot, és aztán ellenőrzi a hashével, hogy tényleg sikerült neki. Legfeljebb hogyha valami tranzakció hiányzik, akkor azt az egy pár tranzakciót kell csak letölteni.

Most ugye hogyha kifiltereznek mindenféle tranzakciókat a node-ok, és egyre több tranzakciót filtereznek ki, akkor az egyre nagyobb hálózati forgalommal jár ezeknek a blokkoknak az összeszedése. Ez egy apró optimalizálási kérdés egyébként, ez se drámai kérdés, de ez is járt a fejében a fejlesztőknek, amikor azt mondták, hogy akkor vegyük ki ezt a filtert. Most egyelőre nem lesz kivéve.

– Az adás vége felé megemlíteném azt, hogy a honlapunkon most új tartalomként megjelent a könyvoldalon egy olyan könyv, amiről a múlt adásban pont szó volt egy cikk kapcsán, és utána jöttünk rá Kata segítségével, hogy ez a könyv már megjelent magyar nyelven. Ez *A holnap ára* Jeff Booth-tól, és ez egy bombajó könyv, én ezt meg is vettem, a Scolar Kiadó közvetlen üzletében. Ez egy nagyon jó könyv, ezt nagyon ajánlom mindenkinek elolvasni. Most nem mennék a részletekbe, hogy miről szól, de írtunk róla a honlapon is, meg egy cikk is van róla.

Aztán a link oldalon ott vannak a támogatóink, a [Hotel Aurora](https://hotelaurora.hu) és az [Atlantis](https://hotelatlantis.hu), akik négycsillagos wellness szállodák, és a bitcoint elfogadják és tartalékolják. Mindenképp ajánlom a bitcoinerek figyelmébe, hogy itt költsünk egy kis bitcoint, hogy őket is megörvendeztessük vele.

Aztán aki még nincs feliratkozva a YouTube csatornánkra, kérlek, hogy iratkozzatok fel, mert itt aztán rendszeresen jövünk ezekkel a jóságokkal, mint most is. Meg néha készítünk ugye feliratozott oktatóvideókat vagy egyéb oktatóvideókat, most épp gondolkodom egy újon. A Facebook oldalunkat is ajánlom mindenki figyelmébe, mert itt posztolunk a leggyakrabban egyszerű és gyorsan fogyasztható információkat.

És végül a figyelmetekbe ajánlom a pólómon is szereplő [Firefish](https://app.firefish.io/auth/sign-up?ref=HUSZONEGY)-nek a szolgáltatásait, akiket promózgatunk, van köztünk egy együttműködés. Ugye ennek a lényege, hogy ne adjuk el a bitcoinunkat, hanem ésszel, de vegyünk fel rá esetleg Bitcoin fedezetű kölcsönt, amit aztán szabadon lehet költögetni anélkül, hogy megszabadulnánk a jó kis bitcoinunktól.

Nektek van valami búcsúszó?

– Búcsúszó. Hát mindenki vásárolja szépen a bitcoint!

– Ja.

– Maradjon a jövő nemzedékének is.

– Vegyétek meg az összeset! Úgyhogy vásároljatok még többet! Tegyétek ki, és költsétek is azoknál a cégeknél, akik elfogadják — költsétek és pótoljátok!

– Igen, így van. Használjátok!

– Jól van, szuper. Köszi, Tamás, akkor az infókat. Neked meg, Anti, megint a rendhagyó hátteret és a háttérhangokat is köszönjük.

– Vettem.

– Izgalmas. Majd jelentkezel — most már járod a világot, és adod nekünk a változatos hátteret.

– Igen, igyekszik az ember.

– Akkor jó utazást neked!

– Köszönjük. Köszi.

– Köszi. A nézőknek, hallgatóknak meg minden jót. Sziasztok!

– Sziasztok!

Május 22-én Pizza Day lesz. Ez alkalomból két rendezvényt is szervezünk: az egyiket 22-én Budapesten, a másikat pedig 24-én, szombaton a Dunakanyarban. A honlapunkra kitettünk erről egy hírt is, ahol minden részlet megtekinthető. Gyertek minél többen, ismerkedjünk, használjuk a bitcoint és tanuljunk egymástól!

És tanulságos anyagok láttak napvilágot a honlapon a podcast megjelenését megelőző napon. Az előadás oldalon elérhetővé vált három új felvétel a Bitcoin Miskolc konferenciáról. Az oktatóvideó-oldalra kikerült a Firefish alkalmazás magyarított felületének bemutatója, mely egyik korábbi podcast adásunkban debütált, s ezúttal önálló formát öltött. A podcast oldal válogatás szekciójában pedig felbukkant a Bitcoin Kebab legfrissebb epizódja, melyben Feri rengeteg ütős mondatot sütött el.
