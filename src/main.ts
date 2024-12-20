// Original Vue usage disabled
// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createSSRRouter } from './router';

// Bootstrap stuff:
// Import our custom CSS
import '/scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// sample to import individual components
// import Alert from 'bootstrap/js/dist/alert';
// // or, specify which plugins you need:
// import { Tooltip, Toast, Popover } from 'bootstrap';

const app = createApp(App)
const router = createSSRRouter();

app.use(router)

router.isReady().then(() => {
    app.mount('#app');
});
