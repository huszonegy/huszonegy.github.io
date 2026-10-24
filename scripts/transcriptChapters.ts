import { existsSync, readFileSync } from 'node:fs'
import { podcasts, parseTopics, getYouTubeId, splitTranscriptBlocks } from '../src/data/podcasts'

/**
 * Build-időben kiszámolja, hogy az átiratban melyik bekezdés elé kerüljön az egyes fejezetcímek H2-je.
 *
 * A szépített .md átiratban nincs időbélyeg, a nyers YouTube-feliratban (transcripts_raw/*.hu.srt) viszont
 * szavanként van. A fejezet időpontja körüli nyers szavakat (3 szavas n-gramokat) megkeressük a szépített
 * szövegben, és a találatot a legközelebbi bekezdéshatárra igazítjuk. Ha nincs biztos találat (pl. a régi,
 * összefoglalóvá rövidült átiratoknál), a felirat hosszához viszonyított arányos helyre tesszük.
 *
 * Kimenet: epizód-id → a fejezetlista indexeivel párhuzamos tömb; az elem a bekezdés indexe, vagy null.
 * A bekezdésekre bontás ugyanazzal a splitTranscriptBlocks-szal történik, mint a PodDetailView-ban.
 */

const N = 3

const normalize = (s: string) =>
  s.toLowerCase().normalize('NFC').replace(/[^\p{L}\p{N}\s]/gu, ' ').split(/\s+/).filter(Boolean)

const toSeconds = (t: string) => t.split(':').map(Number).reduce((a, b) => a * 60 + b, 0)

type TimedWord = { w: string; t: number }

function parseSrt(text: string): TimedWord[] {
  const out: TimedWord[] = []
  for (const block of text.replace(/\r/g, '').split(/\n\s*\n/)) {
    const lines = block.split('\n')
    const ti = lines.findIndex(l => l.includes('-->'))
    if (ti < 0) continue
    const m = lines[ti].match(/(\d+):(\d+):(\d+)[,.](\d+)/)
    if (!m) continue
    const t = +m[1] * 3600 + +m[2] * 60 + +m[3] + +m[4] / 1000
    const words = normalize(lines.slice(ti + 1).join(' '))
    // A YouTube gépi felirat „gördülő": minden cue megismétli az előző sort — az átfedést levágjuk
    let k = Math.min(words.length, out.length)
    for (; k > 0; k--) {
      let ok = true
      for (let i = 0; i < k; i++) if (out[out.length - k + i].w !== words[i]) { ok = false; break }
      if (ok) break
    }
    for (const w of words.slice(k)) out.push({ w, t })
  }
  return out
}

export function placeChapters(md: string, srt: string, times: string[]): (number | null)[] {
  const blocks = splitTranscriptBlocks(md)
  const clean: { w: string; bi: number }[] = []
  const blockStart: number[] = []
  blocks.forEach((b, bi) => {
    blockStart.push(clean.length)
    for (const w of normalize(b)) clean.push({ w, bi })
  })
  const raw = parseSrt(srt)
  if (!clean.length || !raw.length) return times.map(() => null)

  const gram = (arr: { w: string }[], i: number) => arr.slice(i, i + N).map(x => x.w).join(' ')
  const index = new Map<string, number[]>()
  for (let i = 0; i + N <= clean.length; i++) {
    const g = gram(clean, i)
    if (!index.has(g)) index.set(g, [])
    index.get(g)!.push(i)
  }

  // Szponzor-/támogatói blokkok (félkövérrel kezdődnek) fölé nem teszünk fejezetcímet, hanem utánuk
  const isSpecial = (bi: number) => blocks[bi]?.startsWith('**')

  const result: (number | null)[] = []
  let lastWord = -1
  let lastBlock = -1
  for (const time of times) {
    if (!time) { result.push(null); continue }
    const t = toSeconds(time)
    const ri = raw.findIndex(x => x.t >= t)
    if (t === 0 || ri < 0) {
      result.push(t === 0 && lastBlock < 0 ? (lastBlock = 0) : null)
      continue
    }

    let best: number | null = null
    // Az időbélyeg körüli nyers szavakat keressük a szépített szövegben; több egyező n-gram = megbízható horgony
    for (let j = Math.max(0, ri - 5); j < ri + 60 && j + N <= raw.length && best === null; j++) {
      for (const p of index.get(gram(raw, j)) || []) {
        if (p <= lastWord) continue
        const window = new Set<string>()
        for (let q = p; q < p + 30 && q + N <= clean.length; q++) window.add(gram(clean, q))
        let score = 0
        for (let m = 0; m < 25; m++) if (window.has(gram(raw, j + m))) score++
        if (score >= 4) { best = p; break }
      }
    }
    if (best === null) {
      best = Math.min(clean.length - 1, Math.max(lastWord + 1, Math.round(ri / raw.length * clean.length)))
    }

    // A legközelebbi bekezdéshatárra igazítunk
    const bi = clean[best].bi
    const before = best - blockStart[bi]
    const after = (blockStart[bi + 1] ?? clean.length) - best
    let target = before <= after ? bi : bi + 1
    while (target < blocks.length && isSpecial(target)) target++
    if (target >= blocks.length || target <= lastBlock) {
      result.push(null)
      continue
    }
    result.push(target)
    lastBlock = target
    lastWord = best
  }
  return result
}

export function buildTranscriptChapterMap(): Record<string, (number | null)[]> {
  const map: Record<string, (number | null)[]> = {}
  for (const p of podcasts) {
    const ytId = getYouTubeId(p.yt)
    const mdPath = `public/transcripts_clean/ep${p.id}_${ytId}.md`
    const srtPath = `transcripts_raw/ep${p.id}_${ytId}.hu.srt`
    if (!ytId || !existsSync(mdPath) || !existsSync(srtPath)) continue
    // Ugyanaz a fejezetlista, amit a PodDetailView is használ
    const chapters = p.chapters?.length ? p.chapters : parseTopics(p.topic || '')
    const times = chapters.map(c => c.time || '')
    if (!times.some(Boolean)) continue
    map[p.id] = placeChapters(readFileSync(mdPath, 'utf8'), readFileSync(srtPath, 'utf8'), times)
  }
  return map
}
