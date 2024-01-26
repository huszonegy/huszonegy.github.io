<script setup lang="ts">
import { links } from '../data/links'
</script>

<template>
    <div name="footer" class="footer container-flex">
        <ul class="nav container-flex px-3 py-2 justify-content-center" style="background-color: var(--bs-body-bg);">
            <li v-for="link in  links " class="nav-item">
                <div v-if="link.footer">
                    <a class="nav-link" aria-current="page" :href='"https://" + link.link + "/"' target="_blank">
                        {{ link.name }}
                    </a>
                </div>
            </li>
        </ul>
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