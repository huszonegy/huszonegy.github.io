import { fileURLToPath, URL } from 'node:url'
import { execSync } from 'node:child_process'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { podcasts, slugify } from './src/data/podcasts'
import generateSitemap from 'vite-ssg-sitemap'

/**
 * Returns the date of the most recent git commit that touched any of the given
 * file paths.  Falls back to the current date if git is unavailable or the
 * files have never been committed.
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
      // git not available or file not tracked – skip
    }
  }
  return latest > new Date(0) ? latest : new Date()
}

// Route → source file(s) that determine freshness
// For data-driven pages we include both the view component and the data file
// so that adding new content updates the sitemap date even if the view hasn't changed.
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

// Compute lastmod dates once at build time
function buildLastmodMap(podcastPaths: string[]): Record<string, Date> {
  const map: Record<string, Date> = {}

  for (const [route, files] of Object.entries(routeSourceFiles)) {
    map[route] = gitLastmod(...files)
  }

  // All individual podcast pages share the same source: PodDetailView + podcasts data
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
        // Use git-based per-route lastmod dates so Google sees accurate freshness signals.
        // '*' is the fallback for any route not explicitly listed above.
        lastmod: { ...lastmodMap, '*': new Date() },
      })
    }
  }
} as any)