import { createSSRApp } from 'vue';
import App from './App.vue';
import { createSSRRouter } from './router';

export async function render(url: string) {
  const app = createSSRApp(App);
  const router = createSSRRouter();

  console.log(`Pushing URL to router: ${url}`);

  router.push(url); // Push the server-side URL to the router

  try {
    // Wait for the router to resolve async components or guards
    await router.isReady();
  } catch (error) {
    console.error(`Error while resolving router for URL "${url}":`, error);
  }

  // Attach the router to the app
  app.use(router);

  return { app, router };
}
