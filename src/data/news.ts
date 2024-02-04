// Data for News
// Referenced img's must be under public (static)

// Add latest items to the top

export const news = [
    {
        summary: "Blink wallet magyarul",
        html: "Egy kósza ötletet tett követett, és egy lelkes bitcoiner odaadó munkája eredményeképp immár magyarul is elérhető a <a href='https://blink.sv/' target='_blank'>Blink tárca</a> app!",
        date: "2024.02.02."
    },
    {
        summary: "Huszonegy.world weboldal",
        html: "Honlapja is lett a huszonegy csoportnak, elkészült a <a href='/'>Huszonegy.world</a>! Ebben az első változatban rövid leírások és néhány fontosabb link kapott helyet.",
        date: "2024.01.29."
    },
    {
        summary: "Elindult a Huszonegy telegram csatorna",
        html: "2023 májusában Murányi Árpád elindította a <a href='/forum'>Huszonegy Telegram csatornát</a>, amely azóta több tucat magyar bitcoiner nyüzsgő találkozási pontjává vált.",
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