<script setup lang="ts">
import { links } from '../data/links'
</script>

<template>
    <div name="footer" class="footer container-flex justify-content-center" style="background-color: var(--bs-body-bg);">
        <div class="row px-3 py-2 justify-content-center">
            <div class="col">
                <ul class="nav justify-content-center">
                    <li v-for="link in  links " class="nav-item">
                        <div v-if="link.footer">
                            <a class="nav-link" aria-current="page" :href='"https://" + link.link + "/"' target="_blank">
                                {{ link.name }}
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="col col-2 d-inline-flex align-items-center justify-content-end">
                <div class="text-end fs-6 text-secondary">©️ 2024 | CC0-1.0 | v0.1</div>
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