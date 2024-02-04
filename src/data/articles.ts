// Data for Articles

export const articles = [
    {
        name: "Mi az a Bitcoin?",
        lang: "hu",
        text: "Mi az a Bitcoin, és hogyan működik?",
        link: "https://europeanbitcoiners.com/mi-az-a-bitcoin/",
        img: "/article/mi-az-a-bitcoin.png"
    },
    {
        name: "Hogy működik a Bitcoin?",
        lang: "hu",
        text: "Hogy jönnek létre a tranzakciók, és miként tartják fenn decentralizált, bizalom nélküli módon?",
        link: "https://europeanbitcoiners.com/hogy-mukodik-a-bitcoin/",
        img: "/article/hogy-mukodik-a-bitcoin.png"
    },
    {
        name: "Honnan jön a Bitcoin?",
        lang: "hu",
        text: "Hogyan keletkezik a bitcoin, és mit jelent a felezés?",
        link: "https://europeanbitcoiners.com/honnan-jon-a-bitcoin/",
        img: "/article/honnan-jon-a-bitcoin.png"
    }
]

// Get the articles, optionally only the last N
export function get_articles(max_count: number) {
    var n = articles.length;
    if (max_count == 0 || max_count >= n) {
        return articles;
    }
    return articles.splice(n - max_count, n);
}

