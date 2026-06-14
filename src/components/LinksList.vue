<script setup lang="ts">
import { links } from '../data/links'

const categories = links
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
    <div v-for="kategoria in categories" class="links">
        <h2 class="links-category" v-if="kategoria.items.length">
            {{ kategoria.category }}
        </h2>
        <div class="links-list">
            <article v-for="link in kategoria.items" class="link-card" :class="{ 'link-card-banner-card': (link as any).image }">
                <a :href="link.url" target="_blank" class="link-card-banner-link" v-if="(link as any).image">
                    <img :src="(link as any).image" :alt="link.name + ' banner'" class="link-card-banner" />
                </a>
                <div class="link-card-content">
                    <header class="link-card-header">
                        <a :href="link.url" target="_blank" class="link-card-title-link">
                            <h5 class="link-card-title">
                                {{ link.name }}
                                <i class="bi bi-arrow-up-right link-card-arrow"></i>
                            </h5>
                        </a>
                        <span v-if="link.afftype" class="link-chip">
                            <i class="bi bi-tag-fill"></i>
                            <span class="link-chip-type">{{ link.afftype }}</span>
                            <span class="link-chip-detail">{{ link.affdetail }}</span>
                        </span>
                    </header>
                    <p v-if="link.text" class="link-card-text" v-html="link.text" />
                </div>
            </article>
        </div>
    </div>
</template>

<style scoped>
.links-hero {
    padding: 3.5rem 1rem 1.5rem;
    max-width: 780px;
}

.links-hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.links-hero-icon {
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
    max-width: 560px;
    margin-bottom: 0.6rem;
}

.links {
    max-width: 860px;
    margin: auto;
}

.links-category {
    margin-top: 3.5rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.3px;
    color: #fff;
}

.links-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.link-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(247, 147, 26, 0.45);
    border-radius: 14px;
    padding: 1.75rem 1.75rem;
    transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
}

.link-card:hover {
    border-color: rgba(247, 147, 26, 0.9);
    background: rgba(247, 147, 26, 0.04);
    transform: translateY(-1px);
}

.link-card-featured {
    padding: 0;
    overflow: hidden;
    border-color: rgba(247, 147, 26, 0.5);
    background: linear-gradient(180deg, rgba(247, 147, 26, 0.08) 0%, rgba(247, 147, 26, 0.02) 100%);
    box-shadow: 0 0 40px rgba(247, 147, 26, 0.15);
}

.link-card-featured:hover {
    border-color: rgba(247, 147, 26, 0.7);
    box-shadow: 0 0 56px rgba(247, 147, 26, 0.22);
    background: linear-gradient(180deg, rgba(247, 147, 26, 0.12) 0%, rgba(247, 147, 26, 0.03) 100%);
}

.link-card-banner-link {
    display: block;
    line-height: 0;
}

.link-card-banner {
    width: 100%;
    height: auto;
    display: block;
}

.link-card-body {
    padding: 1.75rem 1.75rem;
}

.link-card-banner-card {
    padding: 0;
    overflow: hidden;
}

.link-card-banner-card .link-card-content {
    padding: 1.75rem 1.75rem;
}

.link-card-title-featured {
    font-size: 1.4rem;
}

.links-category-featured {
    margin-top: 1.5rem;
}

.links-category-featured::before {
    background: linear-gradient(180deg, #f7931a 0%, #ffce8a 100%);
}

.link-card-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem 0.9rem;
    margin-bottom: 0.9rem;
}

.link-card-title-link {
    text-decoration: none;
}

.link-card-title {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: #f7931a;
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
}

.link-card-title-link:hover .link-card-title {
    color: #ffa733;
}

.link-card-arrow {
    font-size: 0.85rem;
    opacity: 0.7;
    transition: transform 0.18s ease;
}

.link-card-title-link:hover .link-card-arrow {
    transform: translate(2px, -2px);
    opacity: 1;
}

.link-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    padding: 0.4rem 0.85rem;
    border-radius: 999px;
    background: rgba(247, 147, 26, 0.12);
    border: 1px solid rgba(247, 147, 26, 0.35);
    font-size: 0.78rem;
    line-height: 1;
    color: #ffce8a;
    white-space: nowrap;
}

.link-chip i {
    font-size: 0.78rem;
    line-height: 1;
    color: #f7931a;
}

.link-chip-type {
    font-weight: 600;
    color: #fff;
}

.link-chip-detail {
    opacity: 0.9;
}

.link-card-text {
    margin: 0;
    line-height: 1.25;
    opacity: 0.92;
}

.link-card-text :deep(img) {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 1rem;
    display: block;
}

.link-card-text :deep(a) {
    color: #f7931a;
}

.link-card-text :deep(ul) {
    margin-top: 0.6rem;
    margin-bottom: 0;
    padding-left: 1.2rem;
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
    .link-chip {
        white-space: normal;
    }
}
</style>
