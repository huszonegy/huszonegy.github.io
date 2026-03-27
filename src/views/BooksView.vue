<script setup lang="ts">
import BooksList from '../components/BooksList.vue'
</script>

<template>
    <main>
        <div class="books-hero mx-auto">
            <div class="books-hero-inner">
                <div class="books-hero-icon">
                    <i class="bi bi-book"></i>
                </div>
                <div class="books-hero-text">
                    <h1 class="books-hero-title">bitcoin <span class="books-hero-accent">könyvek</span></h1>
                    <p class="books-hero-lead">
                        Magyarul elérhető bitcoin könyvek — több közülük ingyenesen letölthető.
                    </p>
                </div>
            </div>
        </div>
        <BooksList />
        <div class="bottom-space no-response"><!-- empty --></div>
    </main>
</template>

<style scoped>
.books-hero {
    padding: 3.5rem 1rem 1.5rem;
    max-width: 780px;
}

.books-hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.books-hero-icon {
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

.books-hero-text {
    text-align: left;
}

.books-hero-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.8rem;
    color: #fff;
    letter-spacing: -0.5px;
}

.books-hero-accent {
    color: #f7931a;
}

.books-hero-lead {
    font-size: 1rem;
    opacity: 0.78;
    line-height: 1.6;
    max-width: 560px;
    margin-bottom: 0.6rem;
}

@media (max-width: 576px) {
    .books-hero-inner {
        flex-direction: column;
        text-align: center;
    }
    .books-hero-text {
        text-align: center;
    }
    .books-hero-title {
        font-size: 1.8rem;
    }
    .books-hero-lead {
        max-width: 100%;
    }
}
</style>
