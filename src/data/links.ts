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
// - groups (category-level): instead of flat `items`, an array of { title, items }
//   subgroups; each renders an h3 subheading + its own card grid (plain cards only)
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
                text: "Bitcoin-only megtakarítási app Svájcból. A Relai olyan, mint egy svájci bicska: megbízható, egyszerű, és pont azt csinálja, amire szükséged van — segít bitcoint venni, rendszeresen megtakarítani, és mindezt úgy, hogy a bitcoinod privát kulcsai végig a te kezedben vannak.",
                image: "/pics/relai-huszonegy-banner-8.jpg",
                kind: "affiliate",
                detail: "1% helyett 0,9% vásárlási díj",
                url: "https://bitcoinmentor.hu/relai/"
            },
            {
                name: "Firefish",
                text: "Peer-to-peer bitcoin fedezetű kölcsön platform a Cseh Köztársaságból, magyar nyelvű felülettel és <a href='https://firefish.notion.site/Magyar-1b2cc9942270806ca2d0e54986d0e6b2' target='_blank'>tudástár</a>ral.<br /><ul style='margin-top: 12px'><li><a href='https://youtu.be/fu82KiJzfks' target='_blank'>Ne add el, használd fedezetként!</a> - prezentáció</li><li><a href='https://youtu.be/fxir9iKJrBc' target='_blank'>Magyar nyelvű Firefish felület bemutató</a> - oktatóvideó</li></ul>",
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
                text: "Hardvertárca, könyv, Bitcoin logós ajándéktárgy és ruházat.",
                kind: "coupon",
                detail: "-5%",
                url: "https://shop.bitcoinbazis.hu"
            },
            {
                name: "BTC Prague",
                text: "Európa legnagyobb, legmeghatározóbb Bitcoin rendezvénye",
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
        groups: [
            {
                title: "Tanulás",
                items: [
                    {
                        name: "inflacio.eu",
                        text: "A Looking Glass Education és a Strike magyarított oktatóanyagai: infláció, adósság, pénz, pénzügyi rendszer.",
                        url: "https://inflacio.eu",
                    },
                    {
                        name: "Bitcoin Plebs",
                        text: "Gyakorlatias és szemléletes oktatóleckék angol és magyar nyelven, amelyek lépésről lépésre vezetnek be az önrendelkezésbe.",
                        url: "https://bitcoinplebs.org/hu/",
                    },
                    {
                        name: "Lightning node alapok",
                        text: "A Lightning Network alapjai magyarul – csomópont-üzemeltetés, gyakorlati példák és konfigurációs beállítások.",
                        url: "https://lightningnode.info/hu",
                    },
                ]
            },
            {
                title: "Eszközök",
                items: [
                    {
                        name: "mempool.space",
                        text: "Bitcoin blokklánc böngésző: tranzakciók, díjak és a mempool valós idejű állapota.",
                        url: "https://mempool.space",
                    },
                    {
                        name: "BTC Map",
                        text: "Bitcoint elfogadó boltok, éttermek és szolgáltatók nyílt világtérképe.",
                        url: "https://btcmap.org",
                    },
                ]
            },
            {
                title: "Közösség",
                items: [
                    {
                        name: "Telegram csoport",
                        text: "HUSZONEGY csoport a Telegramon. Kérdezz és beszélgess a közösséggel!",
                        url: "https://t.me/huszonegy",
                    },
                    {
                        name: "nostr.hu",
                        text: "Magyar nyelvű Nostr-útmutató: kliensek, kulcsok, átjátszók (relay) és a Köztér közösségi tér egy helyen.",
                        url: "https://nostr.hu",
                    },
                    {
                        name: "noszter.hu",
                        text: "Magyar nyelvű Nostr-bevezető, saját @noszter.hu névjegy igénylésével és Primal-eléréssel a gyors kezdéshez.",
                        url: "https://noszter.hu",
                    },
                    {
                        name: "SatShoot",
                        text: "Nostr-alapú szabadúszó (freelancer) piactér, ahol satokért kínálhatsz vagy vehetsz igénybe szolgáltatásokat.",
                        url: "https://satshoot.com",
                    },
                ]
            },
            {
                title: "Érdekképviselet",
                items: [
                    {
                        name: "Bitcoin tartalék",
                        text: "Miért lenne előnyös Magyarországnak a bitcoin mint stratégiai tartalék bevezetése? Magyar kezdeményezés érvekkel és nemzetközi példákkal.",
                        url: "https://bitcointartalek.hu",
                    },
                    {
                        name: "Human Rights Foundation",
                        text: "Emberi jogokért és a pénzügyi szabadságért küzdő szervezet, amely a Bitcoin-fejlesztést is támogatja, mert a cenzúrázhatatlan pénz eszközt ad a diktatúrákban élők kezébe.",
                        url: "https://hrf.org",
                    },
                    {
                        name: "Oslo Freedom Forum",
                        text: "Emberi jogi aktivisták, disszidensek és újságírók éves világkonferenciája, ahol a Bitcoin mint a szabadság eszköze is teret kap, kiszolgáltatott emberek millióit támogatva.",
                        url: "https://oslofreedomforum.com",
                    },
                ]
            },
        ]
    }
]
