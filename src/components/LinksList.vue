<script setup lang="ts">
import { links } from '../data/links'

// defineProps<{
//     msg: string
// }>()
</script>

<template>
    <div name="links-list" class="container-flex py-3">
        <div class="row row-cols-2">
            <div v-for="link in links" class="card mx-2 my-2" style="width: 18rem;">
                <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
                <div class="card-body">
                    <h5 class="card-title">{{ link.name }}</h5>
                    <p class="card-text" v-html="link.text" />
                    <a :href='"https://" + link.link + "/"' target="_blank" class="link">
                        {{ link.show || link.link }}
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