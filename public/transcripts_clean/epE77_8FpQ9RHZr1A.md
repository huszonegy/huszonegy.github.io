– Sziasztok! Üdvözlünk titeket! Ez itt a HUSZONEGY Bitcoin Podcast. Mai kedves vendégünk Openoms. Üdvözöllek újra itt nálunk!

Openoms már volt többször is nálunk. Ez a 77. epizód, és ebbe is eljutott – mégpedig azért, mert egy csomó konferencia van mostanában a Bitcoin háza táján. Ő is volt egy ilyenen. Be tudnál-e nekünk erről számolni, hogy mi volt ez pontosan, hol volt? És akkor majd innen kibontakozunk, hogy milyen témákat lehet érinteni.

– Sziasztok! Jó újra itt lenni, köszönöm. Hihetetlen, hogy már a 77. adás! Gratulálok nektek, a podcast hostjainak, hogy ezt végigviszitek, és folyamatosan…

– Inkább a vendégeknek!

– Hát igen, ti sugározzátok, mi pedig próbáljuk segíteni, illetve fogyasztani az információt. Úgyhogy köszönjük szépen.

Szóval volt ez a BTC++, Berlinben. Ez egy tematikus konferenciasorozat gyakorlatilag, amit főleg Lisa Neigut – niftynei Twitter-handle-ről ismert fejlesztő hölgy – szervez. Neki az egyik projektje arról híres, hogy a Blockstreamnek dolgozott – talán még mindig dolgozik –, a Core Lightning implementációjának a fejlesztésén, körülbelül harmadmagával. Egyéb nagyon jelentős Bitcoin-hozzájárulókkal együtt, mint Christian Decker meg Rusty Russell. Illetve előtte a Google-nek dolgozott.

És végül most már a fő iránya az, hogy egy technikai jellegű, Bitcoin-fejlesztőknek – illetve bitcoinnal kapcsolatos szoftverfejlesztőknek – szánt konferenciasorozatot csinál. Persze nem egyedül, hanem a támogatóik segítségével.

És ebből a legutóbbinak Lightning témája volt, amit kreatívan Lightning++-nak neveztek el. Ugye ez a „plusz-plusz" talán abból jön, hogy magának a Bitcoin Core-nak az implementációja C++ programozási nyelven van írva – és ebből lett a BTC++. Aztán mindenfélét meg lehet pluszolni: legyen az privacy, scaling, sokféle.

– Miskolc++! (nevetés)

– Miskolc++, igen.

– Na, Feri, lelőttük az új nevet!

– Nehéz ilyen domént lefoglalni, de ugye itt van a BTC PP – a „plusz-plusz" is kijön.

És hát ugye én, mivel Lightninggal foglalkozom leginkább – illetve én úgy is érkeztem a Bitcoin technikai részéhez, hogy Lightningot kezdtem el használni, illetve dokumentálni; ezzel kapcsolatosan kezdtem bitcoint tranzaktálni, illetve node-okat futtatni, meg tekergetni a kapcsolókat –, illetve a Blink walletnél dolgozva ez nagyon releváns, mint szakmai továbbképzés. Úgyhogy elmentem erre a Lightning-konferenciára.

Ez egy háromnapos dolog. Volt párhuzamosan egy hackathon is, ahol mindenféle nyereményért lehetett úgy öt-hat témában dolgokat fejleszteni. Ennek is nagyon szép eredményei voltak – de én leginkább a társaságért, magukért az előadásokért voltam ott. Ott vannak a protokollfejlesztők, a jelentős appok fejlesztői, meg mindenféle bitcoinerek, akiket érdekelnek ezek a technikai dolgok.

Egy coworking space-ben, egy közösségi irodában volt az egész, és két szinten voltak előadások, illetve sok olyan szabad program, amikor az emberek csak együtt tudtak ülni és dolgozni, kérdezgetni egymást akár a másik projektjéről, akár a sajátjukról. Ugye meg lehet találni azt a szakmai támogatást, amit egyébként világszinten vadászni kell – de itt összejönnek az emberek egy pár napra, nemzetközileg.

Volt egy pár előadás – ha nem is a HUSZONEGY Telegram csoportba, de elraktam magamnak a linkeket, majd beküldöm.

– Például: van egy óriási Lightning node, a Blocknak a Lightningja – akik a Cash Appet meg a Square-terminálokat futtatják. Ez egy nagyon érdekes vállalkozás, mert a múltkor, azt hiszem, a miami konferencián egy nagy előadás keretében mondták, hogy ők bizony 10%-os bevételt hoztak a saját Lightning node-jukon termelt bevétellel – ezekkel a tranzakciós díjakkal, amik őket illették, amikor valaki rajtuk keresztül fizetett.

– Az szép. Az egy ilyen álom.

– Ez igen, ez egy álom. Ez egy felső határa annak, hogy vajon mit lehet elérni.

Erről volt egy félórás előadás, ahol konkrétan az a fejlesztő srác, aki ezt csinálja, elmondta, hogy milyen alapelveket, milyen heurisztikákat használnak, illetve hogy állítgatják a dolgaikat. Meg persze felfedte azt is – ami nem volt titok –, hogy azért tud így működni, mert… Az egy dolog, hogy van 180 bitcoin kapacitása ennek a Lightning node-nak.

– Kell hozzá a likviditás.

– Kell hozzá likviditás, igen. De maga ez a szám nem olyan nagy ahhoz képest, hogy a hálózaton összesen több mint 5000 bitcoin van. Illetve tudjuk, hogy sok cég – főleg egy ilyen nagyobb cég, akik custodial szintű szolgáltatást nyújtanak – azért sokkal több pénzzel játszik, mint ez.

Itt az érdekesség az volt, hogy azt mondta: igazából több Bitcoin ebben a felhasználásban nem hozna többet. Hanem amiből élnek, amiből ezt ki tudják hozni, az a fizetések mennyisége. Hogy a Cash App mögött – ami egy online banki alkalmazás, olyan, mint a Revolut, csak sokkal inkább Bitcoin-fókuszú, és nagyon korán volt Lightning-integrációja is – ott van 50 millió felhasználó. Az USA-ban talán csak, de mindenképpen az a fő piacuk. És ezeknek azért a nagy része szeret bitcoinnal fizetni, ha tud. És könnyen meg is tudják venni a bankszámlájukról.

És ez a forgalom megy keresztül ezen a továbbító, routing node-on, ami generálja aztán ezt a 10%-os évi bevételt.

Aztán most aktiválják ezeket a Square-terminálokat is, ezek fizetési terminálok – point of sale –, lehetett hallani, hogy több millió ilyen van. És nekik, mint a szoftvert kiküldő entitásnak, egy gombnyomásba kerül, hogy most már ott is lehet Lightninggal fizetni. És hogyhogy nem, ez is integrálódik az egész ökoszisztémában.

Tehát erről hallgatni egy előadást, ez óriási dolog volt – mert valahol én is ilyesmiben segédkezem, csak egy kicsit kisebben, illetve jobban szétszórva a világon.

– Ezekre jók ezek a konferenciák, főleg ha ilyen célzottak: hogy összehozza a világ élvonalát. Azért ezt a tudást élőben, egy az egyben megkapni, vagy olyanokkal beszélgetni, nem nagyon tudnál. Tehát ezért érdemes ilyenekre járni, nem?

– Abszolút. Itt egy ilyen – pontosan nem tudom – 300-400 ember volt jelen. Nagyon viselhető abból a szempontból, hogy bárkivel tudsz beszélni, ha akarsz. Nincs VIP-szekció, nincs nagy tömeg sehol, nincs aláírásgyűjtés meg hasonló.

– Fotósarok.

– Igen. Mit tudom én, van öt ember itt a kis beszélgetésen, és akkor utána még körbeállnak egy óráig, és így lehet bármire megkeresni őket.

Meg hát a protokollfejlesztőknek, akik ezeken dolgoznak… Ugye a Lightning protokoll az egy rétege a Bitcoin protokollnak magának, amiről most nagyon sok a diskurzus: hogy hogyan születnek ezek a döntések, hogy ki milyen beállításokat szeret, illetve tesz alapértelmezetté.

Most a Lightningon van egy nagyon hasonló rendszer, csak kisebb, illetve gyorsabb, meg nem annyira kritikus. Mivel ez nem egy alapprotokoll, ezért ha nincs egyetértés a hálózat egyes részei között, akkor nem jön létre egy másik coin – nem lesz hard fork akkor, ha két Lightning-implementáció nem ért egyet, hanem csak egyszerűen két elszigetelt Lightning-hálózat lehet. És aztán amikor újra egyetértenek egy következő frissítés során, akkor megint tudnak egymásra beszélni. Tehát ez egy sokkal kaotikusabb mesh hálózat.

Persze mindenkinek az érdeke, hogy minél több emberrel tudjon gyorsabban és olcsóbban tranzaktálni. És a protokollfejlesztők nézőpontjából is nagyon hasznos az, hogy találkoznak azokkal az emberekkel, akik nap mint nap használják a szoftverüket, és együtt dolgoznak a végfelhasználókkal, akik esetleg fizetnek, vagy fogadnak, vagy egyéb szolgáltatásokat építenek rá.

Szóval akinek technikai érdeklődése van, akár programozásba szeretne elmerülni, és erre keres valamilyen jó motivációt – ezek óriási lehetőségek.

– Szeretnék beszélni erről a társasjátékról is, ha megyek ezzel egy kicsit tovább. Ez egy technikai dolog, ennek a Base58 cégnek a terméke úgymond – akik ezt a konferenciasorozatot is csinálják.

Ez egy olyan társasjáték, hogy sok-sok papírral kell dolgozni – itt van róla egy kép –, meg ilyen kis műanyag kosarakkal.

– Ezek bankjegyek?

– Nem, ezek csak kitöltendő papírok, amikre oda van írva, hogy hova mit kell írni.

Úgy kezdődik, hogy az ember csinál egy Bitcoin genesis blokkot, kézzel – természetesen kicsit stilizálva, leegyszerűsítve: a számok nem olyan hosszúak, mint a valóságban, hanem rövidek. Utána beleírhatja, amit szeretne, és beleteszi egy kis borítékba, ami lesz az első blokkja ennek a hálózatnak, amit itt élőben lehet meghosszabbítani.

Aztán fogja a következő papírokat, és egy-egy asztal jelképez egy node-ot. Minden résztvevőnek van valamilyen feladata: van, aki a papírokat írja – ők a tranzakciókat begyűjtik mástól, vagy csinálják maguktól –, és akkor valaki más pedig validálja. És ha érvényes a tranzakció – ugye ennek matematikailag egy bizonyos öt-hat szabálynak meg kell felelnie, amit kézzel is megtehetsz –, akkor beleteszi szépen egy mempool-kosárba, ahol a várakozó tranzakciók várnak.

Illetve van egy hálózati felelős, aki kap cérnákat, és akkor két-három másik asztalhoz így össze van kötve, és arra lehet átküldeni felakasztott üzeneteket, amik szintén tranzakciók. És így próbáljuk szimulálni a Bitcoin hálózat működését, nagyon manuális módon.

Aztán van egy kis gép, amivel lehet bányászni, ami gyakorlatilag keresi azt a kis nonce-ot, ami beleillik a hashbe, ami aztán ki fogja adni azt a következő blokk-hasht – és ha az megfelel, tehát a nehézségnél kisebb szám, akkor az egy érvényes blokk lehet. És aztán lehet kommunikálni a blokkokat szintén ezeken a kapcsolatokon.

És ugye el lehet gondolkozni azon, hogy milyen hatásai vannak annak, ha valaki egyszerre vagy közel egyszerre talál blokkokat. Vagy például mi van akkor, ha valaki nem akar bizonyos tranzakciókat belerakni a mempooljába, de mégis kap egy blokkot, amiben ezek a tranzakciók jelen vannak – akkor itt aztán eléggé megérezheti a saját bőrén, hogy mennyire lelassítja ez a dolog a hálózatot.

– Van időbélyeg esetleg, time stamping – vagy ez a játékban nincs?

– Hát egy stopperóra az mindenképpen hasznos. A time stamp ugye az csak egy stopperóra gyakorlatilag: 1970-71-től számolja a másodperceket, és akkor az a Unix time stamp. Tehát abszolút lehet órát-percet írni ezekre a dolgokra.

Erről a társasjátékról csak azért akartam beszélni, mert most már másodszor vettem részt benne – előzőleg Prágában, még a tavalyi évben –, és mindig nagyon élvezem. Meg így az embereknek is segít megérezni a Bitcoin működését. És ezt meg lehet csinálni egy meetup keretében is, vagy egy konferencia keretében – gondolok itt a Bitcoin Miskolcra.

Az egész ingyen elérhető, tehát úgymond open source. Vannak ilyen kis eszközök – amikkel egyébként én rendelkezem is –, amik a bányászatot tudják nagyon kis hashrate-tel szimulálni. És nekem az a tervem, hogy ezeket a papírokat le lehet fordítani magyarra – nem olyan sok szövegről van szó –, és ha lenne mondjuk tíz ilyen technikai érdeklődésű ember, akkor akár csinálhatnánk egy ilyet, akár egy meetup keretében Budapesten, vagy egy következő konferencián.

– Ez így nagyon jó szemléltető eszköz. Gondolom, úgy van kitalálva, hogy minden meg van feleltetve egy valóságosan lejátszódó eseménynek a Bitcoin hálózaton.

– Így van. Magát a játékot is felveszik, tehát ez tényleg egy oktatójáték – vagy inkább úgy tudom mondani, hogy ez egy workshop, olyan kétórás tevékenység. És azért tényleg el kell gondolkozni, hogy ki mit csinál, meg hogy mi van, ha nem jól csinálja.

Ez 2021 óta van, azóta már a legtöbb nagy konferencián van egy-egy ilyen workshop. Magyarországon persze még nem volt – de ez lehet a mi feladatunk.

– Volt még valami más előadás? Gondolom, főleg Lightning – de volt esetleg valami más technológia is?

– Hát igen, a Lightning az egy nagy összekötője az egyéb, Bitcoinra épülő protokolloknak. Itt főleg amiről szó volt, az az eCash, annak is a Cashu része – amik ugye pénzverdés alapon működnek, és aztán Lightninggal tudnak a külső világgal, illetve a pénzverdék között is kommunikálni.

Illetve van két új dolog, ami szintén Bitcoinra épülő második réteg: az Ark és a Spark. Talán először az Arkról beszélek röviden, mert az jobban tetszik.

– Igen, az jópofa.

– Fejlesztőként is bele fogok vonódni valószínűleg hamarosan.

Ez arról szól – gyakorlatilag azt célozza meg –, hogy az embereknek ahhoz, hogy tranzaktáljanak, vagy akár a Lightning Networkön legyen egy saját csatornájuk, kell egy UTXO-t, egy elköltetlen tranzakciós kimenetet birtokolniuk. Aminek a mérete nem lehet végtelenül kicsi: jó, ha mondjuk legalább pár száz eurónak megfelelő Bitcoin-értéke van. Azért, mert amikor ezt küldözgeti az ember, a blockchainbe beíródva, akkor mindig tranzakciós díjakat kell fizetni – és egy idő után, ha ez egy nagyon kicsi dolog, akkor ez erodálódik és eltűnik. Tehát nem gazdaságos kicsi kimeneteket küldözgetni.

Ebből következik, hogy nem minden felhasználónak gazdaságos az, hogy legyen sajátja. És az Ark kifejezetten arra irányul, hogy egy ilyen tranzakciós kimenetnek a tulajdonlását több ember meg tudja osztani, és ebben a megosztott állapotban ingyen és gyorsan tudjanak egymásnak küldözgetni.

Kicsit olyan, mint a Lightning Network: hogy van egy Lightning-egyenlegem, és azt nagyon gyorsan, gyakorlatilag ingyen tudom a Lightning node-ok között mozgatni.

Itt az Arkban ez úgy működik, hogy van egy tranzakciós kimenet, amire építenek egy virtuális tranzakciós fát, és ezen a fán belül, az ágai és a levelei között lehet egymásnak ingyen küldözgetni.

És hogyan kapcsolódik a Lightninghoz? Amikor ebből ki akar lépni valaki, akkor tud egy cserét, egy atomic swapot csinálni – ugyanúgy, mint mondjuk a Liquidről vagy a Bitcoin on-chain hagyományos részéről –, ahol egy szolgáltató a megkapott virtuális tranzakciós kimenet fejében küld egy Lightning-fizetést.

– Ez király! Nekem még márciusban Karó mondta a múltkori Bitcoin Miskolc konferencián, hogy van egy ilyen Ark készülőben, úgyhogy engem már akkor beszippantott – csak nem nagyon találni róla. Nyilván megvan a fő dokumentáció, azt meg lehet találni, azt esetleg majd ide belinkeljük. De tényleg egy tök jó ötlet.

– Igen. Maga az Ark is egy protokoll, tehát ennek vannak szolgáltatói – van, aki ezt az Ark-operátort futtatja. Már vannak példák: például a rigai konferencián már úgy működött a fizetés. A BTCPay Server egy ilyen Ark-operátorhoz volt hozzákötve, és amikor Lightninggal fizettek az emberek, akkor igazából egy Arkba küldték be a szatosikat – és volt egy cserélő szolgáltató is. És azt hallottam, hogy fennakadás nélkül működött a dolog.

Annyi, hogy maga ez a szolgáltató még nem hivatalosan, nem publikusan volt jelen, tehát nem bárki kapcsolódhatott volna hozzá. Ennek az Arkade nevű cégnek az indulása, illetve a mainneten, a valós Bitcoin-hálózaton való éles publikálásuk, az ilyen három hét múlva lesz, a luganói konferencián. És onnantól kezdve már fel lehet menni a website-jukra.

– Bocs, azért vigyorgok ilyen bőszen, mert eszembe jutott ez a mém, hogy *„The future is now, old man."* Ugye hogy tényleg fél éve volt a hajdúszoboszlói, ott hallottam róla először – és azóta meg így prototípus. Tehát hogy mennyire megfejlesztette magát.

– Ez egy olyan érdekes dolog, ami gyakorlatilag minden olyan tudással rendelkezik, amit a Bitcoin on-chain protokoll tud – csak nincsen limitáció abban, hogy… Ebben a virtuális tranzakciós fában nem kell várni a következő blokkra, illetve nem kell tranzakciós díjat fizetni, mert ez nem íródik le véglegesen.

– Kemény.

– Csak időlegesen. Ezt eldönti a tárcának a szolgáltatója, vagy maga az Ark-operátor, hogy milyen gyakran – mondjuk naponta, de akár lehet kéthetente is – ezt az egész fát, az egész fának a Merkle-gyökerét belecsomagolják egy Taproot-tranzakcióba, ami aztán egy on-chain tranzakció lesz, ami megerősítetté teszi az összes előző dolgot. És onnantól kezdve már nem virtuális, hanem akkor már mindenkinek van kulcsa, amivel azt a státuszt ki tudja váltani akkor is, ha mindenki más eltűnik.

És aztán persze lehet újabb tranzakciókat csinálni, megint bele lehet menni a virtuális fába, és ezt lehet végtelenszer ismételgetni. De ami a lényeg: elég csak naponta egy, vagy kéthetente egy tranzakcióban részt venni, mondjuk 1000 másik felhasználóval – és ennek a bekerülését megosztani egymás között. Nem kell azt az egy kis coinomat darálni lefelé, hogy „most ide küldöm, oda küldöm, change ide".

– Tehát sokkal gazdaságosabb.

– Illetve ha valaki az Arkon belül, vagy a Lightningra cserélve használja, akkor ez azonnali is.

– Milyen bibliai neve van, nem? A bárka.

– Igen. Az etimológiáját nem tudom.

– Majd ha elmélyülsz benne, utánanézel. (nevetés)

– Egyelőre ezen a website-on ki lehet próbálni, már van egy webwallet, ami a signeten, az egyik teszthálózaton működik – de teljes Bitcoin-protokollal. És akkor három hét múlva, amikor ezt publikálják, akkor lesz az, hogy kipróbálhatják az emberek élesben is. És több tárcáról tudok, akiknek tervben van, hogy ezt a protokollt használni fogják. Szerintem én is fogok vele dolgozni. Ez még mind nagyon az elején van, de nagyon érdekes.

– Tényleg tök jó ilyenekről hallani. Mert ugye mindig csak a rossz hírek ömlenek be: ha az ember megnyitja az X-et vagy a YouTube-ot, akkor jönnek a világvége-posztok. De amikor az ember a Bitcoinban informálódik, akkor mindig látja a reményt – hogy milyen jó megoldások születnek mindenféle problémára. Úgyhogy tök jó, hogy beszámoltál erről a konferenciáról.

– A Sparkot most megnyitottad. Ha már itt tartunk, akkor talán érdemes ezt is megemlíteni.

Ez is egy hasonló technológia abból a szempontból, hogy segít gyorsan és olcsón használni a bitcoint több embernek. Abból a szempontból más, hogy ez nem egy virtuális tranzakciós kimenet-fán alapul, hanem ez egy úgynevezett state chain. Ahol gyakorlatilag az emberek egy kettőből kettő aláíró privát kulcsot adnak egymásnak. A könnyű érthetőség kedvéért itt is fáknak hívják azt, ahol ezek a tranzakciók végbemennek – de kicsit máshogy működik.

– Na, hogy megzavarjon bárkit. (nevetés)

– Na most, ez a rendszer már élőben van. Például a Wallet of Satoshinak a self-custody módja, ami az alapértelmezett, már ezt használja. Meg van egy Blitz Wallet nevű, amelyik ezt használja.

Kicsit több bizalom szükséges hozzá, mert ennek van az a finomsága, hogy az ember továbbküldözgeti ezeket a privát kulcsokat, és akkor abban kell bízni, hogy a kettőből kettő aláíróból legalább az egyik törölte a privát kulcsát, és így nem tud duplán költeni. Erre vannak szisztematikus megoldások, de teljes garancia nincsen, ezért van itt egy kis bizalom.

De legalább van az operátorok köre, akik az egyik aláírók – ez egy federált rendszer, amibe így aztán többen is bele fognak tudni csatlakozni, hasonlóan mondjuk a Liquid Network aláíróihoz. És akkor ha már egy valaki törli, akkor már bizonyíthatóan biztonságos.

De itt is van egy unilaterális kiugrási lehetőség – ez az, amitől self-custodynak hívható ez a dolog –, hogy akkor is, ha ezek az aláírók nincsenek jelen, vagy nem működnek közre, akkor is ki lehet menni a chainre. Persze megfelelően nagy tranzakciós kimenettel, ami ugyan drága lehet, de valamilyen lehetőség.

Ezt ugyan nem említettem kimondva, de mind a kettőre igaz, hogy ez egy self-custody skálázható megoldás: azt jelenti, hogy az ember kap egy kulcsot, amivel minden körülmények között egyoldalúan elköltheti a pénzét. Vannak finomságok, hogy talán nem mindet, meg hogy az mennyibe kerül, meg hogy ezt milyen gyakran tudja megcsinálni – de alapvetően nagy a különbség egy teljesen custodial wallethez képest, ahol semmilyen befolyása nincs az embernek arra, hogy elköltheti-e a pénzét, hanem csak meg tudja kérni a szolgáltatót, hogy „légyszíves, tedd meg helyettem". Amit a jó szolgáltatók meg is tesznek mindig – de azért a rug pulloknak fennáll az esélye.

Több szempontból vannak technikai kockázatok, illetve regulációs kockázatok.

– Igen, azok majd egyre inkább előtérbe kerülnek.

– Ha betiltásra kerülnek… Itt már évekkel tudunk visszamenni, az Oroszországgal kapcsolatos szankcióknak a kezdetéhez, ahol az USA-dollár, illetve a Visa, a SWIFT satöbbi tranzakciókat tették elérhetetlenné emberek millióinak. Tehát ha szolgáltatóra függsz, akkor ez természetesen egy rizikó, amit bele kell kalkulálni a dolgaidba.

És reméljük, hogy az Ark, illetve a Spark is elhozza azt, hogy hasonló felhasználói élmény mellett úgy lehessen használni a bitcoint, hogy az ember nincs kitéve az ilyen tömeges betiltásoknak, vagy a technikai problémáknak – amikor egy exchange-et vagy egy társzolgáltatót akár megtörnek, és ellopnak belőle valamit.

Nagyon szívesen hallgattam egyébként az előző podcast-epizódot, ahol pont erről beszélt Dávid.

– Igen, sok tanulságos dolog volt benne.

– De a lényeg az, hogy arra próbálunk törekedni, hogy amellett, hogy olcsón és gyorsan használható legyen a dolog, minél kevesebb legyen a bizalmi faktor egy-egy tárcánál, szolgáltatásnál.

Úgyhogy ennyit erről a konferenciáról. Nagyon sokat lehetne még beszélni róla – de nagyon ajánlom bárkinek, aki technikai érdeklődésű, vagy akár építeni szeretne valamit, hogy menjen el egy ilyenre.

– Elérhetők a videók a konferenciáról?

– Igen. A YouTube-on a main stage az teljesen live streamben volt. Az ott is van, csak még egyelőre nincs szétvágva – de majd beküldök egy párat. BTC++, YouTube-on.

– Nagyon sok technikai érdeklődésű nézőnk meg hallgatónk van – ez látszik a Telegram csatornán is, hogy elég szép számmal vannak kérdések felétek, akik meg tudják válaszolni. Így azt javaslom, hogy térjünk át egy kicsit a RaspiBlitzre, mert az is elég közel áll hozzád mint projekt, és akkor nem is evezünk nagyon messzire a technológiának a vizén.

– Igen, abszolút. Sőt, át lehet kötni azzal, hogy pont múlt pénteken pont erről tartottunk egy előadást – rootzoll nevében, aki a RaspiBlitz projektnek az alapítója, illetve fő maintainere. Erről nagyon szívesen beszélek.

Tehát mi is ez? Ez egy full node csomag. Olyasmi – most így nem szeretek más reklámot hozni –, de olyasmi, mint az Umbrel, vagy olyasmi, mint a Start9. De ez volt a leghamarabb, olyan szempontból, hogy előtte nem volt ilyen szoftvercsomag, ami így összerakott neked mindent: hogy itt a Bitcoin Core, itt van rajta a Lightning kliens, illetve a hozzákapcsolódó szoftverek. Ugye ezek a dolgok léteztek hamarabb is.

Nézzük: 2017 őszén indult el a fő hálózaton, az éles hálózaton, és akkor az emberek elkezdtek írni ilyen leírásokat, segítségeket, hogy hogyan lehet ilyeneket építeni. Van egy raspibolt.org nevű website, ahol le van írva, hogy hogyan lehet egy Raspberry Pi-on ezt felépíteni te magadnak. Úgyhogy szépen bemásolgatod Ctrl+C, Ctrl+V-vel a megadott parancsokat a kis Linux-számítógépedre, amit egy SD-kártyáról indítasz a Raspberry Pi-on. Ez volt az első ilyen jól összeszedett projekt, 2017-ben.

Aztán gyakorlatilag ezt scripteltük, automatizáltuk le. Vagyis hát én nem a legelején csatlakoztam, csak 2018 végén – illetve az első node-omat 2018 nyarán raktam össze, futtattam.

– Így két lábbal bele a Lightning Networkbe, meg satöbbi. Ott azért az még jóval kalandosabb volt ugye, ezen a Raspberry Pi-on.

– Tök jó ezekről beszélni, mert szerintem ez ma nagyon égetően fontos a Bitcoinban: hogy mindenkinek meglegyen a saját kis node-ja otthon. És szerintem igazán nem egy elrugaszkodott dolog ezt megtanulni – egyet összerakni elemekből. Olyan jól végigvisz rajta az az oldal, meg egy csomó tutorial van, ami alapján tényleg mindenkinek javaslom, hogy merüljön bele. Mert sokkal jobban megérti az egésznek a működését – és mivel megérted, ezért sokkal jobban el tudod sajátítani ezt az egész Bitcoin-gondolkodást. Hiszen kihúzod a bizalom tételét: megértéssé válik a bizalom.

– Pontosan. Tehát csak akkor tudod igazán, hogy egy Bitcoin létezik, ha ezt megnézed egy referencia-implementációban – például egy Bitcoin Core-on –, hogy ez megjelenik-e. Mert addig csak valaki másnak a szoftverét kérdezed meg, és akkor mindig ott van, hogy „most akkor igazat mond, vagy nem mond igazat? Visszatart-e információt?"

Egyébként nem kell egy dedikált számítógép: le lehet tölteni a Bitcoin Core-t egy teljesen átlagos, sőt régi laptopra, asztali számítógépre is, és azon futtatni.

Itt ez a RaspiBlitz projekt. A *Blitz* ugye németül villámot jelent – mivel villámhálózat.

– Magyarra fordítva.

– Igen. Hát ez olyan, mint – ez meg franciául… Van egy Lampo nevű projekt, amit egy olasz srác csinál. Úgyhogy elég sok nyelven tudom most már, hogy hogy van az, hogy villám. (nevetés) Nagyon hasznos tudás.

De hogy ez a node, ez kifejezetten arra van kihegyezve, hogy ez nem csak egy Bitcoin full node, hanem Bitcoin és Lightning node. Amihez már lényeges – illetve nagyon hasznos – az, hogy folyamatosan be legyen kapcsolva, és folyamatosan menjen egy ilyen kis otthoni szerverként.

De csak azért, hogy a saját tranzakcióidat validáld, ahhoz nem kell mindig bekapcsolva lennie a node-nak – mert az egy hónapban összegyűlt új blokkokat egy pár perc alatt le tudja tölteni, illetve validálni egy átlagos számítógép. Szóval nem kell azért online tartani.

– Ez érdekes dolog, mindenképpen érdemes elkezdeni. Egyébként én is letöltöttem laptopra először a Bitcoin Core-t, mielőtt összeraktam volna egy számítógépet – csak hát persze, pont a Lightning miatt kellett ez.

– És ez igazából… most azért sok a félreértés mostanában, hogy kinek is van hatalma a Bitcoin hálózaton.

Hát ez mindig egy sok résztvevős, játékelméleti dolog. Hogy most akkor ki dönti el, hogy mi történik a Bitcoin hálózaton? A bányászok, mert ők csinálják az új blokkokat? Vagy a Bitcoin-fejlesztők, akik megmondják, hogy milyen új szoftverlehetőségek vannak – vagy hát inkább elérhetővé teszik igazából, mert ugye ők nem tudják letölteni a szoftvert az én node-omra? Vagy a felhasználók, főleg azok, akik aktívan tranzaktálnak?

Mert aki nem teszi, az nem igazán vesz részt a szabályok validálásában. Csak az, aki ránéz a node-jára, és azt mondja: „á, megkaptam a termék árát, akkor odaadom a terméket." Akkor itt van egy döntési helyzet, amiben hatalmában áll odaadni vagy nem odaadni az ellenértékét ennek a fizetésnek.

És itt fontos az, hogy valaki gazdasági node-e, tehát gazdasági aktivitást folytató node-e vagy nem. És azoknak a felhasználóknak, akik gazdasági aktivitást folytatnak, természetesen van hatalmuk szintén – de nem tudják ezek a felek egymást felülírni. Hanem ez így egy folyamatos, ilyen mexikói pisztolypárbaj, ahol mindenki mindenkire pisztolyt fog.

– Ja, az jó volt! Ott van az a dia – vagy azt te fotóztad?

– Ja, az egy Cashu-előadással kapcsolatban jött elő.

Tehát ott tartottunk, hogy egy Bitcoin node futtatása az elsősorban a személyes hatalmadat növeli meg – de ez a hatalom az saját magadon, illetve a saját eszközeidre való hatás. Másokra nem hatsz egy Bitcoin node-dal. Mert ez egy olyan dolog, ahol te magadnak tudod validálni a tranzakcióidat, és nem tudod megmondani másnak, hogy ők mit csináljanak.

Itt kicsit kerülgetem a forró kását, ami ez a Bitcoin Core és Bitcoin Knots, ez a filter alapú vita: hogy mit kellene csinálnia a bitcoinereknek, meg mit nem.

Hát mondjuk röviden, ha ebbe belemegyek: igazából csak azt tudom mondani, hogy a Bitcoin node-nak másokra nincsen hatása. Tehát én hiába próbálom megmondani azt, hogy bizonyos tranzakciók ne legyenek, amiket mások küldenek – ezt nem tudom megtenni mindaddig, amíg ezek a Bitcoin konszenzusszabályai szerint érvényesek. Mert hiába zárom én ki, hogy én erről nem akarok hallani: amikor a következő blokkba bekerül, akkor ugyanúgy le kell töltenem, validálnom kell, el kell fogadnom, hogy ez létezik, el kell tárolnom, aztán tovább kell osztanom a blokkokban.

Szóval ez igazából inkább csak egy hangos tüntetés, hogy valaki milyen filtert akar, vagy mit nem akar. A Bitcoinnak a konszenzusrétegét ezzel nem fogja megváltoztatni. Illetve ha meg akarja, akkor az már nem ez a Bitcoin lesz, hanem akkor egy forkról fogunk beszélni.

Sok minden elhangzik itt, hogy mi a spam, meg mi nem a spam – erről sincs egyetértés. Igazából amit tudni kell: minden tranzakció fizet azért, hogy bekerüljön egy blokkba. És ezt a bevételt a bányászok nagyon szívesen elteszik. Mindig lesz egy részük, aki csak arra megy, hogy minél többet keressen – úgyhogy az tudni akar majd minden egyes érvényes tranzakcióról, legyen az akár spam, akár nem spam. És be fogja vállalni, hogy ezt kibányássza, mert ugye azért kapja a fizetését.

Ebben a játékelméletben nem nagyon fér el egy olyan mód, aki meg akarja mondani másoknak, hogy mi ne legyen – mert egyszerűen ez így nem működik. És lehet sokat moralizálni rajta, meg sajnos ez személyes támadásokig is fajul, de igazából nem vezet sok jóra, sok eredményre.

Aztán a szoftverfejlesztőknek a feladata – mindenki önző ebben a játékban –, hogy a lehető legjobb szoftvert állítsák elő, ami a legnehezebben törhető meg; tehát hogy maga a hálózat legyen minél ellenállóbb, illetve minél gyorsabb.

A bányász meg egy olyan node-ot akar futtatni, ami egyrészt mindenről tud; másrészt meg amikor lát egy új blokkot, akkor erről már mindent tudjon azelőtt, hogy ezt a blokkot összerakták. Mert ha olyan tranzakciók vannak a blokkban, amikről ő nem tud – mert kizárta, hogy ezeket inkább nem –, akkor lelassítja magát azzal, hogy egyenként el kell kezdenie elkérni ezeket a tranzakciókat, hogy tudja validálni, hogy ami a blokkban van, érvényes-e. És ettől versenyhátrányba kerül.

Ergo egy bányász nem fogja cenzúrázni, nem fogja filterezni a mempoolját – mert nem áll érdekében.

– Hát szerintem ezzel kimerítetted az egészet. Mert körülbelül aki ebbe jobban belemélyed, annak erre kell jutnia. Vicces, hogy szerintem pont te, a legutóbbi itt létedkor, pont erről beszéltünk.

– Hát igen, hosszú ideje megy ez a dolog. Igazából azóta, hogy volt a bányászdíjaknak a felfutása – hát meg több mint két éve –, ezeknek az inscriptionöknek meg mindenféle NFT-knek a megjelenésekor a Bitcoin blokkláncon. Amit aztán ott terjesztett be először ez a Knots-tábor, illetve Luke Dashjr és egyéb követői: hogy meg kellene próbálni megállítani ezeket a tranzakciókat.

És hát ugye akkor is az volt, hogy inkább fizessenek érte. És fizettek. Aztán annyit fizettek, hogy kifutottak a pénzből – és most már ezek még vannak, de ahhoz képest, hogy mennyi volt, most már nem igazán zavar senkit.

– Fogyott a lóvé.

– Egy sat per vByte-ot fizetünk a következő blokkba jutásért, tehát nincs igazából jelentősége.

– Sokan attól félnek, hogy „jaj, de hát mik ezek a dolgok, amiket a blokkokba beírnak – és mi van, ha egy Bitcoin-tranzakció illegális?" De hát a Bitcoin felül áll ezeken a dolgokon, mert egyáltalán nem foglalkoztatja az emberi törvénykezésnek az ítélete.

– Nem szokott ezen gondolkodni.

– Nem tud. És itt azért nagyon könnyű megcsúszni: hogy most nem akarunk mondjuk képeket – de akkor nem akarunk bizonyos számsorokat sem? De akkor ki dönti ezt el? És hova jutunk akkor, ha elkezdjük ezeket megkérdezni, hogy ezt lehet-e, ezt nem lehet-e?

Tehát van egy ilyen alapvető cenzúraellenállás-kérdés, ami a Bitcoinnak egy óriási erőssége – főleg egy hagyományos bankrendszerrel szemben. Amit ha meg akarunk változtatni, akkor a Bitcoinnak az alapját ingatnánk meg. Ezért aki ebbe belegondol, vagy aki szeretne ezen az úton továbbmenni, ezt nem fogja tudni támogatni – mert belekerül egy paradoxonba, amikor nem tud a saját javára tenni akkor, ha nem a szabadság felé nyit.

– Na igen, kicsit elkanyarodtunk – de nem baj, erről is kell beszélni, meg ez szerintem sokakat érdekel.

– Folytatnád, kérlek, itt ezt a RaspiBlitzes diasort?

– Igen. Pont ezzel tudom összekötni, hogy ennek a Bitcoin node-projektnek lett egy most körülbelül egy hetes, jelentős 1.12.0-ás release, frissítése.

Ami többek közt – hogy ezt mondjam először – a Bitcoin Knots futtatására is ad lehetőséget, amit egy kísérleti opcióba tettünk a beállítások menüben. Azért kísérleti, mert ez a Bitcoin Core-nak egy verziója, amit kevesebben próbálnak ki, illetve tesztelnek; magát a kódját, a kódváltoztatásokat kevesebben nézik. És hát azért óvatosan azzal, ha valaki mondjuk egy több csatornás Lightning node mögé akarná ezt betenni – mert talán leállhat váratlanul.

– Szerintem ő nem fogja, mert az már gondolkodik ezzel. (nevetés)

– Igen, ezért ez egy kísérleti dolog. Úgyhogy ilyen is van.

De nem ez a fő újdonság ebben a frissítésben, hanem hogy átálltunk új hardverajánlásokra. Most már a Raspberry ötös verziója – de továbbra is működik a négyessel. Illetve a blockchain, meg az egyéb indexek és funkciók helyfoglalása most már nagyon közel van, sőt sokszor túl is megy az 1 terabájtos lemez határain. Így most már azt ajánljuk, hogy aki újonnan kezd egy ilyen készüléket építeni, az egy 2 terabájtos lemezt vegyen. Nem is olyan óriási az árkülönbség, tehát nem kell kétszeres árat fizetni.

– Ja, pont tegnap néztem.

– Szerintem egy ilyen 50-60 000 forintos befektetés egy ilyen lemez. Ezeket a laptopból ismert NVMe típusú lemezeket ajánljuk, amik most már nem USB-kapcsolaton keresztül kapcsolódnak ehhez a kis Raspberryhez, hanem van egy PCI Express port – amit itt látni a sarokban, meg a cipősdobozon, amikor ott dekkol a kis node-od. Tehát van egy sokkal stabilabb kapcsolat. És ez a stabilabb kapcsolat egyben négyszer gyorsabb is a lemez és a processzor között. Szóval sokkal gyorsabb lesz ez a mód.

Illetve ez az új verzió, ha újonnan építed, már erről az NVMe SSD-lemezről is tud indítani. Az operációs rendszert eddig az SD-kártyán tartottuk, aminek van előnye, mert könnyen cserélhető – de ugyanakkor az SD-kártya hamar kimeríti az írások lehetőségeit. Tehát egy pár éves SD-kártya már jelentősen lelassul; ha rossz minőségű, akkor nem is működik. Az SSD-lemezek sokkal több írási ciklust tudnak elviselni, illetve sokkal gyorsabbak is.

Így most már – az új particiós táblán meg több helyen felbuzdulva – rá tudtuk tenni az indítási partíciót is a lemezre. És még mindig használjuk az SD-kártyát, de az arra jó, hogy rá kell írni az operációs rendszerképet, a kis image-et, amit letölt az ember vagy épít magának – ugye mivel egy nyílt forrású rendszerről van szó –, belerakja a kis eszközbe, és ez most már csak át fogja másolni ezt az indulási rendszerpartíciót a lemezre. És minden egyes frissítéskor ezt meg tudja majd csinálni.

És ha tovább tartod benne a kártyát, akkor tud ilyen kis biztonsági mentéseket csinálni automatikusan rá – ami főleg a Lightninggal kapcsolatban nagyon fontos, de minden egyéb szolgáltatás bizonyos részeit is lehet biztonsági mentésként használni.

Ezt láthatjuk ezen az ábrán: a régi lemezelrendezés úgy működött, hogy az egész Linux rendszer az SD-kártyán élt, és a lemezen – ami USB-vel volt hozzákapcsolva, vagy akár ha NVMe-t használtál már régen is – ott élt az adott adatcsoport. És most pedig itt az alsó sorban látható, hogy mi csak installálásra használjuk az SD-kártyát, és lett három partíció a lemezen: egy kicsi és két nagyobb. Az egyik ugyanolyan adattárolásra szolgál, mint ahogy az előbb volt – de lett még másik kettő, ami elvállalja a rendszer indítását és futtatását.

És hát nem csak ez a minimális szükséges hardver, ez a hitelkártya méretű Raspberry – sokszor praktikusabb, és akár még olcsóbb is, egy öreg laptopon futtatni ezt a dolgot. Ott ugyanúgy meg tudjuk csinálni ezt az új partícióelrendezést.

Illetve van egy német eredetű, hát ez egy adatközpont-menedzselő szoftver: a Proxmox.

– Jópofa.

– Ami egy operációs rendszer önmagában, egy Debian-alapú Linux operációs rendszer, amit feltelepítesz a szerveredre – vagy akár egy mini PC-re is, ami mondjuk erősebb. És akkor ezen belül tudsz a kis webfelületén keresztül virtuális gépeket indítani. És akkor egy fizikai gépházban lehet – teljesítménytől meg memóriamérettől függően – több virtuális géped, amibe szintén behúzhatod azt az operációs képet, ami a RaspiBlitz, és akkor fel fogja építeni ezeket a dolgokat.

Akár használhatod a létező fizikai lemezedet is, amit a Raspberry Pi-on használtál: berúghatod a Proxmox-szerverbe, és úgy is tud működni. De úgy is tud működni, hogy minden virtualizálva van, és a szervernek a saját tárján vannak a partíciók.

Ez egy evolúciója az embernek, hogy mit kezd el csinálni. Tehát ha csak van egy kis Bitcoin node-od, akár nem is mindig online – aztán lehet, hogy akarsz egy szervert csinálni, és akkor rájössz, hogy hú, mennyi mindent lehet ezzel csinálni, és akkor akár másoknak is szolgáltatsz dolgokat.

– Aztán esetleg céget is alapítasz.

– Vagy akár tényleg ipari szintekre jut el az ember. És akkor lehet már gondolkodni, hogy ha ezeket a dolgokat meg akarnám csinálni több más embernek, vagy egy helyi közösségnek, vagy akár csak ideiglenesen egy konferenciának – akkor egy ilyen Proxmox-alapon már lehet skálázódni.

– Menő.

– Nagyon sok új szoftver, illetve szoftvereknek az újabb verziói vannak, amiket csináltunk, meg egyéb privacy-orientált funkciók, amiket az ember a saját node-jával könnyebben meg tud valósítani.

Meg lesznek majd itt különböző tervek: a NixOS típusú operációs rendszer konfigurációs nyelvére alapuló node-csomagon is dolgozunk. Ez már nem én magam, hanem akik ezen a RaspiBlitz-dolgon dolgoznak. Hogy majd lesz egy ilyen is, hogy egy kis konfigurációt tartalmazó, leíró fából lehet majd létrehozni egy egész node-ot, mondjuk egy fél órán belül – amit bárhol elindítasz, tudod, hogy ugyanolyan lesz itt is, ott is; illetve tudni fogod pontosan, hogy mi fut rajta, mi van jelen rajta. Ez egy nagyon érdekes projekt.

Ugye Five, aki szintén volt itt nálatok, a szabadságtechnológiákról beszélve – ő például a saját laptopján is, amit nap mint nap használ, NixOS operációs rendszert használ, és így determinisztikusan tudja, hogy mi van rajta.

Ezt egy érdekes dolog lenne minél jobban elterjeszteni az emberek között – úgy, hogy ha egy kis weboldalon tudnak kattintgatni és úgy irányítani, akkor nem is kell feltétlenül belemerülniük a dologba. Úgyhogy ez a célja ennek a NixBlitz projektnek.

Úgyhogy gyertek, nézzétek meg az interneten! [raspiblitz.org](https://raspiblitz.org) egyébként a website-ja a projektnek. Aztán van Telegram csoport is, ott is van vagy közel 2000 ember, ha jól emlékszem. Illetve hát a HUSZONEGY csoportban is tudunk erről beszélni természetesen, magyarul.

– Ez tök jó. Köszi, hogy összefoglaltad ezt a témát is nekünk! Ilyenkor én mindig kedvet érzek, hogy egy újabbat csináljak – úgyhogy lehet, hogy neki fogok, mert pont itt a napokban találtam két kis Raspberryt az egyik cipősdobozban. Úgyhogy szerintem leporolom őket, és megnézem, hogy miket lehet most újonnan.

Köszi, Openoms, az összefoglalót. Te jössz Miskolcra, ugye? Találkozhatnak veled ott, akik jönnek?

– Én továbbra is – a harmadik ilyen konferencián – a kézzelfogható dolgokat szeretném prezentálni, úgyhogy terv szerint lesz egy kis asztalom, amin újfent hardvertárcák, node-ok lesznek kipróbálhatóak.

– Meg aláíró eszközök.

– Így van. Hardvertárca, aláíró eszköz – hasonló dolgok, de nem ugyanaz. Úgyhogy ha arra jöttök, akkor nézzetek oda a kis asztalhoz, és akkor meg lehet beszélni, hogy kit mi érdekel, illetve mik a legjobb módszerek arra, hogy biztonságosan használja az ember.

Fogok is beszélni, előreláthatólag egy kis workshopos dolog keretében, arról, hogy hogyan legyünk biztonságban online. Úgyhogy erre még nekem is fel kell készülnöm, hogy mik azok a legfontosabb dolgok, amiket mindenkivel szeretnék megosztani.

– Igen, ez a nehéz, hogy az ember vállal egy prezit, és akkor…

– Annyi mindent el lehet mondani, meg rohadt mélyen. Hát mindegy – fél óra alatt úgy, hogy hasznos legyen. Aztán a részletekért meg majd lehet személyesen, vagy online a chatben érdeklődni, beszélgetni.

– A Bitcoin Miskolc konferencia programja egyre kiforrottabb; megtekinthető a pénteki, szombati és vasárnapi részletes program is a [bitcoinmiskolc.hu](https://bitcoinmiskolc.hu)-n. Lehet ingyenes jegyeket regisztrálni – akár külön napokra, akár csomagban –, illetve fizetős jegyeket vásárolni, amiben különböző ellátások is elérhetőek. De ez egy lényeges információ: a konferencián a részvétel alapvetően ingyenes.

A konferencia Miskolctapolcán lesz, a négycsillagos [Hotel Aurorában](https://hotelaurora.hu). Aki fizetős jegyet vesz szállással együtt, az ebben a szállodában kaphat szobát; itt tud wellnessezni is, illetve az étkezéseket is itt kapja. A tavaszi konferencia a [Hotel Atlantisban](https://hotelatlantis.hu) volt, és lesz – ez Hajdúszoboszlón szintén egy négycsillagos wellness szálloda.

Mindkét szálloda előszeretettel támogatja hónapok óta a podcastunkat, amit nagyon köszönünk nekik. És még azt érdemes tudni róluk, hogy bitcoint elfogadó és bitcoint tartalékoló szállodák.

Kövessetek minket a Nostron, iratkozzatok fel a YouTube-csatornánkra – és ne adjátok el a bitcoinotokat!

– Köszi szépen, hogy itt lehettem.

– Köszönjük szépen a figyelmet, és egy hét múlva találkozunk itt is, meg majd ott is, akivel. Sziasztok!

– Köszi. Sziasztok!
