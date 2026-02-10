import { useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export function useRouteHead() {
  const route = useRoute()
  useHead({
    title: computed(() => (route.meta.title as string) || 'HUSZONEGY - csak bitcoinról, magyarul'),
    meta: computed(() =>
      ((route.meta.metaTags as Array<{ name: string; content: string }>) || []).map((t) => ({
        name: t.name,
        content: t.content,
      }))
    ),
  })
}
