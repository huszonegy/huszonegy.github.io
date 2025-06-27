<script setup lang="ts">
import PodsList from './PodsList.vue'
import { kebabs } from '../data/kebabs'
import { link_simplified } from '../utils'
</script>

<template>
    <h1>Bitcoin podcast magyarul</h1>
    <h2><a href='https://www.youtube.com/@huszonegy-bitcoin-podcast' target='_blank'>Mi az a Bitcoin?</a> podcast</h2>
<!--
    <h3 style="margin-top: 20px;">
        Minden héten a Bitcoinról
    </h3>
-->
    <p>
        Kizárólag Bitcoinnal foglalkozunk, és fő célunk a magyar nyelvű Bitcoin témájú tájékoztatás mennyiségének, minőségének, közérthetőségének és valóságtartalmának intenzív javítása.
    </p>
    <PodsList :max_count = 0 />

    <h2 id="bitcoin-kebab">Bitcoin Kebab podcast</h2>
    <p>
        Válogatás a BitcoinBázis podcastjának adásaiból.
    </p>
    <div name="links-list" class="container-flex py-3 podcast">
        <div class="row row-cols-2">
            <div v-for="kebab in kebabs" class="card mx-2 my-2" style="width: 20rem;">
                <div class="card-body">
                    <h4 class="my-3">
                        <a :href="kebab.yt" target="_blank" class="link">
                            <img :src="kebab.img" :alt="kebab.name" :title="kebab.name" />
                        </a>
                    </h4>
                    <h5 class="top">
                        {{ kebab.name }}
                    </h5>
                    <p class="small my-3 grey">
                        {{ kebab.date }}<span v-for="member in kebab.members">&nbsp;|&nbsp;{{ member }}</span> 
                    </p>
                    <p class="small my-3">
                        youtube: 
                        <a :href="kebab.yt" target="_blank" class="link">
                            video
                        </a>
                    </p>
                    <p class="small" v-html="kebab.topic" />
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
</style>
