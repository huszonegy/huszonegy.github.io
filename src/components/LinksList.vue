<script setup lang="ts">
import { links } from '../data/links'
</script>

<template>
    <div class="links-hero mx-auto">
        <div class="links-hero-inner">
            <div class="links-hero-icon">
                <i class="bi bi-link-45deg"></i>
            </div>
            <div class="links-hero-text">
                <h1 class="links-hero-title">bitcoin <span class="links-hero-accent">linkek</span></h1>
                <p class="links-hero-lead">
                    Hasznos bitcoin linkek, szolgáltatások és eszközök gyűjteménye.
                </p>
            </div>
        </div>
    </div>
    <div v-for="kategoria in links" class="links">
        <h2 style="margin-top: 40px;">
            {{ kategoria.category }}
        </h2>
        <div name="links-list" class="card py-3 px-4 my-4">
            <div v-for="link in kategoria.items" class="my-2">
                <a :href="link.url" target="_blank" class="link">
                    <h5 class="top minimargin" style="font-size: 18px;">
                        {{ link.name }}
                    </h5>
                </a>
                <p v-if="link.text" class="minimargin" v-html="link.text" />
                <p v-if="link.afftype" class="minimargin">
                    <b>{{ link.afftype }}</b><br />
                    <span class="alert">{{ link.affdetail }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.links-hero {
    padding: 3.5rem 1rem 1.5rem;
    max-width: 760px;
}

.links-hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.links-hero-icon {
    flex-shrink: 0;
    font-size: 5rem;
    color: #fff;
    text-shadow: 0 0 32px rgba(247, 147, 26, 0.8), 0 0 64px rgba(247, 147, 26, 0.6), 0 0 96px rgba(247, 147, 26, 0.4);
}

.links-hero-text {
    text-align: left;
}

.links-hero-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.8rem;
    color: #fff;
    letter-spacing: -0.5px;
}

.links-hero-accent {
    color: #f7931a;
}

.links-hero-lead {
    font-size: 1rem;
    opacity: 0.78;
    line-height: 1.6;
    max-width: 480px;
    margin-bottom: 0.6rem;
}

@media (max-width: 576px) {
    .links-hero-inner {
        flex-direction: column;
        text-align: center;
    }
    .links-hero-text {
        text-align: center;
    }
    .links-hero-title {
        font-size: 1.8rem;
    }
    .links-hero-lead {
        max-width: 100%;
    }
}
</style>