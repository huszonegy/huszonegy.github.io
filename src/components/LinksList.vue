<script setup lang="ts">
import { links } from '../data/links'

const categories = links

const bannerItems = (items: any[]) => items.filter(i => i.image)
const plainItems = (items: any[]) => items.filter(i => !i.image)

const chipLabel = (kind: string) =>
    kind === 'own' ? 'a HUSZONEGY csoporttól' : kind === 'affiliate' ? 'affiliate' : 'kupon'
const chipIcon = (kind: string) =>
    kind === 'own' ? 'bi-patch-check-fill' : kind === 'affiliate' ? 'bi-link-45deg' : 'bi-tag-fill'
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
    <div v-for="kategoria in categories" class="links" :class="{ 'links-sponsors': kategoria.category === 'Szponzoraink', 'links-wide': (kategoria as any).wide }">
        <h2 class="links-category" v-if="kategoria.items.length">
            {{ kategoria.category }}
        </h2>
        <div v-if="kategoria.category === 'Szponzoraink'" class="sponsor-grid">
            <div v-for="link in kategoria.items" class="sponsor-card">
                <a :href="link.url" target="_blank" class="sponsor-banner-link">
                    <img :src="(link as any).image" :alt="link.name + ' banner'" class="sponsor-banner" :class="{ 'is-left': (link as any).align === 'left', 'is-zoom': (link as any).zoom }" />
                </a>
                <div class="sponsor-info">
                    <a :href="link.url" target="_blank" class="sponsor-name">{{ link.name }}</a>
                    <p v-if="link.text" class="sponsor-desc" v-html="link.text" />
                </div>
            </div>
        </div>
        <template v-else>
            <div v-if="bannerItems(kategoria.items).length" class="partner-grid">
                <article v-for="link in bannerItems(kategoria.items)" :key="link.name" class="link-card link-card-banner-card">
                    <a :href="link.url" target="_blank" class="link-card-banner-link">
                        <img :src="(link as any).image" :alt="link.name + ' banner'" class="link-card-banner" />
                    </a>
                    <div class="link-card-content">
                        <header class="link-card-header">
                            <a :href="link.url" target="_blank" class="link-card-title-link">
                                <h5 class="link-card-title">{{ link.name }}</h5>
                            </a>
                            <span v-if="(link as any).kind" class="link-chip" :class="'link-chip-' + (link as any).kind">
                                <i class="bi" :class="chipIcon((link as any).kind)"></i>
                                <span class="link-chip-type">{{ chipLabel((link as any).kind) }}</span>
                                <span v-if="(link as any).detail" class="link-chip-detail">{{ (link as any).detail }}</span>
                            </span>
                        </header>
                        <p v-if="link.text" class="link-card-text" v-html="link.text" />
                    </div>
                </article>
            </div>
            <div v-if="plainItems(kategoria.items).length" class="link-grid">
                <article v-for="link in plainItems(kategoria.items)" class="link-card link-card-compact">
                    <header class="link-card-header">
                        <a :href="link.url" target="_blank" class="link-card-title-link">
                            <h5 class="link-card-title">{{ link.name }}</h5>
                        </a>
                        <span v-if="(link as any).kind" class="link-chip" :class="'link-chip-' + (link as any).kind">
                            <i class="bi" :class="chipIcon((link as any).kind)"></i>
                            <span class="link-chip-type">{{ chipLabel((link as any).kind) }}</span>
                            <span v-if="(link as any).detail" class="link-chip-detail">{{ (link as any).detail }}</span>
                        </span>
                    </header>
                    <p v-if="link.text" class="link-card-text" v-html="link.text" />
                </article>
            </div>
        </template>
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
    margin: 0 auto 3.5rem;
}

.links-sponsors {
    max-width: 1340px;
    padding-left: 1rem;
    padding-right: 1rem;
    box-sizing: border-box;
}

.links-sponsors .links-category {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    font-size: 1.35rem;
    margin-bottom: 1.8rem;
}

.links-wide {
    max-width: 1180px;
}

.links-wide .links-category {
    text-align: center;
}

.partner-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 1.6rem;
}

.partner-grid .link-card {
    flex: 1 1 460px;
    min-width: 0;
    max-width: 577px;
    border-color: rgba(247, 147, 26, 0.22);
}

.partner-grid .link-card:hover {
    border-color: rgba(247, 147, 26, 0.6);
}

.partner-grid .link-card-text {
    font-size: 0.92rem;
    line-height: 1.25;
}

.links-category {
    margin-top: 3.5rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.3px;
    color: #fff;
}

.sponsor-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 1.6rem;
}

.sponsor-card {
    flex: 1 1 0;
    min-width: 0;
    max-width: 420px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(247, 147, 26, 0.22);
    background: rgba(255, 255, 255, 0.03);
    transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease;
}

.sponsor-card:hover {
    border-color: rgba(247, 147, 26, 0.6);
    background: rgba(247, 147, 26, 0.04);
    transform: translateY(-1px);
}

.sponsor-banner-link {
    display: block;
    line-height: 0;
    height: 80px;
    overflow: hidden;
}

.sponsor-banner {
    width: 100%;
    height: 80px;
    object-fit: cover;
    object-position: center;
    display: block;
}

.sponsor-banner.is-left {
    object-position: left;
}

.sponsor-banner.is-zoom {
    transform: scale(1.5);
    transform-origin: left center;
}

.sponsor-info {
    padding: 1.5rem 1.6rem 1.6rem;
    text-align: center;
}

.sponsor-name {
    display: block;
    font-size: 1.1rem;
    font-weight: 600;
    color: #f7931a;
    text-decoration: none;
    margin-bottom: 0.6rem;
}

.sponsor-card:hover .sponsor-name {
    color: #ffa733;
}

.sponsor-desc {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.25;
    opacity: 0.85;
}

.sponsor-desc :deep(a) {
    color: #f7931a;
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

.link-card-banner-link {
    display: block;
    line-height: 0;
}

.link-card-banner {
    width: 100%;
    height: auto;
    display: block;
}

.link-card-banner-card {
    padding: 0;
    overflow: hidden;
}

.link-card-banner-card .link-card-content {
    padding: 1.75rem 1.75rem;
}

.link-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.6rem;
}

.links-wide .link-grid {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
}

.partner-grid + .link-grid {
    margin-top: 1.6rem;
}

.link-card-compact {
    padding: 1.35rem 1.4rem;
    border-color: rgba(247, 147, 26, 0.22);
}

.link-card-compact:hover {
    border-color: rgba(247, 147, 26, 0.6);
}

.link-card-compact .link-card-title {
    font-size: 1rem;
}

.link-card-compact .link-card-text {
    font-size: 0.85rem;
    line-height: 1.25;
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
}

.link-card-title-link:hover .link-card-title {
    color: #ffa733;
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

/* type badges: own = brand orange (base), affiliate = neutral slate, coupon = green */
.link-chip-affiliate {
    background: rgba(96, 165, 250, 0.12);
    border-color: rgba(96, 165, 250, 0.4);
    color: #bfdbfe;
}

.link-chip-affiliate i {
    color: #60a5fa;
}

.link-chip-coupon {
    background: rgba(74, 222, 128, 0.12);
    border-color: rgba(74, 222, 128, 0.38);
    color: #bbf7d0;
}

.link-chip-coupon i {
    color: #4ade80;
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
    .sponsor-card {
        flex-basis: 100%;
    }
}
</style>
