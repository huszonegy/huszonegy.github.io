// Data for Links
// - url: link, without starting 'https://' and trailing '/'
// - footer: optional, true for links included in common footer
// - show: optional, if present, this is show, not the link itself
// - image: optional banner; the "Szponzoraink" category renders as a card grid,
//   other categories render image-items as full-width banner cards
// - align: optional banner crop alignment in the sponsor grid ("left", default center)
// - zoom: optional, scales the sponsor banner up (anchored to the align side) to enlarge a small logo
// - kind: optional card type badge — "own" (saját szolgáltatás), "affiliate", "coupon" (kupon)
// - detail: optional benefit shown in the badge (e.g. discount)
// - wide (category-level): renders the category wider with a centered heading
// Referenced img's must be under public (static)

export const links = [
    {
        category: "Szponzoraink",
        items: [
            {
                name: "BudaBit",
                text: "Cypherpunk fejlesztői közösség online és offline havi meetupokkal, ahol mélyebbre áshatsz a szabadságtechnológiákban.",
                image: "/pics/budabit-huszonegy-banner.jpg",
                align: "left",
                zoom: true,
                url: "https://budabit.club"
            },
            {
                name: "Hotel Atlantis",
                text: "Bitcoint elfogadó és tartalékoló családi wellness szálloda Hajdúszoboszlón. A tavaszi Bitcoin Miskolc konferenciák helyszíne.",
                image: "/pics/hotel-atlantis-huszonegy-banner.jpg",
                url: "https://hotelatlantis.hu"
            },
            {
                name: "Hotel Aurora",
                text: "Bitcoint elfogadó és tartalékoló wellness szálloda Miskolctapolcán. A következő, 2026. november 20-22. közötti <a href='https://bitcoinmiskolc.hu' target='_blank'>Bitcoin Miskolc konferencia</a> helyszíne.",
                image: "/pics/hotel-aurora-huszonegy-banner.jpg",
                align: "left",
                url: "https://hotelaurora.hu"
            }
        ]
    },
    {
        category: "Mentorálás",
        wide: true,
        items: [
            {
                name: "Bitcoin Mentor",
                text: "Személyre szabott Bitcoin tanácsadás és mentorálás magyarul – a HUSZONEGY podcast csapatától. Konzultáció, havi mentorálás, workshopok és műszaki támogatás kezdőknek és haladóknak.<span style='display:block; margin-top:0.7em'>A <a href='https://bitcoinmentor.hu/bitcoin-blog/' target='_blank'>Bitcoin blog</a> rovatban rendszeresen megjelenő fordítások, esszék és saját írások segítenek elmélyíteni a Bitcoin megértését.</span>",
                image: "/pics/bitcoin-mentor-huszonegy-banner.jpg",
                kind: "own",
                url: "https://bitcoinmentor.hu"
            }
        ]
    },
    {
        category: "Kedvezményes ajánlások",
        wide: true,
        items: [
            {
                name: "Relai",
                text: "Bitcoin-only megtakarítási app Svájcból. A Relai olyan, mint egy svájci bicska: megbízható, egyszerű, és pont azt csinálja, amire szükséged van — segít Bitcoint venni, rendszeresen megtakarítani, és mindezt úgy, hogy a bitcoinod privát kulcsai végig a te kezedben vannak.",
                image: "/pics/relai-huszonegy-banner-8.jpg",
                kind: "affiliate",
                detail: "1% helyett 0,9% vásárlási díj",
                url: "https://bitcoinmentor.hu/relai/"
            },
            {
                name: "Firefish",
                text: "Peer-to-peer Bitcoin fedezetű kölcsön platform a Cseh Köztársaságból, magyar nyelvű felülettel és <a href='https://firefish.notion.site/Magyar-1b2cc9942270806ca2d0e54986d0e6b2' target='_blank'>tudástár</a>ral.<br /><ul style='margin-top: 12px'><li><a href='https://youtu.be/fu82KiJzfks' target='_blank'>Ne add el, használd fedezetként!</a> - prezentáció</li><li><a href='https://youtu.be/fxir9iKJrBc' target='_blank'>Magyar nyelvű Firefish felület bemutató</a> - oktatóvideó</li></ul>",
                image: "/pics/firefish-huszonegy-banner.jpg",
                kind: "affiliate",
                detail: "-30% az első kölcsönfelvétel kezelési költségéből",
                url: "https://app.firefish.io/auth/sign-up/?ref=HUSZONEGY"
            },
            {
                name: "SEEDOR",
                text: "Rozsdamentes acél biztonsági mentés professzionális kivitelben.",
                kind: "coupon",
                detail: "-5%",
                url: "https://seedor.io"
            },
            {
                name: "BitcoinBázis Shop",
                text: "Hardvertárca, könyv, bitcoin logós ajándéktárgy és ruházat.",
                kind: "coupon",
                detail: "-5%",
                url: "https://shop.bitcoinbazis.hu"
            },
            {
                name: "BTC Prague",
                text: "Európa legnagyobb, legmeghatározóbb bitcoin rendezvénye",
                kind: "coupon",
                detail: "-10%",
                url: "https://btcprague.com/?promo_id=25460&key=30cdf2cfae450312369542954b10cbaa"
            },
            {
                name: "Bitcoin Brabant",
                text: "Coldcard, Bitaxe, wallets & miners.",
                kind: "coupon",
                detail: "-2.1%",
                url: "https://bitcoinbrabant.com/en/winkel"
            }
        ]
    },
    {
        category: "Hasznos linkek",
        wide: true,
        items: [
            {
                name: "Bitcoin tartalék",
                text: "Miért lenne előnyös Magyarországnak a bitcoin mint stratégiai tartalék bevezetése?",
                url: "https://bitcointartalek.hu",
            },
            {
                name: "Telegram csoport",
                text: "HUSZONEGY csoport a Telegramon.",
                url: "https://t.me/huszonegy",
            },
            {
                name: "inflacio.eu",
                text: "Oktatóanyagok inflációról, adósságról, pénzről, pénzügyi rendszerről.",
                url: "https://inflacio.eu",
            },
            {
                name: "Bitcoin Plebs",
                text: "Oktatóleckék angol és magyar nyelven, amelyek lépésről lépésre vezetnek be az önrendelkezésbe.",
                url: "https://bitcoinplebs.org/hu/",
            },
            {
                name: "nostr.hu",
                text: "Új paradigma, mely felcsillantotta a reményt, hogy visszavegyük az irányítást az internetes életünk felett.",
                url: "https://nostr.hu",
            },
            {
                name: "noszter.hu",
                text: "Decentralizált kommunikációs protokoll, amely teljesen átalakítja a közösségi hálózatok működését.",
                url: "https://noszter.hu",
            },
            {
                name: "SatShoot",
                text: "Nostr-alapú szabadúszó-piactér, ahol satokért kínálhatsz vagy vehetsz igénybe szolgáltatásokat.",
                url: "https://satshoot.com",
            }
        ]
    }
]
