<script setup lang="ts">
import { presentations } from '../data/presentations'
import { link_simplified } from '../utils'
</script>

<template>
    <div class="prezi-hero mx-auto">
        <div class="prezi-hero-inner">
            <div class="prezi-hero-icon">
                <i class="bi bi-easel"></i>
            </div>
            <div class="prezi-hero-text">
                <h1 class="prezi-hero-title">bitcoin <span class="prezi-hero-accent">előadások</span></h1>
                <p class="prezi-hero-lead">
                    Magyar nyelvű bitcoin előadások és konferencia-felvételek.
                </p>
            </div>
        </div>
    </div>
    <div v-for="alkalom in presentations" class="mt-3">
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
.prezi-hero {
    padding: 3.5rem 1rem 1.5rem;
    max-width: 780px;
}

.prezi-hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.prezi-hero-icon {
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    color: #fff;
    text-shadow: 0 0 32px rgba(247, 147, 26, 0.8), 0 0 64px rgba(247, 147, 26, 0.6), 0 0 96px rgba(247, 147, 26, 0.4);
}

.prezi-hero-text {
    text-align: left;
}

.prezi-hero-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.8rem;
    color: #fff;
    letter-spacing: -0.5px;
}

.prezi-hero-accent {
    color: #f7931a;
}

.prezi-hero-lead {
    font-size: 1rem;
    opacity: 0.78;
    line-height: 1.6;
    max-width: 560px;
    margin-bottom: 0.6rem;
}

@media (max-width: 576px) {
    .prezi-hero-inner {
        flex-direction: column;
        text-align: center;
    }
    .prezi-hero-text {
        text-align: center;
    }
    .prezi-hero-title {
        font-size: 1.8rem;
    }
    .prezi-hero-lead {
        max-width: 100%;
    }
}
</style>
