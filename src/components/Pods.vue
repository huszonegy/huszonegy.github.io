<script setup lang="ts">
import PodsList from './PodsList.vue'
import { kebabs } from '../data/kebabs'
import { link_simplified } from '../utils'
</script>

<template>
    <div class="pods-hero mx-auto">
        <div class="pods-hero-inner">
            <div class="pods-hero-icon">
                <i class="bi bi-mic"></i>
            </div>
            <div class="pods-hero-text">
                <h1 class="pods-hero-title">bitcoin <span class="pods-hero-accent">podcast</span></h1>
                <p class="pods-hero-lead">
                    Kizárólag bitcoinról, magyarul — minden héten.
                </p>
            </div>
        </div>
    </div>
    <PodsList :max_count = 0 />

    <h2 id="bitcoin-kebab">Bitcoin Kebab podcast</h2>
    <p>
        Válogatás a BitcoinBázis podcastjának adásaiból.
    </p>
    <div name="links-list" class="container-flex py-3 podcast">
        <div class="row row-cols-2">
            <div v-for="kebab in kebabs" class="card mx-2 my-2" style="width: 20rem;">
                <div class="card-body">
                    <div class="my-3">
                        <a :href="kebab.yt" target="_blank" class="link">
                            <img :src="kebab.img" :alt="kebab.name" :title="kebab.name" />
                        </a>
                    </div>
                    <h3 class="kebab-title">
                        {{ kebab.name }}
                    </h3>
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
.pods-hero {
    padding: 3.5rem 1rem 1.5rem;
    max-width: 760px;
}

.pods-hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.pods-hero-icon {
    flex-shrink: 0;
    font-size: 5rem;
    color: #fff;
    text-shadow: 0 0 32px rgba(247, 147, 26, 0.8), 0 0 64px rgba(247, 147, 26, 0.6), 0 0 96px rgba(247, 147, 26, 0.4);
}

.pods-hero-text {
    text-align: left;
}

.pods-hero-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.8rem;
    color: #fff;
    letter-spacing: -0.5px;
}

.pods-hero-accent {
    color: #f7931a;
}

.pods-hero-lead {
    font-size: 1rem;
    opacity: 0.78;
    line-height: 1.6;
    max-width: 480px;
    margin-bottom: 0.6rem;
}

.kebab-title {
    margin-top: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.35;
}

@media (max-width: 576px) {
    .pods-hero-inner {
        flex-direction: column;
        text-align: center;
    }
    .pods-hero-text {
        text-align: center;
    }
    .pods-hero-title {
        font-size: 1.8rem;
    }
    .pods-hero-lead {
        max-width: 100%;
    }
}
</style>