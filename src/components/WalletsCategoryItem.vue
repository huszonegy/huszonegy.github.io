<script setup lang="ts">

// Category data
defineProps<{
    item: any
}>()
</script>

<template>
    <div :id="item.name" class="card px-2 py-2">
        <h4 class="card-title">
            <a :href="item.link" target="_blank">{{ item.name }}</a>
        </h4>
        <div class="card.body">
            {{ item.text }}
        </div>
    </div>
</template>

<style scoped></style>
