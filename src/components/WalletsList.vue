<script setup lang="ts">
import WalletsCategory from '../components/WalletsCategory.vue';
import { wallets } from '../data/wallets';
</script>

<template>
    <div name="wallets-list" class="container-flex py-3 wallets">
        <p v-if="wallets.intro" class="intro px-1 mb-4">{{ wallets.intro }}</p>
        <!-- contents -->
        <nav class="px-1" aria-label="Tárca kategóriák">
            <p class="toc-title">Tárca kategóriák</p>
            <ul class="mb-0">
                <li v-for="cat in wallets.categories" class="mb-1">
                    <a :href="'#' + cat.id">{{ cat.name }}</a>
                    <ul v-if="cat.subcategories" class="mb-0">
                        <li v-for="sub in cat.subcategories">
                            <a :href="'#' + sub.id" class="toc-sub">{{ sub.name }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- categories -->
        <div class="py-1 px-1">
            <WalletsCategory v-for="cat in wallets.categories" :id="cat.id" :cat="cat" />
        </div>
        <div v-if="wallets.outro" class="py-1 px-1">
            {{ wallets.outro }}
        </div>
        <p class="disclaimer px-2 mt-3 mb-0">
            Az ajánlások a saját tapasztalatainkon alapulnak, és nem befektetési tanácsok. A Relai a partnerünk:
            az ajánlókóddal a HUSZONEGY működését is támogatod. A többi ajánlott szolgáltatással nincs üzleti kapcsolatunk.
        </p>
    </div>
</template>

<style scoped>
/* Ugyanaz a szélesség, mint az alatta lévő kategóriablokkoké (WalletsCategory .category-wrapper) */
.intro {
    max-width: calc(3 * 25rem + 3 * 1rem);
    overflow-wrap: break-word;
}
/* Csak tartalomjegyzék, ezért nem címsor — de a korábbi H2 kinézetét tartja */
.toc-title {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.2;
    margin: 0 0 20px;
}
.toc-sub {
    text-transform: lowercase;
}
.disclaimer {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.55);
    max-width: 75ch;
}
</style>
