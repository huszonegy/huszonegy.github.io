// Data for Wallets, recommended wallets etc.

export const wallets = {
    intro: "",
    categories: [
        {
            name: "Lightning tárcák -- önrendelkező",
            id: "lightning-selfcustodial",
            text: "A lightning egy elterjedt második-szintű (L2) bitcoin fizetési rendszer, gyors és olcsó utalásokat tesz lehetővé, főleg kisebb összegekre praktikus. \
Az ún. szuverén, önredelkező (self-custodial) tárcáknál a privát kulcsok kizárólag a felhasználónál vannak, ezáltal biztonságosabbak. \
Léteznek még letétkezelői (custodial) tárcák, ahol valójában a szolgáltató tárolja a felhasználók pénzét; itt van rizikó a szolgáltató miatt, viszont kicsit egyszerűbben használhatók.",
            items: [
                {
                    name: "Phoenix",
                    text: "Ez egy olyan Lightning tárca, amelyik tárolja a privát kulcsokat, így nem kell megbízni a szolgáltatóban, viszont nem is kell a felhasználónak foglalkoznia a csatornák kezelésével, mert azt a szolgáltató szinte teljesen automatizálja -- némi díjért cserébe (jól átlátható díjazás).",
                    link: "https://phoenix.acinq.co/"
                },
                {
                    name: "Breez",
                    text: "Self-custodial lightning tárca, mobilon futó teljes lightning node, saját csatorna-kezelés lehetőséggel",
                    link: "https://breez.technology/mobile/"
                }
            ],
            outro: "Léteznek ú.n. teljes node tárcák is, ahol a felhasználó kell foglalkozzon a csatorna kezeléssel, de ezeket csak tapasztalt felhasználóknak ajánljuk (pl. Blixt)."
        },
        {
            name: "Lightning tárcák -- szolgáltatói",
            id: "lighning-custodial",
            text: "A lightning egy elterjedt második-szintű (L2) bitcoin fizetési rendszer, gyors és olcsó utalásokat tesz lehetővé, főleg kisebb összegekre praktikus. \
A letétkezelői (custodial) tárcáknál valójában a szolgáltató tárolja a felhasználók satoshijait, ezért meg kell bízni bennük. \
Léteznek még ún. szuverén (self-custodial) tárcák, ahol a privát kulcsok a felhasználónál vannak, ezért biztonságosabbak. \
A letétkezelői tárcák gyszerűbbek, első ismerkedésre jobban megfelelnek, de szigorúan csak kisebb összegekkel ajánljuk!",
            items: [
                {
                    name: "Blink",
                    text: "Könnyen használható, sok funkcióval bíró mobil app; salvadori központú cég áll mögötte, nem szükséges KYC; elérhető magyar felülettel is; hasznos kvízt is foglal magában.",
                    link: "https://blink.sv/"
                },
                {
                    name: "Wallet of Satoshi",
                    text: "Könnyen használható, népszerű mobil app, alap funckiókkal; a cégről kevés információ ismert, nem szükséges KYC.",
                    link: "https://walletofsatoshi.com/"
                }
            ],
            outro: "Megemlíthető még a Strike app is, bár az több mint egy Lightning tárca, hiszen fiat (euró) - bitcoin átváltást is támogat. KYC szükséges."
        },
        {
            name: "Onchain tárcák -- mobilon",
            id: "onchain-mobil",
            text: "Mobilapplikációk amelyekkel on-chain bitcoint tárolhatunk. \
Szempontok: jó ha egy tárca: nyílt forráskódú (FOSS), és kizárólag bitcoinos. Plusz pont, ha mutatja az egyes UTXO-kat (coin selection)",
            items: [
                {
                    name: "Green wallet",
                    text: "A Blockstream tárcája, jó onchain tárca, de támogat Liquidet is.",
                    link: "https://blockstream.com/green/"
                },
                {
                    name: "Blue wallet",
                    text: "Kipróbált bitcoin tárca app, a lightning részét nem ajánluk, de onchainre nagyon jó.",
                    link: "https://bluewallet.io/"
                },
                {
                    name: "Nunchuk",
                    text: "Modern tárca app, erőssége a több-eszközös védelem (multisig)",
                    link: "https://nunchuk.io/"
                }
            ]
        },
        {
            name: "Onchain tárcák -- számítógépen",
            id: "onchain-mobil",
            text: "Szoftveres tárca applikációk, amelyekkel on-chain bitcoint tárolhatunk. Legbiztonságosabbak egy hardver tárcával együtt használva. \
Szempontok: jó ha egy tárca: nyílt forráskódú (FOSS), és kizárólag bitcoinos.",
            items: [
                {
                    name: "Sparrow",
                    text: "A Sparrow wallet sokrétű funkcionalitást támogat, egyik legprofibb, viszont a felülete elsőre nem a legegyszerűbb. ",
                    link: "https://www.sparrowwallet.com"
                }
            ],
        },
        {
            name: "Hardver tárcák",
            id: "hw-wallet",
            text: "A hardver tárcák olyan kis eszközök, amik kizárólag arra valók, hogy bitcoin tranzakciókat írjanak alá. \
Tárolják a privát kulcsokat (hosszabb vagy rövidebb ideig), és ezzel tudnak aláírni bitcoin tranzakciókat. \
Nem csatlakoznak az internetre, és a kulcsokat biztonságos módon tárolják. \
Szempontok: jó ha: airgapped (nem csatlakozik vezetékkel a hoszt géphez), kizárólag bitcoinos, nyílt forráskódú (FOSS), és van benne \"secure element\" hardver. \
A hardver tárca csatlakoztatásához ajánlott egy jó szoftvertárca is, pl. Sparrow (desktop) vagy Nunchuk (mobil).",
            items: [
                {
                    name: "ColdCard (Q, MK4)",
                    text: "Az egyik legbiztonságosabb, legsokrétűbb eszköz az egyik legelső gyártótól (Coinkite), a \"hardver tárcák Rolls-Royce-a\". \
Több haladó opciója van, profiknak ajánlott, kezdőknek nem feltétlenül a legjobb választás.",
                    link: "https://coldcard.com/"
                },
                {
                    name: "Jade",
                    text: "Kicsi, egyszerű, jól összerakott, air-gapped tárca a Blockstreamtől, jó ár/érték aránnyal.",
                    link: "https://blockstream.com/jade/"
                },
                {
                    name: "BitBox",
                    text: "Egy igényes kis eszköz Svájcból.",
                    link: "https://bitbox.swiss/bitbox02/"
                },
                {
                    name: "BitKey (3)",
                    text: "A Block rendhagyó válasza a hardver tárca problémára: self-custodial de gyakorlatilag elveszthetetlen (mert a kütyü-mobilapp-szolgáltató hármasból kettő is elég a visszaállításhoz). \
Mindez egy nagyobacska kavics kinézetű érekes kis eszközben.",
                    link: "https://bitkey.build/"
                },
                {
                    name: "SeedSigner DIY",
                    text: "Általános célú alkatrészekből összerakható, Raspberry Zero alapú olcsó eszköz. Csináld magad, vagy vedd meg készen. Nem tárolja el a titkokat, így kilopni sem lehet belőle, viszont minden alkalommal be kell azt vinni.",
                    link: "https://seedsigner.com/"
                },
                {
                    name: "Specter DIY",
                    text: "Csináld-magad hardver eszköz, nagy érintőképernyővel, kiegészítőkkel és sokoldalú szoftverrel.",
                    link: "https://specter.solutions/hardware/index.html"
                },
                {
                    name: "Trezor",
                    text: "Egy népszerű eszköz az egyik első hardver tárca gyártótól, Csehországból.",
                    link: "https://trezor.io/"
                }
            ]
        },
        {
            name: "Bitcoin csomópontok (node)",
            id: "node",
            text: "Ha nem szeretnél más szoftver szolgáltatásától függeni, vagy nem szeretnéd ha bárki más látná, hogy milyen (saját) címek egyenlegére vagy kíváncsi, \
vagy hogy honnan jönnek a tranzakcióid, vagy csak hozzá szeretnél járulni a bitcoin hálózat decentralizáltságához, \
a legjobb ha te is futtatsz egy bitcoin csomópontot (\"node\"-ot). \
Ehhez egy szerényebb hardver is elég, pl. egy Raspberry Pi, vagy egy mini PC, vagy egy régi laptop. \
Adattárolóból viszont egy 2TB-os ajánlott -- és ha lehet SSD. \
Itt pár szoftver projektet említünk meg, de komplett hardver+szoftver megoldások is elérhetők ezektől a projektektől vagy kapcsolódó forrásokból. \
Tipikusan egy bitcoin node mellett egyéb társult szolgáltatásokat is lehet/érdemes futtatni, mint pl. indexelők (electrum, mempool, stb.), vagy lightning node.",
            items: [
                {
                    name: "StartOS",
                    text: "Egy külön oprendszer otthoni szerverekhez, melynek fő célja az adatok szuverén kezelése. Természetesen támogatja a bitcoin nodeot és kapcsolódó szolgáltatásokat is.",
                    link: "https://start9.com/"
                },
                {
                    name: "RaspiBlitz",
                    text: "Egy nyílt forráskódú szoftvergyűjtemény, ami nagyban leegyszerűsíti a bitcoin node futtatását.",
                    link: "https://docs.raspiblitz.org/"
                },
                {
                    name: "Umbrel",
                    text: "Egy népszerű, Raspberry Pi-re fókuszáló, könnyen konfigurálható bitcoin node (és egyéb szolgáltatások).",
                    link: "https://umbrel.com/"
                }
            ]

        }
    ],
    outro: "Kiegészítésket, javításokat a GitHub-ban vagy a telegram csoportban várunk"
}
