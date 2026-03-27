<script setup lang="ts">
import NewsList from '../components/NewsList.vue'
</script>

<template>
    <main>
        <div class="news-hero mx-auto">
            <div class="news-hero-inner">
                <div class="news-hero-icon">
                    <i class="bi bi-newspaper"></i>
                </div>
                <div class="news-hero-text">
                    <h1 class="news-hero-title">bitcoin <span class="news-hero-accent">hírek</span></h1>
                    <p class="news-hero-lead">
                        Friss hírek és események a bitcoin világából, magyarul.
                    </p>
                </div>
            </div>
        </div>
        <NewsList :max_count="0" />
        <div class="bottom-space no-response"><!-- empty --></div>
    </main>
</template>

<style scoped>
.news-hero {
    padding: 3.5rem 1rem 1.5rem;
    max-width: 780px;
}

.news-hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.news-hero-icon {
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

.news-hero-text {
    text-align: left;
}

.news-hero-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.8rem;
    color: #fff;
    letter-spacing: -0.5px;
}

.news-hero-accent {
    color: #f7931a;
}

.news-hero-lead {
    font-size: 1rem;
    opacity: 0.78;
    line-height: 1.6;
    max-width: 560px;
    margin-bottom: 0.6rem;
}

@media (max-width: 576px) {
    .news-hero-inner {
        flex-direction: column;
        text-align: center;
    }
    .news-hero-text {
        text-align: center;
    }
    .news-hero-title {
        font-size: 1.8rem;
    }
    .news-hero-lead {
        max-width: 100%;
    }
}
</style>
