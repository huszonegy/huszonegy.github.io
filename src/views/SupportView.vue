<script setup lang="ts">
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
    <div name="main-inner" class="container support">

      <div class="support-block py-3">
          <p class="card-text">A HUSZONEGY podcast mögött rengeteg önkéntes munka áll, és a jelenlegi bevételek nem elegendőek a fenntartásához. Július-augusztusban szünetet tartunk, és szeptemberben csak akkor tudunk foglalkozni új epizódok készítésével, ha addigra elég támogatás jön össze.</p>
          <p class="card-text">Bármekkora összeget hálásan köszönünk.</p>
          <p class="card-text">Minden egyes sat a magyar nyelvű Bitcoin-tartalmat erősíti.</p>
      </div>

      <h2 class="support-section-title">Rendszeres támogatás</h2>
      <div class="support-block py-3">
          <p class="card-text">A kiszámítható, havi támogatás biztosítja a podcast valódi fenntarthatóságát.</p>
          <p class="card-text mb-1">Néhány javasolt szint (vagy amennyi jólesik):</p>
          <ul class="support-tiers">
            <li><b><span class="tier-amount">2 100</span> sat / hó</b> <span class="tier-badge">pártoló</span></li>
            <li class="support-tier-highlight"><b><span class="tier-amount">21 000</span> sat / hó</b> <span class="tier-badge">mecénás</span></li>
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
      <p class="support-note py-3">A fenti címekre bármikor, bármekkora összeget küldhetsz — bármennyinek örülünk, de valljuk be, 21 sat egy doboz gyufára sem elég, úgyhogy ha teheted, ne fogd vissza magad — köszi!</p>

      <h2 class="support-section-title">Szponzoráció</h2>
      <div class="support-block py-3">
          <p class="card-text">A HUSZONEGY szponzoraként egy elkötelezett, magyar Bitcoin-közönség elé viheted a márkád — beolvasással az adásokban és megjelenéssel a honlapon.</p>
          <p class="card-text">Jelenlegi szponzoraink: <a href="https://hotelaurora.hu" target="_blank" rel="noopener">Hotel Aurora</a> és <a href="https://hotelatlantis.hu" target="_blank" rel="noopener">Hotel Atlantis</a></p>
          <p class="card-text mb-0"><a href="https://t.me/pesz21" target="_blank" rel="noopener">Beszéljük meg Telegramon</a> a részleteket!</p>
      </div>

      <h2 class="support-section-title">Nostr zap</h2>
      <div class="support-block py-3 text-center">
          <p class="card-text">Egy gyors zap a Nostron is sokat segít ➡ <a href="https://nostr.hu/huszonegy" target="_blank" rel="noopener">nostr.hu/huszonegy</a></p>
      </div>

      <h2 class="support-section-title">Fountain</h2>
      <div class="support-block py-3">
        <p class="card-text">Töltsd le a <a href="https://fountain.fm/features" target="_blank" rel="noopener">Fountain appot</a>, és <a href="https://fountain.fm/show/gCVs8tyNdgXfJqaRbL3N" target="_blank" rel="noopener">hallgasd benne a podcastunkat</a>,<br />s közben csurgass felénk satokat!</p>
        <div class="px-3 py-3">
          <a href="https://fountain.fm/show/gCVs8tyNdgXfJqaRbL3N" target="_blank" rel="noopener"><img src="/pics/fountain.png" class="img-fluid" alt="Fountain" /></a>
        </div>
      </div>

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
  max-width: 720px;
  margin: 0 auto 1.5rem;
  padding: 0 1rem;
  text-align: center;
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

.tier-badge {
    display: inline-block;
    margin-left: 0.5rem;
    padding: 0.1rem 0.7rem;
    font-size: 0.8rem;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    vertical-align: middle;
}

.support-tier-highlight .tier-badge {
    border-color: rgba(247, 147, 26, 0.4);
    background: rgba(247, 147, 26, 0.12);
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
}
</style>
