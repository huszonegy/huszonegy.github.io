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
                    Csak bitcoinról, magyarul — minden héten.
                </p>
            </div>
        </div>
    </div>
    <PodsList :max_count = 0>
        <div class="pods-platforms">
            <div class="pods-platforms-icons">
                <a href="https://www.youtube.com/@huszonegy-bitcoin-podcast" target="_blank" rel="noopener" class="platform-link yt" title="YouTube">
                    <span class="icon-wrap"><i class="bi bi-youtube"></i></span>
                    <span>YouTube</span>
                </a>
                <a href="https://fountain.fm/show/gCVs8tyNdgXfJqaRbL3N" target="_blank" rel="noopener" class="platform-link fountain-link" title="Fountain">
                    <span class="icon-wrap">
                        <img src="https://fountain.fm/_next/static/media/fountain-logo.0vmawpc8crt8k.png" class="fountain-img" alt="" aria-hidden="true" />
                    </span>
                    <span>Fountain</span>
                </a>
                <a href="https://rumble.com/user/HUSZONEGY" target="_blank" rel="noopener" class="platform-link rumble" title="Rumble">
                    <span class="icon-wrap">
                        <svg viewBox="0 0 35 35" fill="currentColor" aria-hidden="true">
                            <path d="M23.3 19.5c1.2-.95 1.2-2.8 0-3.78a27.45 27.45 0 0 0-5.58-3.59c-1.38-.66-2.92.26-3.14 1.83-.34 2.4-.4 4.82-.18 7.12.15 1.59 1.67 2.54 3.07 1.93a25.4 25.4 0 0 0 5.83-3.5Zm8.97-6.99a7.57 7.57 0 0 1 .02 10.19 33.84 33.84 0 0 1-16.96 10.13 6.62 6.62 0 0 1-7.98-4.63c-1.97-6.73-1.68-14.34.22-21.1 1-3.55 4.34-5.78 7.78-4.96 6.37 1.52 12.35 5.43 16.92 10.37Z"/>
                        </svg>
                    </span>
                    <span>Rumble</span>
                </a>
                <a href="https://open.spotify.com/show/0r8Q8lEriZGmRrzC6uNyIz" target="_blank" rel="noopener" class="platform-link spotify" title="Spotify">
                    <span class="icon-wrap"><i class="bi bi-spotify"></i></span>
                    <span>Spotify</span>
                </a>
                <a href="https://podcasts.apple.com/hu/podcast/huszonegy-bitcoin-podcast/id1732852684?l=hu" target="_blank" rel="noopener" class="platform-link apple" title="Apple Podcasts">
                    <span class="icon-wrap"><i class="bi bi-apple"></i></span>
                    <span>Apple Podcasts</span>
                </a>
                <a href="https://anchor.fm/s/f260df54/podcast/rss" target="_blank" rel="noopener" class="platform-link rss" title="RSS Feed">
                    <span class="icon-wrap"><i class="bi bi-rss-fill"></i></span>
                    <span>RSS</span>
                </a>
            </div>
        </div>
    </PodsList>

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
    max-width: 860px;
}

.pods-hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.pods-hero-icon {
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
    max-width: 560px;
    margin-bottom: 0.6rem;
}

.pods-platforms {
    margin: 1.5rem auto;
    max-width: 860px;
    text-align: center;
    padding: 0;
}

.pods-platforms-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.5rem;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
}

.platform-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    text-decoration: none;
    transition: color 0.2s;
    width: 64px;
}

.platform-link .icon-wrap { color: #ffa500; }

.platform-link .icon-wrap {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    line-height: 1;
}

.platform-link .icon-wrap svg {
    width: 24px;
    height: 24px;
}

.platform-link > span:last-child {
    font-size: 0.72rem;
    letter-spacing: 0.02em;
    color: #fff;
    opacity: 0.8;
    line-height: 1.2;
    text-align: center;
}

.platform-link:hover .icon-wrap {
    color: #ffb347;
}

.platform-link:hover > span:last-child {
    color: #ffb347;
    opacity: 1;
}

.fountain-img {
    width: 24px;
    height: 24px;
    mix-blend-mode: lighten;
    opacity: 0.9;
    transition: opacity 0.2s, filter 0.2s;
}

.fountain-link:hover .fountain-img {
    opacity: 1;
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