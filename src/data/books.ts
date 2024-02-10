// Data for Books
// Referenced img's must be under public (static)

export const books = [
    {
        id: "kis-bitcon-konyv",
        title: "A kis Bitcoin könyv",
        author: "T. Ajiboye, L. Buenaventura, A. Gladstein, L. Liu, A. Lloyd, A. Machado, J. Song, A. Vranova",
        translator: "Kovács Andrea (BitcoinBázis), Bánfi Balázs Miklós, 'OptOut'",
        year: "2023",
        text: "Ez a kis könyv kiváló bevezető a bitcoinról, ajánljuk mindenkinek, aki kicsit is nyitott a megismerésre. Könnyen érthető és hiteles; a bitcoin társadalmi és szabadságjogi vonatkozásai irányából közeliti meg a kérdést.",
        desc: "Biztosan hallottál már a bitcoinról a hírekben vagy ismerősöktől. Miért változik az árfolyama? Tényleg jó befektetés a bitcoin? Mitől van értéke? Miért beszélnek egyesek róla úgy, mint valamiről, ami megváltoztathatja a világot? A kis Bitcoin könyv rávilágít arra, hogy mi a gond a pénzzel napjainkban, és miért találták ki a bitcoint mint a jelenlegi rendszer jobb alternatíváját.",
        img: "/books/kis-bitcoin-konyv.jpg",
        shop: "<a href='https://bookline.hu/search/search.action?page=1&searchfield=kis+bitcoin+k%C3%B6nyv' target='_blank'>BookLine</a> és <a href='https://shop.bitcoinbazis.hu/termek/a-kis-bitcoin-konyv/' target='_blank'>BitcoinBázis Shop</a> (bitcoinért is)"
    },
    {
        id: "saif-bitcoin-standard",
        title: "Bitcoin Standard - A központi bankok decentralizált alternatívája",
        author: "Saifedean Ammous",
        translator: "Bedő Máté",
        year: "2022",
        text: "Kvázi alapművé vált ez a könyv, sok bitcoiner számára egyike azoknak a könyveknek, amik megvilágosítottak bizonyos összefüggéseket.",
        desc: "A szerző, egy közgazdaságtan tanárból lett bitcoiner, elmeséli a pénz történetét a kezdetektől napjaink adósság-alapú rendszeréig. Bemutatja a bitcoin tualjdonságait, és elmagyarázza, hogy mitől jobb, megalapozottabb pénz a bitcoin. Miközben a bitcoin megkérdőjelezi a pénz állami monopóliumát, a szuverenitás mérlegének nyelvét az egyén javára billenti, és egy olyan világ lehetőségét kínálja, ahol a pénz teljesen független a politikától, és mozgását nem korlátozzák államhatárok.",
        img: "/books/btc-standard.png",
        shop: "A legtöbb magyarországi könyesbolt és <a href='https://shop.bitcoinbazis.hu/termek/bitcoin-standard-a-kozponti-bankok-decentralizalt-alternativaja-2-kiadas/' target='_blank'>BitcoinBázis Shop</a> (bitcoinért is)"
    },
    {
        id: "knut-szuverenitas",
        title: "Bitcoin: Szuverenitás & függetlenség",
        author: "Knut Svanholm",
        translator: "Balaxi, Kovács Andrea, Stier Kata",
        year: "2023",
        text: "",
        desc: "Ez a könyv Knut Svanholm első két bitcoin témájú könyvének újragondolt változata: “Bitcoin: Szuverenitás a matematikán keresztül” és “Bitcoin: Újraértelmezett függetlenség”. Két magával ragadó és tanulságos olvasmány pénzről, egyéni függetlenségről, digitális szűkösségről és a decentralizált jövőbe vetett reményről.",
        img: "/books/szuverenitas-fuggetlenseg-konyv.png",
        shop: "<a href='https://shop.bitcoinbazis.hu/termek/bitcoin-szuverenitas-fuggetlenseg/' target='_blank'>BitcoinBázis Shop</a> (bitcoinért is)"
    }
]

// Return the book with given ID
export function get_book(id: string) {
    return books.filter((b) => (b.id === id));
}

// Return the IDs of the books
export function get_book_ids() {
    return books.map((b) => b.id);
}
