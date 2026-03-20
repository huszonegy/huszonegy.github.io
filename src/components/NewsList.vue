<script setup lang="ts">
import { get_news } from '../data/news'

// show the last N elements, 0 means all
defineProps<{
    max_count: number
}>()
</script>

<template>
    <div name="links-list" class="row g-3 mx-0 news">
        <div v-for="nn in get_news(max_count)" class="col-md-6">
        <div class="card mx-2 my-0 news">
            <div class="card-body">
                <h3 class="card-title">
                    {{ nn.summary }}
                </h3>
                <p class="small">{{ nn.date }}</p>
                <p v-if="nn.link" class="news-img">
                    <a :href="nn.link" target="_blank" class="link">
                        <img :src="nn.img" :alt="nn.summary" :title="nn.summary" />
                    </a>
                </p>
                <p v-if="nn.html" class="card-text" v-html="nn.html" />
            </div>
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
        --bs-card-spacer-y: 1.2rem;
        --bs-card-spacer-x: 1.2rem;
        --bs-card-title-spacer-y: 0.2rem;
        padding-bottom: 0;
    }
    .card-title {
        font-size: 0.88rem;
        font-weight: 700;
    }
    .card-text {
        color: rgba(255, 255, 255, 0.5) !important;
        font-size: 0.78rem;
        line-height: 1.45;
    }

</style>