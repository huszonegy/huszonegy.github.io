<script setup lang="ts">
import WalletsCategory from '../components/WalletsCategory.vue';
import { wallets } from '../data/wallets';
</script>

<template>
    <div name="wallets-list" class="container-flex py-3">
        <div class="py-1 px-1" style="font-style: italic;">
            <strong>Figyelmeztetések:</strong>
            <br/>
            Az egyszerűsített ajánlások nagyon szubjektívek, és messze nem tudnak figyelembe venni minden szempontot!
            <br/>
            Nincs érdekeltségünk egyik ajánlott szolgáltatással vagy termékkel kapcsolatban sem.
            <br/>
            Az itt felsorolt szoftver/technológiai elemzések nem befektetési tanácsok!
        </div>
        <!-- contents -->
        <div class="py-3 px-1">
            <h2>Kategóriák:</h2>
            <!-- loop is a bit tricker than simple `in wallets.categories` to be able to print index number as well -->
            <div v-for="idx in Array.from(Array(wallets.categories.length).keys())">
                <a :href="'#' + wallets.categories[idx].id">{{ idx + 1 }}. {{ wallets.categories[idx].name }}</a>
            </div>
        </div>
        <!-- categories -->
        <div class="py-1 px-1">
            <WalletsCategory v-for="cat in wallets.categories" :id="cat.id" :cat="cat" />
        </div>
        <div class="py-1 px-1">
            {{ wallets.outro }}
        </div>
    </div>
</template>

<style scoped></style>
