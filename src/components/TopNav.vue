<script setup lang="ts">
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="/logo/he-logo-oneline-1-200x64.png" alt="huszonegy" height="32">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/forum">Fórum</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/hirek">Hír</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/cikkek">Cikk</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/podcast">Podcast</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/eloadas">Előadás</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/oktato-video">Oktató videó</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/konyvek">Könyv</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/tarcak">Tárcák</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Whitepaper
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/files/bitcoin_tanulmany.pdf" target="_blank">
                                    Bitcoin tanulmány (HU)
                                </a></li>
                            <li><a class="dropdown-item" href="/files/bitcoin.pdf" target="_blank">
                                    Bitcoin whitepaper (eredeti, EN)
                                </a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/tamogatas">Támogatás</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/linkek">Link</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>
