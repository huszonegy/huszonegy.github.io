<script setup lang="ts">
import ForumShort from '../components/ForumShort.vue'
import ForumExplain from '../components/ForumExplain.vue'
</script>

<template>
    <main style="width: auto;">
        <div class="row">
            <div class="col col-auto" style="max-width: 500px;">
                <ForumExplain />
            </div>
            <div class="col col-auto" style="max-width: 500px;">
                <ForumShort />
            </div>
        </div>
    </main>
</template>

<style></style>
