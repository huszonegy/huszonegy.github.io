import { existsSync, readFileSync } from 'node:fs'
import { podcasts, getYouTubeId } from '../src/data/podcasts'

/**
 * Build-időben kiszámolja epizódonként a „Kapcsolódó adások” blokk 3 epizódját.
 *
 * Szöveghasonlóság (TF-IDF + koszinusz): a cím, a bevezető és a fejezetcímek nagyobb súllyal, az átirat
 * normál súllyal számít. A magyar toldalékok miatt a szavakat ékezet nélkül, az első 6 betűjükre vágjuk
 * (durva szótövezés: „bitcoint”, „bitcoinod” → „bitcoi”; „kulcsot”, „kulcsok” → „kulcso”).
 * A nagyon gyakori szavak (az epizódok több mint 40%-ában szerepelnek: töltelékszavak, műsorvezetők neve)
 * és az egyetlen epizódban előforduló szavak kimaradnak.
 *
 * Az előző/következő epizód kimarad, mert arra az oldalalji navigáció már linkel.
 * Kézi felülírás: a podcasts.ts-ben egy epizód `related: ["E096", "E101"]` mezője pontosan ezeket mutatja.
 *
 * Kimenet: epizód-id → kapcsolódó epizód-id-k (legjobb elöl).
 */

const COUNT = 3
const STEM = 6
const META_WEIGHT = 5
const MAX_DF = 0.4

const tokens = (s: string) =>
  s.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/\]\([^)]*\)/g, ' ')        // markdown-linkek URL-je
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .split(/[^a-z0-9]+/)
    .filter(w => w.length >= 4 && !/^\d+$/.test(w))
    .map(w => w.slice(0, STEM))

function transcriptOf(p: { id: string; yt?: string }): string {
  const ytId = p.yt ? getYouTubeId(p.yt) : ''
  if (!ytId) return ''
  for (const ext of ['md', 'txt']) {
    const path = `public/transcripts_clean/ep${p.id}_${ytId}.${ext}`
    if (existsSync(path)) return readFileSync(path, 'utf-8')
  }
  return ''
}

export function buildRelatedPodsMap(): Record<string, string[]> {
  const docs = podcasts.map(p => {
    const meta = [p.name, p.intro ?? '', ...(p.chapters ?? []).map(c => c.label), p.chapters?.length ? '' : (p.topic ?? '')].join(' ')
    const tf = new Map<string, number>()
    for (const w of tokens(meta)) tf.set(w, (tf.get(w) ?? 0) + META_WEIGHT)
    for (const w of tokens(transcriptOf(p))) tf.set(w, (tf.get(w) ?? 0) + 1)
    return tf
  })

  const df = new Map<string, number>()
  for (const tf of docs) for (const w of tf.keys()) df.set(w, (df.get(w) ?? 0) + 1)
  const n = docs.length

  const vectors = docs.map(tf => {
    const v = new Map<string, number>()
    let norm = 0
    for (const [w, c] of tf) {
      const d = df.get(w)!
      if (d < 2 || d / n > MAX_DF) continue
      const x = (1 + Math.log(c)) * Math.log(n / d)
      v.set(w, x)
      norm += x * x
    }
    norm = Math.sqrt(norm) || 1
    for (const [w, x] of v) v.set(w, x / norm)
    return v
  })

  const cos = (a: Map<string, number>, b: Map<string, number>) => {
    if (a.size > b.size) [a, b] = [b, a]
    let s = 0
    for (const [w, x] of a) s += x * (b.get(w) ?? 0)
    return s
  }

  const ids = new Set(podcasts.map(p => p.id))
  const result: Record<string, string[]> = {}
  podcasts.forEach((p, i) => {
    const manual = (p as { related?: string[] }).related
    if (manual?.length) {
      const unknown = manual.filter(id => !ids.has(id))
      if (unknown.length) throw new Error(`podcasts.ts: ${p.id} related mezőjében ismeretlen epizód: ${unknown.join(', ')}`)
      result[p.id] = manual
      return
    }
    // A podcasts tömb legújabb elöl: i-1 a következő, i+1 az előző epizód
    const skip = new Set([i, i - 1, i + 1])
    result[p.id] = podcasts
      .map((q, j) => ({ id: q.id, j, s: skip.has(j) ? -1 : cos(vectors[i], vectors[j]) }))
      .filter(x => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, COUNT)
      .map(x => x.id)
  })
  return result
}
