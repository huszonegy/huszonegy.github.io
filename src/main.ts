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
// sample to import individual components
// import Alert from 'bootstrap/js/dist/alert';
// // or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';

const app = createApp(App)

app.use(router)

app.mount('#app')

// Dynamically import Bootstrap JS after hydration
if (typeof window !== 'undefined') {
    import('bootstrap').then((bootstrap) => {
      const { Collapse } = bootstrap;

      // Close navbar collapse menu on route change
      router.afterEach(() => {
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
