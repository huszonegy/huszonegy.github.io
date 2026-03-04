import { fileURLToPath, URL } from 'node:url'
import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { podcasts, slugify } from './src/data/podcasts'
import generateSitemap from 'vite-ssg-sitemap'

/**
 * Visszaadja a megadott fájlok legutolsó git commit dátumát.
 * Ha a git nem elérhető vagy a fájl nincs commitolva, a mai dátumot adja vissza.
 */
function gitLastmod(...files: string[]): Date {
  let latest = new Date(0)
  for (const file of files) {
    try {
      const out = execSync(`git log -1 --format="%cI" -- ${file}`, { encoding: 'utf8' }).trim()
      if (out) {
        const d = new Date(out)
        if (!isNaN(d.getTime()) && d > latest) latest = d
      }
    } catch {
      // git nem elérhető vagy a fájl nincs követve – kihagyjuk
    }
  }
  return latest > new Date(0) ? latest : new Date()
}

// Útvonal → forrásfájl(ok), amik meghatározzák a frissességet.
// Adatvezérelt oldalaknál a nézet és az adatfájl is szerepel,
// így új tartalom hozzáadása is frissíti a sitemap dátumot.
const routeSourceFiles: Record<string, string[]> = {
  '/':            ['src/views/HomeView.vue'],
  '/cikk':        ['src/views/ArticlesView.vue',  'src/data/articles.ts'],
  '/forum':       ['src/views/ForumView.vue'],
  '/hir':         ['src/views/NewsView.vue',       'src/data/news.ts'],
  '/podcast':     ['src/views/PodsView.vue',       'src/data/podcasts.ts'],
  '/konyv':       ['src/views/BooksView.vue',      'src/data/books.ts'],
  '/tarcak':      ['src/views/WalletsView.vue',    'src/data/wallets.ts'],
  '/meetup':      ['src/views/MeetupView.vue'],
  '/link':        ['src/views/LinksView.vue',      'src/data/links.ts'],
  '/eloadas':     ['src/views/PreziView.vue',      'src/data/presentations.ts'],
  '/oktatovideo': ['src/views/VideoView.vue',      'src/data/videos.ts'],
  '/tamogatas':   ['src/views/SupportView.vue'],
  '/pizzaday':    ['src/views/PizzaView.vue'],
}

// Lastmod dátumok kiszámítása egyszer, build időben
function buildLastmodMap(podcastPaths: string[]): Record<string, Date> {
  const map: Record<string, Date> = {}

  for (const [route, files] of Object.entries(routeSourceFiles)) {
    map[route] = gitLastmod(...files)
  }

  // Az egyedi podcast oldalak közös forrása: PodDetailView + podcasts adatfájl
  const podLastmod = gitLastmod('src/views/PodDetailView.vue', 'src/data/podcasts.ts')
  for (const slug of podcastPaths) {
    map[slug] = podLastmod
  }

  return map
}

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  ssr: {
    noExternal: ['bootstrap'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'mixed-decls'],
      },
    },
  },
  ssgOptions: {
    dirStyle: 'nested',
    includedRoutes(paths: any, _routes: any) {
      const staticPaths = paths;
      const podcastPaths = podcasts.map(p => `/podcast/${slugify(p.name)}`);
      return [...staticPaths, ...podcastPaths];
    },
    // Ez a rész fogja automatikusan elkészíteni a sitemap.xml-t
    onFinished() {
      const podcastPaths = podcasts.map(p => `/podcast/${slugify(p.name)}`)
      const lastmodMap = buildLastmodMap(podcastPaths)

      generateSitemap({
        hostname: 'https://huszonegy.world',
        exclude: ['/404'],
        // Git-alapú lastmod dátumok útvonalonként, hogy a Google pontos frissességi jelzést kapjon.
        // A '*' az alapértelmezett a fent nem szereplő útvonalakhoz.
        lastmod: { ...lastmodMap, '*': new Date() },
      })
    }
  }
} as any)