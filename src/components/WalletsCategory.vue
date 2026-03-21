<script setup lang="ts">
import WalletsCategoryItem from '../components/WalletsCategoryItem.vue';

// Category data
defineProps<{
    cat: any
}>()
</script>

<template>
    <div :id="cat.id" class="py-4 px-1 category-wrapper">
        <h3>
            {{ cat.name }}
        </h3>
        <div>
            {{ cat.text }}
        </div>
        <div v-if="cat.bulletsIntro" class="mt-2">{{ cat.bulletsIntro }}</div>
        <ul v-if="cat.bullets" class="mt-1 mb-0">
            <li v-for="bullet in cat.bullets">{{ bullet }}</li>
        </ul>

        <!-- Subcategories -->
        <template v-if="cat.subcategories">
            <div v-for="sub in cat.subcategories" :id="sub.id" class="mt-4">
                <h4 class="mb-3">{{ sub.name }}</h4>
                <div>{{ sub.text }}</div>
                <div class="row mt-3">
                    <WalletsCategoryItem v-for="item in sub.items" :item="item" class="card mx-2 my-2" style="width: 25rem;" />
                </div>
                <div v-if="sub.outro" class="py-1 px-1">
                    {{ sub.outro }}
                </div>
            </div>
        </template>

        <!-- Direct items (no subcategories) -->
        <template v-else>
            <div class="row mt-3">
                <WalletsCategoryItem v-for="item in cat.items" :item="item" class="card mx-2 my-2" style="width: 25rem;" />
            </div>
            <div v-if="cat.outro" class="cat-outro mt-3 py-4 px-4 rounded">
                {{ cat.outro }}
            </div>
        </template>
    </div>
</template>

<style scoped>
.category-wrapper {
    max-width: calc(3 * 25rem + 3 * 1rem);
}
.cat-outro {
    font-size: 0.88rem;
    color: rgba(255, 255, 255, 0.6);
    background: rgba(255, 255, 255, 0.06);
    display: inline-block;
}
</style>
