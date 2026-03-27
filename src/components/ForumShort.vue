<script setup lang="ts">
</script>

<template>
    <div class="forum-hero-section">
        <div class="forum-hero-inner">
            <div class="forum-hero-icon">
                <i class="bi bi-chat-dots"></i>
            </div>
            <div class="forum-hero-text">
                <h1 class="forum-hero-title">bitcoin <span class="forum-hero-accent">fórum</span></h1>
                <p class="forum-hero-lead">
                    A HUSZONEGY Telegram csoportban beszélgetünk a Bitcoinról magyarul.
                </p>
            </div>
        </div>
        <div class="forum-cta center mt-4">
            <a href="https://t.me/huszonegy" target="_blank" class="btn btn-custom mt-2">
                Csatlakozz a Telegram csoporthoz
            </a>
            <div class="mt-5 mb-4">
                <img src="/pics/qr_21_tgram.png" width="140" class="qr-code" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.forum-hero-section {
    padding: 3.5rem 1rem 1.5rem;
    max-width: 780px;
    margin: 0 auto;
}

.forum-hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.forum-hero-icon {
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

.forum-hero-text {
    text-align: left;
}

.forum-hero-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.8rem;
    color: #fff;
    letter-spacing: -0.5px;
}

.forum-hero-accent {
    color: #f7931a;
}

.forum-hero-lead {
    font-size: 1rem;
    opacity: 0.78;
    line-height: 1.6;
    max-width: 560px;
    margin-bottom: 0.6rem;
}

.forum-hero-rule {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
}

.qr-code {
    opacity: 0.85;
    transition: opacity 0.2s;
}

.qr-code:hover {
    opacity: 1;
}

@media (max-width: 576px) {
    .forum-hero-inner {
        flex-direction: column;
        text-align: center;
    }
    .forum-hero-text {
        text-align: center;
    }
    .forum-hero-title {
        font-size: 1.8rem;
    }
    .forum-hero-lead {
        max-width: 100%;
    }
}
</style>
