<script setup lang="ts">
import ForumShort from '../components/ForumShort.vue'
import ForumExplain from '../components/ForumExplain.vue'
import ArticlesList from '../components/ArticlesList.vue'
</script>

<template>
  <main>
    <div name="main-inner" class="container">
      <div class="container-sm py-3 px-3 mx-auto text-center" style="min-height: 400px;">
        <div class="px-3 py-3">
          <img src="@/assets/logo/he-logo-1-640x640.jpeg" class="img-fluid" alt="Huszonegy" width="300" height="300">
        </div>
        <h1 class="px-3 py-3">csak bitcoinról, magyarul</h1>
      </div>

      <ForumShort />
      <!-- <ForumExplain/> -->

      <div class="fs-3 py-1"><a href="/articles">Cikkek</a></div>
      <ArticlesList :max_count=4 />
    </div>
  </main>
</template>
