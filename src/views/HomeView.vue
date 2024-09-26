<script setup lang="ts">
import ArticlesList from '../components/ArticlesList.vue'
import NewsList from '../components/NewsList.vue'
</script>

<template>
  <main>
    <div name="main-inner" class="container">
      <div class="container-sm py-3 px-3 mx-auto text-center" style="min-height: 300px;">
        <div class="px-3 py-3">
          <img src="/logo/he-logo-circle-320x320.png" class="img-fluid" alt="huszonegy" width="200" height="200">
        </div>
        <h1 class="px-3 py-3">csak bitcoinról, magyarul</h1>
      </div>

      <div class="row">
        <div class="col home-col">
          <h2 class="fs-5 mx-4 no-response">
            &nbsp;
          </h2>
          <div class="card px-4 py-4 my-3">
            <p class="card-text">
              Ezen honlapot magyar bitcoinerek maréknyi csoportja fejleszti önként. A honlap egyrészt kapcsolódási és közös megnyilvánulási pontként funkcionál, másrészt a bitcoin irányába nyitott érdeklődőket minőségi magyar nyelvű információ csokorral hivatott szolgálni.
            </p>
            <p class="card-text">
              A
              <a href="https://t.me/huszonegy" target="_blank">
                HUSZONEGY telegram csoport
              </a>
              nyitott, bárki csatlakozhat, akit érdekel a Bitcoinnal kapcsolatos magyar nyelvű kommunikáció. Egyetlen szabályunk, hogy a csoporton belül csak Bitcoinról kommunikálunk magyar nyelven.
            </p>
            <center>
              <a href="https://t.me/huszonegy" target="_blank">
                <button type="button" class="btn btn-custom">Csatlakozz a csoporthoz</button>
              </a>
            </center>
          </div>
        </div>

        <div class="col home-col">
          <h2 class="fs-5 mx-4">
            Friss <a href="/hirek">hírek</a>
          </h2>
          <NewsList :max_count = 2 />
        </div>
      </div>

      <h2 class="fs-5 mx-4">
        Friss <a href="/cikkek">cikkek</a>
      </h2>
      <ArticlesList :max_count = 4 />
    </div>
    <div class="bottom-space no-response"><!-- empty --></div>
  </main>
</template>

<style>
  .card {
    background: rgba(44, 44, 44, .8) !important;
  }

  .row {
    margin-left: -0.25rem;
  }

</style>