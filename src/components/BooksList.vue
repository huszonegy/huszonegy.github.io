<script setup lang="ts">
import BooksItem from '../components/BooksItem.vue';
import { get_book_ids } from '../data/books';
</script>

<template>
    <!-- List with all books -->
    <h2>Magyarul</h2>
    <div name="books-list" class="container-flex books">
        <BooksItem v-for="bid in get_book_ids(true)" :id="bid" />
    </div>
    <h2>Angolul</h2>
    <div name="books-list" class="container-flex books">
        <BooksItem v-for="bid in get_book_ids(false)" :id="bid" />
    </div>

</template>

<style scoped></style>
