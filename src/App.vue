<script setup lang="ts">
import { RouterView } from 'vue-router'

import Footer from './components/Footer.vue'
import TopNav from './components/TopNav.vue'
import { useRouteHead } from './composables/useRouteHead'

useRouteHead()
</script>

<template>
  <header>
    <div class="wholepage">
      <TopNav />

      <div class="centerpage container">
        <RouterView v-slot="{ Component }">
          <Suspense>
            <template #default>
              <component :is="Component" />
            </template>
            <template #fallback>
              <div>Betöltés...</div>
            </template>
          </Suspense>
        </RouterView>
      </div>

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
