import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router'

// Bootstrap stuff:
// Import our custom CSS
import './scss/styles.scss'

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
  },
  ({ app, router, isClient }) => {
    if (isClient) {
      // Dynamically import Bootstrap JS after hydration
      import('bootstrap').then((bootstrap) => {
        const { Collapse } = bootstrap

        // Close navbar collapse menu + track page views with GoatCounter on route change
        router.afterEach((to) => {
          // GoatCounter: manuális pageview küldése minden belső route váltáskor
          if (window.goatcounter) {
            window.goatcounter.count({
              path: to.fullPath,
              title: document.title || (to.name as string) || 'Huszonegy',
              event: false,
            })
          }

          // Close navbar collapse menu
          const navbarCollapse = document.querySelector('.navbar-collapse')
          if (navbarCollapse) {
            const bsCollapse = Collapse.getInstance(navbarCollapse)
            if (bsCollapse) {
              bsCollapse.hide()
            }
          }

          // Close dropdown menus
          const dropdownMenus = document.querySelectorAll('.dropdown-menu.show')
          dropdownMenus.forEach((menu) => {
            menu.classList.remove('show')
          })
        })
      })
    }
  },
)
