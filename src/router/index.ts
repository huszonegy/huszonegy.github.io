import {
    createRouter,
    createMemoryHistory,
    createWebHistory,
    type RouteRecordRaw,
  } from 'vue-router';
  import HomeView from '../views/HomeView.vue';
  import ForumView from '../views/ForumView.vue';
  import ArticlesView from '../views/ArticlesView.vue';
  import LinksView from '../views/LinksView.vue';
  import PodsView from '../views/PodsView.vue';
  import PreziView from '../views/PreziView.vue';
  import SupportView from '../views/SupportView.vue';
  import NewsView from '../views/NewsView.vue';
  import BooksView from '../views/BooksView.vue';
  import WalletsView from '../views/WalletsView.vue';
  
  // Define the routes
  const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'HUSZONEGY',
        metaTags: [
          {
            name: 'description',
            content: 'HUSZONEGY - Csak Bitcoinról magyarul. Magyar bitcoinerek összefogása.',
          },
          {
            name: 'keywords',
            content:
              'Bitcoin, magyar, Hungarian, huszonegy, magyarul, Bitcoinról, bitcoinerek, összefogás',
          },
        ],
      },
    },
    {
      path: '/cikkek',
      name: 'articles',
      component: ArticlesView,
      meta: {
        title: 'Bitcoin cikkek',
        metaTags: [
          {
            name: 'description',
            content: 'Cikkek Bitcoinról magyarul',
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, cikk, cikkek, magyarul, Bitcoinról',
          },
        ],
      },
    },
    {
      path: '/forum',
      name: 'forum',
      component: ForumView,
      meta: {
        title: 'Bitcoin fórum',
        metaTags: [
          {
            name: 'description',
            content: 'Magyar nyelvű Bitcoin csoport',
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, csoport, magyarul',
          },
        ],
      },
    },
    {
      path: '/linkek',
      name: 'links',
      component: LinksView,
      meta: {
        title: 'Bitcoin linkek',
        metaTags: [
          {
            name: 'description',
            content: 'Magyar Bitcoin Linkek',
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, link, linkek, magyarul',
          },
        ],
      },
    },
    {
      path: '/hirek',
      name: 'news',
      component: NewsView,
      meta: {
        title: 'Bitcoin hírek',
        metaTags: [
          {
            name: 'description',
            content: 'Bitcoin hírek magyarul',
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, hír, hírek, magyarul',
          },
        ],
      },
    },
    {
      path: '/podcast',
      name: 'podcasts',
      component: PodsView,
      meta: {
        title: 'Bitcoin podcast',
        metaTags: [
          {
            name: 'description',
            content: 'Magyar Bitcoin podcast',
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, podcast, beszélgetés, magyarul',
          },
        ],
      },
    },
    {
      path: '/eloadas',
      name: 'presentations',
      component: PreziView,
      meta: {
        title: 'Bitcoin előadás',
        metaTags: [
          {
            name: 'description',
            content: 'Bitcoin előadás magyarul',
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, előadás, prezentáció, magyarul',
          },
        ],
      },
    },
    {
      path: '/konyvek',
      name: 'books',
      component: BooksView,
      meta: {
        title: 'Bitcoin könyv',
        metaTags: [
          {
            name: 'description',
            content: 'Bitcoin könyvek magyar nyelven',
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, könyv, könyvek, magyarul, nyelven',
          },
        ],
      },
    },
    {
      path: '/tarcak',
      name: 'wallets',
      component: WalletsView,
      meta: {
        title: 'Tárcák, SW, HW, eszközök',
        metaTags: [
          {
            name: 'description',
            content: 'Ajánlott tárcák, eszközök, egyebek',
          },
          {
            name: 'keywords',
            content: 'Bitcoin, tárca, wallet, ajánlás',
          },
        ],
      },
    },
    {
      path: '/tamogatas',
      name: 'support',
      component: SupportView,
      meta: {
        title: 'Bitcoin támogatás',
        metaTags: [
          {
            name: 'description',
            content: 'Bitcoin önkéntesek támogatása',
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, támogatás, önkéntes, támogat',
          },
        ],
      },
    },
    {
      path: '/support',
      redirect: '/tamogatas',
    },
  ];
  
  // createSSRRouter() function to create a router instance
  export function createSSRRouter() {
    return createRouter({
      history: import.meta.env.SSR
        ? createMemoryHistory() // Server-side
        : createWebHistory(import.meta.env.BASE_URL), // Client-side
      routes,
    });
  }
  