<script setup lang="ts">
import { useRoute } from 'vue-router';
import { get_pod_by_slug, parseTopics } from '../data/podcasts';
import { useHead } from '@vueuse/head';
import { ref, onMounted, computed } from 'vue';
import { marked } from 'marked';
import { watch } from 'vue';

marked.use({
  renderer: {
    link({ href, text }) {
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
    }
  }
});

const route = useRoute();
const pod = computed(() => get_pod_by_slug(route.params.slug as string));
const transcriptText = ref('');
const isLoading = ref(true);
const isMarkdown = ref(false);

const topicList = computed(() => {
  if (!pod.value) return [];
  // Ha van chapters, használjuk azt, ha nincs, marad a régi topic-szétszedés
  return (pod.value.chapters && pod.value.chapters.length > 0) 
    ? pod.value.chapters 
    : parseTopics(pod.value.topic || '');
});

const fetchTranscript = async () => {
  // 1. Mindig állítsuk alaphelyzetbe az elején
  isLoading.value = true;
  transcriptText.value = "";

  // 2. Ha nincs meg az epizód, állítsuk le a töltést és lépjünk ki
  if (!pod.value || !pod.value.yt) {
    isLoading.value = false;
    return;
  }

  try {
    const videoId = pod.value.yt.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)[2]?.split(/[^0-9a-z_-]/i)[0];
    const basePath = `/transcripts_clean/ep${pod.value.id}_${videoId}`;
    
    let response = await fetch(`${basePath}.md`);
      if (response.ok) {
        const mdText = await response.text();
        transcriptText.value = await marked(mdText);
        isMarkdown.value = true;
      } else {
        response = await fetch(`${basePath}.txt`);
        if (response.ok) {
          transcriptText.value = await response.text();
          isMarkdown.value = false;
        } else {
          transcriptText.value = "Az adás átirata hamarosan elérhető lesz.";
        }
      }
  } catch (e) {
    transcriptText.value = "Hiba történt a tartalom betöltésekor.";
  } finally {
    // 3. Ez kerüljön legkívülre: mindenképpen állítsuk le a töltést!
    isLoading.value = false;
  }
};

// Figyeljük, ha változik az epizód (slug), és töltsük be az átiratot
watch(() => route.params.slug, () => {
  fetchTranscript();
}, { immediate: true }); // Az immediate váltja ki a legelső betöltést is

// Segédfüggvény: "05:12" formátum átalakítása másodpercekké
const timeToSeconds = (timeStr: string) => {
  const parts = timeStr.split(':').map(Number);
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return parts[0] * 60 + parts[1];
};

const seekTo = (timeStr: string) => {
  // 1. Átváltjuk az "05:12" formátumot másodpercekre
  const parts = timeStr.split(':').map(Number);
  let seconds = 0;
  if (parts.length === 3) {
    seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else {
    seconds = parts[0] * 60 + parts[1];
  }

  // 2. Megkeressük az iframe-et
  const iframe = document.getElementById('yt-player') as HTMLIFrameElement;
  
  if (iframe && iframe.contentWindow) {
    // 3. Küldünk egy "postMessage" üzenetet a YouTube lejátszónak
    // Ez a natív módja a seek parancsnak anélkül, hogy újratöltenénk az iframe-et
    iframe.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: 'seekTo',
      args: [seconds, true]
    }), '*');

    // Mobil trükk: néha kell egy 'playVideo' parancs is utána, ha megállna a lejátszó
    iframe.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: 'playVideo'
    }), '*');
  }
};

onMounted(() => {
  fetchTranscript();
});

// Kiszámoljuk a leírást (SEO barát hosszúság)
const seoDescription = computed(() => {
  if (!pod.value) return '';
  return pod.value.topic.length > 160 
    ? pod.value.topic.substring(0, 157) + '...' 
    : pod.value.topic;
});

const getYouTubeID = (url: string) => {
  if (!url) return '';
  // Ez a Regex kiszedi az ID-t a rövidített és a hosszú linkekből is
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : url;
};

const siteOrigin = typeof window !== 'undefined' ? window.location.origin : '';

// Ez a függvény mondja meg az SSG-nek, hogy mi kerüljön a HTML-be
useHead({
  title: computed(() => pod.value ? `${pod.value.id}: ${pod.value.name} | HUSZONEGY Bitcoin podcast` : 'HUSZONEGY Podcast'),
  meta: [
    { name: 'description', content: seoDescription },
    { name: 'author', content: computed(() => pod.value?.members.join(', ') || 'HUSZONEGY csapat') },
    // Open Graph (Facebook, Discord stb.)
    { property: 'og:title', content: computed(() => pod.value?.name || '') },
    { property: 'og:description', content: seoDescription },
    { property: 'og:image', content: computed(() => pod.value ? `https://huszonegy.world${pod.value.img}` : '') },
    { property: 'og:type', content: 'video.episode' },
    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: computed(() => pod.value?.name || '') },
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
        "name": pod.value?.name,
        "description": pod.value?.topic,
        "datePublished": pod.value?.date, // Győződj meg róla, hogy ez ISO formátum-e
        "image": `https://huszonegy.world${pod.value?.img}`,
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
        
        <div class="content-box p-5 text-center">
          
          <h1 class="episode-title mb-3 text-center">
            <span class="ep-id">
              {{ pod.id }}
            </span> 
            {{ pod.name }}
          </h1>
          
          <div class="meta-info mt-3 mb-3 text-center">
            <span class="date">
              {{ pod.date }}
            </span>
            {{ pod.members.join(' · ') }}
          </div>

          <div class="video-wrapper">
            <iframe 
              id="yt-player"
              :src="`https://www.youtube.com/embed/${getYouTubeID(pod.yt)}?enablejsapi=1&fs=1&origin=${encodeURIComponent(siteOrigin)}`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowfullscreen
            ></iframe>
          </div>

          <div class="description-area text-start mt-5">
            <p class="label mb-4 text-orange">Az adás tartalmából</p>
            
            <div class="topic-timeline">
              <div 
                v-for="(item, index) in topicList" 
                :key="index" 
                class="topic-item"
                :class="{ 'clickable': item.time }"
                @click="item.time ? seekTo(item.time) : null"
              >
                <div class="topic-content">
                  <span v-if="item.time" class="topic-time">{{ item.time }}</span>
                  <span class="topic-text">{{ item.label }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="action-area d-flex flex-wrap gap-3 justify-content-center mt-5">
            <a :href="pod.yt" target="_blank" class="btn btn-yt">
              <i class="bi bi-youtube me-2"></i> YouTube
            </a> <a :href="pod.fountain" target="_blank" class="btn btn-ft">
              <i class="bi bi-mic me-2"></i> Fountain
            </a>
          </div>

          <section class="transcript-section text-start mt-5">
            <p class="label mb-4">Átirat</p>
            
            <div v-if="isLoading" class="text-center py-5">
              <div class="spinner-border text-warning" role="status"></div>
              <p class="mt-2 text-muted">Szöveg betöltése...</p>
            </div>

            <div v-else-if="isMarkdown" class="transcript-content transcript-markdown" v-html="transcriptText"></div>

            <div v-else class="transcript-content">
              {{ transcriptText }}
            </div>
          </section>
        </div>

        <div class="text-center mt-5 mb-4">
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

/* --- ANIMÁCIÓK --- */
@keyframes orange-pill-absorb {
  0% { border-color: #333; box-shadow: inset 0 0 0 0 rgba(247, 147, 26, 0); }
  50% { border-color: #f7931a; box-shadow: inset 0 0 50px 15px rgba(247, 147, 26, 0.25); }
  100% { border-color: #333; box-shadow: inset 0 0 0 0 rgba(247, 147, 26, 0); }
}

/* Finom pulzálás a pöttyöknek */
@keyframes pulse-dot {
  0% { transform: translateX(-50%) scale(1); opacity: 0.4; }
  50% { transform: translateX(-50%) scale(1.2); opacity: 0.7; }
  100% { transform: translateX(-50%) scale(1); opacity: 0.4; }
}

/* --- KONTÉNER --- */
.content-box {
  background: rgba(44, 44, 44, .8) !important;
  border: 1px solid #333;
  border-radius: 4px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  animation: orange-pill-absorb 5s ease-in-out;
  /* Megemelt oldalsó padding, hogy ne szaladjon szélre a tartalom */
  padding: 2.5rem 3.5rem; 
  max-width: 1000px;
  margin: 0 auto;
}

/* --- SZÖVEGES SZEKCIÓK IGAZÍTÁSA --- */
/* Ez biztosítja, hogy a szövegek középen maradjanak és ne legyenek túl szélesek */
.episode-header, .topic-timeline, .transcript-content, .btn-group {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

/* --- FEJLÉC --- */
.episode-title {
  font-weight: 800;
  font-size: 1.8rem;
  color: #ffffff;
  line-height: 1.3;
  margin-top: 0.5rem;
}

.ep-id {
  color: #f7931a;
  margin-bottom: 5px;
  display: block;
  font-size: 0.9rem;
  font-weight: 400;
  font-family: 'JetBrains Mono', monospace;
}

.meta-info {
  color: #999;
  font-size: 0.95rem;
  opacity: 0.7;
  margin-bottom: 1.5rem;
}

.date {
  color: orange;
}

.label {
  font-size: 1.1rem;
  color: #f7931a;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: block;
}

/* --- TIMELINE --- */
.topic-timeline {
  position: relative;
  padding-left: 2.5rem;
  border-left: 1px solid rgba(247, 147, 26, 0.2);
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.topic-item {
  position: relative;
  margin-bottom: 1.2rem;
}

.topic-item::before {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  left: -2.5rem; 
  transform: translateX(-50%);
  top: 0.6rem; 
  background-color: #f7931a;
  border-radius: 50%;
  z-index: 2;
  /* Pulzálás bekapcsolása */
  animation: pulse-dot 3s infinite ease-in-out;
}

.topic-item.clickable { cursor: pointer; }

/* Ha rámutatunk, fixen világít és megáll a pulzálás */
.topic-item.clickable:hover::before {
  animation: none;
  opacity: 1;
  transform: translateX(-50%) scale(1.3);
}

.topic-content { display: flex; flex-direction: column; }
.topic-time { font-family: 'JetBrains Mono', monospace; color: #888; font-size: 0.85rem; font-weight: 400; margin-bottom: 2px; }
.topic-text { color: #ccc; font-size: 1rem; line-height: 1.4; transition: color 0.2s ease; }

@media (min-width: 768px) {
  .topic-content { flex-direction: row; align-items: baseline; gap: 15px; }
  .topic-time { min-width: 55px; flex-shrink: 0; }
  .topic-item.clickable:hover .topic-text, .topic-item.clickable:hover .topic-time { color: #f7931a; }
}

/* --- VIDEÓ --- */
.video-wrapper {
  width: 100%;
  max-width: 700px;
  margin: 2.5rem auto;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.05);
}

.video-wrapper iframe { width: 100%; height: 100%; }

/* --- ÁTIRAT --- */
.transcript-content {
  white-space: normal;
  line-height: 1.5; /* Kicsit szorosabb sorok */
  text-align: left;
}

/* A :deep() megmondja a Vue-nak, hogy nézzen be a v-html által generált elemek közé is */
.transcript-content :deep(p) {
  margin-bottom: 1.5rem !important;
  margin-top: 0 !important;
  line-height: 1.5;
}

/* Ha vannak üres bekezdéseid, azokat is így tudod elrejteni */
.transcript-content :deep(p:empty),
.transcript-content :deep(p:has(br:only-child)) {
  display: none !important;
}

.transcript-content :deep(hr) {
  opacity: 0;
  height: 1rem;
}

.transcript-markdown a { color: #f7931a; text-decoration: underline; }

/* --- GOMBOK --- */
.btn-group {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 2rem 0;
}

.btn {
  padding: 8px 24px;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none !important;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s;
}

.btn-yt { background-color: #cc0000; color: #fff; }
.btn-ft { background-color: #f7931a; color: #000; }
.btn:hover { opacity: 0.85; transform: translateY(-1px); }

.back-link { color: #f7931a; font-size: 0.9rem; opacity: 0.7; text-decoration: none; }
.back-link:hover { opacity: 1; text-decoration: underline; }

/* Mobilos finomítás */
@media (max-width: 768px) {
  .content-box { padding: 1.5rem 1.2rem; }
  .btn-group { flex-direction: column; }
}
</style>