<script setup lang="ts">
import WalletsCategory from '../components/WalletsCategory.vue';
import { wallets } from '../data/wallets';
</script>

<template>
    <div name="wallets-list" class="container-flex py-3">
        <!-- contents -->
        <div class="py-3 px-1">
            <h2>Tárca kategóriák</h2>
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
        </div>
        <div class="notice-box mt-3 py-4 px-4 rounded">
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
