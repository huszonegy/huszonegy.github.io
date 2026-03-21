<script setup lang="ts">
import NewsList from '../components/NewsList.vue'
import BeginnerGuide from '../components/BeginnerGuide.vue'
</script>

<template>
  <main>
    <div name="main-inner" class="container">
      <div class="hero mx-auto">
        <div class="hero-inner">
          <div class="hero-logo">
            <img src="/logo/he-logo-circle-320x320-2.png" class="img-fluid" alt="huszonegy" width="120" height="120">
          </div>
          <div class="hero-text">
            <h1 class="hero-title">csak bitcoinról, <span class="hero-accent">magyarul</span></h1>
            <p class="hero-lead">
              Bitcoin tudástár és közösség. Podcast, oktatóanyagok, támogatás — ingyen, egy helyen.
            </p>
          </div>
        </div>
      </div>

      <BeginnerGuide />

      <div class="mt-3">
        <h2 class="section-title mx-4">
          Friss <a href="/hirek">hírek</a>
        </h2>
        <NewsList :max_count="2" />
      </div>
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

  .center {
    text-align: center;
  }
</style>

<style scoped>
  .hero {
    padding: 3rem 1rem 2rem;
    max-width: 780px;
    position: relative;
  }

  .hero-inner {
    display: flex;
    align-items: center;
    gap: 2.8rem;
  }

  .hero-logo {
    flex-shrink: 0;
    filter: drop-shadow(0 0 48px rgba(247, 147, 26, 0.6));
  }

  .hero-text {
    text-align: left;
  }

  .hero-title {
    font-family: inherit;
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.8rem;
    color: #fff;
    letter-spacing: -0.5px;
    white-space: nowrap;
  }

  .hero-accent {
    color: #f7931a;
  }

  .hero-lead {
    font-size: 0.92rem;
    opacity: 0.78;
    line-height: 1.6;
    max-width: 480px;
    margin-bottom: 0.6rem;
  }

  .hero-lead:last-child {
    margin-bottom: 0;
  }

  .section-title {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  .section-title a {
    color: #f7931a;
  }

  @media (max-width: 576px) {
    .hero-inner {
      flex-direction: column;
      text-align: center;
    }
    .hero-text {
      text-align: center;
    }
    .hero-title {
      font-size: 1.8rem;
    }
    .hero-lead {
      max-width: 100%;
    }
  }
</style>
