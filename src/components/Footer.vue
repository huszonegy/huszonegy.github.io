<script setup lang="ts">
import { links } from '../data/links'
import { link_simplified } from '../utils'
</script>

<template>
    <div name="footer" class="footer container-flex justify-content-center" style="background-color: var(--bs-body-bg);">
        <div class="row px-1 py-2 justify-content-center center">
            <div class="py-3">
                <a href="/support">Támogasd tevékenységünket btc adománnyal!</a>
            </div>
            <div class="py-1 small">
                ©️2024 | CC0-1.0 | v0.1
                <a href="https://github.com/huszonegy/huszonegy-web-farsang" target="_blank">
                    <img src="@/assets/logo/github-mark-white.svg" width="20" height="20" />
                </a>
            </div>
        </div>     
    </div>
</template>
