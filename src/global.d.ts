interface GoatCounter {
  count(vars: { path?: string; title?: string; event?: boolean }): void
}

declare global {
  interface Window {
    goatcounter?: GoatCounter
  }
}

export {}
