import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { renderToString } from 'vue/server-renderer';
import * as sass from 'sass';
import { render } from './server/server-entry.js'; // Adjust path as necessary



// Dynamically calculate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Get the absolute path to the original node_modules directory
const nodeModulesPath = path.resolve(__dirname, '../node_modules');


// Handle favicon.ico requests
app.get('/favicon.ico', (req, res) => {
  res.status(204).end(); // Respond with a no-content status
});

// Read the client-side template
const template = fs.readFileSync(
  path.resolve(__dirname, './client/index.html'),
  'utf-8'
);

// Compile SCSS to CSS
const compiledStyles = sass.compile(path.resolve(__dirname, './client/scss/styles.scss'), {
  loadPaths: [nodeModulesPath], // Use the correct node_modules path
});

// Serve static assets from the client build directory
app.use('/assets', express.static(path.resolve(__dirname, './client/assets')));
app.use('/logo', express.static(path.resolve(__dirname, './client/logo')));
app.use('/article', express.static(path.resolve(__dirname, './client/article')));
app.use('/pics', express.static(path.resolve(__dirname, './client/pics')));
app.use('/books', express.static(path.resolve(__dirname, './client/books')));


app.get('*', async (req, res) => {
  try {
    const { app: vueApp } = await render(req.url); // Render the Vue app
    const appHtml = await renderToString(vueApp);

    const inlineStyles = `<style>${compiledStyles.css}</style>`;

    // Inject the rendered app HTML into the client-side template
    const html = template
      .replace('<!--APP-->', appHtml)
      .replace('</head>', `${inlineStyles}</head>`);

    res.status(200).send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
