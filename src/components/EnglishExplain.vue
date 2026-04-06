<template>
    <div class="card px-4 py-4 my-3">
        <p class="card-text">
            The Huszonegy community works for a decentralized future based on Bitcoin.
        </p>
        <div class="center">
            <a href="/forum" target="_blank">
                <button type="button" class="btn btn-custom">Visit forum</button>
            </a>
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