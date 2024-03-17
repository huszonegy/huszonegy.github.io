<script setup lang="ts">
import { links } from '../data/links'
import { link_simplified } from '../utils'
</script>

<template>
    <h1>Bitcoin linkek</h1>
    <div name="links-list" class="container-flex py-3">
        <div class="row">
            <div v-for="link in links" class="card mx-2 my-2" style="width: 16rem;">

                <div class="d-flex align-items-end center" style="min-height: 80px;">
                    <a :href="link.link" target="_blank" class="link small">
                        <img v-if="link.logo" class="card-img-top" :src="link.logo" :alt="link.name" width="150px" height="48" />
                    </a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{ link.name }}</h5>
                    <p class="card-text" v-html="link.text" />
                    <a :href="link.link" target="_blank" class="link small">
                        {{ link.show || link_simplified(link.link) }}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card-img-top {
        width: initial;
        border-radius: 4px;
        margin: 4px auto;
    }
</style>
