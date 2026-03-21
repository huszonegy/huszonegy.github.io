// Data for Wallets, recommended wallets etc.

export const wallets = {
    intro: "",
    categories: [
        {
            name: "Lightning tárcák",
            id: "lightning",
            text: "A Lightning egy elterjedt második-rétegű (L2) bitcoin fizetési rendszer, gyors és olcsó utalásokat tesz lehetővé, főleg kisebb összegekre praktikus.",
            bulletsIntro: "Két fő típusa van:",
            bullets: [
                "szolgáltatói (custodial) – a szolgáltató tárolja a satoshikat",
                "önrendelkező (self-custodial) – a privát kulcsok a felhasználónál maradnak"
            ],
            subcategories: [
                {
                    name: "Szolgáltatói",
                    id: "lightning-custodial",
                    text: "A letétkezelői tárcák egyszerűbbek, első ismerkedésre jobban megfelelnek, de szigorúan CSAK KISEBB ÖSSZEGEKKEL ajánljuk!",
                    items: [
                        {
                            name: "Blink",
                            text: "Könnyen használható, sok funkcióval bíró mobil app; salvadori központú cég áll mögötte, nem szükséges KYC; elérhető magyar felülettel is; hasznos, tanulságos kvízt is foglal magában, mely néhány 1-2 sat-tal jutalmazza az egyes leckéket teljesítő felhasználót.",
                            link: "https://blink.sv/"
                        },
                        {
                            name: "Strike",
                            text: "Könnyen használható, sokoldalú mobil app, amely a Lightning hálózaton gyors és olcsó bitcoin tranzakciókat kínál. Átmenetileg nem támogatja a fiat (pl. euró) és bitcoin közötti átváltást, de a globális pénzátutalásokat igen. KYC szükséges. Kezelőfelülete intuitív, ideális kezdőknek és haladóknak egyaránt.",
                            link: "https://strike.me/"
                        },
                        {
                            name: "Wallet of Satoshi",
                            text: "Könnyen használható, népszerű mobil app, alap funckiókkal; a cégről kevés információ ismert, nem szükséges KYC.",
                            link: "https://walletofsatoshi.com/"
                        }
                    ],

                },
                {
                    name: "Önrendelkező",
                    id: "lightning-selfcustodial",
                    text: "Az önrendelkező tárcáknál a privát kulcsok kizárólag a felhasználónál vannak, ezáltal biztonságosabbak. Az olyan tárcákat, ahol mi magunk kell a csatornákat kezeljük, csak azoknak ajánljuk, akik már járatossabbak a Lightningban. Említésre méltó még: Blixt.",
                    items: [
                        {
                            name: "AQUA",
                            text: "Az AQUA egy olyan önrendelkező (self-custodial) Bitcoin és Lightning tárca, amely egyszerű kezelhetőséget kínál kezdőknek is. Hamarosan magyar felülettel is elérhető lesz. Támogatja a Bitcoin on-chain, Lightning és Liquid hálózatokat, valamint a Tether USDt-t. A Lightning tranzakciókat a Boltz segítségével, Liquid Bitcoin (L-BTC) alapú submarine swap-okkal kezeli, automatizálva a csatornakezelést.",
                            link: "https://aquawallet.io/"
                        },
                        {
                            name: "Phoenix",
                            text: "Ez egy olyan Lightning tárca, amelyik tárolja a privát kulcsokat, így nem kell megbízni a szolgáltatóban, viszont nem is kell a felhasználónak foglalkoznia a csatornák kezelésével, mert azt a szolgáltató szinte teljesen automatizálja – némi díjért cserébe (jól átlátható díjazás).",
                            link: "https://phoenix.acinq.co/"
                        },
                        {
                            name: "Breez",
                            text: "Self-custodial lightning tárca, mobilon futó teljes Lightning node, saját csatorna-kezelés lehetőséggel",
                            link: "https://breez.technology/mobile/"
                        },
                        {
                            name: "Zeus",
                            text: "A Zeus egy sokoldalú Lightning tárca, sokan 'távirányító appként' használjuk egy szerveren futó saját node kezeléséhez. De ezen túl képes helyben futó node-ként is működni, akár saját csatorna kezeléssel, akár a Zeus LSP-jét használva.",
                            link: "https://zeusln.com/"
                        }
                    ],

                }
            ]
        },
        {
            name: "On-chain tárcák",
            id: "onchain",
            text: "On-chain tárcákkal közvetlenül a Bitcoin blokkláncon tárolhatunk bitcoint. Szempontok: jó ha egy tárca nyílt forráskódú (FOSS), és kizárólag bitcoinos.",
            subcategories: [
                {
                    name: "Mobilon",
                    id: "onchain-mobil",
                    text: "Plusz pont, ha mutatja az egyes UTXO-kat (coin selection).",
                    items: [
                        {
                            name: "Green wallet",
                            text: "A Blockstream tárcája, jó on-chain tárca, de támogat Liquidet is.",
                            link: "https://blockstream.com/green/"
                        },
                        {
                            name: "Blue wallet",
                            text: "Kipróbált bitcoin tárca app, on-chain tranzakciókra nagyon jó.",
                            link: "https://bluewallet.io/"
                        },
                        {
                            name: "Nunchuk",
                            text: "Modern tárca app, erőssége a több-eszközös védelem (multidevice/multisig), illetve jól együttműködik hardver tárcákkal.",
                            link: "https://nunchuk.io/"
                        }
                    ]
                },
                {
                    name: "Számítógépen",
                    id: "onchain-desktop",
                    text: "Legbiztonságosabbak egy hardver tárcával együtt használva.",
                    items: [
                        {
                            name: "Ginger wallet",
                            text: "Non-Custodial, Open source Bitcoin tárca CoinJoinnal, 2FA-val, Torral és hardvertárca-támogatással. Magyar nyelv elérhető.",
                            link: "https://gingerwallet.io"
                        },
                        {
                            name: "Sparrow",
                            text: "A Sparrow wallet sokrétű funkcionalitást támogat, egyik legprofibb, viszont a felülete elsőre nem a legegyszerűbb. ",
                            link: "https://www.sparrowwallet.com"
                        }
                    ]
                }
            ]
        },
        {
            name: "Hardver tárcák",
            id: "hw-wallet",
            text: "A hardver tárcák olyan kis eszközök, amik kizárólag arra valók, hogy bitcoin tranzakciókat írjanak alá. Tárolják a privát kulcsokat, nem csatlakoznak az internetre, és a kulcsokat biztonságos módon tárolják. A hardver tárca csatlakoztatásához ajánlott egy jó szoftvertárca is, pl. Sparrow (desktop) vagy Nunchuk (mobil).",
            bulletsIntro: "Szempontok:",
            bullets: [
                "airgapped (nem csatlakozik vezetékkel a hoszt géphez)",
                "kizárólag bitcoinos",
                "nyílt forráskódú (FOSS)",
                "van benne \"secure element\" hardver"
            ],
            items: [
                {
                    name: "ColdCard (Q, MK4)",
                    text: "Az egyik legbiztonságosabb, legsokrétűbb eszköz az egyik legelső gyártótól (Coinkite), a \"hardver tárcák Rolls-Royce-a\". \
Több haladó opciója van, profiknak ajánlott, kezdőknek nem feltétlenül a legjobb választás.",
                    link: "https://coldcard.com/"
                },
                {
                    name: "Jade",
                    text: "Kicsi, egyszerű, jól összerakott, air-gapped tárca a Blockstreamtől, jó ár-érték aránnyal.",
                    link: "https://blockstream.com/jade/"
                },
                {
                    name: "BitKey (3)",
                    text: "A Block rendhagyó válasza a hardver tárca problémára: self-custodial de gyakorlatilag elveszthetetlen (mert a kütyü-mobilapp-szolgáltató hármasból kettő is elég a visszaállításhoz). \
Mindez egy nagyobacska kavics kinézetű érekes kis eszközben.",
                    link: "https://bitkey.build/"
                },
                {
                    name: "BitBox",
                    text: "Egy igényes kis eszköz Svájcból.",
                    link: "https://bitbox.swiss/bitbox02/"
                },
                {
                    name: "SeedSigner (DIY)",
                    text: "Általános célú alkatrészekből összerakható, Raspberry Zero alapú olcsó eszköz. Csináld magad, vagy vedd meg készen. Nem tárolja el a titkokat, így kilopni sem lehet belőle, viszont minden alkalommal be kell azt vinni.",
                    link: "https://seedsigner.com/"
                },
                {
                    name: "Specter (DIY)",
                    text: "Csináld-magad hardver eszköz, nagy érintőképernyővel, kiegészítőkkel és sokoldalú szoftverrel.",
                    link: "https://specter.solutions/hardware/index.html"
                },
                {
                    name: "Trezor",
                    text: "Egy népszerű eszköz az egyik első hardver tárca gyártótól, Csehországból.",
                    link: "https://trezor.io/"
                }
            ],
            outro: "Amit NEM AJÁNLUNK új vásárlásra: Ledger, Tangem. Az ok: különböző korábbi biztonsági problémák. Aki ilyen használ, használja tovább, de fontoljon meg alternatívákat. Ledger esetében egy ajánlott lépés a LedgerLive app mellőzése, és az eszköz használata egy független tárcával, pl. Sparrow-val."
        },
        {
            name: "Bitcoin csomópontok (node)",
            id: "node",
            text: "Ha nem szeretnél más szoftver szolgáltatásától függeni, vagy nem szeretnéd ha bárki más látná a tranzakcióidat, vagy csak hozzá szeretnél járulni a bitcoin hálózat decentralizáltságához – futtass saját node-ot.",
            bulletsIntro: "Tudnivalók:",
            bullets: [
                "egy szerényebb hardver is elég: Raspberry Pi, mini PC, vagy régi laptop",
                "adattárolóból 2TB-os ajánlott – és ha lehet SSD",
                "komplett hardver+szoftver megoldások is elérhetők",
                "a node mellett érdemes egyéb szolgáltatásokat is futtatni (electrum, mempool, Lightning node)"
            ],
            items: [
                {
                    name: "StartOS",
                    text: "Egy külön oprendszer otthoni szerverekhez, melynek fő célja az adatok szuverén kezelése. Természetesen támogatja a bitcoin node-ot és kapcsolódó szolgáltatásokat is.",
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
    outro: ""
}
