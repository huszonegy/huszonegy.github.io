<script setup lang="ts">
import { get_news } from '../data/news'

// show the last N elements, 0 means all
defineProps<{
    max_count: number
}>()

// külső link (http/https) új fülön nyíljon; belső link SPA-navigációval, azonos fülön
const isExternal = (url: string) => /^https?:\/\//i.test(url)
</script>

<template>
    <div name="links-list" class="row g-3 news mx-2 py-3">
        <div v-for="nn in get_news(max_count)" class="col-md-6">
        <div class="card my-0">
            <div class="card-body">
                <h3 class="card-title">
                    {{ nn.summary }}
                </h3>
                <p class="small">{{ nn.date }}</p>
                <p v-if="nn.link" class="news-img">
                    <a v-if="isExternal(nn.link)" :href="nn.link" target="_blank" rel="noopener" class="link">
                        <img :src="nn.img" :alt="nn.summary" :title="nn.summary" />
                    </a>
                    <RouterLink v-else :to="nn.link" class="link">
                        <img :src="nn.img" :alt="nn.summary" :title="nn.summary" />
                    </RouterLink>
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
        max-width: 650px !important;
    }
    .card-title {
        font-size: 1rem;
        font-weight: 700;
    }
    .card-text {
        color: rgba(255, 255, 255, 0.5) !important;
        font-size: 0.88rem;
        line-height: 1.45;
    }

</style>