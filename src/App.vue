<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ref, watch, onMounted, nextTick } from 'vue'

import Footer from './components/Footer.vue'
import TopNav from './components/TopNav.vue'
import ScrollTop from './components/ScrollTop.vue';
import { useRouteHead } from './composables/useRouteHead'

useRouteHead()

const route = useRoute()
const shouldScroll = ref(false)

// Navigációkor jelezzük, hogy a következő renderelés után scroll kell
watch(() => route.fullPath, () => {
  shouldScroll.value = true;
})

// Minden külső link új lapon nyíljon meg (target="_blank" + rel)
function markExternalLinks() {
  document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((a) => {
    const href = a.getAttribute('href') || '';
    if (!/^https?:\/\//i.test(href)) return;             // csak abszolút http(s)
    if (a.hostname === window.location.hostname) return; // saját domain kihagyva
    if (!a.target) a.target = '_blank';
    const rel = (a.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
    if (!rel.includes('noopener')) rel.push('noopener');
    if (!rel.includes('noreferrer')) rel.push('noreferrer');
    a.setAttribute('rel', rel.join(' '));
  });
}

// Suspense @resolve: az új oldal ténylegesen renderelődött
const onSuspenseResolve = () => {
  if (shouldScroll.value) {
    shouldScroll.value = false;
    window.scrollTo(0, 0);
  }
  nextTick(markExternalLinks);
}

onMounted(() => nextTick(markExternalLinks));
</script>

<template>
  <header>
    <div class="wholepage">
      <div class="app-backdrop"></div>
      <TopNav />

      <div class="centerpage container">
        <RouterView v-slot="{ Component }">
          <Suspense @resolve="onSuspenseResolve">
            <template #default>
              <component :is="Component" />
            </template>
            <template #fallback>
              <div>Betöltés...</div>
            </template>
          </Suspense>
        </RouterView>
      </div>
      <ScrollTop />
      <Footer />
    </div>
  </header>
</template>


<style scoped>
.app-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  background: rgba(0, 0, 0, 0.4);
  z-index: -1;
  pointer-events: none;
}

@media (min-width: 1024px) {
  .centerpage {
    min-height: 85vh;
    min-width: 85%;
    display: flex;
  }
}
</style>