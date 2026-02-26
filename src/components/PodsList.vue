<script setup lang="ts">
import { get_pods, slugify } from '../data/podcasts'

defineProps<{
  max_count: number
}>()
</script>

<template>
    <div name="links-list" class="container-flex py-3 podcast">
        <div class="row row-cols-2">
            <div v-for="pod in get_pods(max_count)" class="card mx-2 my-2" style="width: 20rem;">
                <div class="card-body">
                    <h4 class="my-3">
                        <router-link :to="'/podcast/' + slugify(pod.name)" class="link">
                            <img :src="pod.img" :alt="pod.name" :title="pod.name" />
                        </router-link>
                    </h4>
                    <h5 class="top">
                        <router-link :to="'/podcast/' + slugify(pod.name)">
                            {{ pod.name }}
                        </router-link>
                    </h5>
                    <p class="small my-3 grey">
                        {{ pod.date }}&nbsp;<span class="dark">|</span>&nbsp;{{ pod.id }}<span v-for="member in pod.members">&nbsp;<span class="dark">|</span>&nbsp;{{ member }}</span>
                    </p>
                    <p class="small my-3">
                        youtube: 
                        <a :href="pod.yt" target="_blank" class="link">video</a>
                        &nbsp;|&nbsp;
                        fountain: 
                        <a :href="pod.fountain" target="_blank" class="link">audio</a>
                    </p>
                    <p class="small my-3">
                        {{ pod.topic }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
