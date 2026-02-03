// Original Vue usage disabled
// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap stuff:
// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const app = createApp(App)
declare global {
  interface Window {
    goatcounter: any;
  }
}

app.use(router)

app.mount('#app')

// Dynamically import Bootstrap JS after hydration
if (typeof window !== 'undefined') {
    import('bootstrap').then((bootstrap) => {
      const { Collapse } = bootstrap;

      // Close navbar collapse menu + track page views with GoatCounter on route change
      router.afterEach((to) => {
        // GoatCounter: manuális pageview küldése minden belső route váltáskor
        if (window.goatcounter) {
          window.goatcounter.count({
            path: to.fullPath,                    // pl. "/", "/rolunk", "/projektek/abc"
            title: document.title || (to.name as string) || 'Huszonegy',  // cím, fallback-kel
            event: false                          // false = pageview, nem event
          });
        }

        // Close navbar collapse menu 
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse) {
          const bsCollapse = Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }

        // Close dropdown menus 
        const dropdownMenus = document.querySelectorAll('.dropdown-menu.show');
        dropdownMenus.forEach((menu) => {
          menu.classList.remove('show');
        });
      });
    });
}