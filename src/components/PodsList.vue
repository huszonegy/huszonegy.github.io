<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { get_pods, slugify } from '../data/podcasts'
import { useRouter } from 'vue-router';

const router = useRouter();

// 1. Minden epizód betöltése a kereséshez (itt a max_count legyen magas, pl. 1000)
const allPods = get_pods(1000)

const searchInput = ref<HTMLInputElement | null>(null)
const isSearchOpen = ref(false)

const goToPodcast = (pod: any) => {
  if (!pod) return;
  const slug = slugify(pod.name);
  router.push(`/podcast/${slug}`);
  isSearchOpen.value = false;
  searchQuery.value = ''; // Keresés ürítése navigáció után
};

const openSearch = () => {
  isSearchOpen.value = true;
  
  // A 50-100ms-os késleltetés általában megoldja a renderelési csúszást
  setTimeout(() => {
    searchInput.value?.focus();
  }, 50);
};
const searchQuery = ref('')

// Ékezet-független keresés: "penz" → "pénz", "Beres" → "Béres" stb.
const norm = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

// 2. Keresési logika
const filteredResults = computed(() => {
  const query = norm(searchQuery.value.trim());
  if (!query) return [];

  return allPods.filter(pod => {
    if (searchMode.value === 'meta') {
      // 1. Keresés a címben
      const nameMatch = norm(pod.name).includes(query);
      
      // 2. Keresés az ID-ban (már E96, R05-ként is megtalálja!)
      const idMatch = norm(pod.id).includes(query);
      
      // 3. Keresés a RÉSZTVEVŐK között (ez jött vissza)
      const membersMatch = pod.members?.some(m => norm(m).includes(query));
      
      // 4. Keresés a FEJEZETEK-ben
      const chaptersMatch = pod.chapters?.some(c => norm(c.label).includes(query));

      return nameMatch || idMatch || membersMatch || chaptersMatch;
    } else {
      // Keresés az ÁTIRAT-ban (ékezet-független)
      return transcriptsNorm.value[pod.id]?.includes(query);
    }
  });
});

// Megmutatja, miért találta meg a meta keresés (melyik mezőben volt az egyezés)
const getMatchReason = (pod: any) => {
  const query = norm(searchQuery.value.trim());
  if (!query) return null;

  // Sorszám — nem kell külön mutatni, az úgyis látszik
  if (norm(pod.id).includes(query)) return null;
  // Cím — szintén látszik a kártyán
  if (norm(pod.name).includes(query)) return null;

  // Résztvevő — kiemeljük a találatot
  const matchedMember = pod.members?.find((m: string) => norm(m).includes(query));
  if (matchedMember) return { html: getHighlightedSnippet(matchedMember, searchQuery.value) };

  // Fejezetcím — megvágjuk és kiemeljük a találatot
  const matchedChapter = pod.chapters?.find((c: { label: string }) => norm(c.label).includes(query));
  if (matchedChapter) {
    return { html: getHighlightedSnippet(matchedChapter.label, searchQuery.value) };
  }

  return null;
};

// 3. Billentyűkombináció (CMD/CTRL + K)
const handleShortcut = (e: KeyboardEvent) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    isSearchOpen.value = !isSearchOpen.value
  }
  if (e.key === 'Escape') {
    isSearchOpen.value = false;
    searchQuery.value = ''; // Keresés törlése bezáráskor
  }
}

const selectedIndex = ref(0);

// Ha megváltozik a keresőkifejezés, ugorjunk vissza az első találatra
watch(searchQuery, () => {
  selectedIndex.value = 0;
});

const handleKeydown = (e: KeyboardEvent) => {
  if (!filteredResults.value.length) return;

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    selectedIndex.value = (selectedIndex.value + 1) % filteredResults.value.length;
  } 
  else if (e.key === 'ArrowUp') {
    e.preventDefault();
    selectedIndex.value = (selectedIndex.value - 1 + filteredResults.value.length) % filteredResults.value.length;
  } 
  else if (e.key === 'Enter') {
    const selectedPod = filteredResults.value[selectedIndex.value];
    if (selectedPod) {
      // Itt hívd meg a navigációs függvényedet (pl. router.push)
      goToPodcast(selectedPod);
      isSearchOpen.value = false;
    }
  }
};

// 'meta' = sorszám, cím, fejezet | 'full' = átirat
const searchMode = ref<'meta' | 'full'>('meta');

// Ha módot váltunk, érdemes újraindítani a kijelölést
watch(searchMode, () => {
  selectedIndex.value = 0;
});

const transcripts = ref<Record<string, string>>({}); // ID -> Szöveg map (eredeti, kisbetűs)
const transcriptsNorm = ref<Record<string, string>>({}); // ID -> Ékezet nélküli verzió a kereséshez
const isLoadingTranscripts = ref(false);

// Ez a függvény letölti az összes átiratot a GitHub-os mappából
const loadTranscripts = async () => {
  if (Object.keys(transcripts.value).length > 0) return; // Már be vannak töltve
  
  isLoadingTranscripts.value = true;
  
  // Végigmegyünk az összes pod-on és megpróbáljuk letölteni az md-t
  const promises = allPods.map(async (pod) => {
    try {
      const videoId = pod.yt.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)[2]?.split(/[^0-9a-z_-]/i)[0];
      const response = await fetch(`/transcripts_clean/ep${pod.id}_${videoId}.md`);
      if (response.ok) {
        const text = await response.text();
        transcripts.value[pod.id] = text.toLowerCase();
        transcriptsNorm.value[pod.id] = norm(text);
      }
    } catch (e) {
      console.error(`Hiba az átirat betöltésekor: ${pod.id}`, e);
    }
  });

  await Promise.all(promises);
  isLoadingTranscripts.value = false;
};

const getHighlightedSnippet = (text: string, query: string) => {
  if (!text || !query) return '';

  const normText = norm(text);
  const normQuery = norm(query);
  const index = normText.indexOf(normQuery);

  if (index === -1) return text.slice(0, 100) + '...';

  // 1. Környezet kivágása (40 karakter előtte, 60 utána)
  const start = Math.max(0, index - 40);
  const end = Math.min(text.length, index + query.length + 60);
  let snippet = text.slice(start, end);

  // 2. Biztonság: HTML karakterek eszképelése (hogy ne lehessen XSS)
  snippet = snippet.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // 3. Kiemelés: az eredeti szöveget emeljük ki a normalizált pozíció alapján
  const highlightStart = index - start;
  const highlightEnd = highlightStart + query.length;
  const before = snippet.slice(0, highlightStart);
  const match = snippet.slice(highlightStart, highlightEnd);
  const after = snippet.slice(highlightEnd);
  
  const prefix = start > 0 ? '...' : '';
  const suffix = end < text.length ? '...' : '';
  return `${prefix}${before}<span class="highlight">${match}</span>${after}${suffix}`;
};

// Figyeljük, ha módot vált a júzer
watch(searchMode, (newMode) => {
  if (newMode === 'full') {
    loadTranscripts();
  }
});

onMounted(() => window.addEventListener('keydown', handleShortcut))
onUnmounted(() => window.removeEventListener('keydown', handleShortcut))

defineProps<{
  max_count: number
}>()
</script>

<template>
    <div class="search-section">
        <div class="search-trigger mt-3" @click="isSearchOpen = true">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8" stroke-width="2" />
            <path d="M21 21l-4.35-4.35" stroke-width="2" stroke-linecap="round" />
        </svg>
        <span class="placeholder">Keresés az adások között...</span>
        <span class="kb-shortcut">Ctrl + K</span>
        </div>
    </div>

    <Teleport to="body">
        <Transition name="fade" @after-enter="() => searchInput?.focus()">
        <div v-if="isSearchOpen" class="search-overlay" @click.self="isSearchOpen = false; searchQuery = ''">
          <div class="search-modal">
            <div class="search-mode-selector">
              <button 
                :class="{ active: searchMode === 'meta' }" 
                @click="searchMode = 'meta'"
              >
                címekben
              </button>
              <button 
                :class="{ active: searchMode === 'full' }" 
                @click="searchMode = 'full'"
              >
                átiratokban
              </button>
            </div>
            <input 
                ref="searchInput" 
                type="text" 
                v-model="searchQuery"
                @keydown="handleKeydown"
                v-focus
                class="search-input"
                placeholder="Írd be a keresett szót..."
            />

            <div v-if="isLoadingTranscripts" class="loading-bar">
              Átiratok betöltése a villámgyors kereséshez...
            </div>

            <div v-if="searchQuery" class="search-meta">
                <span class="count">{{ filteredResults.length }}</span> találat
            </div>
            
            <div class="results-area" v-if="filteredResults.length">
              <router-link 
                  v-for="(pod, index) in filteredResults" 
                  :key="pod.id"
                  :to="'/podcast/' + slugify(pod.name)"
                  class="res-card"
                  :class="{ 'active-result': index === selectedIndex }" 
                  @click="isSearchOpen = false"
                  @mouseenter="selectedIndex = index"
              >
                  <img :src="pod.img" />
                  <div class="res-details">
                    <span class="res-id">{{ pod.id }}</span>
                    <span class="res-name" v-html="getHighlightedSnippet(pod.name, searchQuery)"></span>
                    <div 
                      v-if="searchMode === 'meta' && getMatchReason(pod)" 
                      class="res-match-reason"
                      v-html="getMatchReason(pod)?.html"
                    ></div>
                    <div 
                      v-if="searchMode === 'full' && transcripts[pod.id]" 
                      class="res-snippet"
                      v-html="getHighlightedSnippet(transcripts[pod.id], searchQuery)"
                    >
                    </div>
                  </div>
              </router-link>
            </div>
          </div>
        </div>
        </Transition>
    </Teleport>

    <div name="links-list" class="container-flex py-3 podcast">
        <div class="row row-cols-2">
            <div v-for="pod in get_pods(max_count)" class="card mx-2 my-2" style="width: 20rem;">
                <div class="card-body">
                    <h4 class="my-3">
                        <router-link :to="'/podcast/' + slugify(pod.name)" class="link">
                            <img :src="pod.img" :alt="pod.name" :title="pod.name" />
                        </router-link>
                    </h4>
                    <h5 class="top">
                        {{ pod.name }}
                    </h5>
                    <div class="meta-top">
                        <span class="episode-num">{{ pod.id }}</span>
                        <span class="date">{{ pod.date }}</span>
                    </div>
                    <div class="meta-members">
                        <template v-for="(member, index) in pod.members">
                            <span v-if="index > 0" class="sep">·</span>{{ member }}
                        </template>
                    </div>
                    <p class="pt-3 my-3 text-center">
                        <router-link :to="'/podcast/' + slugify(pod.name)" class="btn-bovebben">
                            Bővebben <span class="arrow">&#10095;</span>
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.meta-top {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    margin-bottom: 0.25rem;
}

.meta-top .episode-num {
    font-family: 'JetBrains Mono', monospace;
    color: #e8860c;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: -0.02em;
}

.meta-top .date {
    color: #aaa;
    font-size: 0.85rem;
}

.meta-members {
    display: flex;
    display: none;
    flex-wrap: wrap;
    gap: 0.15rem;
    margin-bottom: 0.5rem;
    color: #aaa;
    font-size: 0.85rem;
}

.meta-members .sep {
    color: #777;
    margin: 0 0.1rem;
}

.meta-members::before {
    content: '';
    display: inline-block;
    position: relative;
    top: 2px;
    left: 6px;
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 1rem;
    vertical-align: middle;
    opacity: 0.5;
    background: currentColor;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z'/%3E%3Cpath d='M19 10v2a7 7 0 0 1-14 0v-2'/%3E%3Cline x1='12' y1='19' x2='12' y2='23'/%3E%3Cline x1='8' y1='23' x2='16' y2='23'/%3E%3C/svg%3E") no-repeat center;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z'/%3E%3Cpath d='M19 10v2a7 7 0 0 1-14 0v-2'/%3E%3Cline x1='12' y1='19' x2='12' y2='23'/%3E%3Cline x1='8' y1='23' x2='16' y2='23'/%3E%3C/svg%3E") no-repeat center;
}

.btn-bovebben {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.45rem 1.4rem;
    background-color: transparent;
    color: #e8860c;
    border: 1.5px solid #e8860c;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.02em;
    transition: border-color 0.3s ease, color 0.3s ease;
    opacity: 0.8;
}

.btn-bovebben .arrow {
    display: inline-block;
    font-size: 0.6rem;
    line-height: 1;
    transition: transform 0.3s ease;
}

.btn-bovebben:hover {
    color: #f5a623;
    border-color: #f5a623;
    text-decoration: none;
    opacity: 1;
}

.btn-bovebben:hover .arrow {
    transform: translateX(5px);
}

.search-section {
  display: flex;
  justify-content: center; /* Középre igazítás */
  margin: 2rem 0 3rem 0;
}

.search-trigger {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(232, 134, 12, 0.7);
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.search-trigger:hover {
  border-color: rgb(232, 134, 12); /* A te narancssárgád */
  background: rgba(232, 134, 12, 0.05);
}

.search-icon {
  width: 18px;
  height: 18px;
  color: #888;
  margin-right: 12px;
}

.placeholder {
  color: #ddd;
  font-size: 0.9rem;
  flex-grow: 1;
  background-color: transparent;
  opacity: 0.7;
  cursor: pointer;
}

.kb-shortcut {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: #ddd;
  padding: 2px 6px;
  border-radius: 4px;
  opacity: 0.7;
}

/* OVERLAY STÍLUSOK */
.search-overlay {
  position: fixed;
  inset: 0; /* Teljes képernyő */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Felülre igazítjuk */
  padding: 10vh 2rem; /* Adunk neki egy kis keretet minden oldalon */
  background: rgba(0, 0, 0, 0.85);
  z-index: 1000;
  overflow-y: scroll; /* Mindig látszik a scrollbar, így nem ugrik az input */
}

.search-modal {
  width: 100%;
  max-width: 650px;
  /* FONTOS: */
  height: auto; 
  display: block; 
  margin-bottom: 5vh; /* Hogy alul is maradjon kattintható sáv */
}

.search-input {
  width: 100%;
  background: #1a1a1a;
  border: 2px solid #e8860c;
  border-radius: 12px;
  padding: 1.2rem 0.9rem;
  color: white;
  font-size: 1.2rem;
  outline: none;
  box-shadow: 0 0 30px rgba(232, 134, 12, 0.1);
}

.results-area {
  margin-top: 1rem;
  padding: 0;
  background: #1a1a1a;
  border-radius: 12px;
  max-height: 65vh;
  overflow-y: auto;
  border: 1px solid #333;
}

.res-card img {
  width: 108px;       /* Vagy amekkora méretet szeretnél */
  height: 60px;
  border-radius: 6px;
  object-fit: cover;  /* Ez a kulcs: nem nyomja össze, hanem vágja a képet */
  flex-shrink: 0;     /* Megakadályozza, hogy a szöveg összenyomja a képet */
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* A kijelölt elem stílusa */
.active-result {
    background-color: rgba(247, 147, 26, 0.15) !important;
    border-left: 4px solid #f7931a;
    outline: none;
}

.res-card {
    transition: all 0.15s ease;
    border-left: 4px solid transparent; /* Megakadályozza az ugrálást hoverkor */
}

.res-card {
  display: flex;
  align-items: center; /* Függőlegesen középre teszi a szöveget a kép mellett */
  gap: 1.2rem;
  padding: 1rem;
  transition: background 0.2s ease;
}

.res-card:hover { background: #252525; text-decoration: none; } 

.res-id { color: #e8860c; font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; display: block; }

.res-name { color: #ccc; font-weight: 500; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.search-meta {
  text-align: left;
  padding: 1rem 0 0 1rem; /* Egy kis margó a jobb szélétől */
  font-size: 0.8rem;
  color: #777;
  font-family: 'Inter', sans-serif;
}

.search-meta .count {
  /* A számokat kiemelhetjük a JetBrains Mono-val, ha használod */
  font-family: 'JetBrains Mono', monospace;
  color: #e8860c; 
  font-weight: 600;
}

.search-mode-selector {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  justify-content: center;
}

.search-mode-selector button {
  background: #222;
  border: 1px solid #444;
  color: #888;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 600;
}

.search-mode-selector button.active {
  background: #f7931a; /* Bitcoin narancs */
  color: #000;
  border-color: #f7931a;
}

.search-mode-selector button:hover:not(.active) {
  border-color: #666;
  color: #ccc;
}

/* A :deep azért kell, mert a v-html-lel generált elemekre nem hat a sima scoped CSS */
.res-snippet :deep(.highlight),
.res-match-reason :deep(.highlight),
.res-name :deep(.highlight) {
  background-color: rgba(247, 147, 26, 0.3); /* Halvány narancs háttér */
  color: #f7931a; /* Erős narancs betűszín */
  font-weight: bold;
  padding: 0;
  border-radius: 2px;
}

.res-snippet {
  font-size: 0.85rem;
  color: #888;
  line-height: 1.4;
  margin-top: 4px;
}

.res-match-reason {
  font-size: 0.85rem;
  color: #888;
  line-height: 1.4;
  margin-top: 4px;
}
</style>