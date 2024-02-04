// Data for News

export const news = [
    {
        summary: "H1 Ide jön egy hír",
        html: "H1 Annak érdekében, hogy a forgalomban lévő kínálatot a hálózat aktivitásának és elterjedésének megfelelően",
        date: "2023-05-01"
    },
    {
        summary: "H3 Ide jön egy másik hír",
        html: "H3 szabályozzák, a blokk jutalmat maga a kód szabályozza, 210 000 blokkonként (nagyjából 4 évente) csökkentve a",
        date: "2024-01-29"
    },
    {
        summary: "H2 Ide jön egy másik hír",
        html: "H2 A bitcoin bányászat jutalma blokkonként 50 bitcoinnal kezdődött, és 210 000 blokkonként (~4 évente) 50%-kal csökkent.",
        date: "2023-09-24"
    },
    {
        summary: "H4 Ide jön egy másik hír",
        html: "H4 A jelenlegi bányászati jutalom 2022-től blokkonként 6.25 bitcoin. A következő feleződés során a cikk írásának időpontja szerint 2024-ben a blokk jutalom ennek a felére, 3.125 bitcoinra fog csökkenni.",
        date: "2024-02-01"
    }
]

// Get the news items, sorted by date with latest first, optionally only the latest N
export function get_news(max_count: number) {
    let sorted = news.sort((n1, n2) => {
        let d1 = Date.parse(n1.date);
        let d2 = Date.parse(n2.date);
        if (d1 && d2) {
            if (d1 < d2) { return 1; } else if (d1 > d2) { return -1;} else { return 0; }
        }
        return 0;
    });
    var n = sorted.length;
    if (max_count == 0 || max_count >= n) {
        return sorted;
    }
    // Sort and filter
    return sorted.splice(0, max_count);
}