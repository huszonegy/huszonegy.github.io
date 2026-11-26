<script setup lang="ts">
import { onMounted, ref } from 'vue'

// A közelgő magyar meetup-időpontok a meetup portál nyilvános API-jából, az oldal megnyitásakor.
// Az esemény-végpont a szerveren szűr országra, és csak a közelgő (meg a legfeljebb 7 napja véget ért)
// eseményeket adja vissza, így csak néhány KB jön le. A lezajlottakat itt szűrjük ki.
const API_URL = 'https://portal.huszonegy.world/api/meetup-events?country=hu'

interface PortalEvent {
    id: number
    title: string
    start_iso: string
    end_iso: string | null
    location: string | null
    'meetup.name': string
    'meetup.city': string | null
    'meetup.portalLink': string
}

interface UpcomingEvent {
    meetupName: string
    city: string | null
    title: string
    start: Date
    location: string | null
    link: string
}

const events = ref<UpcomingEvent[]>([])
const status = ref<'loading' | 'ready' | 'error'>('loading')

// Dátum két rövid sorban: „december 3.” / „csütörtök, 18:00”. Az évszám csak akkor kerül ki,
// ha az esemény nem az idei évben van.
const TZ = 'Europe/Budapest'
const yearFormat = new Intl.DateTimeFormat('hu-HU', { timeZone: TZ, year: 'numeric' })
const dayFormat = new Intl.DateTimeFormat('hu-HU', { timeZone: TZ, month: 'long', day: 'numeric' })
const dayWithYearFormat = new Intl.DateTimeFormat('hu-HU', { timeZone: TZ, year: 'numeric', month: 'long', day: 'numeric' })
const weekdayFormat = new Intl.DateTimeFormat('hu-HU', { timeZone: TZ, weekday: 'long' })
const timeFormat = new Intl.DateTimeFormat('hu-HU', { timeZone: TZ, hour: '2-digit', minute: '2-digit' })

function formatDay(d: Date): string {
    const sameYear = yearFormat.format(d) === yearFormat.format(new Date())
    return (sameYear ? dayFormat : dayWithYearFormat).format(d)
}

function formatWeekdayTime(d: Date): string {
    return `${weekdayFormat.format(d)}, ${timeFormat.format(d)}`
}

onMounted(async () => {
    try {
        const res = await fetch(API_URL)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const portalEvents: PortalEvent[] = await res.json()
        const now = Date.now()
        events.value = portalEvents
            // a még véget nem ért események maradnak (a folyamatban lévő is)
            .filter((e) => new Date(e.end_iso ?? e.start_iso).getTime() > now)
            .map((e) => ({
                meetupName: e['meetup.name'],
                city: e['meetup.city'],
                title: e.title,
                start: new Date(e.start_iso),
                location: e.location,
                // az eseményoldal a portálon: <meetup-oldal>/event/<id>
                link: `${e['meetup.portalLink']}/event/${e.id}`,
            }))
            .filter((e) => !isNaN(e.start.getTime()))
            .sort((a, b) => a.start.getTime() - b.start.getTime())
        status.value = 'ready'
    } catch {
        status.value = 'error'
    }
})
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
                        Gyere el egy közeli találkozóra, ismerd meg személyesen a magyar bitcoinereket!
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-if="status !== 'error'" class="col-12 col-lg-10 mx-auto">
                <section class="upcoming mx-auto">
                    <h2 class="upcoming-title">Közelgő meetupok</h2>
                    <p v-if="status === 'loading'" class="upcoming-empty">Időpontok betöltése…</p>
                    <p v-else-if="events.length === 0" class="upcoming-empty">
                        Most nincs meghirdetett időpont. A portálon és a Telegram csoportban szólunk, ha lesz.
                    </p>
                    <template v-else>
                    <a v-for="e in events" :key="e.link" :href="e.link" target="_blank" rel="noopener noreferrer"
                        class="card event-card my-2">
                        <div class="event-date">
                            <span class="event-day">{{ formatDay(e.start) }}</span>
                            <span class="event-time">{{ formatWeekdayTime(e.start) }}</span>
                        </div>
                        <div class="event-body">
                            <div class="event-title">{{ e.title }}</div>
                            <div class="event-meta">
                                {{ e.meetupName }}<template v-if="e.location"> · {{ e.location }}</template><template
                                    v-else-if="e.city"> · {{ e.city }}</template>
                            </div>
                        </div>
                        <i class="bi bi-box-arrow-up-right event-arrow" aria-hidden="true"></i>
                    </a>
                    </template>
                </section>
            </div>
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
                <div class="card meetup-card my-3 mx-auto">
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
    /* ugyanaz a belső margó, mint az eseménykártyáké, hogy a szövegek egy vonalban kezdődjenek */
    padding: 1.5rem 1.25rem;
}

.upcoming {
    max-width: 760px;
    margin-bottom: 1rem;
}

.upcoming-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    margin: 0.5rem 0 0.8rem;
}

.upcoming-empty {
    font-size: 0.95rem;
    opacity: 0.7;
}

.event-card {
    display: flex;
    /* a Bootstrap .card oszlopirányú flexet ad, itt sorban kell */
    flex-direction: row;
    align-items: center;
    gap: 1.25rem;
    padding: 1rem 1.25rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    transition: border-color 0.15s ease;
}

.event-card:hover {
    border-color: #f7931a;
}

.event-date {
    flex: 0 0 9.5rem;
    display: flex;
    flex-direction: column;
}

.event-day {
    font-weight: 600;
    color: #f7931a;
}

.event-time {
    font-size: 0.9rem;
    opacity: 0.75;
}

.event-body {
    flex: 1;
    min-width: 0;
}

.event-title {
    font-weight: 700;
    color: #fff;
}

.event-meta {
    font-size: 0.9rem;
    opacity: 0.7;
}

.event-arrow {
    opacity: 0.5;
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
    .event-card {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.4rem;
    }
    .event-date {
        flex-basis: auto;
    }
    .event-arrow {
        display: none;
    }
}
</style>
