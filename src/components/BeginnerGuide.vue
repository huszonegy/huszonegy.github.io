<script setup lang="ts">
import { RouterLink } from 'vue-router'

const steps = [
    {
        title: 'Hallgasd a podcastot!',
        desc: 'Kereshető epizódok átirattal, beágyazott lejátszóval és időbélyeges fejezetcímekkel.',
        link: '/podcast',
        icon: 'bi-mic'
    },
    {
        title: 'Nézd meg az előadásokat!',
        desc: 'Magyar nyelvű Bitcoin előadások és konferencia-felvételek.',
        link: '/eloadas',
        icon: 'bi-easel'
    },
    {
        title: 'Nézz oktatóvideót!',
        desc: 'Magyar nyelvű és feliratos oktatóvideók a Bitcoinról.',
        link: '/oktatovideo',
        icon: 'bi-play-circle'
    },
    {
        title: 'Olvass bele egy könyvbe!',
        desc: 'Magyarul elérhető Bitcoin könyvek — több közülük ingyenesen letölthető.',
        link: '/konyv',
        icon: 'bi-book'
    },
    {
        title: 'Készíts saját tárcát!',
        desc: 'Összehasonlítás és segédlet a Lightning, mobil, asztali és hardver tárcákhoz.',
        link: '/tarcak',
        icon: 'bi-wallet2'
    },
    {
        title: 'Csatlakozz a közösséghez!',
        desc: 'Telegram csoport napi beszélgetésekkel és személyes találkozók országszerte.',
        link: '/forum',
        icon: 'bi-people'
    }
]
</script>

<template>
    <section class="beginner-section pt-5 pb-5">
        <h2 class="visually-hidden">Fedezd fel a tartalmainkat</h2>
        <div class="row g-3 mx-2">
            <div v-for="(step, i) in steps" :key="i" class="col-md-4 col-sm-6">
                <RouterLink
                    :to="step.link"
                    class="text-decoration-none"
                >
                    <div class="card beginner-card h-100 py-3 px-3">
                        <div class="card-body text-center">
                            <i class="bi beginner-icon" :class="step.icon"></i>
                            <h3 class="card-title mt-1">{{ step.title }}</h3>
                            <p class="card-text">{{ step.desc }}</p>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.beginner-icon {
    font-size: 1.7rem;
    color: #f7931a;
    display: block;
    margin-bottom: 0.2rem;
}

.beginner-card {
    transition: border-color 0.4s ease;
    cursor: pointer;
}

.beginner-card:hover {
    border-color: #f7931a;
}

.beginner-card .card-title {
    font-size: 0.88rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
}

.beginner-card .card-text {
    color: rgba(255, 255, 255, 0.5) !important;
    font-size: 0.78rem;
    line-height: 1.45;
    margin-bottom: 0;
}
</style>
