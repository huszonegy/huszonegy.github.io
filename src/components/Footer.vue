<script setup lang="ts">
import { get_links_filter } from '../data/links'
</script>

<template>
    <div name="footer" class="footer container-flex justify-content-center" style="background-color: var(--bs-body-bg);">
        <div class="row px-1 py-2 justify-content-center center">

            <div class="col col-2 py-3">
                <a href="/support">Támogass! ⚡</a>
            </div>

            <div class="col-auto">
                <ul class="nav justify-content-center">
                    <li v-for="link in get_links_filter() " class="nav-item">
                        <div v-if="link.footer">
                            <a class="nav-link" aria-current="page" :href="link.link" target="_blank">
                                <span v-if="link.logo"><img :src="link.logo" height="32" :alt="link.name" /></span>
                                <span v-else>{{ link.name }}</span>
                            </a>
                        </div>
                    </li>
                    <!-- More ... -->
                    <li class="nav-item">
                        <a class="nav-link" href="/links">...</a>
                    </li>
                </ul>
            </div>

            <div class="col col-2 d-inline-flex align-items-center justify-content-end">
                <div class="small text-end text-secondary">
                    ©️ 2024 | CC0-1.0 | v0.1
                </div>
                <!-- Github link, logo; note that it is white icon -->
                <div class="" style="padding: 5px; background-color: var(--bs-dark);">
                    <a href="https://github.com/huszonegy/huszonegy.github.io/" target="_blank">
                        <img src="@/assets/logo/github-mark-white.svg" width="16" height="16" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
