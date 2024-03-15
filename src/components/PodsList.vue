<script setup lang="ts">
import { podcasts } from '../data/podcasts'
import { link_simplified } from '../utils'
</script>

<template>
    <h1><a href='https://www.youtube.com/@huszonegy-bitcoin-podcast' target='_blank'>Mi az a Bitcoin?</a> podcast</h1>
    <h2 style="margin-top: 20px;">
        Heti rendszerességgel jelentkezünk új tartalommal.
    </h2>
    <h3>
        Kizárólag Bitcoinnal foglalkozunk, és fő célunk a magyar nyelvű Bitcoin témájú tájékoztatás mennyiségének, minőségének, közérthetőségének és valóságtartalmának intenzív javítása.
    </h3>
    <div name="links-list" class="container-flex py-3 podcast">
        <div class="row row-cols-2">
            <div v-for="pod in podcasts" class="card mx-2 my-2" style="width: 20rem;">
                <div class="card-body">
                    <h5 class="card-title">{{ pod.name }}</h5>
                    <img :src="pod.img" />
                    <p class="small my-3">
                        {{ pod.date }}<span v-for="member in pod.members">&nbsp;|&nbsp;{{ member }}</span> 
                    </p>
                    <p class="small my-3">
                        youtube: 
                        <a :href="pod.yt" target="_blank" class="link">
                            video
                        </a>
                        &nbsp;|&nbsp;
                        fountain: 
                        <a :href="pod.fountain" target="_blank" class="link">
                            audio
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    h2 {
        font-size: 21px;
    }
    h3 {
        font-size: 16px;
    }
</style>
