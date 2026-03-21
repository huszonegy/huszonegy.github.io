<script setup lang="ts">
import { videos } from '../data/videos'
import { link_simplified } from '../utils'
</script>

<template>
    <div class="video-hero mx-auto">
        <div class="video-hero-inner">
            <div class="video-hero-icon">
                <i class="bi bi-play-circle"></i>
            </div>
            <div class="video-hero-text">
                <h1 class="video-hero-title">bitcoin <span class="video-hero-accent">oktatóvideók</span></h1>
                <p class="video-hero-lead">
                    Magyar nyelvű és feliratos oktatóvideók a bitcoinról.
                </p>
            </div>
        </div>
    </div>
    <div v-for="kategoria in videos" :id="kategoria.type.toLowerCase().replace(' ', '-')">
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
                            {{ vid.date }}<span v-for="member in vid.members">&nbsp;<span class="dark">|</span>&nbsp;{{ member }}</span>&nbsp;<span class="dark">|</span>&nbsp;{{vid.length}}
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
.video-hero {
    padding: 3.5rem 1rem 1.5rem;
    max-width: 760px;
}

.video-hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.video-hero-icon {
    flex-shrink: 0;
    font-size: 5rem;
    color: #fff;
    text-shadow: 0 0 32px rgba(247, 147, 26, 0.8), 0 0 64px rgba(247, 147, 26, 0.6), 0 0 96px rgba(247, 147, 26, 0.4);
}

.video-hero-text {
    text-align: left;
}

.video-hero-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.8rem;
    color: #fff;
    letter-spacing: -0.5px;
}

.video-hero-accent {
    color: #f7931a;
}

.video-hero-lead {
    font-size: 1rem;
    opacity: 0.78;
    line-height: 1.6;
    max-width: 480px;
    margin-bottom: 0.6rem;
}

@media (max-width: 576px) {
    .video-hero-inner {
        flex-direction: column;
        text-align: center;
    }
    .video-hero-text {
        text-align: center;
    }
    .video-hero-title {
        font-size: 1.8rem;
    }
    .video-hero-lead {
        max-width: 100%;
    }
}
</style>
