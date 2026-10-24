/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }

declare module 'virtual:transcript-chapters' {
  // epizód-id → fejezetindexekkel párhuzamos tömb: melyik átirat-bekezdés elé kerül a fejezetcím (null: nincs helye)
  const map: Record<string, (number | null)[]>
  export default map
}
