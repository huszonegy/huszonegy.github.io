<script setup lang="ts">
import NewsList from '../components/NewsList.vue'
</script>

<template>
    <main>
        <h1>Bitcoin hírek</h1>
        <NewsList :max_count=20 />
        <div class="bottom-space no-response"><!-- empty --></div>
    </main>
</template>

<style></style>
