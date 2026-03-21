<script setup lang="ts">
</script>

<template>
    <main style="width: auto;">
        <div class="row">
            <div class="col-12 col-lg-10 mx-auto center">
                <div class="meetup-hero mx-auto">
                    <div class="meetup-hero-inner">
                        <div class="meetup-hero-icon">
                            <i class="bi bi-people-fill"></i>
                        </div>
                        <div class="meetup-hero-text">
                            <h1 class="meetup-hero-title">bitcoin <span class="meetup-hero-accent">meetup</span></h1>
                            <p class="meetup-hero-lead">
                                A meetup portálon láthatók az aktuális találkozók.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="center mt-2 mb-4">
                    <a href="https://portal.huszonegy.world/hu/meetups" target="_blank" class="btn btn-custom">
                        Irány a meetup portál
                    </a>
                </div>
            </div>
            <div class="col-12 col-lg-10 mx-auto center">
                <div class="card py-4 px-5 my-3 mx-auto" style="max-width: 760px;">
                    <div style="text-align: left;">
                        <h5 class="mb-3" style="font-weight: 700; color: #fff;">Szeretnél meetupot szervezni?</h5>
                        <ul class="meetup-steps">
                            <li>válassz egy alkalmas helyszínt!</li>
                            <li>jelentkezz be a <a href="https://portal.huszonegy.world/hu/meetups" target="_blank">meetup portálra</a> Nostr vagy Lightning azonosítóval!</li>
                            <li>a 'Meetupok' oldalon a 'Meetup létrehozása' gombbal hozz létre új meetupot!</li>
                            <li>a konkrét meetup alatt tudsz hozzárendelni új eseményt.</li>
                            <li>oszd meg a telegram csoportban is az esemény részleteit!</li>
                        </ul>
                        <p class="meetup-note">
                            A közzétett események automatikusan megjelennek Nostr-en és a Club Orange appban is.
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-10 mx-auto center">
                <div class="meetup-gallery mx-auto my-5">
                    <p class="meetup-note mb-2">Meetup minta:</p>
                    <a href="https://portal.huszonegy.world/hu/meetups" target="_blank">
                        <img src="/pics/meetup-portal-list1.png" class="meetup-img rounded" />
                    </a>
                    <a href="https://portal.huszonegy.world/hu/meetups" target="_blank">
                        <img src="/pics/meetup-portal-map.jpg" class="meetup-img-small rounded" />
                    </a>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.meetup-hero {
    padding: 3.5rem 1rem 0;
    max-width: 760px;
}

.meetup-hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.meetup-hero-icon {
    flex-shrink: 0;
    font-size: 5rem;
    color: #fff;
    text-shadow: 0 0 48px rgba(247, 147, 26, 0.6), 0 0 96px rgba(247, 147, 26, 0.4);
}

.meetup-hero-text {
    text-align: left;
    max-width: 450px;
}

.meetup-hero-title {
    font-size: 2rem;
    font-weight: 700;
    margin: 0 0 0.8rem;
    color: #fff;
    letter-spacing: -0.5px;
}

.meetup-hero-accent {
    color: #f7931a;
}

.meetup-hero-lead {
    font-size: 1rem;
    opacity: 0.78;
    line-height: 1.6;
    max-width: 480px;
    margin-bottom: 0.6rem;
}

.meetup-steps {
    padding-left: 2rem;
    margin-bottom: 1rem;
}

.meetup-steps li {
    margin-bottom: 0.4rem;
    line-height: 1.6;
}

.meetup-steps a {
    color: #f7931a;
}

.meetup-note {
    font-size: 0.9rem;
    opacity: 0.65;
    margin-bottom: 0;
}

.meetup-gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 760px;
}

.meetup-img,
.meetup-img-small {
    height: auto;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    border: 1px solid transparent;
    transition: border-color 0.2s ease;
}

.meetup-img {
    width: 100%;
}

.meetup-img-small {
    max-width: 400px;
}

.meetup-img:hover,
.meetup-img-small:hover {
    border-color: #f7931a;
}

@media (max-width: 576px) {
    .meetup-hero-inner {
        flex-direction: column;
        text-align: center;
    }
    .meetup-hero-text {
        text-align: center;
    }
    .meetup-hero-title {
        font-size: 1.8rem;
    }
    .meetup-hero-lead {
        max-width: 100%;
    }
}
</style>
