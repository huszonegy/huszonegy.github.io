<script setup lang="ts">
import ArticlesList from '../components/ArticlesList.vue'
</script>

<template>
    <main>
        <div class="hero mx-auto">
            <div class="hero-inner">
                <div class="hero-icon">
                    <i class="bi bi-journal-text"></i>
                </div>
                <div class="hero-text">
                    <h1 class="hero-title">bitcoin <span class="hero-accent">cikkek</span></h1>
                    <p class="hero-lead">
                        Magyar nyelvű bitcoin cikkek, elemzések és fordítások.
                    </p>
                </div>
            </div>
        </div>
        <ArticlesList :max_count="0" />
        <div class="bottom-space no-response"><!-- empty --></div>
    </main>
</template>

<style scoped>
.hero {
    padding: 3.5rem 1rem 1.5rem;
    max-width: 780px;
}

.hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.hero-icon {
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

.hero-text {
    text-align: left;
}

.hero-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.8rem;
    color: #fff;
    letter-spacing: -0.5px;
}

.hero-accent {
    color: #f7931a;
}

.hero-lead {
    font-size: 1rem;
    opacity: 0.78;
    line-height: 1.6;
    max-width: 560px;
    margin-bottom: 0.6rem;
}

@media (max-width: 576px) {
    .hero-inner {
        flex-direction: column;
        text-align: center;
    }
    .hero-text {
        text-align: center;
    }
    .hero-title {
        font-size: 1.8rem;
    }
    .hero-lead {
        max-width: 100%;
    }
}
</style>
