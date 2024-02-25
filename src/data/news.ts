// Data for News
// Referenced img's must be under public (static)

// Add latest items to the top

export const news = [
    {
        summary: "Mi az a Bitcoin?",
        html: "Megjelent Bitcoin podcastunk első epizódja <a href='https://www.youtube.com/watch?v=JEu3CcID0dU' target='_blank'>Mi az a Bitcoin?</a> címmel. Mostantól heti rendszerességgel jelentkezünk youtube-on, spotify-on és további felületeken.",
        date: "2024.02.23."
    },
    {
        summary: "Magyar nyelven ingyenesen olvasható Bitcoin könyvek",
        html: "Négy fantasztikus Bitcoin könyvvel bővült a <a href='/konyvek/' target='_self'>Könyvek</a> oldalunk. Ezek a könyvek pdf-ben is letölthetőek, illetve közvetlenül a böngészőben is olvashatóak a CoinCrumb.com honlapján.",
        date: "2024.02.14."
    },
    {
        summary: "A bitcoin árfolyamának alakulása és a felezés hatása",
        html: "<a href='https://inflacio.eu/a-bitcoin-arfolyamanak-alakulasa-es-a-felezes-hatasa/' target='_blank'>Magyar nyelvű összefoglaló</a> Jack Mallers hétfői pocastjáról.</a>",
        date: "2024.02.13."
    },
    {
        summary: "Rólunk ír az inflacio.eu és a BitcoinBázis",
        html: "Megszületett az első <a href='https://inflacio.eu/huszonegy/' target='_blank'>HUSZONEGY vonatkozású blog bejegyzés</a> az inflacio.eu-n, ahol amúgy értékes, témába vágó oktatóanyag olvasható. Továbbá a BitcoinBázis is írt egy <a href='https://www.bitcoinbazis.hu/huszonegy-world-bitcoin/' target='_blank'>cikket a HUSZONEGY-ről.</a>",
        date: "2024.02.10."
    },
    {
        summary: "Budapesti meetup-ok",
        html: "Februárban két Bitcoin meetup-ot szervezünk. 20-án magyar nyelven, 21-én angol nyelven ismerkedünk egymással. Részletek a <a href='https://t.me/huszonegy'>telegram csoportban.</a>",
        date: "2024.02.07."
    },
    {
        summary: "Blink wallet magyarul",
        html: "Egy kósza ötletet tett követett, és egy lelkes bitcoiner odaadó munkája eredményeképp immár magyarul is elérhető a <a href='https://blink.sv/' target='_blank'>Blink tárca</a> app!",
        date: "2024.02.02."
    },
    {
        summary: "huszonegy.world honlap",
        html: "Honlapja is lett a HUSZONEGY csoportnak, elkészült a <a href='/'>huszonegy.world</a>! Ebben az első változatban rövid leírások és néhány fontosabb link kapott helyet.",
        date: "2024.01.29."
    },
    {
        summary: "Elindult a HUSZONEGY telegram csatorna",
        html: "2023 májusában Murányi Árpád elindította a <a href='/forum'>HUSZONEGY telegram csatornát</a>, amely azóta több tucat magyar bitcoiner nyüzsgő találkozási pontjává vált.",
        date: "2023.05.11."
    }
]

// Get the news items, sorted by date with latest first, optionally only the latest N
export function get_news(max_count: number) {
    let sorted = news.sort((n1, n2) => {
        let d1 = Date.parse(n1.date);
        let d2 = Date.parse(n2.date);
        if (d1 && d2) {
            if (d1 < d2) { return 1; } else if (d1 > d2) { return -1; } else { return 0; }
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