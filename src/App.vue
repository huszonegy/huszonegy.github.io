<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { ref, watch } from 'vue'

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

// Suspense @resolve: az új oldal ténylegesen renderelődött
const onSuspenseResolve = () => {
  if (shouldScroll.value) {
    shouldScroll.value = false;
    window.scrollTo(0, 0);
  }
}
</script>

<template>
  <header>
    <div class="wholepage">
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
@media (min-width: 1024px) {
  .centerpage {
    min-height: 85vh;
    min-width: 85%;
    display: flex;
  }
}
</style>