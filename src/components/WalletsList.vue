<script setup lang="ts">
import WalletsCategory from '../components/WalletsCategory.vue';
import { wallets } from '../data/wallets';
</script>

<template>
    <div name="wallets-list" class="container-flex py-3 wallets">
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
        <div class="notice-box mt-4 py-4 px-4 rounded">
            <strong>Mielőtt választasz:</strong>
            <ul class="mt-2 mb-0">
                <li>Az egyszerűsített ajánlások nagyon szubjektívek, és messze nem tudnak figyelembe venni minden szempontot!</li>
                <li>Nincs érdekeltségünk egyik ajánlott szolgáltatással vagy termékkel kapcsolatban sem.</li>
                <li>Az itt felsorolt szoftver/technológiai elemzések nem befektetési tanácsok!</li>
            </ul>
        </div>
        <!-- categories -->
        <div class="py-1 px-1">
            <WalletsCategory v-for="cat in wallets.categories" :id="cat.id" :cat="cat" />
        </div>
        <div v-if="wallets.outro" class="py-1 px-1">
            {{ wallets.outro }}
        </div>
    </div>
</template>

<style scoped>
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
.notice-box {
    background: rgba(255, 255, 255, 0.06);
    font-size: 0.88rem;
    color: rgba(255, 255, 255, 0.6);
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, 0.15);
}
</style>
