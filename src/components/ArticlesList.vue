<script setup lang="ts">
import { get_articles } from '../data/articles'

// show the last N elements, 0 means all
defineProps<{
    max_count: number
}>()
</script>

<template>
    <div name="links-list" class="container-flex">
        <div class="row">
            <div v-for="article in get_articles(max_count)" class="card mx-2 my-3 article" style="width: 19.4rem;">

                <div class="d-flex align-items-end article-banner" style="min-height: 80px;">
                    <a :href="article.link" target="_self" class="link">
                        <img v-if="article.img" class="card-img-top center" :src="article.img" :alt="article.name" />
                    </a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">
                        <a :href="article.link" target="_self" class="link">
                            {{ article.name }}
                        </a>
                    </h5>
                    <p class="card-text" v-html="article.text" />
<!--
                    <p class="card-text category">
                        {{ article.origin }}&nbsp;&nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;nehézség: {{ article.cat }}
                    </p>
-->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
