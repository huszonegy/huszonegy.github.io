import { fileURLToPath, URL } from 'node:url'
import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { podcasts, slugify } from './src/data/podcasts'
import generateSitemap from 'vite-ssg-sitemap'
import { buildTranscriptChapterMap } from './scripts/transcriptChapters'

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
  '/':             ['src/views/HomeView.vue'],
  '/cikk/':        ['src/views/ArticlesView.vue',  'src/data/articles.ts'],
  '/kozosseg/':    ['src/views/ForumView.vue'],
  '/hir/':         ['src/views/NewsView.vue',       'src/data/news.ts'],
  '/podcast/':     ['src/views/PodsView.vue',       'src/data/podcasts.ts'],
  '/konyv/':       ['src/views/BooksView.vue',      'src/data/books.ts'],
  '/tarcak/':      ['src/views/WalletsView.vue',    'src/data/wallets.ts'],
  '/meetup/':      ['src/views/MeetupView.vue'],
  '/link/':        ['src/views/LinksView.vue',      'src/data/links.ts'],
  '/eloadas/':     ['src/views/PreziView.vue',      'src/data/presentations.ts'],
  '/oktatovideo/': ['src/views/VideoView.vue',      'src/data/videos.ts'],
  '/tamogatas/':   ['src/views/SupportView.vue'],
  '/pizzaday/':    ['src/views/PizzaView.vue'],
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
    const slug = `/podcast/${slugify(p.name)}/`

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

// Az átiratba szúrandó fejezetcímek (H2) helye epizódonként — build-időben a nyers feliratból számolva
const transcriptChaptersPlugin = () => {
  const id = 'virtual:transcript-chapters'
  return {
    name: 'transcript-chapters',
    resolveId: (source: string) => (source === id ? '\0' + id : null),
    load: (source: string) =>
      source === '\0' + id ? `export default ${JSON.stringify(buildTranscriptChapterMap())}` : null,
  }
}

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    transcriptChaptersPlugin(),
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
        silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
      },
    },
  },
  ssgOptions: {
    dirStyle: 'nested',
    includedRoutes(paths: any, _routes: any) {
      // Kiszűrjük a paraméterezett útvonalakat (pl. :slug, :pathMatch) és a statikus fájl útvonalakat (pl. /books/).
      // A redirectek (pl. /forum/, /support) renderelődnek: a céloldal tartalmát kapják kanonikus hivatkozással,
      // így a régi linkek nem 404-elnek. A /404/ oldal is renderelődik: a build ebből készíti a dist/404.html-t.
      const kizart = ['/books']
      const staticPaths = (paths as string[]).filter(p =>
        !p.includes(':') && !kizart.some(k => p === k || p.startsWith(k + '/'))
      )
      const podcastPaths = podcasts.map(p => `/podcast/${slugify(p.name)}/`);
      return [...staticPaths, ...podcastPaths];
    },
    // Sitemap generálás build végén
    onFinished() {
      const lastmodMap = buildLastmodMap()

      // A router átirányított (régi) útvonalai ne kerüljenek a sitemapbe — ott csak a kanonikus URL-ek állhatnak.
      // A plugin záró perjel nélkül hasonlít (pl. '/podcast/regi-slug'), ezért a perjelet levágjuk.
      const redirects = [...readFileSync('src/router/index.ts', 'utf-8')
        .matchAll(/\{\s*path:\s*'([^']+)',\s*redirect:\s*'([^']+)'/g)].map(m => ({ from: m[1], to: m[2] }))
      const redirectPaths = redirects.map(r => r.from.replace(/\/$/, ''))

      // A régi útvonalak helyére ne a céloldal másolata kerüljön, hanem egy azonnali átirányító oldal:
      // a GitHub Pages nem tud 301-et küldeni, a 0 másodperces meta refresh-t viszont a Google
      // tartós átirányításként kezeli, így a régi URL rangsorolási jele az újra száll át.
      for (const { from, to } of redirects) {
        const dir = `dist${from.replace(/\/$/, '')}`
        const url = `https://huszonegy.world${to}`
        mkdirSync(dir, { recursive: true })
        writeFileSync(`${dir}/index.html`, `<!DOCTYPE html>
<html lang="hu">
<head>
<meta charset="UTF-8">
<title>Átirányítás – HUSZONEGY</title>
<link rel="canonical" href="${url}">
<meta http-equiv="refresh" content="0; url=${to}">
</head>
<body>
<p>Az oldal új helye: <a href="${to}">${url}</a></p>
</body>
</html>
`)
      }

      generateSitemap({
        hostname: 'https://huszonegy.world',
        exclude: ['/404', '/books/sziller.eu/_BitcoinrolAlaposan', ...redirectPaths],
        // A robots.txt-t a public/robots.txt adja (Disallow-szabályokkal); a plugin ne írja felül
        generateRobotsTxt: false,
        // Útvonal-szintű lastmod dátumok — csak a ténylegesen módosított oldalak
        // kapnak friss dátumot. A plugin itt is záró perjel nélkül keres (a gyökér: '/'),
        // ezért a kulcsokról levágjuk; enélkül minden oldal a build időpontját kapná.
        lastmod: Object.fromEntries(
          Object.entries(lastmodMap).map(([route, date]) => [route === '/' ? route : route.replace(/\/$/, ''), date])
        ),
      })
    }
  }
} as any)