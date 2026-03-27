<script setup lang="ts">
import WalletsList from '../components/WalletsList.vue'
</script>

<template>
    <main>
        <div class="wallets-hero mx-auto">
            <div class="wallets-hero-inner">
                <div class="wallets-hero-icon">
                    <i class="bi bi-wallet2"></i>
                </div>
                <div class="wallets-hero-text">
                    <h1 class="wallets-hero-title">bitcoin <span class="wallets-hero-accent">tárcák</span></h1>
                    <p class="wallets-hero-lead">
                        Ajánlott tárcák és eszközök a bitcoinod biztonságos tárolásához.
                    </p>
                </div>
            </div>
        </div>
        <WalletsList />
        <div class="bottom-space no-response"><!-- empty --></div>
    </main>
</template>

<style scoped>
.wallets-hero {
    padding: 3.5rem 1rem 1.5rem;
    max-width: 780px;
}

.wallets-hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.wallets-hero-icon {
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

.wallets-hero-text {
    text-align: left;
}

.wallets-hero-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.8rem;
    color: #fff;
    letter-spacing: -0.5px;
}

.wallets-hero-accent {
    color: #f7931a;
}

.wallets-hero-lead {
    font-size: 1rem;
    opacity: 0.78;
    line-height: 1.6;
    max-width: 560px;
    margin-bottom: 0.6rem;
}

@media (max-width: 576px) {
    .wallets-hero-inner {
        flex-direction: column;
        text-align: center;
    }
    .wallets-hero-text {
        text-align: center;
    }
    .wallets-hero-title {
        font-size: 1.8rem;
    }
    .wallets-hero-lead {
        max-width: 100%;
    }
}
</style>
