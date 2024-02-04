// Data for Links
// - link: link, without starting 'https://' and trailing '/'
// - footer: optional, true for links included in common footer
// - show: optional, if present, this is show, not the link itself

export const links = [
    {
        name: "Telegram csoport",
        footer: true,
        text: "Huszonegy csoport a Telegramon",
        link: "https://t.me/huszonegy/",
        logo: "src/assets/logo/he-logo-tgram-1-200x64.png"
    },
    {
        name: "TwentyOne.World (EN)",
        footer: true,
        text: "Globális TwentyOne gyűjtőoldal",
        link: "https://twentyone.world/",
        logo: "src/assets/logo/twentyone-200x64.png"
    },
    {
        name: "Mempool",
        footer: true,
        text: "Minden fontos aktuális adat a Bitcoin hálózatról; blokklánc explorer",
        link: "https://mempool.space/hu/",
        show: "mempool.space",
        logo: "src/assets/logo/mempool-200x64.png"
    },
    {
        name: "Bitcoin.org",
        footer: true,
        text: "Az egyik legrégebbi bitcoin gyűjtőoldal",
        link: "https://bitcoin.org/hu/",
        show: "bitcoin.org",
        logo: "src/assets/logo/bitcoin-org-200x64.png"
    },
    {
        name: "European Bitcoiners",
        footer: true,
        text: "Európai bitcoin közösség",
        link: "https://europeanbitcoiners.com/",
        logo: "src/assets/logo/european-bitcoiners-200x64.png"
    },
    {
        name: "Einundzwanzig (DE)",
        text: "Német nyelvű bitcoin közösség",
        link: "https://einundzwanzig.space/",
        logo: "src/assets/logo/einundzwanzig-200x64.png"
    },
    {
        name: "Dvadsatjeden (SK)",
        text: "Szlovák bitcoin közösség",
        link: "https://www.dvadsatjeden.org/",
        logo: "src/assets/logo/dvadsatjeden-200x64.png"
    },
    {
        name: "DIY Nodes",
        text: "Bitcoin node és egyéb DIY hardver webshop",
        link: "https://diynodes.com/"
    },
    {
        name: "BitcoinBázis shop",
        text: "Hazai webshop bitcoin termékekkel, bitcoinért",
        link: "https://shop.bitcoinbazis.hu/"
    }
]

/// Return links, filtered for footer==true
export function get_links_filter() {
    return links.filter(l => l.footer);
}
