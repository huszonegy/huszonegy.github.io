<script setup lang="ts">
import { get_news } from '../data/news'

// show the last N elements, 0 means all
defineProps<{
    max_count: number
}>()
</script>

<template>
    <div name="links-list" class="container-flex py-3">
        <div v-for="nn in get_news(max_count)" class="card mx-2 my-2" style="width: 80pct;">
            <div class="card-body">
                <h5 class="card-title">
                    {{ nn.summary }}
                </h5>
                <p class="card-text" v-html="nn.html" />
                <p class="small">({{ nn.date }})</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
