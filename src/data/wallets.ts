// Data for Wallets, recommended wallets etc.

export const wallets = {
    intro: "Figyelemeztetések: \
Az egyszerűsített ajánlások nagyon szubjektívek, és messze nem tudnak figyelembe venni minden szempontot. \
Nincs érdekeltségünk egyik ajánlott szolgáltatással vagy termékkel kapcsolatban sem. \
Az itt felsorolt szoftver/technológiai elemzések nem befektetési tanácsok.",
    categories: [
        {
            name: "Lightning tárcák -- önrendelkező",
            id: "lightning-selfcustodial",
            text: "A lightning egy elterjedt második-szintű bitcoin fizetési rendszer, gyors és olcsó utalásokat tesz lehetővé, főleg kisebb összegekre praktikus. \
Az ún. szuverén, önredelkező (self-custodial) tárcáknál a privát kulcsok kizárólag a felhasználónál vannak, ezáltal biztonságosabbak. \
Léteznek még letétkezelői (custodial) tárcák, ahol valójában a szolgáltató tárolja a felhasználók pénzét; itt van rizikó a szolgáltató miatt, viszont kicsit egyszerűbben használhatók.",
            items: [
                {
                    name: "Phoenix",
                    text: "Ez egy olyan Lightning tárca, amelyik tárolja a privát kulcsokat, így nem kell megbízni a szolgáltatóban, viszont nem is kell a felhasználónak foglalkoznia a csatornák kezelésével, mert azt a szolgáltató szinte teljesen automatizálja -- némi díjért cserébe (jól átlátható díjazás).",
                    link: "https://phoenix.acinq.co/"
                }
            ],
            outro: "Léteznek ú.n. teljes node tárcák is, ahol a felhasználó kell foglalkozzon a csatorna kezeléssel, de ezeket csak tapasztalt felhasználóknak ajánljuk (pl. Blixt)."
        },
        {
            name: "Lightning tárcák -- szolgáltatói",
            id: "lighning-custodial",
            text: "A lightning egy elterjedt második-szintű bitcoin fizetési rendszer, gyors és olcsó utalásokat tesz lehetővé, főleg kisebb összegekre praktikus. \
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
Szempontok: jó ha egy tárca: nyílt forráskódú (FOSS), és kizárólag bitcoinos.",
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
            text: "A harver tárcák olyan kis eszközök, amik kizárólag arra valók, hogy bitcoin tranzakciókat írjanak alá. \
Tárolják a privát kulcsokat (hosszabb vagy rövidebb ideig), és ezzel tudnak aláírni bitcoin tranzakciókat. \
Nem csatlakoznak az internetre, és a kulcsokat biztonságos módon tárolják. \
Szempontok: jó ha: airgapped (nem csatlakozik vezetékkel a hoszt géphez), kizárólag bitcoinos, nyílt forráskódú (FOSS), és van benne secure element hardver.",
            items: [
                {
                    name: "ColdCard (Q, MK4)",
                    text: "",
                    link: ""
                },
                {
                    name: "Jade",
                    text: "",
                    link: ""
                },
                {
                    name: "BitBox",
                    text: "",
                    link: ""
                },
                {
                    name: "Keystone (3)",
                    text: "",
                    link: ""
                },
                {
                    name: "Specter DIY",
                    text: "",
                    link: ""
                },
                {
                    name: "SeedSigner DIY",
                    text: "",
                    link: ""
                },
                {
                    name: "Trezor",
                    text: "",
                    link: ""
                }
            ]
        },
        {
            name: "Bitcoin csomópont (node)",
            id: "node",
            text: "",
            items: [
                {
                    name: "StartOS",
                    text: "",
                    link: ""
                },
                {
                    name: "RaspiBlitz",
                    text: "",
                    link: ""
                },
                {
                    name: "Umbrel",
                    text: "",
                    link: ""
                }
            ]

        }
    ],
    outro: "Kiegészítésket, javításokat a GitHub-ban vagy a telegram csoportban várunk"
}
