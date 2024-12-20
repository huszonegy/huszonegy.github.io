<script setup lang="ts">
import { get_links_filter } from '../data/links'
</script>

<template>
    <div name="footer" class="footer container-flex justify-content-center" style="background-color: var(--bs-body-bg);">
        <div class="row px-1 py-2 justify-content-center center">

            <div class="col col-auto py-3">
                <a href="/tamogatas">Támogass! ⚡</a>
            </div>

            <div class="col col-auto">
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
                </ul>
            </div>

            <div class="col col-auto py-3">
                <div class="small text-end text-secondary" style="padding-top: 3px;">
                    ©️ 2024 | CC0-1.0 | v0.1
                </div>
            </div>
            <div class="col col-auto py-3">
                <!-- Github link, logo; note that it is white icon -->
                <a href="https://github.com/huszonegy/huszonegy.github.io/" target="_blank">
                    <img src="/assets/logo/github-mark-white.svg" width="16" height="16" />
                </a>
            </div>
        </div>
    </div>
</template>
