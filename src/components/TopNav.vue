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
                        <a class="nav-link" href="/forum">Fórum</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/hirek">Hírek</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/cikkek">Cikkek</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/linkek">Linkek</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/podcast">Podcast</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/konyvek">Könyvek</a>
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
                        <a class="nav-link" href="/tamogatas">Támogatás</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>
