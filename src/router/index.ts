import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ForumView from '../views/ForumView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import LinksView from '../views/LinksView.vue'
import PodsView from '../views/PodsView.vue'
import SupportView from '../views/SupportView.vue'
import NewsView from '../views/NewsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticlesView
    },
    {
      path: '/forum',
      name: 'forum',
      component: ForumView
    },
    {
      path: '/links',
      name: 'links',
      component: LinksView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    },
    {
      path: '/podcasts',
      name: 'podcasts',
      component: PodsView
    },
    {
      path: '/support',
      name: 'support',
      component: SupportView
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
