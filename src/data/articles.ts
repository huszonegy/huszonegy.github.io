// Data for Articles
// Referenced img's must be under public (static)

export const articles = [
    {
        name: "Mi az a Bitcoin?",
        lang: "hu",
        text: "Mi az a Bitcoin, és hogyan működik?",
        link: "https://europeanbitcoiners.com/mi-az-a-bitcoin/",
        img: "/article/mi-az-a-bitcoin.png",
        cat: "bevezető",
        id: 1
    },
    {
        name: "Hogy működik a Bitcoin?",
        lang: "hu",
        text: "Hogy jönnek létre a tranzakciók, és miként tartják fenn decentralizált, bizalom nélküli módon?",
        link: "https://europeanbitcoiners.com/hogy-mukodik-a-bitcoin/",
        img: "/article/hogy-mukodik-a-bitcoin.png",
        cat: "bevezető",
        id: 2
    },
    {
        name: "Honnan jön a Bitcoin?",
        lang: "hu",
        text: "Hogyan keletkezik a bitcoin, és mit jelent a felezés?",
        link: "https://europeanbitcoiners.com/honnan-jon-a-bitcoin/",
        img: "/article/honnan-jon-a-bitcoin.png",
        cat: "bevezető",
        id: 3
    },
    {
        name: "Milyen problémákra nyújt megoldást a Bitcoin?",
        lang: "hu",
        text: "A Bitcoin által orvosolt problémák a teljesség igénye nélkül.",
        link: "https://europeanbitcoiners.com/milyen-problemakra-nyujt-megoldast-a-bitcoin/",
        img: "/article/milyen-problemakra-nyujt-megoldast-a-bitcoin.png",
        cat: "bevezető",
        id: 4
    },
    {
        name: "Mi az a bitcoin tranzakció? Hogy működik?",
        lang: "hu",
        text: "Miként zajlik egy bitcoin tranzakció? Milyen folyamaton megy keresztül?",
        link: "https://europeanbitcoiners.com/mi-az-a-bitcoin-tranzakcio-hogy-mukodik/",
        img: "/article/mi-az-a-bitcoin-tranzakcio-hogy-mukodik.png",
        cat: "bevezető",
        id: 5
    },
    {
        name: "Bitcoin bányászok és csomópontok",
        lang: "hu",
        text: "Mit takar a bitcoin csomópont és a bitcoin bányász kifejezés? Mi köztük a különbség?",
        link: "https://europeanbitcoiners.com/bitcoin-banyaszok-es-csomopontok/",
        img: "/article/bitcoin-banyaszok-es-csomopontok.png",
        cat: "bevezető",
        id: 6
    },
    {
        name: "Mik azok a kulcsok és a címek?",
        lang: "hu",
        text: "Mik azok a bitcoin címek? Mit jelent az, hogy kulcs?",
        link: "https://europeanbitcoiners.com/mik-azok-a-kulcsok-es-a-cimek/",
        img: "/article/mik-azok-a-kulcsok-es-a-cimek.png",
        cat: "bevezető",
        id: 7
    },
    {
        name: "Tudod, hogy én tudom, hogy Te tudod...?",
        lang: "hu",
        text: "Ezzel a kis sztorival egy cikksorozatot indítok útnak. Részletesen be fogom nektek mutatni korunk - ha nem az egész történelem - egyik legnagyobb hatású találmányát, a Bitcoint.",
        link: "https://europeanbitcoiners.com/tudod-hogy-en-tudom-hogy-te-tudod/",
        img: "/article/tudod-hogy-en-tudom-hogy-te-tudod.png",
        cat: "bevezető",
        id: 8
    },
    {
        name: "Tábornok úr, van egy kis gond!",
        lang: "hu",
        text: "Ha nem lenne elég lehangoló, hogy két szereplő között képtelenek vagyunk a tökéletes egyetértés elérésére, mit fogunk gondolni ha megértjük, hogy pusztán egy sokkal összetettebb témakör felszínét kapirgáljuk.",
        link: "https://europeanbitcoiners.com/tabornok-ur-van-egy-kis-gond/",
        img: "/article/tabornok-ur-van-egy-kis-gond.png",
        cat: "bevezető",
        id: 9
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

