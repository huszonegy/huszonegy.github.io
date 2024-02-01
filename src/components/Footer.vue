<script setup lang="ts">
import { links } from '../data/links'
import { link_simplified } from '../utils'
</script>

<template>
    <div name="footer" class="footer container-flex justify-content-center" style="background-color: var(--bs-body-bg);">
        <div class="row px-1 py-2 justify-content-center">
            <div class="col">
                <ul class="nav justify-content-center">
                    <li v-for="link in  links " class="nav-item">
                        <div v-if="link.footer">
                            <a class="nav-link" aria-current="page" :href="link.link" target="_blank">
                                <span v-if="link.logo"><img :src="link.logo" height="32" :alt="link.name"/></span>
                                <span v-else>{{ link.name }}</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col col-2 d-inline-flex align-items-center justify-content-end">
                <div class="text-end fs-6 text-secondary">
                    ©️ 2024 | CC0-1.0 | v0.1
                </div>
                <!-- Github link, logo; note that it is white icon -->
                <div class="" style="padding: 5px; background-color: var(--bs-dark);">
                    <a href="https://github.com/huszonegy/huszonegy-web-farsang" target="_blank">
                        <img src="@/assets/logo/github-mark-white.svg" width="20" height="20" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* @media (min-width: 1024px) {
footer {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>