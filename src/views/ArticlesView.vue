<script setup lang="ts">
import ArticlesList from '../components/ArticlesList.vue'
</script>

<template>
    <main>
        <div class="fs-3 py-1 mx-4">Cikkek</div>
        <ArticlesList :max_count=0 />
        <div class="bottom-space no-response"><!-- empty --></div>
    </main>
</template>

<style></style>
