<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="card py-4 px-5 my-0 mx-4">
        <h5 class="card-title mb-3">Mire számíthatsz?</h5>
        <ul class="forum-list">
            <li>Élénk beszélgetések a Bitcoin technológiájáról, gazdasági hátteréről és társadalmi jelentőségéről.</li>
            <li>Hírek, elemzések, fordítások első kézből.</li>
            <li>Segítőkész közösség, ahol nincs buta kérdés.</li>
            <li>Szerveződő meetupok, közös projektek — ez a honlap és a podcast is innen nőtt ki.</li>
        </ul>
        <p class="card-text mt-2">
            Egyre több városban szervezünk személyes
            <RouterLink to="/meetup">Bitcoin találkozókat</RouterLink>
            — nézd meg, hol és mikor lesz a következő meetup!
        </p>
    </div>
</template>

<style scoped>
.forum-list {
    padding-left: 1.2em;
}
.forum-list li {
    margin-bottom: 0.5em;
    line-height: 1.5;
}
</style>
