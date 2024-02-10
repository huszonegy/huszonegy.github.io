<script setup lang="ts">
import { podcasts } from '../data/podcasts'
import { link_simplified } from '../utils'

// defineProps<{
//     msg: string
// }>()
</script>

<template>
    <div class="fs-3 py-1">Podcast</div>
    <div class="fs-4 py-1">magyarul</div>
    <div name="links-list" class="container-flex py-3">
        <div class="row row-cols-2">
            <div v-for="pod in podcasts.filter((p) => p.lang === 'hu')" class="card mx-2 my-2" style="width: 20rem;">
                <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
                <div class="card-body">
                    <h5 class="card-title">{{ pod.name }}</h5>
                    <p class="card-text" v-html="pod.text" />
                    <a :href="pod.link" target="_blank" class="link">
                        {{ link_simplified(pod.link) }}
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="fs-4 py-1">nem magyarul (leginkább angolul)</div>
    <div name="links-list" class="container-flex py-3">
        <div class="row row-cols-2">
            <div v-for="pod in podcasts.filter((p) => p.lang !== 'hu')" class="card mx-2 my-2" style="width: 20rem;">
                <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
                <div class="card-body">
                    <h5 class="card-title">{{ pod.name }}</h5>
                    <p class="card-text" v-html="pod.text" />
                    <a :href="pod.link" target="_blank" class="link">
                        {{ link_simplified(pod.link) }}
                    </a>
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
