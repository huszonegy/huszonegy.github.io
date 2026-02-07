import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ForumView from '../views/ForumView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import LinksView from '../views/LinksView.vue'
import PodsView from '../views/PodsView.vue'
import PreziView from '../views/PreziView.vue'
import SupportView from '../views/SupportView.vue'
import PizzaView from '../views/PizzaView.vue'
import NewsView from '../views/NewsView.vue'
import BooksView from '../views/BooksView.vue'
import WalletsView from '../views/WalletsView.vue'
import VideoView from '../views/VideoView.vue'
import MeetupView from '../views/MeetupView.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'HUSZONEGY - Bitcoin Magyarországon',
      metaTags: [
        {
          name: 'description',
          content: 'Magyar Bitcoin közösség. Csak bitcoinról, magyarul. Decentralizált jövő, meetupok, oktatás, podcast és cikkek egy helyen.'
        },
        {
          name: 'keywords',
          content: 'bitcoin, huszonegy, magyarország, decentralizáció, szabadság, közösség, magyar bitcoinerek'
        }
      ]
    }
  },
  {
    path: '/cikk',
    name: 'articles',
    component: ArticlesView,
    meta: {
      title: 'Bitcoin cikkek magyarul - HUSZONEGY',
      metaTags: [
        {
          name: 'description',
          content: 'Bitcoin cikkek, elemzések és tanulmányok magyarul. Ismerkedj meg a Bitcoin technológiájával, gazdasági hatásaival és a decentralizált jövővel!'
        },
        {
          name: 'keywords',
          content: 'bitcoin cikkek, magyar bitcoin, bitcoin tanulmány, bitcoin, decentralizáció'
        }
      ]
    }
  },
  {
    path: '/forum',
    name: 'forum',
    component: ForumView,
    meta: {
      title: 'Bitcoin fórum - HUSZONEGY közösség',
      metaTags: [
        {
          name: 'description',
          content: 'Magyar Bitcoin közösség fóruma. Csatlakozz a beszélgetéshez, tedd fel kérdéseidet és ossz meg tapasztalatokat más magyar bitcoinerekkel!'
        },
        {
          name: 'keywords',
          content: 'bitcoin fórum, magyar bitcoin közösség, bitcoin beszélgetés, telegram csoport'
        }
      ]
    }
  },
  {
    path: '/link',
    name: 'links',
    component: LinksView,
    meta: {
      title: 'Hasznos Bitcoin linkek - HUSZONEGY',
      metaTags: [
        {
          name: 'description',
          content: 'Válogatott Bitcoin linkek, partnereink, kapcsolódó honlapok magyarul és angolul. Minden amit a Bitcoinról tudni kell.'
        },
        {
          name: 'keywords',
          content: 'bitcoin linkek, bitcoin források, bitcoin oktatás, bitcoin eszközök'
        }
      ]
    }
  },
  {
    path: '/hir',
    name: 'news',
    component: NewsView,
    meta: {
      title: 'Bitcoin hírek magyarul - HUSZONEGY',
      metaTags: [
        {
          name: 'description',
          content: 'Friss Bitcoin hírek és újdonságok magyarul. Kövesd a legfontosabb eseményeket a Bitcoin világából naprakészen!'
        },
        {
          name: 'keywords',
          content: 'bitcoin hírek, bitcoin hírek magyarul, bitcoin news, bitcoin újdonságok'
        }
      ]
    }
  },
  {
    path: '/podcast',
    name: 'podcasts',
    component: PodsView,
    meta: {
      title: 'Bitcoin podcast magyarul - HUSZONEGY',
      metaTags: [
        {
          name: 'description',
          content: 'Magyar Bitcoin podcastok és beszélgetések. Hallgass interjúkat, szakértői véleményeket és közösségi beszélgetéseket a Bitcoin világából!'
        },
        {
          name: 'keywords',
          content: 'bitcoin podcast, magyar bitcoin podcast, beszélgetés, bitcoin interjú'
        }
      ]
    }
  },
  {
    path: '/eloadas',
    name: 'presentations',
    component: PreziView,
    meta: {
      title: 'Bitcoin előadások magyarul - HUSZONEGY',
      metaTags: [
        {
          name: 'description',
          content: 'Bitcoin előadások, prezentációk és konferencia anyagok magyarul. Tanulj szakértőktől a Bitcoin technológiájáról és gazdasági hatásairól!'
        },
        {
          name: 'keywords',
          content: 'bitcoin előadás, bitcoin prezentáció, bitcoin konferencia, bitcoin oktatás'
        }
      ]
    }
  },
  {
    path: '/oktatovideo',
    name: 'videos',
    component: VideoView,
    meta: {
      title: 'Bitcoin oktatóvideók magyarul - HUSZONEGY',
      metaTags: [
        {
          name: 'description',
          content: 'Bitcoin oktatóvideók kezdőknek és haladóknak magyarul. Tanuld meg a Bitcoin használatát, a tárcák kezelését és a biztonságos tárolást!'
        },
        {
          name: 'keywords',
          content: 'bitcoin videó, bitcoin oktatás, bitcoin tutorial, bitcoin tanulás magyarul'
        }
      ]
    }
  },
  {
    path: '/konyv',
    name: 'books',
    component: BooksView,
    meta: {
      title: 'Bitcoin könyvek magyarul - HUSZONEGY',
      metaTags: [
        {
          name: 'description',
          content: 'Ajánlott Bitcoin könyvek magyar nyelven és fordításban. A legjobb Bitcoin könyvek kezdőknek és szakértőknek.'
        },
        {
          name: 'keywords',
          content: 'bitcoin könyv, bitcoin könyv magyarul, bitcoin irodalom, bitcoin olvasmány'
        }
      ]
    }
  },
  {
    path: '/tarcak',
    name: 'wallets',
    component: WalletsView,
    meta: {
      title: 'Bitcoin tárcák és eszközök - HUSZONEGY',
      metaTags: [
        {
          name: 'description',
          content: 'Ajánlott Bitcoin tárcák, hardver wallet-ek és eszközök. Válaszd ki a számodra legmegfelelőbb megoldást a biztonságos Bitcoin tároláshoz!'
        },
        {
          name: 'keywords',
          content: 'bitcoin tárca, hardver wallet, bitcoin wallet, trezor, coldcard, ledger'
        }
      ]
    }
  },
  {
    path: '/meetup',
    name: 'meetup',
    component: MeetupView,
    meta: {
      title: 'Bitcoin meetupok Magyarországon - HUSZONEGY',
      metaTags: [
        {
          name: 'description',
          content: 'Bitcoin meetupok, találkozók és események Magyarországon. Csatlakozz a közösséghez, ismerj meg más bitcoinereket és tanulj együtt!'
        },
        {
          name: 'keywords',
          content: 'bitcoin meetup, bitcoin találkozó, bitcoin esemény, bitcoin közösség magyarország'
        }
      ]
    }
  },
  {
    path: '/tamogatas',
    name: 'support',
    component: SupportView,
    meta: {
      title: 'HUSZONEGY támogatása - Bitcoin adományok',
      metaTags: [
        {
          name: 'description',
          content: 'Támogasd a HUSZONEGY magyar Bitcoin közösséget! Segíts fenntartani az ingyenes oktatási anyagokat, meetupokat és közösségi kezdeményezéseket!'
        },
        {
          name: 'keywords',
          content: 'bitcoin támogatás, bitcoin adomány, közösség támogatása, btc donation'
        }
      ]
    }
  },
  {
    path: '/pizzaday',
    name: 'pizzaday',
    component: PizzaView,
    meta: {
      title: 'Bitcoin Pizza Nap - HUSZONEGY',
      metaTags: [
        {
          name: 'description',
          content: 'Bitcoin Pizza Nap ünneplése. Május 22-én emlékezünk az első Bitcoin tranzakcióra, amikor Laszlo Hanyecz 10,000 BTC-ért pizzát vásárolt.'
        },
        {
          name: 'keywords',
          content: 'bitcoin pizza nap, pizza day, bitcoin history, laszlo hanyecz, május 22'
        }
      ]
    }
  },
  {
    path: '/support',
    redirect: '/tamogatas'
  }
]
