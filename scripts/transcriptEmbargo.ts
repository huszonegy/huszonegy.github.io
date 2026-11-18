// Átirat-visszatartás: egy epizód átirata a megjelenés napján (a premier estéjén) még nem kerül ki
// a honlapra, csak a következő nap 0:00-tól (budapesti idő). Build-időben dől el: a visszatartott
// átirat kimarad az epizódoldalból, a JS-csomagból és a dist/transcripts_clean mappából is.
// A GitHub Actions hajnalonként újraépíti az oldalt, így az átirat magától megjelenik.
import { existsSync, readdirSync, rmSync } from 'node:fs'
import { podcasts } from '../src/data/podcasts'

// "2026.11.20." → "2026-11-20"
const isoDate = (huDate: string) => huDate.replace(/\./g, '-').replace(/-$/, '')

// A mai nap budapesti idő szerint, "ÉÉÉÉ-HH-NN" alakban
const budapestToday = (now: Date) =>
  new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Budapest' }).format(now)

// Azok az epizód-azonosítók, amelyek átirata még nem jelenhet meg (a megjelenés napja még nem múlt el)
export function embargoedTranscriptIds(now = new Date()): Set<string> {
  const today = budapestToday(now)
  return new Set(podcasts.filter(p => p.date && isoDate(p.date) >= today).map(p => p.id))
}

// Vite-plugin: a visszatartott átirat ?raw importja üres szöveget ad, így a tartalma nem kerül a buildbe
export const transcriptEmbargoPlugin = () => {
  const ids = embargoedTranscriptIds()
  return {
    name: 'transcript-embargo',
    apply: 'build' as const,
    enforce: 'pre' as const,
    buildStart() {
      if (ids.size) console.log(`[transcript-embargo] visszatartott átirat: ${[...ids].join(', ')}`)
    },
    load(id: string) {
      const m = id.match(/\/public\/transcripts_clean\/ep([A-Z]+\d+)_[^/]*\.md\?raw$/)
      return m && ids.has(m[1]) ? 'export default ""' : null
    },
  }
}

// A build végén a visszatartott átiratok nyers fájljait is törli a kész oldalból
export function removeEmbargoedTranscriptFiles(distDir = 'dist') {
  const ids = embargoedTranscriptIds()
  const dir = `${distDir}/transcripts_clean`
  if (!ids.size || !existsSync(dir)) return
  for (const f of readdirSync(dir)) {
    const m = f.match(/^ep([A-Z]+\d+)_/)
    if (m && ids.has(m[1])) rmSync(`${dir}/${f}`)
  }
}
