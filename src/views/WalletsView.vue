<script setup lang="ts">
import { useHead } from '@unhead/vue'
import WalletsList from '../components/WalletsList.vue'

// GYIK — ugyanez a szöveg jelenik meg az oldalon és a FAQPage JSON-LD-ben (a Google csak egyezés esetén fogadja el).
// A válaszokban lehet belső link; a JSON-LD-be a HTML nélküli szöveg kerül.
const faq = [
    {
        q: 'Mi az a bitcoin tárca?',
        a: 'Egy alkalmazás vagy eszköz, amely a bitcoinjaidhoz tartozó privát kulcsokat kezeli. A bitcoin maga a blokkláncon van; a tárca ahhoz ad hozzáférést, hogy elkölthesd. Ezért fontos a mondás: „not your keys, not your coins”. Ha nem nálad vannak a kulcsok, akkor a bitcoin sem igazán a tiéd.',
    },
    {
        q: 'Melyik a legjobb bitcoin tárca kezdőknek?',
        a: 'Ismerkedésre egy egyszerű mobilos Lightning-tárca a legjobb, például a Blink (magyar felülettel). Ezekben csak kisebb összeget tarts! Ha már nagyobb összeget is félreteszel, lépj tovább egy hardvertárcára!',
    },
    {
        q: 'Mi az a hardveres pénztárca, és kell-e nekem?',
        a: 'A hardveres pénztárca, röviden hardvertárca, egy kis, erre a célra készült eszköz, amely a privát kulcsokat offline tárolja, és csak a tranzakciók aláírására használod. Így akkor sem lophatják el a kulcsaidat, ha a számítógéped vagy a telefonod fertőzött. Ha olyan összeget tartasz bitcoinban, amelynek az elvesztése fájna, akkor igen, érdemes beszerezni egyet. Az ajánlott eszközöket fent, a <a href="#hw-wallet">Hardvertárcák résznél</a> találod.',
    },
    {
        q: 'Mi a különbség a Lightning- és az on-chain tárca között?',
        a: 'Az on-chain tárca közvetlenül a Bitcoin blokkláncon küld és fogad. Ez a legbiztonságosabb, de lassabb, és a díj nagyobb összegeknél kedvező. A Lightning a Bitcoinra épülő második réteg: azonnali és szinte ingyenes utalásokat tesz lehetővé, ezért mindennapi fizetésre és kisebb összegekre ideális.',
    },
    {
        q: 'Mi a teendő, ha elveszítem a telefonomat vagy a hardvertárcámat?',
        a: 'Minden önrendelkező tárca a létrehozásakor ad egy 12 vagy 24 szóból álló helyreállító szólistát (seed phrase). Ha ezt biztonságos helyen, papíron vagy fémlapon megőrizted, bármikor visszaállíthatod a tárcádat egy új eszközön. Ezt a szólistát soha ne fotózd le, ne tárold felhőben, és senkinek ne add meg!',
    },
]

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: faq.map(({ q, a }) => ({
                    '@type': 'Question',
                    name: q,
                    acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]*>/g, '') },
                })),
            }),
        },
    ],
})
</script>

<template>
    <main class="wallets-page">
        <div class="wallets-hero mx-auto">
            <div class="wallets-hero-inner">
                <div class="wallets-hero-icon">
                    <i class="bi bi-wallet2"></i>
                </div>
                <div class="wallets-hero-text">
                    <h1 class="wallets-hero-title">bitcoin <span class="wallets-hero-accent">tárcák</span></h1>
                    <p class="wallets-hero-lead">
                        Kisebb összegekhez elég egy mobilos Lightning-tárca, a megtakarításaidhoz viszont hardvertárca ajánlott.
                    </p>
                </div>
            </div>
        </div>
        <WalletsList />
        <section id="gyik" class="container-flex py-4 px-2 wallets-faq">
            <h2>Gyakori kérdések a bitcoin tárcákról</h2>
            <div v-for="item in faq" :key="item.q" class="faq-item">
                <h3>{{ item.q }}</h3>
                <p v-html="item.a"></p>
            </div>
        </section>
        <div class="bottom-space no-response"><!-- empty --></div>
    </main>
</template>

<style scoped>
/* Asztali nézetben a .centerpage flex-konténer: a main ne nyúljon szélesebbre a konténernél
   (különben a hosszú bekezdések jobbra kilógnak és levágódnak) */
.wallets-page {
    width: 100%;
    min-width: 0;
}

.wallets-hero {
    padding: 3.5rem 1rem 1.5rem;
    max-width: 780px;
}

.wallets-hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.wallets-hero-icon {
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    color: #fff;
    text-shadow: 0 0 32px rgba(247, 147, 26, 0.8), 0 0 64px rgba(247, 147, 26, 0.6), 0 0 96px rgba(247, 147, 26, 0.4);
}

.wallets-hero-text {
    text-align: left;
}

.wallets-hero-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.8rem;
    color: #fff;
    letter-spacing: -0.5px;
}

.wallets-hero-accent {
    color: #f7931a;
}

.wallets-hero-lead {
    font-size: 1rem;
    opacity: 0.78;
    line-height: 1.6;
    max-width: 560px;
    margin-bottom: 0.6rem;
}

.wallets-faq {
    max-width: calc(3 * 25rem + 3 * 1rem);
}

.wallets-faq h2 {
    font-size: 1.4rem;
    margin-bottom: 14px;
}

.wallets-faq h3 {
    font-size: 1.2rem;
    margin: 1.5rem 0 0.5rem;
}

.wallets-faq p {
    max-width: 75ch;
    line-height: 1.6;
}

@media (max-width: 576px) {
    .wallets-hero-inner {
        flex-direction: column;
        text-align: center;
    }
    .wallets-hero-text {
        text-align: center;
    }
    .wallets-hero-title {
        font-size: 1.8rem;
    }
    .wallets-hero-lead {
        max-width: 100%;
    }
}
</style>
