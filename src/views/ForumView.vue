<script setup lang="ts">
import ForumShort from '../components/ForumShort.vue'
import ForumExplain from '../components/ForumExplain.vue'
</script>

<template>
    <main style="width: auto;">
        <div class="row">
            <div class="col col-auto" style="max-width: 500px; width: 100%;">
                <ForumShort />
            </div>
            <div class="col col-auto" style="max-width: 500px; width: 100%;">
                <ForumExplain />
            </div>
        </div>
    </main>
</template>

<style></style>
