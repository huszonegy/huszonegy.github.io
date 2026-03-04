import { fileURLToPath, URL } from 'node:url'
import { execSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { podcasts, slugify } from './src/data/podcasts'
import generateSitemap from 'vite-ssg-sitemap'

/**
 * A megadott fájlok közül a legfrissebb git commit dátumát adja vissza.
 * Ha a git nem elérhető vagy a fájlok nincsenek verziókezelve, null-t ad.
 */
function gitLastmod(...files: string[]): Date | null {
  let latest = new Date(0)
  for (const file of files) {
    try {
      const out = execSync(`git log -1 --format="%cI" -- ${file}`, { encoding: 'utf8' }).trim()
      if (out) {
        const d = new Date(out)
        if (!isNaN(d.getTime()) && d > latest) latest = d
      }
    } catch {
      // git nem elérhető vagy a fájl nincs verziókezelve
    }
  }
  return latest > new Date(0) ? latest : null
}

/**
 * Magyar dátum formátumot ("2026.02.26.") Date objektummá alakít.
 */
function parseHungarianDate(dateStr: string): Date {
  const cleaned = dateStr.replace(/\.$/, '').replace(/\./g, '-')
  const d = new Date(cleaned)
  return isNaN(d.getTime()) ? new Date(0) : d
}

/**
 * YouTube URL-ből kinyeri a videó azonosítóját.
 */
function extractYoutubeId(url: string): string | null {
  const match = url.match(/youtu\.be\/([^?]+)/) || url.match(/[?&]v=([^&]+)/)
  return match ? match[1] : null
}

// Útvonal → forrásfájl(ok) amik meghatározzák a frissességet.
// Adatvezérelt oldalaknál a nézet komponens és az adatfájl is szerepel,
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

// Sitemap dátumok kiszámítása build időben
function buildLastmodMap(): Record<string, Date> {
  const map: Record<string, Date> = {}

  // Statikus útvonalak
  for (const [route, files] of Object.entries(routeSourceFiles)) {
    const d = gitLastmod(...files)
    if (d) map[route] = d
  }

  // Egyedi podcast oldalak — minden epizódnak saját dátuma van
  for (const p of podcasts) {
    const slug = `/podcast/${slugify(p.name)}`

    // Alap: a podcast megjelenési dátuma
    const publishDate = parseHungarianDate(p.date)

    // Ha van átirat fájl és azt módosították a megjelenés óta, azt vesszük
    let bestDate = publishDate
    const ytId = p.yt ? extractYoutubeId(p.yt) : null
    if (ytId) {
      const mdPath = `public/transcripts_clean/ep${p.id}_${ytId}.md`
      const txtPath = `public/transcripts_clean/ep${p.id}_${ytId}.txt`
      const transcriptPath = existsSync(mdPath) ? mdPath : existsSync(txtPath) ? txtPath : null
      if (transcriptPath) {
        const tDate = gitLastmod(transcriptPath)
        if (tDate && tDate > bestDate) bestDate = tDate
      }
    }

    map[slug] = bestDate
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
      // Kiszűrjük a paraméterezett útvonalakat (pl. :slug, :pathMatch),
      // a redirecteket (pl. /support), és a statikus fájl útvonalakat (pl. /books/)
      const kizart = ['/support', '/books']
      const staticPaths = (paths as string[]).filter(p =>
        !p.includes(':') && !kizart.some(k => p === k || p.startsWith(k + '/'))
      )
      const podcastPaths = podcasts.map(p => `/podcast/${slugify(p.name)}`);
      return [...staticPaths, ...podcastPaths];
    },
    // Sitemap generálás build végén
    onFinished() {
      const lastmodMap = buildLastmodMap()

      generateSitemap({
        hostname: 'https://huszonegy.world',
        exclude: ['/404', '/books/sziller.eu/_BitcoinrolAlaposan'],
        // Útvonal-szintű lastmod dátumok — csak a ténylegesen módosított oldalak
        // kapnak friss dátumot. Nem leképezett útvonalak lastmod nélkül maradnak.
        lastmod: lastmodMap,
      })
    }
  }
} as any)