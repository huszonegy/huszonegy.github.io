Sziasztok! Üdv mindenkinek! Újra itt vagyunk a HUSZONEGY Bitcoin Podcastban, és végre van vendégünk: Openoms. Üdvözlünk itt az online stúdióban! Ma a node-okról szeretnénk beszélgetni, azért hívtunk egy profit. Egy pár adás alkalmával röppent föl a gondolat, hogy régen volt már node-os műsor, és hogy igazából ez adja a Bitcoin hálózat gerincét, ettől hívjuk decentralizáltnak. Jó, ha mindenki tudja, hogy miért fontos egy node üzemeltetése.

Ezúton is szeretnék mindenkit bátorítani, hogy kezdjen bele, mert ez egy nagyon jó tanulóút arra, hogy még többet megértsünk a Bitcoin működéséből, meglássuk a mögöttes irányokat: milyen fejlesztési célok vannak így a Bitcoin Core-on belül, esetleg más változatokban, ki mit tart fontosnak, hogyan állnak össze a Bitcoinnál az érdekek, satöbbi, satöbbi. Illetve beszélnénk pár ilyen megoldásról, hogy mik a jó Bitcoin node szoftverek, milyen alternatívák vannak, hogyan lehet nekikezdeni, meg egy csomó mindenről.

Gondolom, ti is futtattok — biztos vagyok benne, hogy Árpi is meg Openoms is. Nekem például minden gépemen szerintem van valamelyik verzió, igaz, nem mindig futnak, de a káoszban így lehet érvényesülni igazán. Szóval nyilván egy Bitcoin node akkor jó, ha mindig fut, ha be van rejtve mögé, satöbbi — de nem akarok lelőni minden poént.

Meg is kérdeznélek, Openoms, hogy szerinted miért fontosak a node-ok a Bitcoinban, a Bitcoin hálózaton? Illetve hogy nyilván ez egy esszenciális dolog, de hogy enélkül lehetne-e bitcoinról beszélni?

– Sziasztok! Ez jó kezdés, nagyon-nagyon szeretem a témát. Szerintem akkor éreztem magam bitcoinernek először, amikor a saját adatbázisomból néztem meg, hogy valóak-e a tranzakcióim, illetve a coinjaim léteznek-e a decentralizált hálózat szerint, és nem csak mondjuk egy centralizált exchange vagy egy barátomnak a szervere szerint, jó esetben.

Miért is fontos? Nekem elég régen már ez a Twitter, meg hát most már inkább Nostr profilleírásom — angolul mondom: *building nodes for security, privacy and freedom*. Ez azt jelenti, hogy azért építgetem ezeket a node-okat. Sokáig volt egy ilyen online boltom is, ahol terjesztettem ezeket a RaspiBlitz nevű projektre épülő kis Raspberry Pi konfigurált számítógépeket, illetve hát elég sokat építettem magamnak is. Most már mindenféle hardverem van saját használatra, illetve hát így a Blink wallettel való munkával kapcsolatban ugye céges node-ok is vannak szép számmal. Ők most jelenleg a Google-nek a cloudjában élnek, és ott gondozgatjuk őket, természetesen lezárva az egyéb figyelő szemek elől.

Na mindegy is. Szóval hát mik is ezek akkor — ugye a biztonság, a magánszféra és a szabadság volt itt a három fő szempont, amibe így próbáltam összeszedni. Nehéz elkapni minden egyes aspektusát, csak nagyon röviden ezekről.

Tehát biztonság: ugye miért is? Azért, mert az ember egy független forrásból — nem is egyből, hanem általában minimum 8-10, ugye szoftververziótól függő másik node-tól — letölti az egész blokkláncot, a blockchaint, amiben benne van a legelső blokktól, a genezisblokktól kezdve, hogy ugye a blokkok mit tartalmaznak, a tranzakciókat. Benne van az, hogy honnan hova mentek a tranzakciók, illetve hogy keletkeztek a bányászat során, és ebből fel tudja az ember építeni most 2025 májusáig, hogy azok a coinok, amik most így cirkulálnak az interneten, vagy éppen valahol lehorgonyoztak több évre, azok honnan jöttek.

És ez mind matematikailag bizonyítható módon ellenőrizhető, hogy ezek megfelelnek a Bitcoin egyetértés alapú szabályainak, ezeknek a konszenzusszabályoknak. És hogyha egyszer ezt matematikailag ellenőrzöm, akkor tudom, hogy ezek igazán érvényes, valódi coinok, amiket valaki, akinek megvan a privát kulcsa hozzá, az képes lesz elkölteni, mert érvényes bemenete lesz egy tranzakciónak.

És hogyha megvan az egész lista, amit ugye fel tud építeni az ember a legelejétől kezdve ennek a kis node szoftvernek a segítségével — ha megvan ez a lista, akkor meg tudom nézni, hogyha kapok egy coint, kapok egy bitcoint vagy pár szatoshit, akkor pontosan meg tudom nézni, hogy ez része-e ennek a listának, ami egy érvényes bemenetét képezheti egy következő tranzakciónak. Tehát elkölthető, tehát valódi bitcoin, tudom pénzként használni. Ez ugye azt jelenti, hogy így tökéletesen biztonságosan meggyőződöm arról, hogy érvényes-e. Arany esetében ez olyan, mintha beolvasztanád, és megnéznéd, hogy tényleg minden egyes molekulája valóban arany-e.

És ennek magánszféra szempontjából egy nagy előnye az, hogy nem kell megkérdezni mást, hanem én letöltöm ezt a teljes információt, ami jelenleg körülbelül 600-650 GB, tehát nem elhanyagolható. Nem kell az egészet tárolni, csak az utolsó pár GB-ot, de le kell tölteni az egészet ahhoz, hogy az ember validálni tudja teljes mértékben. De hogyha ezt letöltötte, onnan kezdve csak ezt a kis szervert kell megkérdezni arról, hogy valami ott van-e vagy nincs, illetve arra is, hogy új tranzakciókat képezzek.

És ez azt jelenti, hogy nem kell egy bank, nem kell egy exchange, nem kell semmi más ahhoz, hogy én egyrészt tudjam a saját egyenlegemet, illetve hogy tudjak mozgatni, fogadni, küldeni. És ez gyakorlatilag ugye hatalmat ad, de leginkább szabadságot ad arra, hogy ne kelljen senkinek az engedélyét sem kérnem ehhez. Így aztán ebből a szempontból a pénzemet szabadon tudom használni. Ez talán legrövidebben a szabadság aspektusa is. Aztán itt remélem, hogy belemegyünk még a részletekbe tovább.

– Hát a node-ok nélkül nincs Bitcoin, ők a hálózat szíve-lelke, és ugye a decentralizációt ők biztosítják. Tehát nem az van, mint a központi rendszereknél, hogy van egy node, a központi bank node-ja. A bitcoinnál ugye van rengeteg, és ahogy mondtad is, jó is, hogyha minden résztvevőnek van egy sajátja.

Itt adás előtt belementünk, hogy azért gyakran hallani azt a kifejezést vagy azt a terminológiát, hogy vannak bányásznode-ok is — hogy a valóságban igazából nem nevezhetnénk ezt pontosan így, hanem ha jól tudom, akkor egyféle node van, illetve hát a bányásznode az nem egy különböző node. Inkább azt lehet mondani a bányászoknak mint pooloknak vagy bányászpooloknak, hogy őnekik is vannak node-jaik, hogy ők is meggyőződjenek róla, hogy jók-e ezek a tranzakciók, ellenőrizhetik ezeket a blokkokat, satöbbi. Tehát gyakorlatilag egyféle node van, nem? A node. És ez pedig gyakorlatilag egy szoftver, egy számítógép, egy CPU, ami futtatja ezt a node szoftvert, ez pedig megfelel a Bitcoin aktuális protokolljának, nem? Vagy hogy lehetne ezt?

– Hát igen, ezek a konszenzusszabályok, az egyetértés szabályai, amik a bitcoint alkotják, ami azt dönti el, vagyis hát azt hozza létre, hogy mik az érvényes tranzakciók, mind visszamenőleg, mind előremenőleg. És ebből következik, hogy mik az érvényes, elkölthető coinok — tehát az elküldhető érvényes bitcoinnak a listája is ebből következik. És hát ezt betartható, illetve ezt vizsgáló szoftvert nevezzük node-nak, Bitcoin node-nak.

Ugye tipikusan az emberek 90 plusz százaléka Bitcoin Core típusú node-okat futtat, ami ugye ugyanazon a hálózaton van. Vannak ennek egyéb verziói: például a Bitcoin Knots, ami mostanában népszerű, mostanában feljött. De vannak más implementációk és más programnyelveken: például a libbitcoin az mondjuk talán pont ugyanabban a programnyelvben van, de van JavaScript-implementációtól Rustig, Góig, a BTCD — tehát sokféleképpen meg lehet vizsgálni ezt a szabályrendszert. Az a lényeg, hogy ezek egy következtetésre jussanak, de ugye a Bitcoin Core-nak van a legtöbb.

Ez az, amit Satoshi elkezdett ugye ebben a C++ nevű programnyelvben, 2008-ban tette közzé a klienst ezen a kriptográfiai levelezési listán, de ugye előtte már dolgozott rajta olyan körülbelül másfél évig. És ez volt a 0.1-es verzió. Eleinte több verzió jelent meg, aztán mostanában egy ilyen féléves ciklus van körülbelül, amikor ilyen major, jelentős verzióugrások vannak.

Most jelenleg ugye láthatjuk itt a képernyőn is, amit a [bitcoincore.org](https://bitcoincore.org) weblapon lehet letölteni, ez az egyik forrása. Ezt ugye a fejlesztők teszik közzé. Nagyon fontos ugye, hogy ezek alá vannak írva ilyen PGP-aláírásokkal több ember által, akik ezt reprodukálhatóan tudják építeni, ezeket a szoftvereket. Tehát hogyha máshonnan tölti le az ember, akkor is tudja ellenőrizni, hogy az van benne, amit itt közzétettek. És itt láthattuk, hogy ez most 29.0-ás.

– Ühüm.

– Éppen ez a legutolsó verzió. Tehát valóban ez a legnépszerűbb. Ugye ez azért is van, mert a GitHubon él ennek a kódja, illetve a diskurzus róla, és több száz contributora van, akik hozzáírtak ehhez már. Itt azért megemlíteném, hogy van például magyar Bitcoin Core contributorunk is, l0rinc személyében.

– Nagyon büszkék vagyunk, támogatjuk.

– Igen, ő is több mint 100 committal, több mint 100 kis kódcsomaggal hozzájárult ennek a szoftvernek a fejlődéséhez. És hát úgy mondjuk, hogy ennek a fejlesztése maga is decentralizált, bár természetesen hozzá van kötve például ahhoz a GitHub-repozitoryhoz, ehhez a GitHub-laphoz, ahol ugye — mint mutatod itt — ez a honlapnak a forráskódja. De nagyon egyszerű a GitHub-címe, mert [github.com/bitcoin/bitcoin](https://github.com/bitcoin/bitcoin) a Bitcoin kódnak az otthona. És itt ugye mindenki hozzászólhat, aki egy accounttal rendelkezik, illetve ilyen pull requesteket, ilyen változtatási kérelmeket is be lehet nyújtani.

Hát természetesen ez egy érdekes feladat, ezt így koordinálni, illetve valamilyen szintű rendet tartani, hogy ne fulladjon el az egész a zajban, hanem hogy a jelet próbálják megtartani, hogy azt ki lehessen fogni. Úgyhogy hát erről is vannak viták, ugye itt a diskurzusnak a moderálása, illetve ezeknek a változtatási kérelmeknek az elfogadása, hogy megy, hogy nem megy — ennek egy egész rendszere van.

És hát mondjuk ez inkább csak azért fontos tudni, mert itt láthatjuk, hogy 993 contributort jelez itt a GitHub, ami egy elég sok, fantasztikusan magas szám. Ugye ez több mint 15 éves fejlesztésnek a folyamata, és hát most is nagyon sok minden van, amit csinálnak rajta. Ezért használom én is ezt, mert ezt olvassák a legtöbben. És minden egyes sorváltoztatást, meg minden egyes sor kódot, ami már benne van, ezt több száz ember elolvasta és elolvassa, megbeszéli, és ugye hát a legnagyobb részt publikus formában megvitatja. És hát ugye
vannak a többi verziók, amik mondjuk valamilyen más célt szolgálnak, nem egy ilyen generikus klienst. Hanem mondjuk például az LND Lightning-implementációnak van ez a BTCD…

– Ühüm.

– …ilyen társa, ami szinte egy Bitcoin implementáció, csak abban a Go programnyelvben. Amivel láttuk is, hogy volt olyan, hogy azok a node-ok például leestek a hálózatról egy-egy nem teljesen sztenderd vagy nem szokásos tranzakciónak a megjelenésekor, amit épp nem tudtak validálni, mert nem pontosan úgy implementálták ezeket az egyetértés szabályait, mint ahogy például a Bitcoin Core-ban ez van.

Szóval itt kezdeném, hogyha akarok futtatni egy node-ot.

– Igen. Tehát ez a legegyszerűbb, ezt bárki bármilyen géppel otthon meg tudja csinálni.

– Igen. Tehát ez a [bitcoincore.org](https://bitcoincore.org) website — tehát nem ez a technikai dolog a GitHubon, hanem csak egyszerűen le lehet tölteni az exe file-t Windowsra ugye, amit talán a legtöbben használnak ilyen asztali gépnek még mindig, de mindenféle Linux-verzióra van, macOS-re van, és egyéb ilyen egzotikusabb formátumokra is. Úgyhogy érdemes ezt letölteni.

Amit ez csinál, ugye ez egy teljes értékű node szoftver: azt fogja csinálni, hogy először is van egy pár beépített, ilyen úgynevezett seed node, amihez kell kapcsolódni ahhoz, hogy a többi node-ot lássuk. Tehát ezt be lehet adni manuálisan is: hogyha van az embernek egy node-ja, vagy a barátjának van egy, ami tudottan — vagy megbízunk abban, hogy — a Bitcoin hálózathoz kapcsolódik, akkor ahhoz lehet kapcsolódni, és az ahhoz kapcsolódó egyéb node-okhoz is, utána már ugye azt a tudást megszerezzük tőle, és akkor el tudunk indulni. Ha az ember egyedül indul, akkor van egy pár ilyen megbízott node, amin lehet indulni, akik több száz másikhoz kapcsolódnak, és így az ember nagyon hamar eljut oda, hogy alapértelmezetten azt hiszem, egy ilyen 10 node-hoz kapcsolódik ez az új szoftver, és elkezdi letölteni a blokkokat, illetve először a blokkfejléceket, aztán a blokkokat. Ebbe szinte nem megyünk bele. Az a lényeg, hogy ez egy ilyen 600 GB-os dolog lesz, egy gyors gépen akár egy fél nap alatt is megy.

– Ez nem kevés adat.

– Ja, igen, tehát közel 1 TB-hoz közelít. Tehát azért kell hozzá egy — hogyha az egészet akarja tárolni az ember, akkor egy nagyobb lemez kell hozzá. De be lehet állítani úgynevezett prune funkciót, ami hát „metszés" angolul. Az a lényeg, hogy akkor csak azt a legutóbbi, egy ilyen csúszó ablakot tartja meg, ami lehet mondjuk 10 GB, és akkor annyi lemezfelhasználással elvan. Ez mondjuk azért egy 50 GB-ot rá kell szánni.

– Lehet egyből ilyen csökkentett adattartalmú node-ot is installálni, vagy előbb mindenképp le kell tölteni a nagyot?

– Igen, tehát letölteni le fogja, csak nem fogja tárolni. Tehát ez úgy működik, hogyha beállítunk mondjuk egy ilyen „tárolja le a lemezre" opciót — azt hiszem, minimum ez egy ilyen 5 GB-os prune. De az a blokklánc, illetve emellett tárolni kell még azt az UTXO setet, az elkölthető coinoknak a listáját, ami ugye folyamatosan épül az elejétől kezdve. És hát jelenleg ez elég magas, tehát ez most ilyen 15 GB körül van, szóval azt hozzá kell adni. Úgyhogy ezért mondom, hogy egy ilyen 20 GB minimum, de mondjuk én egy ilyen 50-nel kezdenék. De be lehet állítani, hogy mondjuk egy ilyen 10 GB-os csúszóablakot tartson meg, ami azt jelenti, hogy letölti az első 10 évet, ami mondjuk legyen 10 GB, és amint ezeket validálta, elkezdi eldobni a legrégebbi blokkokat, és megy, és tölti le az újabbakat.

– Tehát gyakorlatilag egy közepes játék méretét hogyha feláldozzuk a Winchesterünkön, akkor megbizonyosodhatunk arról, hogy a bitcoinjaink esetleg nem hamisak, vagy nálunk vannak, ugye? Tehát például aki vásárolt ilyen centralizált tőzsdén — Coinbase, itt-ott-amott —, az ezt nem mondhatja el magának egészen addig, amíg azt nem húzta ki saját custodyba. És erre például tök jó egy saját node, hogy ott ezt tudod ellenőrizni.

– Igen. Tehát ahogy mondtuk, ez azt csinálja, ami eltart egy mondjuk csúcsgépen fél napot, egy közepes használt laptopon egy pár napot, egy Raspberry Pi négyes verzión mondjuk két hét, egy ötös verzión már egy hét alatt is elkészül ez az egész letöltés, illetve a verifikáció. Nem a letöltés a nagy dolog, mert az olyan, mintha egy torrentet töltenénk le: tehát hogyha egy nagyobb, 4K-ban elkészült 50 részes sorozatot letöltünk, az bőven több.

– Meg egy pár ilyet töltögettünk már le, volt.

– Hát bármit — ez mindenkinek a saját dolga, de hasonló a technológia, azért hoztam fel. Ez a peer-to-peer fájlmegosztás, ez történik a Bitcoin node-ok között is, ugyanúgy, mint a filmek feltöltése, vagy szoftverek vagy egyéb dolgok, könyvtárak, amik a torrenthálózaton meg vannak osztva. Ott is egy torrent kliens az gyakorlatilag egy torrent node, és ebből a szempontból nagyon hasonló mondjuk egy Bitcoinhoz.

– Ühüm.

– Csak itt ugye fix az a dolog, amit letölt: csak egy dolgot keres, a Bitcoin blokkláncát, ugye egy torrentkliensben meg bármit. Úgyhogy ez talán egy érdekes párhuzam, hogy így remélhetőleg ismerős lehet olyannak, aki nem csak streaming szolgáltatásokon nőtt fel, hanem látja ezt a szabad internetet is.

Én még itt hozzátenném, hogy — nem tudom, ez most meg van-e osztva — ez a [Bitnodes](https://bitnodes.io) térképe. Egy élő térkép, vagy hát nyilván van benne egy pár milliszekundum csúszás, illetve ő itt így random kijelöl ilyen címeket, és mutatja az IP-címeket, hogy geolokáció szerint ő hova gondolja ezeket a node-okat tenni.

– És itt bejön egy fontos kérdés. Ugye egyrészt volt ez a decentralizált természete a Bitcoinnak, hogy ez mennyire jó, mert akár egy regionális áramszünet esetén sem megy tönkre a Bitcoin hálózat: kilőhetik Európát vagy Indiát vagy akármit, de ugye amikor visszakapcsolunk, akkor a node-ok újra leszinkronizálnak ebből a többcsatlakozásos peer-to-peer csatlakozási formából, és akkor ugye újra letöltik a blokkokat maguknak, satöbbi. Szóval amit itt most látunk, azok ezek a node-ok — de lehet ezeket a node-okat úgy is installálni, hogy ne legyenek láthatóak ugye a térképen.

– Igen. Tehát ezek azok a node-ok, amik a publikus, úgy otthoni vagy hát egy adatközponti IP-címüket, internetcímüket így sugározzák. Tehát azt mondják, hogy „helló, itt vagyok ezen a publikus IP-címen, hozzám lehet csatlakozni". És ez azért jó, mert gyakorlatilag reklámozzák a helyüket, ugye valakinek ez előnyös.

Na most egy magánembernek ez nem feltétlenül előnyös. Sőt, illetve abból a szempontból sem előnyös, hogyha én új tranzakciókat küldök, vagy valaki új tranzakciókat küld egy ilyen fix publikus IP-címről — akkor ez azért, hogyha valaki aktívan figyeli ezt a hálózatot, úgy, mint mondjuk ez a Bitnodes, csak rosszindulatú módon, és azt nézi, hogy melyik tranzakció melyik IP-címről indul el, és így terelgeti el a földön, a térképen, akkor ugye elveszti a magánszféráját abból a szempontból, hogy látják, hogy milyen tranzakciókat küld.

És hát ugye ennek a két dolognak a megkerülésére, illetve megoldására van a legnépszerűbb megoldás, ez a Tor hálózat. Ez a The Onion Router, ez a hagymarouter. Azért hívják hagymának, mert ilyen rétegekbe csomagolva, rétegekbe titkosítva van az adat benne. Tehát úgy utazik, hogy maga a Tor hálózat is node-okból áll, és az egyik node elküldi a másiknak — tehát egy ilyen többszörösen becsomagolt adatot elküld egy node-nak, ami a legkülső réteget ki tudja, tehát a titkosítását fel tudja oldani, vagyis ki tudja bontani, és az megmondja neki, hogy a következő állomás melyik node lesz, de nem látja a kettővel lejjebb lévő réteget. És így aztán csak a legvégső node fog eljutni az értelmes adatcsomagig, ami a hagymának a belseje. Tehát három-négy-öt ilyen ugráson keresztül egyik node sem tudja, hogy mi volt az igazi kiindulása az adatcsomagnak, illetve ahogy átmegy rajtuk, nem tudják, hogy mi a végcélja sem.

És ez a hálózat teszi lehetővé azt, hogy ne lehessen tudni, hogy melyik node-nak hol a valós fizikai léte, tehát melyik publikus IP-címről indult el ez, mert egy ilyen hagymásított Tor hálózaton keresztül mennek. Ennek az is az előnye, hogy ezen a hálózaton keresztül befelé is lehet kapcsolódni. Tehát nem kell sugározni a publikus IP-címünket ahhoz, hogy mondjuk más tudjon hozzánk kapcsolódni, hanem ez fenntartja, illetve segíti a decentralizációt azzal, hogy a Tor hálózaton futó node-ok egymáshoz szabadon tudnak kapcsolódni, de emellett nem jelennek meg ezen a térképen, mert így nem lehet őket fizikai léthez, vagy hát a fizikai helyzetükhöz kötni.

– Ühüm.

– És nem csak Tor network van, hanem van két másik is, ami már alapértelmezett módon implementálva van így a Bitcoin Core szoftverbe. Van egy I2P nevű — ez az Invisible Internet, láthatatlan internet. Az olyan, mintha egy ilyen belső, egy ilyen VPN-hálózat lenne, illetve abban is vannak ilyen becsomagolt titkosítások. Meg van egy CJDNS nevű, ami szintén egy ilyen privát VPN-hálózat, aminek nincs központi szervere.

Ezeket gyakorlatilag elég könnyű aktiválni, tehát csak egy szoftvercsomagot le kell tölteni. A [Tor Projectnek](https://www.torproject.org) a website-ját gyorsan meg is mutathatjuk: itt le lehet tölteni egy ilyen böngészőt, ami ezen keresztül tud weblapokat megnyitni, és elrejti a kiindulási IP-címeket, illetve egy ilyen démont is, ami nem egy gonosz dolog, hanem egy olyan szolgáltatás, ami a háttérben fut, és mindig biztosítja azt, hogy tudjunk ezen az úton keresztül csatlakozni. És ha ezt letöltjük, akkor a Bitcoin Core node-unkat is tudjuk ehhez kapcsolni, így el tudjuk rejteni. Ezt ugye a Bitcoin Core beépítve is
tudja. Tehát hogyha rendelkezésre áll egy ilyen Tor-démon, ami egy bejáratot ad ehhez a hálózathoz, akkor ahhoz csak egy kis konfigurációs beállítással, gyakorlatilag egy ilyen kis checkboxszal tud már kapcsolódni hozzá.

– Ühüm.

– És hát ezt mondjuk egy átlagos otthoni felhasználónak így igazából ajánlott, mert ugye ebben a rejtőzködésben van egy biztonsági előny. Az, hogy egyrészt nem jön valaki oda, hogy á, itt fut a Bitcoin node, amiről esetleg látta, hogy hú, ezek a tranzakciók innen jöttek, biztos van ott még több is — illetve nem sugározza azt, hogy ebben a házban Bitcoin node fut.

– Ühüm.

– Ezért én mindenképpen azt részesítem előnyben. Meg ezek az előre elkészített ilyen node-csomagok, mint a RaspiBlitz, a Start9 vagy az Umbrel, amikbe talán kicsit belemegyünk később, ezek alapértelmezetten így futnak.

– Ühüm.

– Biztonságot ad, illetve szabadságot is abban, hogy egy egész sötétnek nevezett internetre tudunk kapcsolódni.

– Ühüm. Na hát ez egy nagyon jó kezdés annak, aki ebbe bele szeretne kóstolni: ugye a Bitcoin Core-t fölinstallálni és egy Tort felinstallálni a PC-re. De mi van akkor, ha valaki komolyabban szeretne ezzel foglalkozni, és azt mondja, hogy dedikál erre valamilyen hardvert? Tehát azt mondja, hogy van egy régi számítógépem, és akkor arra teszek mondjuk egy Linuxot, vagy legyen Windows az egyszerűség kedvéért — bár nyilvánvaló, hogy azt te sem szereted annyira. Mindegy, van egy számítógépe. Milyen lehetőségei vannak, hogyha nem az otthoni PC-t, tehát a mindennapi feladatokra használt PC-t szeretné befogni?

Ugye te mindig meg szoktál így jelenni ezeken a Bitcoin konferenciákon, és ott mutogatsz mindenféle kütyüket. Meg szerintem volt is már korábban adásban erről szó, hogy van egy csomó olyan kis eszköz, ilyen kis szerverek, amik Bitcoin node-ként használhatóak. Ugye a Raspberryn van a RaspiBlitz, amiről te sokkal többet tudsz majd elmondani, mint én, illetve vannak az Umbrelek meg a Start9 — ugye ami ilyen komolyabb node szoftverek. Vagy ezeket minek lehetne nevezni? Inkább otthoni szervereknek?

– Hát ez ugye kicsit átfed az ilyen generikus, általános otthoni szerverekkel, főleg az Umbrel leginkább, de a Start9-ben is vannak olyan szolgáltatások, amik nem csak Bitcoinhoz kapcsolódóak. Hanem mondjuk egy Nextcloud, ami ugye egy ilyen Dropboxot vagy a Google Cloudot tudja kiváltani, vagy egy ilyen — nem tudom — e-mail-kezelők, VPN, ugye ennek hosszú listája van. Ezek pont így vannak megtervezve, hogy ezek ilyen kis platformok, amikre van egy nagyon egyszerű operációs rendszer, ami nem arra van tervezve, hogy azon futtasd a szövegszerkesztőt meg a webböngészőt, hanem csak arra, hogy a háttérben folyamatosan futtasson ilyen szolgáltatásokat, amiket később ezeknek a saját weblapján el tudsz érni. És gyakorlatilag ez mind a három ilyen példa. Van több is, persze, hosszú a lista, de ezek a legnépszerűbbek.

Itt ugye az a kérdés, hogy mire tudjuk ezt rátelepíteni. Hát itt éppen közben rákattintottál itt a Start9 app-piacterére, ahol láthatjuk, hogy ugye az első kettő, ez pont ilyen Lightning-szolgáltatás, aztán a blog, igen, egy ilyen blogmotor. Aztán van itt böngészőtől kezdve RoboSats, Alby.

– Igen, igen.

– Ez már egy nagy lépés előre abból a szempontból, hogy kinyílik az ablak annak, hogyha már van egy Bitcoin Core node-unk, ami mindig fut, ahhoz nagyon sok egyéb szolgáltatást lehet csatlakoztatni. Például egy Lightning node-ot, ami mindig rendelkezésre állhat, illetve az ember azzal is szolgáltathat másoknak elérhető dolgokat. Például játszhat maga is bankot: tehát hogy nemcsak a saját bankod lehetsz ezzel a megoldással, sokak bankja is — itt már megnyílik a szoftveres lehetősége annak, hogy több embernek is lehet a pénze a kezedben, illetve segítesz nekik abban, hogy gyorsan és olcsón küldözgethessenek például a Lightning Networkön. Akár egy családon belül, de akár céges dolgokat is lehet erre építeni.

Hát ugye mibe kerül ez? Itt is látszik, hogy amit ők árulnak ugye itt Amerikából, ezek ilyen 600 és 900 dolláros mini PC-k. Hát ezt azért meg lehet oldani olcsóbban is, attól függ, hogy mire készül az ember, illetve milyen hosszú távra tervez. Hát dollárban tudom: ugye egy 300-400 dollár, az mondjuk maximum 150 000 forint. Ebből lehet venni megbízhatóan új számítógépet, amin ezek a szolgáltatások elfutnak. Na tessék, itt az Umbrelnek a mini PC-je, az pont 154 000 forint.

– Ühüm.

– Ugye az ember ezt meg tudja venni külön is, tehát rá lehet installálni saját magának. A RaspiBlitz is egyébként fut nemcsak Raspberry Pi-on, hanem egyéb más hardveren. Tipikusan ugye azért Raspberry Pit kezdtünk el használni, mert az a legolcsóbb — illetve ez régebben így volt, most már ezek a mini PC-k is felzárkóztak, illetve a használt számítógépek.

Tehát nekem az, amikor valakinek ajánlom: hogyha van a fiókban egy régi laptop, és van benne mondjuk 8 GB RAM — ugye a Raspberry Pi-ban szintén van 8 GB RAM —, van benne egy processzor, aminek legalább van két magja, de általában van négy magja egy 10-15 éves számítógépnek is. Illetve ugye kell tárhely: tehát most van az opció, hogy nem tároljuk le az egész blokkláncot, de ha már ilyen ráépülő szolgáltatásokat csinálunk, akkor jó, hogyha nem kell minden egyes alkalommal letölteni az egész blokkláncot, amikor vissza akarunk nézni az időben, hanem az ott van nekünk lementve, és akkor az nem fog változni.

Ezért minimum egy 1 TB-os, leginkább SSD ajánlható, hogyha mondjuk az ember három-négy évnél tovább tervez, akkor inkább legyen az 2 TB-os. Ugye itt arról van szó, hogy mondjuk 50 000 forint az 1 TB-os Winchester, 70-80 000 forint a 2 TB-os. Nem a világ vége a költség, de azért jelentős. Ezért fontos az, hogy az embernek a saját működő, akár minden nap használt számítógépére is le lehet tölteni, úgyhogy csak 20-30 GB tárhelyet áldoz fel, és csak időszakosan futtatja a Bitcoin node-ját, aminek az a tulajdonsága, hogy mondjuk egy hetes-hónapos lemaradást pár perc alatt be tud hozni.

– Ühüm.

– De hogyha van egy dedikált szervere, akkor meg azzal lehet kezdeni, hogy tényleg vagy egy használt számítógép, hogyha van megfelelő, vagy újonnan körülbelül innen indul, egy ilyen 150 000 forinttól. És akkor ugye lehet már másban is gondolkodni, tehát akkor lehet egy ilyen saját tárhelye is — ugye ezek lehetnek ilyen belső hálózaton megosztott tárhelyek is, lehet rajta torrentezni.

– Én itt hozzáfűznék egy kis dolgot, bocs, hogy így erőltetem ezt, de szerintem mindenki hallott így a napokban, hogy az elmúlt héten volt egy nagyobb áramszünet Spanyolországban, egy napig nem ment, ugye. És akkor egy barátom rám írt, hogy te, figyelj már, mi van akkor, hogyha ez az áramszünet mondjuk megtörténik Magyarországon, és mondjuk nem lesz két-három napig áram, vagy ne adj isten tovább? Mondom, nyilván nem lehet erre nem felkészülni, de valószínűleg a magyar grid sokkal stabilabb. Tök mindegy.

És ugye itt be lehet hozni azt, hogy egy ilyen kicsi számítógépnél esetleg lehet szempontja valakinek az, hogy egy akkumulátorról tovább menjen. Tehát például ezek a mini PC-k, ezek sokkal kevesebbet fogyasztanak, mint egy nagyobb. Tehát akár ez is lehet szempont, nem, a hardverválasztáskor egy node-nál?

– Hát az, hogy igen, most hogy mennyibe kerül egy évben az áramköltség — ugye az egyikre fizetsz, nem tudom, 3000 forintot egy évre, egy szerverre meg fizetsz 100 000 forintot, de ugye akkor sokkal több mindent csinál. Tehát még mindig sokkal olcsóbb, mintha ezt bérelned kellene, tehát nincs rá szükség.

Az, hogy most áramszünet esetén — ugye ott azért az internetszolgáltatás is megszűnhet, egy hosszabb áramszünetnél főleg. Tehát hogyha a mobiladótoronynak is elmegy az árama, akkor kell a Starlink.

– Igen, a Starlink, az igen, annak azért több kell már.

– Hogyha az ember akar mondjuk műholdról letölteni blokkláncot, akkor például a Blockstream árul ilyen szettet, ami olyan, mint egy Starlink-vevő, csak az ő általuk bérelt műholdakra kell ráállítani, és ők folyamatosan sugározzák az újabb blokkokat, amit így le lehet tölteni anélkül, hogy az embernek egyébként internetkapcsolata lenne. És hát az, hogy küld az ember Bitcoin tranzakciót — ugye hogyha már tudja, hogy mik a legutóbbi blokkok, akkor tudja, hogy mik az érvényes coinok, és onnantól kezdve el tud küldeni tranzakciót. És hát ezeket bizony el lehet küldeni nemcsak interneten, hanem lehet SMS-ben is, vagy lehet rádiófrekvenciákon is, egy kis antennával, amik ugye szükség esetén azért megjelennek.

Ilyenkor nem nagyon nézegetjük, hogy van-e CB rádió otthon, meg van-e ilyen kis Meshtastic eszközöd vagy LoRa eszközöd otthon, de hamar felértékelődik, hogyha éppen nem tudunk beszélgetni. És egy Bitcoin tranzakció, ez pont az a dolog, amit az ember meg tud így tenni.

– Úgy tudom, hogy idén július 1-je után nagyon megnehezedik majd ezeknek a kis rádiós eszközöknek a forgalmazása. Ezt nem is tudom, valamelyik európai uniós jogi kezdeményezésben olvastam, majd megpróbálom megkeresni.

– Igen.

– Akkor ez esetben szerintem gyorsan csináljunk egy másik adást erről a témáról.

– Szerintem is kellene.

– Mert hát ismerhet mindenki. Szeretek sok mindent belelátni sok mindenbe, de nem baj, ha nincs igazam.

– Az ember, főleg hogyha mondjuk Lightning-csatornái is vannak, és potenciálisan pénzt veszthet azzal, hogyha mondjuk két hétnél tovább offline van — az azért ritkán történik meg, vagy nagyobb problémák is adódnak akkor, de inkább az adatvesztés a kérdés. Tehát egy szünetmentes táp az mindenképpen ajánlott bármilyen szerverhez, de főleg akkor, hogyha pénzt tart rajta az ember, vagy azt fogad és küld.

– Például bitcoint.

– Például bitcoint, hát igen.

– Tehát azok drágábbak, nem? Az ilyen euró node-ok.

– Igen! És tehát azért jó a szünetmentes táp, mert hogyha viszont áramingadozás van, vagy csak így lekapcsol, felkapcsol — nálunk például
csak egy sima villámlás közepette ez így megtörténik, vagy eső hatására is. Ezt már mondjuk ne is mondjam, nem is tudom, miért, de mindegy. De mivel nekem vannak ilyen szünetmentes tápjaim, ilyenkor a számítógépem nem kap egy ilyen gyors, hirtelen megszűnését a tápellátásnak, hanem mivel össze van kapcsolva ezekkel a szünetmentes tápokkal, így szépen le tud záródni elegánsan, úgymond — vagy hát nem tudom, ezt angolból próbálom fordítani. Tehát úgy, hogy elment mindent, ami éppen írás alatt van, és nem egy írási folyamat közepén kap egy ilyen gyors kikapcsolást, ami azt okozhatja, hogy adatvesztés történhet, és akkor ugye rossz esetben nem is olyan adatot vesztesz, ami pótolható, például egy Lightning node esetében.

Úgyhogy ezt mindenképpen érdemes megkerülni, és azért ezek az áramszünetek ritkán pár órások, inkább csak egy pár perc, és akár egy nagyobb szervert is lehet olyan elemmel ellátni, ami egy pár percig elviszi, amíg rendesen le tud záródni. Itt van az előnye a laptopoknak, amiben ugye beépítetten van. Van, aki azt vitatja, hogy ezek nem arra vannak tervezve, hogy folyamatosan menjenek.

– Kibírja.

– Illetve hogy a hűtés meg satöbbi. Minél nagyobb egy laptop, annál jobb, mert annál nagyobb a hűtési felület, illetve van benne ventilátor — minél hangosabb, annál jobb.

– Mármint ezt ne tegyük a radiátorra.

– Igen, igen, igen.

– Meg az éjjeliszekrényre.

– Igen.

– Tehát hogy a routert kell az éjjeliszekrénybe tenni, a fejed mellé.

– Nem, igen. Én szeretem például, hogyha ezek vezetékkel kapcsolódnak — tehát hogyha például ez a napi több gigabájtos forgalmazás, ami esetleg előfordul ugye egy ilyen decentralizált Bitcoin hálózaton, ahova hozzám is kapcsolódnak, meg én is kapcsolódok, az hát jobb, ha vezetéken folyik. Mert egyrészt azt csak az látja, akihez oda van kapcsolva vezeték, másrészt meg…

– Ja, nem szoktam alufóliasapkában aludni, de azért…

– Ja, hát a telefonomat, ha lehet, repülőgép-üzemmódban tartom a fejem mellett.

– Igen. Akkor többet sugároz, állítólag.

– Na mindegy, ez már nagyon alumíniumirány. Szóval ilyen mini hardverek. A RaspiBlitz az tök jó, nem? Mert az így gyakorlatilag mindenre rámegy.

– Hát erről azt kell tudni, hogy a RaspiBlitz a legszabadabb ilyen projekt, tehát ez teljesen ilyen önkéntes alapú fejlesztésnek az eredménye. És ez a legelső is, ami így elindult, a Lightning Networknek az elindulásával, az elterjedését segítve indult 2018-ban. Ez egyébként egy német hacker közösség által épített, illetve sokáig árult is — most már éppen nem árulják, mert pont a nagyon ingyenes és nyílt mivolta miatt így árulni nem igazán profitábilis. De továbbra is elég sok hozzájáruló van a kódhoz. Én is egy ilyen második-harmadik legjelentősebb kód-hozzájárulója vagyok ennek a projektnek.

Itt ez gyakorlatilag azt tudja, hogy mindent, amit mondjuk én használok Bitcoin Core-hoz kapcsolva, azt így beleépítem ebbe a rendszerbe. Ezt a rendszert használom én is. És ez a lehető legegyszerűbben próbálja ezt így elérni: nem használ dockert, nem használ ilyen egyéb virtualizációs megoldásokat, mint a többiek, hanem egy tiszta Debian típusú Linuxon futnak ezek a szolgáltatások, és a forráskódból épülnek fel. Tehát a lehető legkevesebb bizalommal van ez így ellátva.

De emellett elérhető egy ilyen webfelülete, ahol színes gombok és ábrák vannak. Meg van egy ilyen — a legjobb módja az SSH-val való kapcsolódás, ilyen Linuxos terminálos módja, ahol szintén van egy ilyen elérhető menürendszer, ami segít abban, hogy nem kell a parancsokat megtanulni, hanem vannak ilyen rámutató segédrendszerek. És hogyha valaki ebben el akar merülni, akkor ez egy nagyon jó módja annak, hogyha még akár nem akar Linuxot használni mondjuk asztali gépként — de aki szerverként, ugye az sokkal jobb, mindenképpen előnyösebb, meg érdemes abba beleszokni, hogyha már valaki ilyesmit csinál.

Úgyhogy hát ezt beállítani nem sok. Meg itt próbálunk közzétenni ilyen bevásárlási listát, ami gyakorlatilag linkekkel is el van látva — ami nem kötelező onnan vásárolni, csak az rámutat egy olyan típusú összetételű dolgokra, amit mi kipróbáltunk, és tudjuk, hogy jól működik. Itt például a Raspberrynek az ötödik verziója van ajánlva, legalább 8 GB RAM-mal. Van hozzá kis hűtés, egy gyári ilyen tápkábel, egy 1 TB-os SSD — mondom, ez lehet inkább kettő is. A következő ilyen release-ben, a következő szoftververzióban már mindenképpen a kettes TB-ot fogjuk ajánlani.

És ahhoz már ugye ebben az operációs rendszer, ami nem nagyon ír a lemezre, de könnyen kicserélhető, ez SD-kártyán fut.

– Ühüm. Nem baja ennek az SD-kártya? Mert sokszor régen lehetett hallani, hogy az SD-kártyás node-ok tönkremehetnek, meg speciális SD-kártya kellett ugye hozzájuk.

– Az SDHC igen, SDHC mindenképpen, az endurance típusú, tehát ilyen tartós, mondjuk ilyen dashcambe vagy ilyen folyamatos felvételre optimalizált SD-kártyát érdemes használni. De itt mi nem sokat írunk rá, tehát semmilyen olyan dolog, aminek az elvesztése kritikus, nincs az SD-kártyán, csak az operációs rendszer. És pont ez a lényeg, hogy ugye van a lemez, ami minden értékes adatot tárol, és az operációs rendszert azt meg ettől függetlenül ki lehet cserélni.

Tehát akár úgy is, hogy volt egy SD-kártyám, amin az Umbrelnek a szoftvere futott, és plusz ugye az adat — a blokklánc, illetve a Lightning node-oknak az adatai —, azok a lemezen voltak. Le lehet tölteni a RaspiBlitznek az image-ét, ezt a fájlt, ami az operációs rendszert tartalmazza, és ha ugyanabba a kis gépbe beledugom, amin az Umbrel futott, akkor ez fel tudja húzni a RaspiBlitznek az infrastruktúráját. Ami ugye szabad kezet ad, elég jó sokkal jobban, illetve közelebb van az ember a dolgok forrásához, kevesebb a — hát sokszor a könnyű használhatóságot megcélzó, de ugyanakkor a kezedet megkötő — ilyen absztrakciók. Tehát egy RaspiBlitzen mindent tudsz csinálni, amit a szoftver megenged; egy Umbrelen viszont csak azt, amit a fejlesztői implementáltak, és adtak rá neked eszközt, hogy beállíthasd. Szóval ez egy ilyen kicsit félelmetesebb elsőre talán, de ugyanakkor meg a szabadabb módja ezeknek a szoftvereknek a használata.

És hát mi kell még hozzá? Tehát ahhoz, hogy amikor már összeraktad az SD-kártyát, a lemezt, magát ugye a csatlakozót, amivel hozzárakod a Raspberry Pi-hoz ez esetben, vagy akár a mini PC-hez — akkor itt vannak ezek az operációs rendszert tartalmazó image fájlok, ami egy lemezképfájl, amit le lehet tölteni torrenten vagy csak erről a szerverről. Meg lehet nézni ugye, hogy ez szintén ilyen biztonságos aláírással van ellátva, amit a főfejlesztő, a rootzoll — akit egyébként ő DJ-ként is szokott fellépni a Bitcoin konferenciákon, úgyhogy sokan ismerik máshonnan — szokta ezeket aláírni. És ezt csak fel kell másolni az SD-kártyára, és onnantól kezdve beindul ez a kis gép, és vezeti az embert abban, hogy hogy kell ehhez elsőnek csatlakozni: ugye vagy a terminálon keresztül, vagy akinek ez nem annyira otthonos, az a webböngészőben is megnyithatja ezt a státuszoldalt.

Ami aztán meg fogja kérni arra, hogy először is adja meg azokat a jelszavakat, ami biztosítja, hogy senki más nem tudja elérni. Illetve aztán mutatja, hogy hogy megy a Bitcoin blokkláncnak a letöltése, és ha ezt befejezte, akkor pedig felajánlja a lehetőséget, hogy különböző egyéb applikációkat lehet telepíteni, beállításait magának a Bitcoin Core-nak vagy a Lightningnak a beállításait, illetve a kikapcsolódási felületeit is közzéteszi. Tehát hogy van egy ilyen segítség abban, hogy ez működjön. Úgy, mint amikor az ember egy új operációs rendszert telepít egy számítógépre, akár egy Windowst: ugye ott is van egy dolog, hogy beindítod egy — hát most már nem CD-ről, hanem USB-ről —, és akkor mondja, hogy milyen lépéseket kell tenni ahhoz, hogy az első felhasználói profilt létrehozzák, satöbbi. Hát itt is ezek ki vannak dolgozva.

– Ühüm.

– Illetve ezeken folyamatosan dolgozunk, hogy finomítjuk őket. Ez a webfelület is egy — most itt éppen a terminálos felületet látjuk. A webfelület az valószínű, arról is vannak itt felvételek, de az ugye sokkal szebb, illetve ismerősebb az emberek számára.

És aztán amikor vége van, hogyha itt visszascrollozol erre a kis státuszképernyőre, ami ez a fekete-zöld — tehát itt van egy opcionálisan hozzávehető, körülbelül egy ilyen 30 eurós, 10-15 ezer forintos kis 2,5 colos kijelző, amit rá lehet rakni a Raspberry Pi-ra, és ez folyamatosan be van kapcsolva, és mutatja azt, hogy milyen dolgok futnak, és milyen a státusza. Mondjuk szinkronizálva van-e ugye a Bitcoin hálózattal, mi az IP-cím, amihez kapcsolódhatsz, hány másik node-hoz csatlakozik, illetve hogyha futtatsz Lightning node-ot, akkor hány csatornád van, meg milyen állapotban vannak ezek is.

És ezt mondjuk sokan szokták szeretni az emberek, mert ez egy kicsit kézzelfoghatóvá teszi azt, hogy mi is történik. Mert egyébként csak egy fekete doboz, amin van egy kis piros LED — de így viszont az is látszik rajta, hogy igen, ez egy Bitcoin node, és igen, vannak Lightning-csatornák rajta, és igen, most ez éppen a screenshoton 54 fokos, nekem valamikor akár 70 fokos is.

– Ó, szegény!

– Nem, nagyon nehezen olvad meg a szilícium meg az acél, meg hát az arany, az már ugye olvadékonyabb, de azért abból kevés van benne. A bitcoin meg nem tud megolvadni.

– Nem, így van.

– Tehát egy ilyen 70-80 fokos üzemi hőmérséklet az egyébként simán elmegy. Tapasztalatból mondom, mert évek óta bírják. És hát ugye ezeknek a kis számítógépeknek azért elég erősen kell dolgozniuk, hogy kiszolgálják ezeket a dolgokat, de ezért vannak opciók.

Ja, és amit mindenképpen meg akartam még említeni, hogy a másik ajánlott dolog az ilyen használt számítógépek, laptopok és mini PC-k mellett, az a virtuális gépek. Tehát hogyha van az embernek egy szervere, vagy akár egy olyan kis hálózati tárolója vagy egyéb dolga, amin képes virtuális gépeket használni, akkor ezeket az
operációs rendszer lemezképeket arra is lehet használni, és akkor teljesen izolálva vannak, és ugye nem kell hozzá egy dedikált számítógép. Hanem akkor van egy nagyobb számítógép, és azon fut mindenféle, és az lehet az egyik az embernek a Bitcoin node-ja, vagy akár egy teljes ilyen node-csomag, mint ugye a RaspiBlitz vagy a többi implementáció, képes erre.

– Igen. Hát minél több node, annál jobb, mert annál erősebb a Bitcoin hálózat, ugye?

– Hát ez szerintem leginkább a személyes szabadság és…

– Igen, igen. Biztonság és magánszféra.

– Ugye az, hogy a Bitcoin hálózatnak igazából nincs szüksége támogatókra, ez így motiválja a résztvevőit arra, hogy megnézzék maguknak, hogy valóban abban vesznek-e részt. Hogyha visszajövünk a torrentpárhuzamra, ez olyan torrent, aminek ugye van több száz seedere, most ezt így nem kell felmennünk és feltölteni, hogy életben maradjon.

– Igen.

– De arra mindenképpen jó, hogy ha van egy Bitcoin node a szomszédban, akkor onnan sokkal gyorsabban le tudom tölteni a dolgokat. Vagy hogyha éppen a szomszédban van egy bányász, aki ő talál blokkot, akkor azt én kapom meg a leghamarabb, ugye — de ezek ilyen milliszekundumos különbségek.

Ugye van ez a HUSZONEGY Telegram csoport, ahol egyébként magyarul aktívak vagyunk így együtt 500 másik emberrel, de van például a RaspiBlitznek a `t.me/raspiblitz` nevű, hát ilyen community support Telegram-csatornája, ami angol nyelven van. Én ott is sokat szoktam így reagálni a kérdésekre, illetve ugye sokszor belekavarodnak az emberek ilyen technikai problémákba, de ilyen általános bitcoin kérdésekben is érdekeltek — ugye amikor valamilyen változtatást akarnak eszközölni, van valamilyen változtatási kérelem, ilyen pull request, ami esetleg megváltoztat szabályokat.

Igen, hát itt az emberek kiválaszthatják, hogy akarják-e azt a verziójú szoftvert, amiben ez a változtatás benne van, futtatni, vagy nem akarják. Ugye ez nagyon fontos kérdés akkor, amikor az egyetértési, konszenzusszabályokat változtatják meg — például mondjuk a blokkméretet, vagy a tranzakcióknak a formátumát. Például ugye amikor a Bitcoin Cash elforkolt 2017-ben, akkor ez óriási jelentőségű volt az embernek, hogy milyen Bitcoin verziót futtat: a Bitcoin Core verziót, ami azon a hálózaton fog futni — vagyis hát azt bitcoinnak hívjuk, a Bitcoin Core az csak a node-implementációnak az egyike —, vagy a Bitcoin Cash node-ot, amit talán Bitcoin ABC-nek hívtak, ami pedig bizony elment egy másik hálózatra, ami azóta összetöpörödött és hát közel meghalt.

– Meg volt a Satoshi Vision, meg tovább forkolódott.

– Igen, igen, meg ilyenek. De tehát igen, akkor ez egy óriási ilyen hype volt node-futtatásban is. Ugye ebben pont benne voltunk, amikor ez a projekt is indult, tehát a Lightning node-ok erre épülnek.

Most már ezek a hardforkok így nem nagyon vannak napirenden, mert annyi minden épül a Bitcoin hálózatra, hogy így nincs senkinek anyagi érdeke arra, hogy indítson egy másikat, mert ugye minden egyre épül. Kérdés, hogy látunk-e a jövőben. Amik ilyen jelen viták vannak, ugye az ilyen mempool policy kérdésekben — tehát az, hogy milyen típusú tranzakciókat akarunk látni a node-jainkon, meg továbbküldeni vagy nem —, ezek igazából nem túl relevánsak, mert úgyis a minerek döntik el azt, hogy milyen tranzakciókat akarnak belerakni a blokkokba. És hogyha mi letiltjuk, hogy ilyen tranzakciót, ami mondjuk egy jpeg képet tartalmaz, én azt nem akarom látni a node-omon — attól még a blokkláncban benne lesz, és akkor majd letöltöm akkor, amikor a blokkláncban van, illetve validálni is fogja a node-om. Szóval ennek így ellenállni nem nagyon van értelme.

Ezért van az, hogy ugye a block space, ez a tér, az adat, amit a bányászok beleírnak a blokkláncba — tehát ez ingyen nem megy, hanem ennek mindig van egy ára. És ha valaki azért akar fizetni, hogy egy képet rakjon bele, akkor bizony annak kell az árat megfizetni. Tehát ezek általában, ahogy láttuk ugye az utóbbi másfél-két évben, azért ezek a projektek kifutnak a pénzből, és a közvetlen anyagi érdek, a pénz mozgatása, a Bitcoin tranzakciók fogják dominálni ezt a blokkláncot, ezt a hálózatot, mert hát arra a leghasznosabb.

– Köszönjük, Openoms, hogy így összefoglaltad! Nyilván erről lehetne még beszélni egy csomót, meg a redundanciáról meg mindenféle dologról. Lehet, hogy majd olyannak is neki lehet menni így az adás keretein belül, hogy lesz ez így jó.

Sikerült megtalálnom, amire hivatkozott Openoms közben, hogy ugye a grafikus felülete is használható bizonyos célokra a RaspiBlitznek, és akkor azt beraktam ide a képernyőmegosztásba, amiből látszik egy kis kóstoló. Meg ugye ott látszik az a kijelző, amiről beszélt közben, hogy opcionálisan hozzácsatlakoztatható a Raspberryhez. Nekem például olyanom nincsen, hanem így a számítógépemen szoktam behívni az IP-címét a Raspberrynek, és akkor azon nézem a státuszt, de már többször elgondolkodtam, hogy hozzácsatlakoztathatnék egy ilyet, mert tényleg jópofa lenne, meg tényleg bármikor ránézek, akkor látom, hogy na, most minden oké vele — de baromi megnyugtató.

Nekem előtte egy Umbrel node-om volt, amit így havonta újra kellett indítanom, mert lefagyott. De amióta beüzemeltem ezt, áttértem a RaspiBlitzre, ami nagyon flottul ment, tehát szerintem baromi jó és sokkal stabilabb. Tehát ennél nincs igazából olyan, hogy azért kéne újraindítanom, mert nem elérhető a hálózaton. Persze nem azt mondom, hogy még sose volt, de mondjuk így organikusan ezek az áramszünetek elintézik, mert nekem még nincsen szünetmentesem, úgyhogy azok az újraindulások azért megvannak néha — de szerencsére itt nálunk nagyon ritkán van ilyen.

Így a műsor lezárásaként terveztem megemlíteni, hogy megint van újdonság a honlapunkon, a cikkeknél érdemes rákukkantani. Tettem föl egyet a hiperbitcoinizációról, ami egy 11 évvel ezelőtti angol nyelvű cikknek a fordítása, összefoglalása lényegében. A másik meg Jeff Boothnak a *The Price of Tomorrow* című könyve összefoglalója, így magyar nyelven.

Arra is hasznos volt a cikk, hogy ennek kapcsán kiderült, hogy ez a könyv már megjelent magyarul, ráadásul másfél évvel ezelőtt, a Scolar Kiadó gondozásában, akik egyébként a Bitcoin standardot és a Fiat standardot is lefordították és kiadták. *A holnap ára — A jövőnket alakító technológiai és gazdasági folyamatok* címmel, illetve alcímmel adták ki ezt a nagyszerű könyvet. Ami remek hír, mert Katával mi tervezgettük, hogy lefordítjuk és megjelentetjük magyar nyelven, de Kata most így belebotlott hirtelen ebbe a magyar kiadásba.

A Scolar honlapján bele is olvashatunk: egyrészt a tartalomjegyzéket át lehet nézni magyarul, másrészt pedig az előszó is olvasható, ami ilyen három-négy-öt-hat oldalas, illetve megvásárolható a könyv. A leírása nagyrészt a hátsó borítót tartalmazza. Azért tudom, mert én gyorsan meg is vettem ezt a könyvet, és meggyőződtem róla, hogy tényleg létezik és kapható. Úgyhogy ezt nagyon ajánlom mindenkinek a figyelmébe, ez egy fantasztikus könyv.

A podcastunkat támogatja a [Hotel Aurora](https://hotelaurora.hu) meg a [Hotel Atlantis](https://hotelatlantis.hu), ahol a magyar konferenciáink is szerveződnek, az ő jóvoltukból. Ezúton is biztatok minden kedves bitcoinert, hogy nézzetek be oda, mert villámgyorsan és nagyon flottul fogadják el a bitcoinunkat, és amúgy meg a szolgáltatásaik remekek.

– Amúgy az is jó.

– Igen. És ha nem vagytok feliratkozva még a YouTube csatornánkra, akkor iratkozzatok fel, és lájkoljátok, osszátok meg a videóinkat! A Facebook csoportunkat most is egy pillanatra promóznánk, hogy azt is érdemes nézegetni, most így napi szinten rakosgatunk ki oda dolgokat. Most például a prágai Bitcoin konferenciát promózzuk ott is, mert van egy kis kuponkódunk 10% kedvezménnyel. Ugye ez június 19. és 21. között lesz. Én mondjuk most nem fogok tudni elmenni sajnos, de úgy tudom, Openoms, te ott leszel. Kinek a színeiben?

– Hát a RaspiBlitz csoporttal leszünk, így a négy core devvel. Aztán persze, hát ugye majd a Blink-matricákat is osztogatjuk. De hát igazából kíváncsiságból megyek, mert ugye ott mindenki ott van: aki így legalább egy eseményre elmegy, akkor az nagy eséllyel azok között van.

– Ühüm.

– Mind fejlesztők szempontjából van egy erre dedikált nap is, amit így nagyon tudok ajánlani a technikai érdeklődésűeknek, de egyébként a kiállítói rész is nagyon jó. Magán az előadásokon én nem annyira szoktam részt venni, de azokat meg lehet nézni online, hogyha az ember nincs ott, vagy később akarja.

– Nekem az egy csalódás, hogy itt a BTC Prague-nak az előadásait így sokkal később szokták föltenni a netre. Már így megszoktam, hogy az amcsik akár instant odateszik élőben.

– Ühüm.

– De valahogy itt a prágai srácok meg inkább arra mennek, hogy nagyon profin legyen megvágva, ez is stimmeljen meg az is. És tényleg minőségi az eredmény, csak így van, hogy hetekig kell várni ezekre a produktumokra.

– Utána ez az exkluzivitás, hogyha ott vagy, akkor azért jó, tudod, hogy legalább…

– Igen, te látod, meg körbenézed, azok között vagy, meg akkor tényleg minden tartalmat meg tudsz nézni, ami érdekel.

– Hát akkor szerintem köszönjük szépen a figyelmet nektek, és egy hét múlva újra jövünk valami érdekes témával. Köszi, Openoms, hogy jöttél hozzánk!

– Kösz szépen, hogy megbeszélhettük ezt a nagy témát! Sziasztok!

– Helló!
