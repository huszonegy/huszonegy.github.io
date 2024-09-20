<script setup lang="ts">
</script>

<template>
  <main>
    <div name="main-inner" class="container">
      <div class="container-sm py-3 px-3 mx-auto text-center" style="min-height: 400px;">
        <h1 class="px-3 py-3">Támogasd tevékenységünket!</h1>
        <p><b>Lightning Network cím:</b><br />huszonegy@blink.sv</p>
        <div class="px-3 py-3">
          <img src="/pics/huszonegy-qr.jpg" class="img-fluid" alt="qr kód" width="300" height="300">
        </div>
      </div>

      <div name="main-inner container">
        <div class="card py-4 px-4 my-3" style="max-width: 800px;">
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
