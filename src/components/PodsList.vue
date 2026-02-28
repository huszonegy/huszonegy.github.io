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
                        {{ pod.name }}
                    </h5>
                    <div class="meta-top">
                        <span class="episode-num">#{{ pod.id.replace(/\D/g, '') }}</span>
                        <span class="date">{{ pod.date }}</span>
                    </div>
                    <div class="meta-members">
                        <template v-for="(member, index) in pod.members">
                            <span v-if="index > 0" class="sep">·</span>{{ member }}
                        </template>
                    </div>
                    <p class="my-3 text-center">
                        <router-link :to="'/podcast/' + slugify(pod.name)" class="btn-bovebben">
                            Bővebben <span class="arrow">&#10095;</span>
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.meta-top {
    display: flex;
    align-items: baseline;
    gap: 0.6rem;
    margin-bottom: 0.25rem;
}

.meta-top .episode-num {
    font-family: 'JetBrains Mono', monospace;
    color: #e8860c;
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: -0.02em;
}

.meta-top .date {
    color: #aaa;
    font-size: 0.85rem;
}

.meta-members {
    display: flex;
    flex-wrap: wrap;
    gap: 0.15rem;
    margin-bottom: 0.5rem;
    color: #aaa;
    font-size: 0.85rem;
}

.meta-members .sep {
    color: #777;
    margin: 0 0.1rem;
}

.meta-members::before {
    content: '';
    display: inline-block;
    position: relative;
    top: 2px;
    left: 6px;
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 1rem;
    vertical-align: middle;
    opacity: 0.5;
    background: currentColor;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z'/%3E%3Cpath d='M19 10v2a7 7 0 0 1-14 0v-2'/%3E%3Cline x1='12' y1='19' x2='12' y2='23'/%3E%3Cline x1='8' y1='23' x2='16' y2='23'/%3E%3C/svg%3E") no-repeat center;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z'/%3E%3Cpath d='M19 10v2a7 7 0 0 1-14 0v-2'/%3E%3Cline x1='12' y1='19' x2='12' y2='23'/%3E%3Cline x1='8' y1='23' x2='16' y2='23'/%3E%3C/svg%3E") no-repeat center;
}

.btn-bovebben {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.45rem 1.4rem;
    background-color: transparent;
    color: #e8860c;
    border: 1.5px solid #e8860c;
    border-radius: 6px;
    font-size: 0.85rem;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.02em;
    transition: border-color 0.3s ease, color 0.3s ease;
}

.btn-bovebben .arrow {
    display: inline-block;
    font-size: 0.6rem;
    line-height: 1;
    transition: transform 0.3s ease;
}

.btn-bovebben:hover {
    color: #f5a623;
    border-color: #f5a623;
    text-decoration: none;
}

.btn-bovebben:hover .arrow {
    transform: translateX(5px);
}
</style>