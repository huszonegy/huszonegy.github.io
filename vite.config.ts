import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  ssr: {
    // Externalize bootstrap for SSG build (it uses browser APIs)
    noExternal: ['bootstrap'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Elnémítja a külső könyvtárakból (Bootstrap) érkező figyelmeztetéseket
        quietDeps: true,
        // Kifejezetten letiltja az új Sass verzió "nyűgjeit" a build során
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'mixed-decls'],
      },
    },
  },
})
