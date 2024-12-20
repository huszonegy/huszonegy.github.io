<script setup lang="ts">
import WalletsCategoryItem from '../components/WalletsCategoryItem.vue';

// Category data
defineProps<{
    cat: any
}>()
</script>

<template>
    <div :id="cat.id" class="py-4 px-1">
        <h3>
            {{ cat.name }}
        </h3>
        <div>
            {{ cat.text }}
        </div>
        <div class="row">
            <WalletsCategoryItem v-for="item in cat.items" :item="item" class="card mx-2 my-2" style="width: 25rem;" />
        </div>
        <div>
            {{ cat.outro }}
        </div>
    </div>
</template>

<style scoped></style>
