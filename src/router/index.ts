import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ForumView from '../views/ForumView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import LinksView from '../views/LinksView.vue'
import PodsView from '../views/PodsView.vue'
import PreziView from '../views/PreziView.vue'
import SupportView from '../views/SupportView.vue'
import NewsView from '../views/NewsView.vue'
import BooksView from '../views/BooksView.vue'
import WalletsView from '../views/WalletsView.vue'
import VideoView from '../views/VideoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'HUSZONEGY',
        metaTags: [
          {
            name: 'description',
            content: 'HUSZONEGY - Csak Bitcoinról magyarul. Magyar bitcoinerek összefogása.'
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, Hungarian, huszonegy, magyarul, Bitcoinról, bitcoinerek, összefogás'
          }
        ]
      }
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
            content: 'Cikkek Bitcoinról magyarul'
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, cikk, cikkek, magyarul, Bitcoinról'
          }
        ]
      }
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
            content: 'Magyar nyelvű Bitcoin csoport'
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, csoport, magyarul'
          }
        ]
      }
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
            content: 'Magyar Bitcoin Linkek'
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, link, linkek, magyarul'
          }
        ]
      }
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
            content: 'Bitcoin hírek magyarul'
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, hír, hírek, magyarul'
          }
        ]
      }
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
            content: 'Magyar Bitcoin podcast'
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, podcast, beszélgetés, magyarul'
          }
        ]
      }
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
            content: 'Bitcoin előadás magyarul'
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, előadás, prezentáció, magyarul'
          }
        ]
      }
    },
    {
      path: '/video',
      name: 'videos',
      component: VideoView,
      meta: {
        title: 'Bitcoin oktató videó',
        metaTags: [
          {
            name: 'description',
            content: 'Bitcoin oktató videó'
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, oktató, videó, magyarul'
          }
        ]
      }
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
            content: 'Bitcoin könyvek magyar nyelven'
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, könyv, könyvek, magyarul, nyelven'
          }
        ]
      }
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
            content: 'Ajánlott tárcák, eszközök, egyebek'
          },
          {
            name: 'keywords',
            content: 'Bitcoin, tárca, wallet, ajánlás'
          }
        ]
      }
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
            content: 'Bitcoin önkéntesek támogatása'
          },
          {
            name: 'keywords',
            content: 'Bitcoin, magyar, támogatás, önkéntes, támogat'
          }
        ]
      }
    },
    {
      path: '/support',
      redirect: '/tamogatas'
    }
  ]
})

// source: https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head
// modified here and there by pesz

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title as string;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title as string;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode?.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  const metaArray = nearestWithMeta.meta.metaTags as Array<String>;
  metaArray.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key as keyof typeof nearestWithMeta.meta.metaTags]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router
