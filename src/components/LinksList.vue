<script setup lang="ts">
import { links } from '../data/links'
import { link_simplified } from '../utils'

// defineProps<{
//     msg: string
// }>()
</script>

<template>
    <div class="fs-3 py-1 mx-4">Hasznos linkek</div>
    <div name="links-list" class="container-flex py-3">
        <div class="row row-cols-2">
            <div v-for="link in links" class="card mx-2 my-2" style="width: 16rem;">

                <div class="d-flex align-items-end" style="min-height: 80px;">
                    <img v-if="link.logo" class="card-img-top" :src="link.logo" alt="Logo" width="150px" height="48" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ link.name }}</h5>
                    <p class="card-text" v-html="link.text" />
                    <a :href="link.link" target="_blank" class="link">
                        {{ link.show || link_simplified(link.link) }}
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
    .card-img-top {
        width: initial;
        border-radius: 4px;
        margin: 4px auto;
    }
</style>
