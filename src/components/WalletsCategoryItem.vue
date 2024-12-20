<script setup lang="ts">
import { link_simplified } from '../utils'

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
            <div>
                {{ item.text }}
            </div>
            <br/>
            <div>
                <a :href="item.link" target="_blank" class="link small">{{ link_simplified(item.link) }}</a>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
