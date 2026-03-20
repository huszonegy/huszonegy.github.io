<script setup lang="ts">
</script>

<template>
    <div class="card py-5 px-5 my-3 mx-4">
        <h3 class="card-title mb-4 center">Csatlakozz a magyar Bitcoin közösséghez!</h3>
        <p class="card-text" style="font-size: 1.1em;">
            A HUSZONEGY fórum a Telegram-on működik — itt beszélgetünk a Bitcoinról nap mint nap, magyarul, nyíltan.
            Kérdezz bátran, oszd meg, amit találtál, vagy egyszerűen csak kövesd a diskurzust!
        </p>
        <p class="card-text mt-3">
            <strong>Fő szabályunk:</strong> csak Bitcoinról, magyarul.
        </p>
        <div class="center mt-4">
            <a href="https://t.me/huszonegy" target="_blank">
                <button type="button" class="btn btn-custom">Csatlakozz a Telegram csoporthoz →</button>
            </a>
        </div>
        <div class="center mt-3">
            <img src="/pics/qr_21_tgram.png" width="160" class="qr-code" />
        </div>
    </div>
</template>

<style scoped>
.qr-code {
    opacity: 0.85;
    transition: opacity 0.2s;
}
.qr-code:hover {
    opacity: 1;
}
</style>
