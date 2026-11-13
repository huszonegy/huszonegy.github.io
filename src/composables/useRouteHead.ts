import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

function ogTags(meta: Record<string | number | symbol, unknown>, path: string) {
  const title = meta.title as string | undefined
  if (!title || meta.noindex) return []
  const desc = ((meta.metaTags as Array<{ name: string; content: string }>) || [])
    .find((t) => t.name === 'description')?.content
  const tags: Array<{ name?: string; property?: string; content: string }> = [
    { property: 'og:title', content: title },
    { property: 'og:url', content: `https://huszonegy.world${path}` },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'hu_HU' },
    { name: 'twitter:title', content: title },
  ]
  if (desc) {
    tags.push({ property: 'og:description', content: desc }, { name: 'twitter:description', content: desc })
  }
  return tags
}

export function useRouteHead() {
  const route = useRoute()
  useHead({
    htmlAttrs: {
      lang: 'hu',
      // ha később light mode is kell: 'data-bs-theme': 'dark' (de most statikusan is maradhat)
    },
    title: computed(() => (route.meta.title as string) || 'HUSZONEGY - csak bitcoinról, magyarul'),
    meta: computed(() => [
      ...((route.meta.metaTags as Array<{ name: string; content: string }>) || []).map((t) => ({
        name: t.name,
        content: t.content,
      })),
      // Megosztási előnézet (Facebook, Telegram, X): az oldal saját címe/leírása/URL-je, ne a kezdőlapé.
      // Csak a route.meta-val rendelkező oldalakra; az epizódoldal a saját OG-címkéit állítja.
      ...ogTags(route.meta, route.path),
      // A 404-oldal ne kerüljön indexbe
      ...(route.meta.noindex ? [{ name: 'robots', content: 'noindex' }] : []),
    ]),
    // A 404-oldalnak nincs kanonikus URL-je
    link: computed(() => route.meta.noindex ? [] : [
      {
        rel: 'canonical',
        href: `https://huszonegy.world${route.path}`,
      },
    ]),
  })
}
