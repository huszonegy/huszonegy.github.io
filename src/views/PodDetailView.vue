<script setup lang="ts">
import { useRoute } from 'vue-router';
import { get_pod_by_slug } from '../data/podcasts';
import { useHead } from '@vueuse/head';
import { ref, onMounted, computed } from 'vue';

const route = useRoute();
const pod = get_pod_by_slug(route.params.slug as string);
const transcriptText = ref('');
const isLoading = ref(true);

const topicList = computed(() => {
  if (!pod || !pod.topic) return [];
  return pod.topic.split(' - ');
});

const fetchTranscript = async () => {
  if (pod) {
    try {
      // YouTube ID kinyerése és a fájl betöltése
      const videoId = pod.yt.split('v=')[1] || pod.yt.split('/').pop();
      const response = await fetch(`/transcripts_clean/ep${pod.id}_${videoId}.txt`);
      
      if (response.ok) {
        transcriptText.value = await response.text();
      } else {
        transcriptText.value = "Az adás átirata hamarosan elérhető lesz.";
      }
    } catch (e) {
      transcriptText.value = "Hiba történt a tartalom betöltésekor.";
    } finally {
      isLoading.value = false;
    }
  }
};

onMounted(() => {
  fetchTranscript();
});

// Kiszámoljuk a leírást (SEO barát hosszúság)
const seoDescription = computed(() => {
  if (!pod) return '';
  return pod.topic.length > 160 
    ? pod.topic.substring(0, 157) + '...' 
    : pod.topic;
});

// Ez a függvény mondja meg az SSG-nek, hogy mi kerüljön a HTML-be
useHead({
  title: computed(() => pod ? `${pod.id}: ${pod.name} | HUSZONEGY Bitcoin podcast` : 'HUSZONEGY Podcast'),
  meta: [
    { name: 'description', content: seoDescription },
    { name: 'author', content: computed(() => pod?.members.join(', ') || 'HUSZONEGY csapat') },
    // Open Graph (Facebook, Discord stb.)
    { property: 'og:title', content: computed(() => pod?.name || '') },
    { property: 'og:description', content: seoDescription },
    { property: 'og:image', content: computed(() => pod ? `https://huszonegy.world${pod.img}` : '') },
    { property: 'og:type', content: 'video.episode' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: computed(() => pod?.name || '') },
  ],
  link: [
    { rel: 'canonical', href: computed(() => `https://huszonegy.world${route.fullPath}`) }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify({
        "@context": "https://schema.org",
        "@type": "PodcastEpisode",
        "name": pod?.name,
        "description": pod?.topic,
        "datePublished": pod?.date, // Győződj meg róla, hogy ez ISO formátum-e
        "image": `https://huszonegy.world${pod?.img}`,
        "url": `https://huszonegy.world${route.fullPath}`,
        "partOfSeries": {
          "@type": "PodcastSeries",
          "name": "HUSZONEGY Bitcoin Podcast",
          "url": "https://huszonegy.world/podcast"
        }
      }))
    }
  ]
});
</script>

<template>
  <main v-if="pod" class="container py-5 detail-view">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        
        <div class="content-box p-4 p-md-5 text-center">
          
          <h1 class="episode-title mb-3 text-center">
            <span class="ep-id">
              {{ pod.id }}:
            </span> 
            {{ pod.name }}
          </h1>
          
          <div class="meta-info mb-5 text-center">
            {{ pod.date }} | {{ pod.members.join(' & ') }} </div>

          <div class="image-container mb-5 text-center">
            <a :href="pod.yt" target="_blank" title="Megnyitás YouTube-on">
              <img :src="pod.img" :alt="pod.name" class="podcast-img" /> </a>
          </div>

          <div class="action-area d-flex flex-wrap gap-3 justify-content-center mt-5">
            <a :href="pod.yt" target="_blank" class="btn btn-yt">
              <i class="bi bi-youtube me-2"></i> YouTube
            </a> <a :href="pod.fountain" target="_blank" class="btn btn-ft">
              Fountain (Zap!)
            </a>
          </div>

          <div class="description-area text-start mt-5">
            <h2 class="label mb-3">Témák</h2>
            <ul class="topic-list">
              <li v-for="(item, index) in topicList" :key="index" class="topic-item">
                {{ item }} </li>
            </ul>
          </div>

          <section class="transcript-section text-start mt-5">
            <h2 class="label mb-3">Átirat</h2>
            
            <div v-if="isLoading" class="text-center py-5">
              <div class="spinner-border text-warning" role="status"></div>
              <p class="mt-2 text-muted">Szöveg betöltése...</p>
            </div>

            <div v-else class="transcript-content">
              {{ transcriptText }}
            </div>
          </section>
        </div>

        <div class="text-center mt-4">
          <router-link to="/podcast" class="back-link">
            ← Vissza az összes adáshoz
          </router-link>
        </div>

      </div>
    </div>
  </main>
</template>

<style scoped>
.detail-view {
  color: #fff;
}

@keyframes orange-pill-absorb {
  0% {
    border-color: #333;
    box-shadow: inset 0 0 0 0 rgba(247, 147, 26, 0);
  }
  50% { /* Itt tetőzik a fény */
    border-color: #f7931a;
    box-shadow: inset 0 0 50px 15px rgba(247, 147, 26, 0.25);
  }
  100% { /* Itt megint várakozik */
    border-color: #333;
    box-shadow: inset 0 0 0 0 rgba(247, 147, 26, 0);
  }
}

.content-box {
  background: rgba(44, 44, 44, .8) !important;
  border: 1px solid #333;
  border-radius: 4px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  animation: orange-pill-absorb 5s ease-in-out;
}

/* Kisebb és finomabb cím stílus */
.episode-title {
  font-weight: 700;
  font-size: 1.6rem; /* Jelentősen kisebb lett (2.2rem-ről) */
  color: #ffffff;
  line-height: 1.3;
}

/* Az epizód számának kiemelése */
.ep-id {
  color: #f7931a;
  margin-right: 5px;
}

.meta-info {
  color: #888;
  font-size: 0.95rem;
}

.podcast-img {
  width: 260px;
  height: auto;
  border-radius: 4px;
}

.label {
  font-size: 1.1rem;
  color: #f7931a;
  text-transform: uppercase;
  font-weight: 600;
}

/* LISTA JAVÍTÁSOK */
.topic-list {
  list-style-type: none;
  padding-left: 40px; /* Bal oldali padding hozzáadva */
  margin-bottom: 0;
}

.topic-item {
  color: #ccc;
  line-height: 1.5;
  font-size: 1.05rem;
  padding: 2px 0; /* Kisebb köz a pontok között */
  border-bottom: none; /* Vonal eltávolítva */
  display: flex;
  align-items: flex-start;
}

.topic-item::before {
  content: "•";
  color: #f7931a;
  font-weight: bold;
  display: inline-block;
  width: 1.2em;
  flex-shrink: 0;
  margin-left: -1.2em;
}

/* GOMBOK */
.btn {
  padding: 6px 28px;
  font-weight: 600;
  border-radius: 6px; 
  text-decoration: none !important;
  font-size: 0.9rem;
  border: none;
  transition: opacity 0.2s;
  display: inline-flex;
  align-items: center;
}

.btn:hover {
  text-decoration: none !important;
  opacity: 0.85;
}

.btn-yt {
  background-color: #cc0000;
  color: #fff;
}

.btn-ft {
  background-color: #f7931a;
  color: #000;
}

.me-2 {
  margin-right: 0.5rem;
  font-size: 1.8em;
}

.back-link {
  color: #f7931a;
  text-decoration: none;
  font-weight: 500;
  opacity: 0.7;
}

.back-link:hover {
  opacity: 1;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .episode-title { font-size: 1.4rem; }
  .btn { width: 100%; justify-content: center; }
}

.text-orange { color: #ff9900; }

.transcript-content {
  white-space: pre-wrap; /* Megtartja a sortöréseket */
  line-height: 1.8;
  font-size: 1.1rem;
  color: #f0f0f0;
  text-align: justify;
  /* Nincs max-height, így hosszan fut lefelé az oldalon */
}

/* Finom hangsúly a bekezdéseknek, ha az AI már végzett */
.description-area, .transcript-section {
  max-width: 850px; /* Olvashatóbb szélesség a hosszú szöveghez */
  margin: 0 auto;
}

</style>