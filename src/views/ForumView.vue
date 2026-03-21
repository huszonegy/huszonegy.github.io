<script setup lang="ts">
import ForumShort from '../components/ForumShort.vue'
import ForumExplain from '../components/ForumExplain.vue'
</script>

<template>
    <main style="width: auto;">
        <div class="forum-page">
            <div class="forum-hero">
                <ForumShort />
            </div>
            <div class="forum-details">
                <ForumExplain />
            </div>
        </div>
    </main>
</template>

<style scoped>
.forum-page {
    max-width: 760px;
    margin: 0 auto;
}

.forum-details :deep(.card) {
    margin-left: 0 !important;
    margin-right: 0 !important;
}
</style>
