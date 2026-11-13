import { 
  createRouter, 
  createWebHistory, 
  createMemoryHistory, 
  type RouteRecordRaw 
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'HUSZONEGY - A magyar Bitcoin tudástár és közösség',
      metaTags: [
        { name: 'description', content: 'Tanulj a Bitcoinról magyarul! Cikkek, podcastok, ingyenesen letölthető könyvek és aktív közösség.' },
        { name: 'keywords', content: 'bitcoin, huszonegy, magyarország, decentralizáció, szabadság, közösség' }
      ]
    }
  },
  {
    path: '/cikk/',
    name: 'articles',
    component: () => import('../views/ArticlesView.vue'),
    meta: {
      title: 'Bitcoin cikkek magyarul - HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Bitcoin cikkek, elemzések és fordítások magyarul: hogyan működik a bitcoin, mi a baj a mai pénzzel, és hogyan tárold biztonságosan a saját kulcsaidat.' },
        { name: 'keywords', content: 'bitcoin cikkek, magyar bitcoin, bitcoin tanulmány' }
      ]
    }
  },
  {
    path: '/kozosseg/',
    name: 'kozosseg',
    component: () => import('../views/ForumView.vue'),
    meta: {
      title: 'Bitcoin közösség - HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Magyar Bitcoin közösség. Csatlakozz a HUSZONEGY Telegram csoportjához, tedd fel kérdéseidet és találkozz más magyar bitcoinerekkel személyesen a meetupokon!' },
        { name: 'keywords', content: 'magyar bitcoin közösség, bitcoin telegram csoport, bitcoin beszélgetés, bitcoin meetup' }
      ]
    }
  },
  {
    path: '/hir/',
    name: 'news',
    component: () => import('../views/NewsView.vue'),
    meta: {
      title: 'Bitcoin hírek magyarul - HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Friss Bitcoin hírek és újdonságok magyarul. Kövesd a legfontosabb eseményeket a Bitcoin világából naprakészen!' },
        { name: 'keywords', content: 'bitcoin hírek, bitcoin hírek magyarul, bitcoin news, bitcoin újdonságok' }
      ]
    }
  },
  {
    path: '/podcast/',
    name: 'podcasts',
    component: () => import('../views/PodsView.vue'),
    meta: {
      title: 'Bitcoin podcast magyarul - HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Magyar Bitcoin podcastok és beszélgetések. Hallgass interjúkat, szakértői véleményeket és közösségi beszélgetéseket a Bitcoin világából!' },
        { name: 'keywords', content: 'bitcoin podcast, magyar bitcoin podcast, beszélgetés, bitcoin interjú' }
      ]
    }
  },
  {
    path: '/podcast/:slug/',
    name: 'PodDetailView',
    component: () => import('../views/PodDetailView.vue'),
    props: true,
    // Ismeretlen slug (pl. a Google által a JS-ből kiolvasott nyers „/podcast/:slug/") → 404-oldal, az URL marad
    beforeEnter: async (to) => {
      const { get_pod_by_slug } = await import('../data/podcasts')
      if (!get_pod_by_slug(to.params.slug as string)) {
        return { name: 'not-found-catchall', params: { pathMatch: to.path.slice(1).split('/') }, query: to.query, hash: to.hash }
      }
    }
  },
  {
    path: '/konyv/',
    name: 'books',
    component: () => import('../views/BooksView.vue'),
    meta: {
      title: 'Bitcoin könyvek magyarul - HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Ajánlott Bitcoin könyvek magyar nyelven és fordításban. A legjobb Bitcoin könyvek kezdőknek és szakértőknek.' },
        { name: 'keywords', content: 'bitcoin könyv, bitcoin könyv magyarul, bitcoin irodalom, bitcoin olvasmány' }
      ]
    }
  },
  {
    path: '/tarcak/',
    name: 'wallets',
    component: () => import('../views/WalletsView.vue'),
    meta: {
      title: 'A legjobb Bitcoin tárcák – magyar ajánló kezdőknek és haladóknak | HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Melyik bitcoin tárcát válaszd? Független, magyar nyelvű ajánló: Lightning- és mobiltárcák kezdőknek, hardvertárcák nagyobb összegekhez, és saját node.' },
        { name: 'keywords', content: 'bitcoin tárca, hardver wallet, bitcoin wallet, trezor, coldcard, ledger' }
      ]
    }
  },
  {
    path: '/meetup/',
    name: 'meetup',
    component: () => import('../views/MeetupView.vue'),
    meta: {
      title: 'Bitcoin meetupok Magyarországon - HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Bitcoin meetupok, találkozók és események Magyarországon. Csatlakozz a közösséghez, ismerj meg más bitcoinereket és tanulj együtt!' },
        { name: 'keywords', content: 'bitcoin meetup, bitcoin találkozó, bitcoin esemény, bitcoin közösség magyarország' }
      ]
    }
  },
  {
    path: '/link/',
    name: 'links',
    component: () => import('../views/LinksView.vue'),
    meta: {
      title: 'Hasznos Bitcoin linkek - HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Válogatott Bitcoin linkek magyarul és angolul: közösségek, tanulási források, eszközök, szponzoraink és kedvezményes ajánlások egy helyen.' },
        { name: 'keywords', content: 'bitcoin linkek, bitcoin források, bitcoin oktatás' }
      ]
    }
  },
  {
    path: '/eloadas/',
    name: 'presentations',
    component: () => import('../views/PreziView.vue'),
    meta: {
      title: 'Bitcoin előadások magyarul - HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Bitcoin előadások videón, magyarul: a Bitcoin Miskolc konferencia és a budapesti meetupok felvételei a pénz működésétől a privacy-ig és a Coinjoinig.' },
        { name: 'keywords', content: 'bitcoin előadás, bitcoin prezentáció, bitcoin konferencia' }
      ]
    }
  },
  {
    path: '/oktatovideo/',
    name: 'videos',
    component: () => import('../views/VideoView.vue'),
    meta: {
      title: 'Bitcoin oktatóvideók magyarul - HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Bitcoin oktatóvideók kezdőknek és haladóknak magyarul. Tanuld meg a Bitcoin használatát!' },
        { name: 'keywords', content: 'bitcoin videó, bitcoin oktatás, bitcoin tutorial' }
      ]
    }
  },
  {
    path: '/tamogatas/',
    name: 'support',
    component: () => import('../views/SupportView.vue'),
    meta: {
      title: 'HUSZONEGY támogatása - Bitcoin adományok',
      metaTags: [
        { name: 'description', content: 'Támogasd a HUSZONEGY magyar Bitcoin podcastot! Lightning- vagy on-chain adomány, Nostr zap, YouTube csatornatagság vagy szponzoráció – minden sat számít.' }
      ]
    }
  },
  {
    path: '/pizzaday/',
    name: 'pizzaday',
    component: () => import('../views/PizzaView.vue'),
    meta: {
      title: 'Bitcoin Pizza Nap - HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Bitcoin Pizza Nap a Dunakanyarban: Hanyecz László pizzavásárlásának emlékére bitcoinnal fizethetsz, és meetupon segítünk az első lépésekben.' }
      ]
    }
  },
  { path: '/support', redirect: '/tamogatas/' },
  // Régi /forum/ útvonal (átnevezve /kozosseg/-re) → megosztott linkek ne 404-eljenek
  { path: '/forum/', redirect: '/kozosseg/' },
  // Régi többes számú útvonalak (átnevezve egyes számúra) → megosztott linkek ne 404-eljenek
  { path: '/linkek/', redirect: '/link/' },
  { path: '/konyvek/', redirect: '/konyv/' },
  { path: '/cikkek/', redirect: '/cikk/' },
  { path: '/hirek/', redirect: '/hir/' },
  // E105 régi slugja (címváltozás előtt) → új URL, hogy a megosztott linkek ne 404-eljenek
  { path: '/podcast/3-ok-amiert-a-bitcoin-veri-az-etikus-jegybanki-penzt/', redirect: '/podcast/lejaratos-penz-vagy-szabad-penz-etikus-jegybank-kontra-bitcoin/' },
  // Régi, elvont címek újracímzése (2026.09.25.) → a régi URL-ek átirányítva az újakra
  { path: '/podcast/bizalom-problema/', redirect: '/podcast/miert-nem-tud-ma-senki-felretenni/' }, // E13
  { path: '/podcast/legalitas-es-illegalitas-hataran/', redirect: '/podcast/mit-lat-rolad-a-hatosag-ha-bitcoint-hasznalsz/' }, // E14
  { path: '/podcast/bitcoin-banyaszat/', redirect: '/podcast/bitcoin-banyaszat-tenyleg-pazarlas-a-sok-aram/' }, // E16
  { path: '/podcast/magas-es-alacsony-idopreferencia/', redirect: '/podcast/miert-jar-sarkanyjelmezben-egy-bitcoiner/' }, // E18
  { path: '/podcast/valodi-ertek-valodi-novekedes-21-oktato-cikk/', redirect: '/podcast/igy-csaljak-ki-a-penzed-a-bitcoin-neveben/' }, // E27
  { path: '/podcast/egy-igaz-penzugyi-rendszer-fontossaga/', redirect: '/podcast/milyen-volt-az-elso-magyar-bitcoin-konferencia/' }, // E36
  { path: '/podcast/anonimitas-alapjai-a-bitcoin-vilagaban/', redirect: '/podcast/a-foberlod-is-latja-mennyi-bitcoinod-van/' }, // E41
  // A „mi az a bitcoin" kulcsszó leszedése a nem ezt magyarázó adásokról (2026.09.25.)
  { path: '/podcast/mi-az-a-bitcoin/', redirect: '/podcast/nem-a-meggazdagodas-a-lenyeg-miert-lettunk-bitcoinerek/' }, // E01
  { path: '/podcast/bitcoin-banyaszat-csomopontok-blokk-jutalom-felezes/', redirect: '/podcast/hogyan-mukodik-a-bitcoin-miert-csak-21-millio-van-belole/' }, // E02
  // SEO-újracímzés (2026.11.09.): kereshető kifejezések a címben → a régi URL-ek átirányítva az újakra
  { path: '/podcast/mi-a-legnagyobb-kulonbseg-a-fiat-valutak-es-a-kriptovalutak-kozott/', redirect: '/podcast/sajat-bitcoin-node-otthon-egy-halozati-mernok-utja/' }, // E06
  { path: '/podcast/elvalasztjuk-a-penzt-az-allamtol/', redirect: '/podcast/kripton-bukott-2017-ben-megis-a-bitcoinnal-maradt/' }, // E10
  { path: '/podcast/megfontolt-megtakaritas/', redirect: '/podcast/heti-3000-ft-bitcoinba-2014-ota-mennyi-lett-volna-belole/' }, // E12
  { path: '/podcast/visszatekintes-jelenlet-jovobe-tekintes/', redirect: '/podcast/bitcoin-fork-miert-jar-jol-aki-egyszeruen-kivar/' }, // E21
  { path: '/podcast/bitcoin-tarca-kezdoknek-es-lightning-network-felhasznaloknak/', redirect: '/podcast/blink-es-strike-bitcoin-tarca-kezdoknek-lightninggal/' }, // E22
  { path: '/podcast/bitcoin-es-az-amerikai-elnokvalasztasi-igeretek/', redirect: '/podcast/trump-a-bitcoin-konferencian-mit-igert-a-bitcoinereknek/' }, // E24
  { path: '/podcast/bitcoin-a-penzek-kiralya/', redirect: '/podcast/bitcoin-a-penzek-kiralya-ezt-mutatta-a-japan-panik/' }, // E26
  { path: '/podcast/elethosszig-tarto-tanulas/', redirect: '/podcast/chatgpt-claude-vagy-llama-zart-vagy-nyilt-ai-t-hasznalj/' }, // E28
  { path: '/podcast/fuggetlenedunk-a-kozponti-genyozastol/', redirect: '/podcast/inflacio-5-forintrol-500-ra-dragult-egy-gomboc-fagyi/' }, // E30
  { path: '/podcast/bitcoin-konferencia-ido-faktor-turelem/', redirect: '/podcast/most-kezdenel-bitcoinnal-ezt-tedd-az-elso-evekben/' }, // E51
  { path: '/podcast/bitcoin-pszichologia/', redirect: '/podcast/fomo-fud-status-quo-a-bitcoin-pszichologiaja/' }, // E60
  { path: '/podcast/uzleti-bitcoin-tartalekkepzes-es-publikalas-magyar-uttoroje/', redirect: '/podcast/bitcoin-a-ceges-tartalekban-egy-magyar-uttoro-tortenete/' }, // E68
  { path: '/podcast/bitcoinerek-ujratoltve/', redirect: '/podcast/bitcoin-nyari-osszefoglalo-arfolyam-torvenyek-banyagepek/' }, // E72
  { path: '/podcast/jogbizonytalansagtol-a-bitcoiner-lifestyle-ig/', redirect: '/podcast/mica-jogbizonytalansagtol-a-bitcoiner-lifestyle-ig/' }, // E73
  { path: '/podcast/vedd-ki-a-csalasokat-tippek-technikak-tanulsagos-esetek/', redirect: '/podcast/kripto-csalasok-igy-vernek-at-es-igy-vedd-ki/' }, // E76
  { path: '/podcast/a-gondolat-szabadsaga-maltatol-pragaig-validacio-nelkul/', redirect: '/podcast/kripto-validalas-ezeket-a-kiveteleket-hozta-az-uj-rendelet/' }, // E80
  { path: '/podcast/magyar-titanium-lapka-bitcoin-tanacsadas/', redirect: '/podcast/magyar-titanium-lapka-a-bitcoin-tarca-mentesehez/' }, // E85
  { path: '/podcast/a-nemzeti-validalo-esete-a-bitcoin-oktatassal-revolut-validalas-panik/', redirect: '/podcast/kripto-validalas-es-revolut-mitol-panikolnak-ennyien/' }, // E86
  { path: '/podcast/te-meg-szabadlabon-vagy-validator-mizeria/', redirect: '/podcast/elso-kripto-validator-te-meg-szabadlabon-vagy/' }, // E88
  { path: '/podcast/az-onrendelkezes-fontossaga-nehez-idokben/', redirect: '/podcast/esik-a-bitcoin-arfolyam-miert-most-fontos-a-sajat-kulcs/' }, // E93
  { path: '/podcast/tank-vagy-porcelan-a-szabad-piac-nem-ker-engedelyt/', redirect: '/podcast/tank-vagy-porcelan-egy-bitcoin-core-fejleszto-valaszol/' }, // E97
  // A „Nyári remix:” előtag leszedése a címekről (2026.11.13.) → a régi URL-ek átirányítva az újakra
  { path: '/podcast/nyari-remix-bitcoin-tarcak-kezdoknek/', redirect: '/podcast/bitcoin-tarcak-kezdoknek/' }, // R01
  { path: '/podcast/nyari-remix-bitcoin-onrendelkezes/', redirect: '/podcast/bitcoin-onrendelkezes/' }, // R02
  { path: '/podcast/nyari-remix-bitcoin-konyv-mix-1/', redirect: '/podcast/bitcoin-konyv-mix-1/' }, // R03
  { path: '/podcast/nyari-remix-bitcoin-konyv-mix-2/', redirect: '/podcast/bitcoin-konyv-mix-2/' }, // R04
  { path: '/podcast/nyari-remix-objektiv-bitcoin-felszabadulas/', redirect: '/podcast/objektiv-bitcoin-felszabadulas/' }, // R05
  { path: '/podcast/nyari-remix-decentralizalt-tarsadalmat-epitunk/', redirect: '/podcast/decentralizalt-tarsadalmat-epitunk/' }, // R06
  { path: '/podcast/nyari-remix-szoftverfejlesztes-szabadsagtechnologiak/', redirect: '/podcast/szoftverfejlesztes-szabadsagtechnologiak/' }, // R07
  {
    path: '/404/',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: 'Az oldal nem található – HUSZONEGY', noindex: true }
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'not-found-catchall',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: 'Az oldal nem található – HUSZONEGY', noindex: true }
  }
]

const router = createRouter({
  // Ez a sor dönti el, hogy szerver (GitHub) vagy böngésző módban vagyunk-e
  history: import.meta.env.SSR 
    ? createMemoryHistory(import.meta.env.BASE_URL) 
    : createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
})

// Trailing slash redirect — GitHub Pages kompatibilitás és SEO
router.beforeEach((to, _from, next) => {
  if (!to.path.endsWith('/') && !to.path.includes('.')) {
    next({ path: to.path + '/', query: to.query, hash: to.hash, replace: true })
  } else {
    next()
  }
})

// EZ A RÉSZ FRISSÍTI A BÖNGÉSZŐT, DE CSAK HA TÉNYLEG BÖNGÉSZŐBEN VAGYUNK
if (!import.meta.env.SSR) {
  router.afterEach((to) => {
    // Cím frissítése
    const title = (to.meta as any).title
    if (title) document.title = title

    // Meta tagek frissítése (SEO)
    const tags = (to.meta as any).metaTags as any[]
    if (tags && Array.isArray(tags)) {
      tags.forEach(tagData => {
        const selector = tagData.name 
          ? `meta[name="${tagData.name}"]` 
          : `meta[property="${tagData.property}"]`
        
        const element = document.querySelector(selector)
        if (element) {
          element.setAttribute('content', tagData.content)
        } else {
          const newTag = document.createElement('meta')
          if (tagData.name) newTag.setAttribute('name', tagData.name)
          if (tagData.property) newTag.setAttribute('property', tagData.property)
          newTag.setAttribute('content', tagData.content)
          document.head.appendChild(newTag)
        }
      })
    }
  })
}

export default router