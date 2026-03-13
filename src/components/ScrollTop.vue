<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 400; // Kicsit később jelenik meg, mint az előbb
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <Transition name="back-to-top">
    <button 
      v-if="isVisible" 
      @click="scrollToTop" 
      class="scroll-btn"
      aria-label="Vissza a tetejére"
    >
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2.5" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.scroll-btn {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 40px;
  height: 40px;
  z-index: 1000;
  opacity: 0.7;
  
  /* Bitcoin narancs háttér */
  background-color: #f7931a;
  color: white;
  
  border: none;
  border-radius: 12px; /* Nem teljesen kör, hanem lekerekített négyzet (modern stílus) */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Finom árnyék */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  /* Simább átmenetek */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.scroll-btn svg {
  width: 22px;
  height: 22px;
}

.scroll-btn:hover {
  background-color: #ff9f1c;
  opacity: 1; /* Ahogy kérted, itt válik teljesen láthatóvá */
  transform: scale(1.1); /* 10%-kal megnő a mérete */
  box-shadow: 0 6px 20px rgba(247, 147, 26, 0.4);
}

/* Animáció a megjelenéshez/eltűnéshez */
.back-to-top-enter-active,
.back-to-top-leave-active {
  transition: all 0.4s ease;
}

.back-to-top-enter-from,
.back-to-top-leave-to {
  opacity: 0;
  transform: scale(0.5) translateY(20px);
}
</style>