<script setup lang="ts">
import NewsList from '../components/NewsList.vue'
</script>

<template>
    <main>
        <div class="fs-3 py-1">Hírek</div>
        <NewsList :max_count=20 />
    </main>
</template>

<style></style>
