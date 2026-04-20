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
    meta: computed(() =>
      ((route.meta.metaTags as Array<{ name: string; content: string }>) || []).map((t) => ({
        name: t.name,
        content: t.content,
      }))
    ),
    link: computed(() => [
      {
        rel: 'canonical',
        href: `https://huszonegy.world${route.path}`,
      },
    ]),
  })
}
