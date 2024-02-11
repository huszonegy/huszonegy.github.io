<script setup lang="ts">
import NewsList from '../components/NewsList.vue'
</script>

<template>
    <main>
        <div class="fs-3 py-1 mx-4">Hírek</div>
        <NewsList :max_count=20 />
        <div class="bottom-space no-response"><!-- empty --></div>
    </main>
</template>

<style></style>
