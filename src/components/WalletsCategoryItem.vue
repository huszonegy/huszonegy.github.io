<script setup lang="ts">
import { link_simplified } from '../utils'

// Category data
defineProps<{
    item: any
}>()
</script>

<template>
    <div :id="item.name" class="card py-3 d-flex flex-column" style="padding-left: 1.2rem; padding-right: 1.2rem;">
        <h4 class="card-title">
            <a :href="item.link" target="_blank">{{ item.name }}</a>
        </h4>
        <div class="flex-grow-1 card-text">
            {{ item.text }}
        </div>
        <div class="mt-2">
            <a :href="item.link" target="_blank" class="link small">{{ link_simplified(item.link) }}</a>
        </div>
    </div>
</template>

<style scoped>
.card-text {
    font-size: 0.92rem;
    line-height: 1.4;
}
</style>
