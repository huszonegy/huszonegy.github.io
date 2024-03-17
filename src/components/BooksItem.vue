<script setup lang="ts">
import { get_book } from '../data/books'

// ID of the book to be shown
defineProps<{
    id: string
}>()
</script>

<template>
    <!-- Renders one book, with the given ID -->
    <div v-for="book in get_book(id)" class="card my-4 px-3 py-3" style="max-width: 740px;" :id="book.id">
        <div class="row g-0">
            <div class="col-md-4 content-justify-center center">
                <img v-if="book.img" class="img-fluid rounded-start px-3 py-3" :src="book.img" :alt="book.title" :title="book.title" width="300" />
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h4 class="card-title">
                        {{ book.title }}
                    </h4>
                    <p class="card-text" v-if="book.author">
                        <strong>Szerző:</strong> {{ book.author }}
                    </p>
                    <p class="card-text small" v-if="book.translator">
                        <em>
                            <strong>Fordító:</strong> {{ book.translator }}
                        </em>
                    </p>
                    <!-- <p class="card-text" :v-if="book.year"><small>{{ book.year }}</small></p> -->
                    <p class="card-text" v-html="book.text" />
                    <p class="card-text small" v-html="book.desc" />
                    <p class="card-text small" v-if="book.shop" v-html="book.shop" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
