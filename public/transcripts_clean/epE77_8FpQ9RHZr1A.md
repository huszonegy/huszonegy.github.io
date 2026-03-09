Sziasztok! Üdvözlünk titeket! Ez itt a HUSZONEGY Bitcoin Podcast 77. epizódja. Mai kedves vendégünk Openoms. Üdvözöllek újra nálunk! Hihetetlen, hogy már a 77. adáshoz jutottunk el, és azért hívtunk meg újra, mert rengeteg konferencia zajlik mostanában a Bitcoin háza táján. Te is részt vettél egy ilyenen; be tudnál nekünk számolni arról, hogy mi volt ez pontosan és hol volt?

– Sziasztok, jó újra itt lenni, köszönöm a meghívást! Gratulálok nektek, hogy folyamatosan viszitek a podcastot. Berlinben jártam a Bitcoin Plus+ eseményen. Ez egy tematikus konferenciasorozat, amit Lisa Neigut (niftynei) szervez, aki a Blockstreamnél dolgozott a Core Lightning implementációján Rusty Russell-lel és Christian Deckerrel együtt. Ez egy kifejezetten technikai jellegű, fejlesztőknek szánt sorozat. A mostani alkalom a Lightning hálózatra fókuszált, innen jött a Lightning Plus+ elnevezés is. A „plusz-plusz” utalás a Bitcoin Core C++ programozási nyelvére is.

Mivel Lightning-node-okkal és dokumentációval foglalkozom, illetve a Blink Walletnél dolgozom, ez számomra kiemelt szakmai továbbképzés volt. A három nap alatt párhuzamosan futott egy hackathon is, de én leginkább a szakmai előadások és a közösség miatt mentem. Egy közösségi irodában volt az esemény, ahol VIP-szekciók nélkül, közvetlenül lehetett beszélgetni a világ élvonalbeli protokollfejlesztőivel.

– Ezekre a célzott konferenciákra érdemes igazán járni, ahol élőben kaphatod meg az élvonalbeli tudást.

– Pontosan. Volt például egy előadás a Block (korábban Square) Lightning-node-járól, akik a Cash App-et és a Square terminálokat futtatják. Kiderült, hogy a node-juk 10%-os éves bevételt termel a tranzakciós díjakból. Ez egyfajta felső határ annak, amit el lehet érni. Bár 180 bitcoin a kapacitásuk, ami a teljes hálózathoz képest nem tűnik óriásinak, a sikerük titka az 50 milliós felhasználói bázisukban rejlik. A Cash App felhasználói szeretnek Bitcoinban fizetni, és ez a hatalmas forgalom megy keresztül a node-jukon. Most aktiválják a Square terminálokon is a Lightning-fizetést, ami még tovább növeli majd ezt az ökoszisztémát.

Részt vettem egy Base 58 workshopon is, ami egy zseniális társasjáték a Bitcoin működésének szemléltetésére. Papírlapokkal és kosarakkal szimuláltuk a hálózatot: kézzel készítettünk genesis blokkot, tranzakciókat validáltunk matematikai szabályok alapján, és borítékokba zártuk a blokkokat. Volt egy hálózati felelős is, aki cérnákkal kötötte össze az asztalokat, amik a node-okat jelképezték. Még a bányászatot is szimuláltuk egy kis géppel, ami a megfelelő hasht kereste.

– Ez nagyon jó szemléltető eszköz lehet a teljes folyamat megértéséhez.

– Igen, és az egész projekt nyílt forráskódú. Tervezem is, hogy lefordítom a segédleteket magyarra, és talán a következő [Bitcoin Miskolc](https://bitcoinmiskolc.hu) konferencián vagy egy budapesti meetupon mi is rendezhetnénk egy ilyen workshopot. Nagyon sokat segít az embereknek megérezni a technológia mélységeit.

Szó volt még új protokollokról is, mint az Ark és a Spark. Az Ark egy olyan második rétegű megoldás, ami lehetővé teszi, hogy több ember közösen tulajdonoljon egy UTXO-t (elköltetlen tranzakciós kimenetet). Ez azért fontos, mert az on-chain tranzakciós díjak miatt a túl kicsi kimenetek nem gazdaságosak. Az Arkban egy virtuális tranzakciós fán belül ingyen és azonnal lehet küldözgetni a szatosikat, és bármikor ki lehet lépni belőle egy Lightning-fizetéssel. A Luganói konferencián fogják élesben publikálni a rendszert, már nagyon várom.

– Hallottam már róla Karótól a múltkori miskolci konferencián; elképesztő, milyen gyorsan fejlődik a technológia.

– A Spark pedig egy úgynevezett State Chain megoldás, ami szintén a gyors és olcsó használatot segíti. Itt privát kulcsok átadásával történik az elköltés, amihez ugyan kell egy minimális bizalom a federált operátorok felé, de van benne egy egyoldalú „kiugrási” lehetőség is. Ez egy skálázható self-custody megoldás, ahol a végén nálad van a kulcs, és nem függsz teljesen egy szolgáltatótól, mint a hagyományos tőzsdék esetén. Ez védelmet nyújt a technikai vagy szabályozói kockázatok ellen is.

A RaspiBlitz projekt háza táján is vannak újdonságok: kijött az 1.12.0-ás frissítés. Most már kísérleti opcióként futtatható a Bitcoin Knots kliens is, bár ezt egyelőre óvatosan ajánljuk a nagy forgalmú node-ok mögé. Frissítettük a hardverajánlást is: már a Raspberry Pi 5-öt javasoljuk, és a blockchain mérete miatt az 1 TB-os lemez helyett már érdemes 2 TB-os NVMe SSD-t venni. Ez nemcsak stabilabb, de négyszer gyorsabb is az USB-s megoldásoknál.

– Mindig kedvet kapok egy új node építéséhez, amikor ezekről beszélünk. Szerintem mindenkinek meg kellene tapasztalnia ezt az érzést, mert ez adja meg az igazi hatalmat a Bitcoin felett.

– Pontosan. A node-futtatás a saját hatalmadat növeli meg önmagad felett, hiszen te magad validálod a tranzakcióidat. Ez egy játékelméleti helyzet: a bányászok, a fejlesztők és a felhasználók egyfajta „mexikói párbajban” állnak egymással, ahol senki nem tudja a másikat felülírni. Sokan vitatkoznak a spam-szűrésről, de a Bitcoin konszenzus rétegét nem lehet hangos tüntetéssel megváltoztatni. A bányászoknak nem érdekük a cenzúra, hiszen ők a díjakból élnek.

A RaspiBlitznél dolgozunk a Proxmox virtualizációs támogatáson és a NixOS alapú megoldásokon is. Utóbbi célja, hogy egyetlen konfigurációs fájlból bárki felépíthessen egy determinisztikus node-ot fél óra alatt. Ha érdekel titeket a technikai rész, nézzétek meg a [raspiblitz.org](https://raspiblitz.org) oldalt, vagy gyertek fel a Telegram csoportunkba!

– Köszönjük, Openoms az összefoglalót! Találkozhatnak veled a nézők Miskolcon is?

– Természetesen! Október 17-19. között ott leszek a [Bitcoin Miskolc](https://bitcoinmiskolc.hu) konferencián a [Hotel Aurora](https://hotelaurora.hu) szállodában. Lesz egy asztalom, ahol hardveres tárcákat, node-okat és aláíró eszközöket mutatok be, illetve tartok egy workshopot arról is, hogyan maradjunk biztonságban online. A részvétel alapvetően ingyenes, de regisztrációhoz kötött.

Böngésszétek a [huszonegy.world](https://huszonegy.world) oldalt, iratkozzatok fel a YouTube csatornánkra, és kövessetek minket a Nostr-on! Támogatóink a miskolctapolcai [Hotel Aurora](https://hotelaurora.hu) és a hajdúszoboszlói [Hotel Atlantis](https://hotelatlantis.hu). A Firefish pedig azt üzeni: ne add el a bitcoinodat! Találkozunk Miskolcon, sziasztok!