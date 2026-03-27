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
                    Támogasd önkéntes tevékenységünket satok küldésével!
                </p>
            </div>
        </div>
    </div>
    <div name="main-inner" class="container support">
      <div class="container-sm py-3 px-3 mx-auto text-center" style="min-height: 400px;">
        <p><b>Lightning Network cím:</b><br />huszonegy@blink.sv</p>
        <div class="px-3 py-3">
          <img src="/pics/huszonegy-qr.jpg" class="img-fluid" alt="qr kód" width="300" height="300">
        </div>
      </div>

      <div name="main-inner container">
        <div class="card py-4 px-4 my-3">
            <p class="card-text">Miután egy Lightning tárca qr kód olvasójával beolvasod a fenti kódot, adj meg egy tetszőleges összeget (általában sat-ban kifejezve), opcionálisan üzenetet is adhatsz hozzá, majd kattints a küldésre!</p>
            <p class="card-text">Ha valamilyen oknál fogva a Lightning küldés nem megoldható (bár az alacsonyabb díjak miatt ez az ajánlott), lejjebb található egy on-chain cím is (a magasabb díjak miatt ez pici összegekre nem praktikus).</p>
            <p class="card-text">Bármekkora támogatást hálásan köszönünk, és minden egyes sat-ot magyar nyelvű bitcoin oktatássá konvertálunk.</p>
        </div>
      </div>

      <div class="container-sm py-3 px-3 mx-auto text-center" style="min-height: 400px;">
        <p>
          <b>
            Publikus cím:
          </b>
          <br />
          <span class="small">
            bc1pzv8afe5l4tv392uhuqasyypl6tpdrc024s9m6ckyw0z8348ukayqudrydd
          </span> 
        </p>
        <div class="px-3 py-3">
          <img src="/pics/huszonegy-qr-onchain.jpg" class="img-fluid" alt="qr kód" width="300" height="300">
        </div>
      </div>

      <div class="container-sm py-3 px-3 mx-auto text-center" style="min-height: 400px;">
        <h3>
          <b>
            Töltsd le a Fountain appot, <a href="https://fountain.fm/show/gCVs8tyNdgXfJqaRbL3N">hallgasd abban podcastunkat</a>,<br />s közben csurgass felénk satokat!
          </b>
        </h3>
        <div class="px-3 py-3">
          <a href="https://fountain.fm/features"><img src="/pics/fountain.png" class="img-fluid" alt="Fountain app" /></a>
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
    max-width: 560px;
    margin-bottom: 0.6rem;
}

.support .card {
  max-width: 860px;
  margin: auto;
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
