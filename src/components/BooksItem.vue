<script setup lang="ts">
import { get_book } from '../data/books'

// ID of the book to be shown
defineProps<{
    id: string
}>()
</script>

<template>
    <!-- Renders one book, with the given ID -->
    <div v-for="book in get_book(id)" class="card mb-3" style="max-width: 740px;">
        <div class="row g-0">
            <div class="col-md-4 content-justify-center">
                <img v-if="book.img" class="img-fluid rounded-start px-3 py-4" :src="book.img" alt="cover" width="300" />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h4 class="card-title">
                        {{ book.title }}
                    </h4>
                    <p class="card-text" :v-if="book.author">Szerző: <strong>{{ book.author }}</strong></p>
                    <p class="card-text" :v-if="book.translator"><small>Fordító: {{ book.translator }}</small></p>
                    <!-- <p class="card-text" :v-if="book.year"><small>{{ book.year }}</small></p> -->
                    <p class="card-text" :v-if="book.shop" v-html="'Megvásárolható itt: ' + book.shop" />
                    <p class="card-text" v-html="book.text" />
                    <small>
                        <p class="card-text" v-html="book.desc" />
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
