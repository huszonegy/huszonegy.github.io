<script setup lang="ts">
import { get_articles } from '../data/articles'

// show the last N elements, 0 means all
defineProps<{
    max_count: number
}>()
</script>

<template>
    <div name="links-list" class="container-flex py-3">
        <div class="row row-cols-2">
            <div v-for="article in get_articles(max_count)" class="card mx-2 my-2" style="width: 20rem;">

                <div class="d-flex align-items-end article-banner" style="min-height: 80px;">
                    <a :href="article.link" target="_blank" class="link">
                        <img v-if="article.img" class="card-img-top center" :src="article.img" alt="image" />
                    </a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                        <a :href="article.link" target="_blank" class="link">
                            {{ article.name }}
                        </a>
                    </h5>
                    <p class="card-text" v-html="article.text" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* @media (min-width: 1024px) {
footer {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
