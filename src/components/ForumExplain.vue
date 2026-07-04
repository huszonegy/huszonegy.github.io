<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="card py-4 px-5 my-0 mx-4">
        <h5 class="card-title mb-3">Mire számíthatsz?</h5>
        <ul class="forum-list">
            <li>Élénk beszélgetések a Bitcoinról: technológia, közgazdaságtan, szabadság...</li>
            <li>Hírek, elemzések, fordítások első kézből.</li>
            <li>Segítőkész közösség kezdőknek és haladóknak egyaránt.</li>
            <li>Meetupok és közös projektek, amikből ez a honlap és a podcast is kinőtt.</li>
        </ul>
    </div>
    <p class="forum-meetup-link">
        Több városban is szervezünk
        <RouterLink to="/meetup/">személyes Bitcoin találkozókat</RouterLink>.
    </p>
</template>

<style scoped>
.forum-list {
    padding-left: 1.2em;
}
.forum-list li {
    margin-bottom: 0.5em;
    line-height: 1.5;
}
.forum-meetup-link {
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 1rem;
    opacity: 0.75;
}
</style>
