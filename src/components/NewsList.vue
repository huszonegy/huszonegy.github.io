<script setup lang="ts">
import { get_news } from '../data/news'

// show the last N elements, 0 means all
defineProps<{
    max_count: number
}>()
</script>

<template>
    <div name="links-list" class="container-flex py-3">
        <div v-for="nn in get_news(max_count)" class="card mx-3 my-3" style="width: 80pct;">
            <div class="card-body">
                <h5 class="card-title">
                    {{ nn.summary }}
                </h5>
                <p class="small">{{ nn.date }}</p>
                <p class="card-text" v-html="nn.html" />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .py-3 {
        padding-top: 0 !important;
    }
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
