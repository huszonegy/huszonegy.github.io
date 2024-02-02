<script setup lang="ts">
import { articles } from '../data/articles'
import { link_simplified } from '../utils'

// defineProps<{
//     msg: string
// }>()
</script>

<template>
    <div class="fs-3 py-1">Hasznos cikkek</div>
    <div name="links-list" class="container-flex py-3">
        <div class="row row-cols-2">
            <div v-for="article in articles" class="card mx-2 my-2" style="width: 16rem;">

                <div class="d-flex align-items-end article-banner" style="min-height: 80px;">
                    <a :href="article.link" class="link">
                        <img v-if="article.img" class="card-img-top center" :src="article.img" alt="image" />
                    </a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                        <a :href="article.link" class="link">
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
