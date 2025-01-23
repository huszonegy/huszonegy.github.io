<script setup lang="ts">
import { videos } from '../data/videos'
import { link_simplified } from '../utils'
</script>

<template>
    <h1>Bitcoin oktató videók magyarul</h1>
    <div v-for="kategoria in videos">
        <h2>
            {{ kategoria.type }}
        </h2>
        <p>
            {{ kategoria.details }}
        </p>
        <div name="links-list" class="container-flex py-3 podcast">
            <div class="row row-cols-2">
                <div v-for="vid in kategoria.parts" class="card mx-2 my-2" style="width: 20rem;">
                    <div class="card-body">
                        <h4 class="my-3">
                            <a v-if="vid.yt" :href="vid.yt" target="_blank">
                                <img :src="vid.img" :alt="vid.name" :title="vid.name" />
                            </a>
                            <img v-else :src="vid.img" :alt="vid.name" :title="vid.name" />
                        </h4>
                        <h5 class="top">
                            {{ vid.name }}
                        </h5>
                        <p v-if="vid.date" class="small my-3 grey">
                            {{ vid.date }}<span v-for="member in vid.members">&nbsp;<span class="dark">|</span>&nbsp;{{ member }}</span> 
                        </p>
                        <p class="small my-3">
                            <span v-if="vid.yt">
                                youtube: 
                                <a :href="vid.yt" target="_blank" class="link">
                                    video
                                </a>
                            </span>
                            <span v-if="vid.yt && vid.fountain">
                                &nbsp;|&nbsp;
                            </span>
                            <span v-if="vid.fountain">
                                fountain: 
                                <a :href="vid.fountain" target="_blank" class="link">
                                    audio
                                </a>
                            </span>
                        </p>
                        <p class="small my-3">
                            {{ vid.topic }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
