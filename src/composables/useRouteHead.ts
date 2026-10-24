import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

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
