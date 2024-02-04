// Data for Articles
// Referenced img's must be under public (static)

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
    },
    {
        name: "Milyen problémákra nyújt megoldást a Bitcoin?",
        lang: "hu",
        text: "A Bitcoin által orvosolt problémák a teljesség igénye nélkül.",
        link: "https://europeanbitcoiners.com/milyen-problemakra-nyujt-megoldast-a-bitcoin/",
        img: "/article/milyen-problemakra-nyujt-megoldast-a-bitcoin.png"
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

