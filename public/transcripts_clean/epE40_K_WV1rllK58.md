Sziasztok, üdvözlünk mindenkit a HUSZONEGY Bitcoin Podcast 40. adásában! Mai vendégem HenkyPenky, aki a HUSZONEGY közösség Nostr-megjelenéseiért felel. Ő tartja karban a posztjainkat ezen a decentralizált platformon, ezért úgy gondoltuk, bemutatjuk nektek, ki is ő, és hogyan keveredett bele a Bitcoin világába.

– Az egész 2017-ben kezdődött, amikor a Windows Store-ban kutakodva találtam egy bányász appot. Elindítottam egy laptopon, és hagytam szólni pár hónapig, bár akkor még semmit nem olvastam utána. Az app a Coinbase-re küldte a bányászott satoshikat, amik ott is feküdtek egészen 2021 végéig. Amikor ránéztem, láttam, hogy az a pár satoshi már 10 000 forintot ér. Akkor kezdett el érdekelni, mit is lehet ezzel kezdeni.

Elkezdtem Bitcoin-témájú podcastokat hallgatni, a Bitcoin Bázis összes részét végigvettem, majd jött a Fountain app és a külföldi adások. Egy évig szippantott be a „Crypto Twitter” (CT), de amint bekerültem a HUSZONEGY csapatba, és elkezdtétek magyarázni a privacy (magánszféra) fontosságát, leállítottam a Facebookot, az Instagramot és a Twittert is. Ma már csak Nostr van. Ezzel párhuzamosan jött az igény a saját node-ra is, hogy magam validáljam a tranzakcióimat. Most egy Umbrel fut egy mini PC-n, rajta egy Lightning node-dal és az Alby Hub-bal.

– Az Alby nemrég váltott custodial-ról non-custodial megoldásra. Sokan csak böngészőbővítményként (extension) ismerik, de ez valójában egy kiváló kulcskezelő is. A Nostr használatához számítógépen szinte elengedhetetlen, mert leegyszerűsíti a belépést és a Lightning-fizetéseket. Én is folyamatosan használom, amikor gép előtt vagyok. Henky, megmutatod nekünk a saját node-odat?

– Persze. Itt látható az Umbrel felülete a mini PC-men. Ez egy Nuxbox K6-os gép, 32 GB RAM-mal, 2 TB SSD-vel és egy Ryzen 7-es processzorral, 16 szállal. Ez egy dedikált szerver, ami folyamatosan megy. Fut rajta egy teljes Bitcoin full node és a Lightning Network is. Most éppen egy új csatornát nyitok az Alby Hub-on keresztül az Olympus-hoz. A Lightning-csatorna lényege – ahogy L+ is elmondta korábban –, hogy olyan, mint egy bárban nyitott számla: csak a nyitáskor és a záráskor írunk a blokkláncra, a kettő között pedig akár egymillió tranzakció is lemehet a felek egyenlegének rendezésével.

A csatornanyitáshoz hat konfirmáció kell, ami átlagosan 60 perc, szóval az adás végére talán meg is lesz. A Mempool-t általában stoppolom a gépen, mert elég erőforrás-igényes, és nem szeretem, ha éjszaka fütyül a gép a szobában. (nevetés) A Mini PC-m CPU-kihasználtsága így is 22 százalék körüli.

– Beszéljünk egy kicsit a miskolci konferenciáról is. Te családostul érkeztél, három kisfiúval. Hogy bírtátok?
– Ez volt az első ilyen tesztünk, eddig mindig jöttek a nagyszülők is segíteni, de most öten voltunk. Működött a dolog. Igyekeztünk úgy szervezni, hogy délelőtt anya volt a gyerekekkel, én meg beültem egy-két előadásra, délután pedig fordítva. A legkisebb fiam, Csongi, olyan szépet aludt két-három órát a beszédek alatt, hogy teljesen oda tudtam figyelni. Nagyon tetszett Lőrinc és Schiller előadása is. Jó volt végre élőben látni azokat az arcokat, akikkel eddig csak a Telegramon beszélgettünk. Már várom a márciusi folytatást Hajdúszoboszlón.

– Említetted a „zajt”, ami miatt elhagytad a mainstream közösségi médiát. A Nostr-ban mi tetszett meg leginkább?
– Az, hogy nincs központi irányítás, és nincs algoritmus, ami reklámokat vagy politikai posztokat tologat az arcomba. A feed-emen az jelenik meg, amit én akarok, olyan forrásból, amit én választok. Ott vannak a „zap”-ek is, amik Lightning-alapú Bitcoin-borravalók a posztokért. Ez teljesen más javadalmazási rendszer, mint a YouTube-é, ami Magyarországon kis csatornáknak szinte alig fizet. A Nostr-on a tartalomkészítő direktben kapja a támogatást a követőitől.

A Nostr egy relay-ekből (szórókból) álló hálózat. Ha egy szerver leáll vagy bannol, egyszerűen átmész egy másikra, és a követőid megmaradnak. A HUSZONEGY csoportnak is van már saját relay-je, amit Openoms indított el. Próbáljuk népszerűsíteni, mert a YouTube-on bármikor zárolhatnak Bitcoin-tartalmakat, ahogy a Simply Bitcoin-nal is történt nemrég. A Nostr-on nálad maradnak az adatok és a tulajdonosi jog is.

– Milyen alkalmazásokat ajánlasz a kezdőknek?
– A Primal a legjobb választás telefonra, mert hozza a Twitter érzést és van beépített tárcája is. Korábban a Damus-szal kezdtem, de az eleinte bugos volt. Az Apple egyébként ki is tiltotta a Damus-t egy időre a beépített Bitcoin-küldés miatt, de a fejlesztők kitalálták az „Apple Pay” (nem a hivatalos) megoldást: beállíthatsz egy emojit, amire rányomva automatikusan elindul a zap. A technológia mindig megelőzi a korlátozásokat.

Számítógépen a Nostrudel-t használom, ez a legprofibb kliens jelenleg. Beállíthatod, hogy melyik relay-ről jöjjön az infó (inbox) és hová küldd (outbox). Én a saját Umbrel-emre is mentem a HUSZONEGY posztjait. Van rajta Wavlake a zenehallgatáshoz, és Appstream az élő közvetítésekhez. Képek tárolására a Satellite.earth-öt használom, ahol pár satoshi-ért (kb. 5 forintért) lehet gigabájtokat venni.

– A bányászattal mi a helyzet nálad?
– Most éppen nincs otthon aktív gépem, de hamarosan beszerzek egy Bitaxe-et. Ez egy pici eszköz, akkora mint egy mikrofon, és „lottóbányászatra” való. Napi kb. 50 satoshit termel, de nem is a profit a lényeg, hanem a tanulás. Folyamatosan lehet állítgatni, konfolgatni, és ezzel mi is decentralizáljuk a bányászatot, elvéve a hatalmat a nagy pooloktól.

– Te a nukleáris iparban dolgozol, környezetvédelmi méréseket végeztek. Mit gondolsz, a nemzetállamok odaállnak majd a reaktoraikkal a Bitcoin mögé?
– Szerintem Magyarországon Paks adja az áramtermelés 40 százalékát, ez a „base load” (alapterhelés), ami nélkül leállna az ipar. Itt nem látom, hogy egyhamar kiadnának kapacitást bányászoknak. A napenergiánál viszont más a helyzet: ott rengeteg a felesleg, amit nem tudnak elhasználni, ott nagyon megérné a bányászat a hálózat stabilizálására. Amerikában már van olyan cég, a TeraWulf, amelyik saját reaktorral bányászik Pennsylvaniában.

A nukleáris energia a legtisztább és leghatékonyabb forrásunk, nem kell tőle félni. Több sugárzást kapsz a természetes háttérsugárzástól, mint egy erőmű mellől. Hallottam egy jövőképet is, miszerint a nemzetállamok azért fognak reaktorokat építeni, hogy növeljék a saját hash-rátájukat és uralják a blokkokat. Ez még távoli, de a technológia adott.

Zárásként: akinek kérdése van a Nostr-ral kapcsolatban, keressen bátran a Telegram csoportunkban, szívesen segítek. A Seedor eszközeihez pedig használjátok a „HUSZONEGY” kuponkódot a [seedor.io](https://seedor.io) oldalon. Találkozunk márciusban Hajdúszoboszlón! Köszönjük a figyelmet, sziasztok!

---

Böngésszétek a HUSZONEGY honlapját a [huszonegy.world](https://huszonegy.world) címen, ahol rengeteg ingyenes oktatóanyag elérhető. Azok számára pedig, akik személyes támogatást igényelnek, ajánljuk a Bitcoin Mentor szolgáltatásait a [bitcoinmentor.hu](https://bitcoinmentor.hu) honlapon. Iratkozz fel a HUSZONEGY Podcast YouTube csatornájára és a Rumble csatornánkra is! Kövesd a HUSZONEGY-et Facebookon és Nostron. Támogatóink Miskolctapolca Bitcoin-elfogadó wellness szállodái, a [Hotel Aurora](https://hotelaurora.hu) és a [Hotel Atlantis](https://hotelatlantis.hu). És a Firefish üzeni: ne adjátok el a bitcoinotokat!