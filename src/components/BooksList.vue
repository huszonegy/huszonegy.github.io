<script setup lang="ts">
import BooksItem from '../components/BooksItem.vue';
import { get_book_ids } from '../data/books';
</script>

<template>
    <!-- List with all books -->
    <div name="books-list" class="container-flex" style="margin-bottom: 50px;">
        <BooksItem v-for="bid in get_book_ids()" :id="bid" />
    </div>
</template>

<style scoped></style>
