import fs from 'fs';

// Read existing router file
const routerPath = 'src/router/index.ts';
const routerContent = fs.readFileSync(routerPath, 'utf8');

// Find the routes array
const routesStart = routerContent.indexOf('const routes = [');
const routesEnd = routerContent.indexOf('];', routesStart);
const routesArray = routerContent.substring(routesStart, routesEnd + 1);

// Create new route for English
const newRoute = `
  {
    path: '/english',
    name: 'English',
    component: () => import('../views/EnglishView.vue'),
    meta: { title: 'English' }
  },`;

// Insert new route before the last route (NotFoundView)
const lastRouteIndex = routesArray.lastIndexOf('},');
const newRoutesArray = routesArray.substring(0, lastRouteIndex + 2) + newRoute + routesArray.substring(lastRouteIndex + 2);

// Replace routes array in original content
const newRouterContent = routerContent.substring(0, routesStart) + newRoutesArray + routerContent.substring(routesEnd + 1);

// Write updated content
fs.writeFileSync(routerPath, newRouterContent, 'utf8');

console.log('Router updated successfully!');