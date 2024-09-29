<script setup lang="ts">
import { presentations } from '../data/presentations'
import { link_simplified } from '../utils'
</script>

<template>
    <h1>Bitcoin előadás magyarul</h1>
    <div v-for="alkalom in presentations">
        <h2>
            {{ alkalom.event }}
        </h2>
        <h3 style="margin-top: 20px;">
            {{ alkalom.params }}
        </h3>
        <p>
            {{ alkalom.details }}
        </p>
        <div name="links-list" class="container-flex py-3 podcast">
            <div class="row row-cols-2">
                <div v-for="prezi in alkalom.parts" class="card mx-2 my-2" style="width: 20rem;">
                    <div class="card-body">
                        <h4 class="my-3">
                            <a v-if="prezi.yt" :href="prezi.yt" target="_blank">
                                <img :src="prezi.img" :alt="prezi.name" :title="prezi.name" />
                            </a>
                            <img v-else :src="prezi.img" :alt="prezi.name" :title="prezi.name" />
                        </h4>
                        <h5 class="top">
                            {{ prezi.name }}
                        </h5>
                        <p v-if="prezi.date" class="small my-3 grey">
                            {{ prezi.date }}<span v-for="member in prezi.members">&nbsp;<span class="dark">|</span>&nbsp;{{ member }}</span> 
                        </p>
                        <p class="small my-3">
                            <span v-if="prezi.yt">
                                youtube: 
                                <a :href="prezi.yt" target="_blank" class="link">
                                    video
                                </a>
                            </span>
                            <span v-if="prezi.yt && prezi.fountain">
                                &nbsp;|&nbsp;
                            </span>
                            <span v-if="prezi.fountain">
                                fountain: 
                                <a :href="prezi.fountain" target="_blank" class="link">
                                    audio
                                </a>
                            </span>
                        </p>
                        <p class="small my-3">
                            {{ prezi.topic }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
