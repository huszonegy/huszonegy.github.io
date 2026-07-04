<script setup lang="ts">
</script>

<template>
    <main>
        <div class="meetup-hero mx-auto">
            <div class="meetup-hero-inner">
                <div class="meetup-hero-icon">
                    <i class="bi bi-people-fill"></i>
                </div>
                <div class="meetup-hero-text">
                    <h1 class="meetup-hero-title">bitcoin <span class="meetup-hero-accent">meetup</span></h1>
                    <p class="meetup-hero-lead">
                        Az aktuális találkozókat a HUSZONEGY meetup portálján tartjuk naprakészen.
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-lg-10 mx-auto center py-2">
                <div class="center mt-2 mb-4">
                    <a href="https://portal.huszonegy.world/hu/meetups" target="_blank" rel="noopener noreferrer" class="btn btn-custom">
                        Irány a meetup portál
                    </a>
                    <p class="portal-note mx-auto mt-3">
                        A portál a HUSZONEGY nyílt, Nostr-alapú eseménykezelője, ahol a közösség maga szervezi a meetupokat. Ezért külön oldalon él, nem itt a honlapon.
                    </p>
                </div>
            </div>
            <div class="col-12 col-lg-10 mx-auto center">
                <div class="card meetup-card py-4 px-5 my-3 mx-auto">
                    <div class="meetup-card-body">
                        <h5 class="meetup-card-title mb-3">Szeretnél meetupot szervezni?</h5>
                        <ul class="meetup-steps">
                            <li>válassz egy alkalmas helyszínt!</li>
                            <li>jelentkezz be a <a href="https://portal.huszonegy.world/hu/meetups" target="_blank" rel="noopener noreferrer">meetup portálra</a> Nostr vagy Lightning azonosítóval!</li>
                            <li>a 'Meetupok' oldalon a 'Meetup létrehozása' gombbal hozz létre új meetupot!</li>
                            <li>a konkrét meetup alatt rendelj hozzá új eseményt!</li>
                            <li>oszd meg a Telegram csoportban is az esemény részleteit!</li>
                        </ul>
                        <p class="meetup-note">
                            A közzétett események automatikusan megjelennek Nostr-en és a Club Orange appban is.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
/* Rövid oldal: nagy képernyőn ne kerüljön függőlegesen középre a flexes .centerpage-ben
   (a globális main { margin: auto } különben felfelé is középre húzná a heroval együtt) */
main {
    margin-top: 0;
    margin-bottom: 0;
}

.meetup-hero {
    padding: 3.5rem 1rem 1.5rem;
    max-width: 780px;
}

.meetup-hero-inner {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.meetup-hero-icon {
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    color: #fff;
    text-shadow: 0 0 32px rgba(247, 147, 26, 0.8), 0 0 64px rgba(247, 147, 26, 0.6), 0 0 96px rgba(247, 147, 26, 0.4);
}

.meetup-hero-text {
    text-align: left;
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
    max-width: 560px;
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

.portal-note {
    font-size: 0.9rem;
    opacity: 0.65;
    max-width: 520px;
    line-height: 1.6;
}

.meetup-card {
    max-width: 760px;
}

.meetup-card-body {
    text-align: left;
}

.meetup-card-title {
    font-weight: 700;
    color: #fff;
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
