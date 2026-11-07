#!/usr/bin/env node
// Fogalomlinkek beírása az epizódátiratokba (public/transcripts_clean/*.md) az inflacio.eu cikkeire.
//
// Használat:
//   node scripts/conceptLinks.mjs E123 E124       # csak ezek az epizódok (új epizódnál ez a szokásos)
//   node scripts/conceptLinks.mjs --all           # az összes átirat
//   --dry-run                                     # csak kiírja, mit linkelne, nem módosít
//   --report f.tsv                                # TSV-lista a beírt linkekről (epizód, fogalom, horgony, kontextus)
//
// Szabályok (fogalomlista: scripts/inflacio-fogalmak.json):
//  - csak az átirat törzsszövegében; kimarad a meglévő link, kód, HTML, címsor és a sablonblokk
//    (Relai, szállodák, bitcoinmentor.hu, Firefish, BudaBit, huszonegy.world-ajánló, támogatói felhívás);
//  - fogalmanként csak az első előfordulás; epizódonként legfeljebb 4 inflacio.eu-cikklink, a meglévő
//    (kézi vagy korábban beírt) linkeket is beleszámítva; egy céloldalra legfeljebb egy link;
//  - több jelölt esetén a `priority` dönt (kisebb = előbb);
//  - a horgonyszöveg az eredeti szóalak.
// Kivételek (scripts/inflacio-fogalmak-kivetelek.json): egy epizódban az adott fogalom nem linkelhető
// ott, ahol a találat a megadott szövegrészletbe esik (pl. „seed node”). Ilyenkor a fogalom következő
// előfordulása kapja a linket, vagy ha nincs, a következő prioritású fogalom.
// Újrafuttatható: a már linkelt fogalmakat és céloldalakat nem linkeli újra. A régi epizódokon viszont
// NE futtasd újra --all-lal: ha egy téves gépi linket kézzel kivettünk, a szkript a fogalom következő
// előfordulását (vagy egy másik fogalmat) linkelné be helyette.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'public/transcripts_clean');
const MAX_LINKS = 4;

const CONCEPTS = JSON.parse(readFileSync(join(ROOT, 'scripts/inflacio-fogalmak.json'), 'utf8'))
  .sort((a, b) => a.priority - b.priority)
  .map(c => ({ ...c, re: new RegExp(c.pattern, c.flags.includes('g') ? c.flags : c.flags + 'g') }));

const TEMPLATE_HREFS = [
  /^https?:\/\/bitcoinmentor\.hu\/?$/,
  /^https?:\/\/bitcoinmentor\.hu\/relai\/?$/,
  /^https?:\/\/bitcoinmentor\.hu\/bitcoin-blog\/?$/,
  /^https?:\/\/hotelaurora\.hu/,
  /^https?:\/\/hotelatlantis\.hu/,
  /^https?:\/\/(?:app\.)?firefish\.io/,
  /^https?:\/\/budabit\.club\/?$/,
  /^https?:\/\/huszonegy\.world\/?$/,
  /^https?:\/\/huszonegy\.world\/tamogatas\/?$/,
];

const LINK_RE = /\[([^\]]*)\]\(([^)\s]*)[^)]*\)/g;
// Ezekben a szakaszokban nem keresünk: markdown-link, kód, HTML-tag, csupasz URL
const MASK_RE = /\[[^\]]*\]\([^)]*\)|`[^`]*`|<[^>]+>|https?:\/\/\S+/g;

const inflacioArticleUrl = href => {
  const m = /^https?:\/\/(?:www\.)?inflacio\.eu(\/[^?#]*)?/.exec(href);
  if (!m || !m[1] || m[1] === '/') return null;
  return 'https://inflacio.eu' + (m[1].endsWith('/') ? m[1] : m[1] + '/');
};

const hasTemplateLink = block => [...block.matchAll(LINK_RE)].some(m => TEMPLATE_HREFS.some(re => re.test(m[2])));
const isFullyBold = block => /^\*\*[^\n]*\*\*$/.test(block.trim());
const isHeading = block => /^#{1,6}\s/.test(block.trim());

const EXCEPTIONS = JSON.parse(readFileSync(join(ROOT, 'scripts/inflacio-fogalmak-kivetelek.json'), 'utf8'));

/** Igaz, ha a [start, end) találat a kivételként megadott szövegrészlet valamelyik előfordulásán belül van. */
const isException = (exceptions, term, text, start, end) =>
  exceptions.some(x => {
    if (x.term !== term) return false;
    for (let i = text.indexOf(x.text); i >= 0; i = text.indexOf(x.text, i + 1)) {
      if (i <= start && end <= i + x.text.length) return true;
    }
    return false;
  });

function processTranscript(md, exceptions = []) {
  // Bekezdések az elválasztó üres sorokkal együtt, hogy a fájl bájtra pontosan visszaálljon
  const parts = md.split(/(\n\s*\n)/);
  const blocks = parts.map((text, i) => ({ text, sep: i % 2 === 1 }));

  const used = new Set();
  for (const m of md.matchAll(LINK_RE)) {
    const u = inflacioArticleUrl(m[2]);
    if (u) used.add(u);
  }
  let budget = MAX_LINKS - used.size;
  const added = [];
  if (budget <= 0) return { md, added };

  // Sablonblokkok: egymást követő bekezdések, mind sablonlinkes vagy teljesen félkövér, és legalább egy sablonlinkes
  let run = [], runTpl = false;
  const flush = () => { if (runTpl) run.forEach(b => (b.skip = true)); run = []; runTpl = false; };
  for (const b of blocks) {
    if (b.sep || !b.text.trim()) continue;
    const tpl = hasTemplateLink(b.text);
    if (tpl || isFullyBold(b.text)) { run.push(b); runTpl ||= tpl; } else flush();
    if (isHeading(b.text)) b.skip = true;
  }
  flush();

  const candidates = blocks.filter(b => !b.sep && !b.skip);
  for (const b of candidates) {
    b.masked = b.text.replace(MASK_RE, s => '\u0000'.repeat(s.length));
    b.spans = [];
  }

  for (const c of CONCEPTS) {
    if (budget <= 0) break;
    if (used.has(c.url)) continue;
    found: for (const b of candidates) {
      c.re.lastIndex = 0;
      let m;
      while ((m = c.re.exec(b.masked)) !== null) {
        if (!m[0].length) { c.re.lastIndex++; continue; }
        const start = m.index, end = start + m[0].length;
        if (m[0].includes('\u0000') || b.spans.some(s => start < s.end && s.start < end)) continue;
        if (isException(exceptions, c.term, b.text, start, end)) continue;
        b.spans.push({ start, end, url: c.url, term: c.term });
        used.add(c.url);
        budget--;
        break found;
      }
    }
  }

  for (const b of candidates) {
    if (!b.spans.length) continue;
    let out = b.text;
    for (const s of b.spans.sort((x, y) => y.start - x.start)) {
      const word = out.slice(s.start, s.end);
      const ctx = b.text.slice(Math.max(0, s.start - 60), s.end + 40).replace(/\s+/g, ' ');
      added.push({ term: s.term, word, url: s.url, ctx, pos: s.start + blocks.indexOf(b) });
      out = out.slice(0, s.start) + `[${word}](${s.url})` + out.slice(s.end);
    }
    b.text = out;
  }
  added.sort((x, y) => x.pos - y.pos);
  return { md: blocks.map(b => b.text).join(''), added };
}

// --- CLI ---
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const reportIdx = args.indexOf('--report');
const reportFile = reportIdx >= 0 ? args[reportIdx + 1] : null;
const epFilter = new Set(args.filter((a, i) => !a.startsWith('--') && !(reportIdx >= 0 && i === reportIdx + 1)));

if (!epFilter.size && !args.includes('--all')) {
  console.error('Adj meg epizódazonosítót (pl. E123), vagy --all az összes átirathoz.');
  process.exit(1);
}

const files = readdirSync(DIR).filter(f => f.endsWith('.md')).sort();
const report = [['epizod', 'fogalom', 'horgony', 'url', 'kontextus']];
let changed = 0, linksAdded = 0;
for (const f of files) {
  const ep = /^ep([^_]+)_/.exec(f)?.[1];
  if (epFilter.size && !epFilter.has(ep)) continue;
  const path = join(DIR, f);
  const src = readFileSync(path, 'utf8');
  const { md, added } = processTranscript(src, EXCEPTIONS.filter(x => x.episode === ep));
  if (!added.length) continue;
  changed++;
  linksAdded += added.length;
  for (const a of added) report.push([ep, a.term, a.word, a.url, a.ctx]);
  if (dryRun) {
    console.log(`${ep}: ${added.map(a => `${a.word} → ${a.url.replace('https://inflacio.eu', '')}`).join(', ')}`);
  } else {
    writeFileSync(path, md);
  }
}
if (reportFile) writeFileSync(reportFile, report.map(r => r.join('\t')).join('\n') + '\n');
console.log(`${dryRun ? '[dry-run] ' : ''}${changed} átirat, ${linksAdded} új link.`);
