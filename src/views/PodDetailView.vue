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

const transcriptModules = import.meta.glob('../../public/transcripts_clean/*.md', { 
  query: '?raw', 
  import: 'default' 
});

const fetchTranscript = async () => {
  isLoading.value = true;
  transcriptText.value = "";

  if (!pod.value || !pod.value.yt) {
    isLoading.value = false;
    return;
  }

  try {
    const ytUrl = pod.value.yt;
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = ytUrl.match(regExp);
    const videoId = (match && match[7].length === 11) ? match[7] : null;

    if (!videoId) {
        throw new Error("Érvénytelen YouTube URL");
    }

    const mdKey = `../../public/transcripts_clean/ep${pod.value.id}_${videoId}.md`;

    if (transcriptModules[mdKey]) {
      const rawContent = await (transcriptModules[mdKey] as () => Promise<string>)();
      transcriptText.value = await marked(rawContent);
      isMarkdown.value = true;
    } else {
      transcriptText.value = "Az adás átirata hamarosan elérhető lesz.";
      isMarkdown.value = false;
    }
  } catch (e) {
    console.error("Hiba az átirat betöltésekor:", e);
    transcriptText.value = "Hiba történt a tartalom betöltésekor.";
  } finally {
    isLoading.value = false;
  }
};

// Figyeljük, ha változik az epizód (slug), és töltsük be az átiratot
watch(() => route.params.slug, () => {
  fetchTranscript();
}, { immediate: false });

await fetchTranscript();

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

// Kiszámoljuk a leírást (SEO barát hosszúság)
// A fejezetcímekből építünk értelmes meta description-t, időbélyegek nélkül
const seoDescription = computed(() => {
  if (!pod.value) return 'HUSZONEGY Bitcoin podcast – magyar nyelvű Bitcoin beszélgetések.';
  
  // Fejezetcímekből készítünk összefoglalót
  const chapters = topicList.value;
  if (chapters && chapters.length > 0) {
    const labels = chapters
      .map((ch: { label: string }) => ch.label.replace(/<[^>]*>/g, '').trim()) // HTML tagek eltávolítása
      .filter((l: string) => l.length > 0);
    const joined = `${pod.value.name}. Témák: ${labels.join(', ')}`;
    return joined.length > 155 ? joined.substring(0, 152) + '...' : joined;
  }

  // Fallback: az epizód neve + résztvevők
  const fallback = `${pod.value.name} – HUSZONEGY Bitcoin podcast. Résztvevők: ${pod.value.members.join(', ')}.`;
  return fallback.length > 155 ? fallback.substring(0, 152) + '...' : fallback;
});

// Dátum konvertálása ISO 8601 formátumba a Schema.org számára
// "2026.03.12." → "2026-03-12"
const isoDate = computed(() => {
  if (!pod.value?.date) return '';
  return pod.value.date.replace(/\./g, '-').replace(/-$/, '');
});

// Epizódszám kinyerése az id-ből (pl. "E97" → 97, "R07" → undefined)
const episodeNumber = computed(() => {
  if (!pod.value?.id) return undefined;
  const match = pod.value.id.match(/^E(\d+)$/);
  return match ? parseInt(match[1]) : undefined;
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
    // Alap SEO
    { name: 'description', content: seoDescription },
    { name: 'author', content: computed(() => pod.value?.members.join(', ') || 'HUSZONEGY csapat') },
    { name: 'robots', content: 'index, follow' },

    // Open Graph (Facebook, Discord, Telegram stb.)
    { property: 'og:title', content: computed(() => pod.value ? `${pod.value.name} | HUSZONEGY Bitcoin podcast` : '') },
    { property: 'og:description', content: seoDescription },
    { property: 'og:image', content: computed(() => pod.value ? `https://huszonegy.world${pod.value.img}` : '') },
    { property: 'og:type', content: 'article' },
    { property: 'og:url', content: computed(() => `https://huszonegy.world${route.path}`) },
    { property: 'og:site_name', content: 'HUSZONEGY – csak bitcoinról, magyarul' },
    { property: 'og:locale', content: 'hu_HU' },
    { property: 'article:published_time', content: isoDate },
    { property: 'article:section', content: 'Bitcoin Podcast' },
    { property: 'article:tag', content: 'Bitcoin' },
    { property: 'article:tag', content: 'podcast' },
    { property: 'article:tag', content: 'magyar' },

    // Twitter / X
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@HUSZONEGYworld' },
    { name: 'twitter:title', content: computed(() => pod.value ? `${pod.value.name} | HUSZONEGY` : '') },
    { name: 'twitter:description', content: seoDescription },
    { name: 'twitter:image', content: computed(() => pod.value ? `https://huszonegy.world${pod.value.img}` : '') },
  ],
  link: [
    { rel: 'canonical', href: computed(() => `https://huszonegy.world${route.path}`) }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => {
        if (!pod.value) return '{}';
        
        const ytId = getYouTubeID(pod.value.yt);
        
        const jsonLd: Record<string, unknown> = {
          "@context": "https://schema.org",
          "@type": "PodcastEpisode",
          "name": pod.value.name,
          "description": topicList.value
            .map((ch: { label: string }) => ch.label.replace(/<[^>]*>/g, '').trim())
            .filter((l: string) => l.length > 0)
            .join('. '),
          "datePublished": isoDate.value,
          "inLanguage": "hu",
          "image": `https://huszonegy.world${pod.value.img}`,
          "url": `https://huszonegy.world${route.path}`,
          "partOfSeries": {
            "@type": "PodcastSeries",
            "name": "HUSZONEGY Bitcoin Podcast",
            "url": "https://huszonegy.world/podcast",
            "inLanguage": "hu",
            "description": "A HUSZONEGY magyar bitcoiner közösség heti rendszerességgel megjelenő beszélgetés-sorozata a Bitcoin világáról."
          },
          "publisher": {
            "@type": "Organization",
            "name": "HUSZONEGY",
            "url": "https://huszonegy.world"
          },
          "contributor": pod.value.members.map((name: string) => ({
            "@type": "Person",
            "name": name
          }))
        };

        // Epizódszám, ha van (E-vel kezdődő id-k)
        if (episodeNumber.value) {
          jsonLd["episodeNumber"] = episodeNumber.value;
        }

        // YouTube videó mint associatedMedia
        if (ytId) {
          jsonLd["associatedMedia"] = {
            "@type": "VideoObject",
            "name": pod.value.name,
            "embedUrl": `https://www.youtube.com/embed/${ytId}`,
            "url": pod.value.yt,
            "uploadDate": isoDate.value,
            "thumbnailUrl": `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
          };
        }

        return JSON.stringify(jsonLd);
      })
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
              :src="`https://www.youtube.com/embed/${getYouTubeID(pod.yt)}?enablejsapi=1&fs=1&modestbranding=0&controls=1&rel=0&cc_load_policy=0&origin=${encodeURIComponent(siteOrigin)}`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowfullscreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>

          <div class="description-area mt-5">
            <p class="label mb-4">Az adás tartalmából</p>
            
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
                  <span class="topic-text" v-html="item.label"></span>
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
  text-align: left;
  max-width: 75ch;
  margin-left: auto;
  margin-right: auto;
}

/* --- TIMELINE --- */
.topic-timeline {
  position: relative;
  padding-left: 2.5rem;
  border-left: 1px solid rgba(247, 147, 26, 0.2);
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 75ch;
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

.topic-content { display: flex; flex-direction: column; text-align: left; }
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
  min-width: 300px;
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
  line-height: 1.7; /* Növelt sorköz a jobb olvashatóságért */
  color: #e0e0e0;   /* Tiszta fehér helyett egy nagyon világos szürke (pihentetőbb a szemnek) */
  max-width: 75ch;  /* Az "arany középút" sorhosszúság (kb. 75 karakter) */
  margin-top: 2rem;
}

/* Bekezdések közötti távolság és szöveg elrendezés */
.transcript-content :deep(p) {
  margin-bottom: 1.8rem !important; /* Szellősebb térköz a bekezdések között */
  letter-spacing: 0.01rem;          /* Finom betűköz az olvashatóságért */
}

/* Kiemelések (ha a Markdownban van **bold**) */
.transcript-content :deep(strong) {
  font-weight: 600;
}

/* Időbélyegek vagy nevek formázása (ha sor elején vannak) */
.transcript-content :deep(b), 
.transcript-content :deep(strong) {
  display: inline-block;
  margin-top: 0.5rem;
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
.back-link:hover { opacity: 1; }

/* Mobilos finomítás */
@media (max-width: 768px) {
  .container { padding-left: 0 !important; padding-right: 0 !important; }
  .content-box { padding: 1.5rem 0.5rem; margin-left: 0 !important; margin-right: 0 !important; }
  .p-5 { padding: 1.5rem !important; }
  .btn-group { flex-direction: column; }
}
</style>