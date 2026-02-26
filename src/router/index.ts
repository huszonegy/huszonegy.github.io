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
    path: '/cikk',
    name: 'articles',
    component: () => import('../views/ArticlesView.vue'),
    meta: {
      title: 'Bitcoin cikkek magyarul - HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Bitcoin cikkek, elemzések és tanulmányok magyarul.' },
        { name: 'keywords', content: 'bitcoin cikkek, magyar bitcoin, bitcoin tanulmány' }
      ]
    }
  },
  {
    path: '/forum',
    name: 'forum',
    component: () => import('../views/ForumView.vue'),
    meta: {
      title: 'Bitcoin fórum - HUSZONEGY közösség',
      metaTags: [
        { name: 'description', content: 'Magyar Bitcoin közösség fóruma. Csatlakozz a beszélgetéshez, tedd fel kérdéseidet és ossz meg tapasztalatokat más magyar bitcoinerekkel!' },
        { name: 'keywords', content: 'bitcoin fórum, magyar bitcoin közösség, bitcoin beszélgetés, telegram csoport' }
      ]
    }
  },
  {
    path: '/hir',
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
    path: '/podcast',
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
    path: '/podcast/:slug',
    name: 'podcast-detail',
    component: () => import('../views/PodDetailView.vue'),
    props: true
  },
  {
    path: '/konyv',
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
    path: '/tarcak',
    name: 'wallets',
    component: () => import('../views/WalletsView.vue'),
    meta: {
      title: 'Bitcoin tárcák és eszközök - HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Ajánlott Bitcoin tárcák, hardver wallet-ek és eszközök. Válaszd ki a számodra legmegfelelőbb megoldást a biztonságos Bitcoin tároláshoz!' },
        { name: 'keywords', content: 'bitcoin tárca, hardver wallet, bitcoin wallet, trezor, coldcard, ledger' }
      ]
    }
  },
  {
    path: '/meetup',
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
    path: '/link',
    name: 'links',
    component: () => import('../views/LinksView.vue'),
    meta: {
      title: 'Hasznos Bitcoin linkek - HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Válogatott Bitcoin linkek, partnereink, kapcsolódó honlapok magyarul és angolul.' },
        { name: 'keywords', content: 'bitcoin linkek, bitcoin források, bitcoin oktatás' }
      ]
    }
  },
  {
    path: '/eloadas',
    name: 'presentations',
    component: () => import('../views/PreziView.vue'),
    meta: {
      title: 'Bitcoin előadások magyarul - HUSZONEGY',
      metaTags: [
        { name: 'description', content: 'Bitcoin előadások, prezentációk és konferencia anyagok magyarul.' },
        { name: 'keywords', content: 'bitcoin előadás, bitcoin prezentáció, bitcoin konferencia' }
      ]
    }
  },
  {
    path: '/oktatovideo',
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
    path: '/tamogatas',
    name: 'support',
    component: () => import('../views/SupportView.vue'),
    meta: {
      title: 'HUSZONEGY támogatása - Bitcoin adományok',
      metaTags: [
        { name: 'description', content: 'Támogasd a HUSZONEGY magyar Bitcoin közösséget!' }
      ]
    }
  },
  {
    path: '/pizzaday',
    name: 'pizzaday',
    component: () => import('../views/PizzaView.vue'),
    meta: { title: 'Bitcoin Pizza Nap - HUSZONEGY' }
  },
  { path: '/support', redirect: '/tamogatas' },
  {
    path: '/404',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: 'Oldal nem található - HUSZONEGY' }
  },
  { path: '/:pathMatch(.*)*', redirect: '/404' }
]

const router = createRouter({
  // Ez a sor dönti el, hogy szerver (GitHub) vagy böngésző módban vagyunk-e
  history: import.meta.env.SSR 
    ? createMemoryHistory(import.meta.env.BASE_URL) 
    : createWebHistory(import.meta.env.BASE_URL),
  routes
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