<script setup lang="ts">
import { get_news } from '../data/news'

// show the last N elements, 0 means all
defineProps<{
    max_count: number
}>()
</script>

<template>
    <div name="links-list" class="container-flex news">
        <div v-for="nn in get_news(max_count)" class="card my-4" style="width: 80pct;">
            <div class="card-body">
                <h5 class="card-title">
                    {{ nn.summary }}
                </h5>
                <p class="small">{{ nn.date }}</p>
                <p>
                    <a v-if="nn.yt"  :href="nn.yt" target="_blank" class="link">
                        <img :src="nn.img" :alt="nn.summary" :title="nn.summary" />
                    </a>
                </p>
                <p v-if="nn.html" class="card-text" v-html="nn.html" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .small {
        font-size: .7em;
        color: #999;
    }
    .card {
        --bs-card-spacer-y: 1.5rem;
        --bs-card-spacer-x: 1.5rem;
        --bs-card-title-spacer-y: 0.2rem;
        padding-bottom: 0;
    }

</style>
