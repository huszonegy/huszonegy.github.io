<template>
    <div class="card px-4 py-4 my-3">
        <p class="card-text">
            Huszonegy is a Hungarian Bitcoin knowledge base and community. It is developed voluntarily by a small group of Hungarian Bitcoiners. The website serves as both a connection point for the community and a source of quality Hungarian-language information for those interested in Bitcoin.
        </p>
        <p class="card-text">
            The Huszonegy Telegram group is open to anyone interested in Bitcoin-related Hungarian-language communication, with the only rule being that only Bitcoin topics are discussed in Hungarian.
        </p>
        <div class="center">
            <a href="https://t.me/huszonegy" target="_blank">
                <button type="button" class="btn btn-custom">Join the group</button>
            </a>
        </div>
        <div class="center">
            <br>
            <img src="/pics/qr_21_tgram.png" width="230">
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.btn-custom {
    background-color: #f7931a;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}
.btn-custom:hover {
    background-color: #e67300;
    transform: translateY(-2px);
    transition: all 0.3s ease;
}
.center {
    text-align: center;
    margin-top: 15px;
}
</style>