<script setup lang="ts">
import { links } from '../data/links'

const sponsors = (links.find(c => c.category === 'Szponzoraink')?.items ?? []) as any[]
</script>

<template>
  <main>
    <div class="support-hero mx-auto">
        <div class="support-hero-inner">
            <div class="support-hero-icon">
                <i class="bi bi-heart"></i>
            </div>
            <div class="support-hero-text">
                <h1 class="support-hero-title">bitcoin <span class="support-hero-accent">támogatás</span></h1>
                <p class="support-hero-lead">
                    Segíts, hogy ősszel is készülhessenek új HUSZONEGY-epizódok!
                </p>
            </div>
        </div>
    </div>
    <div class="container support">

      <div class="support-block py-3">
          <p class="card-text">A HUSZONEGY podcast mögött rengeteg önkéntes munka áll, és a jelenlegi bevételek nem elegendőek a fenntartásához. Július-augusztusban szünetet tartunk, és szeptemberben csak akkor tudunk foglalkozni új epizódok készítésével, ha addigra elég támogatás jön össze.</p>
          <p class="card-text">Minden egyes sat a magyar nyelvű Bitcoin tartalmat erősíti.</p>
      </div>

      <h2 class="support-section-title">Rendszeres támogatás</h2>
      <div class="support-block py-3">
          <p class="card-text">A kiszámítható, havi támogatás biztosítja a podcast valódi fenntarthatóságát.</p>
          <p class="card-text mb-1">Néhány javasolt összeg:</p>
          <ul class="support-tiers">
            <li><b><span class="tier-amount">2 100</span> sat / hó</b></li>
            <li class="support-tier-highlight"><b><span class="tier-amount">21 000</span> sat / hó</b></li>
          </ul>
          <p class="card-text mb-0"><b>Tipp:</b> küldj minden hónap 21-én, és állíts be rá ismétlődő emlékeztetőt!</p>
      </div>

      <div class="row justify-content-center text-center support-qr-row">
        <div class="col-md-6 py-3 px-3">
          <p><b>Lightning cím:</b><br />huszonegy@blink.sv</p>
          <div class="px-3 py-3">
            <img src="/pics/huszonegy-qr.jpg" class="img-fluid" alt="qr kód" width="160" height="160">
          </div>
        </div>
        <div class="col-md-6 py-3 px-3">
          <p><b>On-chain cím:</b><br /><span class="onchain-addr">bc1pzv8afe5l4tv392uhuqasyypl6tpdrc024s9m6ckyw0z8348ukayqudrydd</span></p>
          <div class="px-3 py-3">
            <img src="/pics/huszonegy-qr-onchain.jpg" class="img-fluid" alt="qr kód" width="160" height="160">
          </div>
        </div>
      </div>

      <h2 class="support-section-title">Alkalmi támogatás</h2>
      <p class="support-note py-3">A fenti címekre bármikor, bármekkora összeget küldhetsz.</p>

      <h2 class="support-section-title">Nostr zap</h2>
      <div class="support-block py-3 text-center">
          <p class="card-text">Egy gyors zap a Nostr-on is sokat segít ➡ <a href="https://nostr.hu/huszonegy" target="_blank" rel="noopener">nostr.hu/huszonegy</a></p>
      </div>

      <h2 class="support-section-title">Fountain</h2>
      <div class="support-block py-3">
        <p class="card-text">Töltsd le a <a href="https://fountain.fm/features" target="_blank" rel="noopener">Fountain appot</a>, és <a href="https://fountain.fm/show/gCVs8tyNdgXfJqaRbL3N" target="_blank" rel="noopener">hallgasd benne a podcastunkat</a>,<br />s közben csurgass felénk satokat!</p>
        <div class="px-3 py-3">
          <a href="https://fountain.fm/show/gCVs8tyNdgXfJqaRbL3N" target="_blank" rel="noopener"><img src="/pics/fountain.png" class="img-fluid" alt="Fountain" /></a>
        </div>
      </div>

      <h2 class="support-section-title support-yt-title">YouTube csatornatagság</h2>
      <div class="support-block py-3">
          <p class="card-text">Havi szinten YouTube csatornatagsággal is támogathatod a podcast működését.<br />3 támogatási szint közül választhatsz.</p>
          <p class="card-text mb-0"><a href="https://www.youtube.com/@huszonegy-bitcoin-podcast/join" target="_blank" rel="noopener">Nézd meg a részleteket</a>, és legyél te is csatornatag!</p>
          <a href="https://www.youtube.com/@huszonegy-bitcoin-podcast/join" target="_blank" rel="noopener" class="support-yt-icon py-1" aria-label="Csatlakozz a csatornatagsághoz a YouTube-on">
              <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden="true">
                  <path fill="#ff0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                  <path fill="#fff" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
          </a>
      </div>

      <h2 class="support-section-title">Szponzoráció</h2>
      <div class="support-block py-3">
          <p class="card-text">A HUSZONEGY szponzoraként egy elkötelezett magyar Bitcoin közönség elé viheted a márkád — beolvasással az adásokban és megjelenéssel a honlapon.</p>
          <p class="card-text"><a href="https://t.me/pesz21" target="_blank" rel="noopener">Beszéljük meg Telegramon</a> a részleteket!</p>
          <h3 class="support-subsection-title">Szponzoraink</h3>
          <div class="support-sponsors">
              <div v-for="s in sponsors" :key="s.name" class="support-sponsor">
                  <a :href="s.url" target="_blank" rel="noopener" class="support-sponsor-link" :aria-label="s.name">
                      <img :src="s.image" :alt="s.name + ' banner'" class="support-sponsor-banner" :class="{ 'is-left': s.align === 'left', 'is-zoom': s.zoom }" loading="lazy" />
                  </a>
                  <div class="support-sponsor-info">
                      <a :href="s.url" target="_blank" rel="noopener" class="support-sponsor-name">{{ s.name }}</a>
                      <p class="support-sponsor-desc" v-html="s.text" />
                  </div>
              </div>
          </div>
      </div>

      <p class="support-thanks">Kösz szépen! 🧡</p>

      <div class="bottom-space"><!-- empty --></div>
    </div>
  </main>
</template>

<style scoped>
.support-hero {
    padding: 3.5rem 1rem 1.5rem;
    max-width: 780px;
}

.support-hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.support-hero-icon {
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    color: #fff;
    text-shadow: 0 0 32px rgba(247, 147, 26, 0.8), 0 0 64px rgba(247, 147, 26, 0.6), 0 0 96px rgba(247, 147, 26, 0.4);
}

.support-hero-text {
    text-align: left;
}

.support-hero-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.8rem;
    color: #fff;
    letter-spacing: -0.5px;
}

.support-hero-accent {
    color: #f7931a;
}

.support-hero-lead {
    font-size: 1rem;
    opacity: 0.78;
    line-height: 1.6;
    max-width: 580px;
    margin-bottom: 0.6rem;
}

.support-block {
  margin: 0 auto 1.5rem;
  padding: 0 1rem;
  text-align: center;
}

.card-text {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.support-note {
  max-width: 720px;
  margin: 0 auto 1rem;
  text-align: center;
}

.support-section-title {
    max-width: 720px;
    margin: 3.5rem auto 0.5rem;
    text-align: center;
    font-weight: 700;
}

.support-section-title.support-yt-title {
    margin-top: 2.5rem;
}

.support-subsection-title {
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #fff;
    margin: 3.5rem 0 1.8rem;
}

.support-yt-icon {
    display: inline-block;
    margin-top: 0.6rem;
}

.support-sponsors {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 1.6rem;
    margin: 1.8rem -1.5rem 0;
}

.support-sponsor {
    flex: 1 1 0;
    min-width: 0;
    width: 100%;
    max-width: 420px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(247, 147, 26, 0.22);
    background: rgba(255, 255, 255, 0.03);
    transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
}

.support-sponsor:hover {
    border-color: rgba(247, 147, 26, 0.6);
    background: rgba(247, 147, 26, 0.04);
    transform: translateY(-1px);
}

.support-sponsor-link {
    display: block;
    line-height: 0;
    height: 80px;
    overflow: hidden;
}

.support-sponsor-banner {
    width: 100%;
    height: 80px;
    object-fit: cover;
    object-position: center;
    display: block;
}

.support-sponsor-banner.is-left {
    object-position: left;
}

.support-sponsor-banner.is-zoom {
    transform: scale(1.5);
    transform-origin: left center;
}

.support-sponsor-info {
    padding: 1.5rem 1.6rem 1.6rem;
    text-align: center;
}

.support-sponsor-name {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
    color: #f7931a;
    text-decoration: none;
    margin-bottom: 0.6rem;
}

.support-sponsor:hover .support-sponsor-name {
    color: #ffa733;
}

.support-sponsor-desc {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.25;
    opacity: 0.85;
    text-align: center;
}

.support-sponsor-desc :deep(a) {
    color: #f7931a;
}

.support-sponsor-desc :deep(a) {
    color: #f7931a;
}

.support-thanks {
    max-width: 720px;
    margin: 3.5rem auto 0;
    text-align: center;
    font-size: 1.1rem;
    font-weight: 700;
    color: #fff;
}

.support-qr-row {
    max-width: 720px;
    margin: 0 auto;
}

.onchain-addr {
    font-family: monospace;
    font-size: 0.5rem;
    word-break: break-all;
}

.support-tiers {
    list-style: none;
    padding: 0;
    margin: 0.4rem 0 0.8rem;
    display: inline-block;
    text-align: left;
}

.support-tiers li {
    padding: 0.3rem 0;
}

.tier-amount {
    display: inline-block;
    min-width: 3.5em;
    text-align: right;
    font-variant-numeric: tabular-nums;
}

.support-tier-highlight {
    color: #f7931a;
}

@media (max-width: 576px) {
    .support-hero-inner {
        flex-direction: column;
        text-align: center;
    }
    .support-hero-text {
        text-align: center;
    }
    .support-hero-title {
        font-size: 1.8rem;
    }
    .support-hero-lead {
        max-width: 100%;
    }
    .support-sponsor {
        flex-basis: 100%;
    }
}
</style>
