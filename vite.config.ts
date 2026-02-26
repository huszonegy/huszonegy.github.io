import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { podcasts, slugify } from './src/data/podcasts'
import generateSitemap from 'vite-ssg-sitemap'

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
    noExternal: ['bootstrap'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'mixed-decls'],
      },
    },
  },
  ssgOptions: {
    includedRoutes(paths: any, _routes: any) {
      const staticPaths = paths;
      const podcastPaths = podcasts.map(p => `/podcast/${slugify(p.name)}`); //
      return [...staticPaths, ...podcastPaths];
    },
    // Ez a rész fogja automatikusan elkészíteni a sitemap.xml-t
    onFinished() {
      generateSitemap({
        hostname: 'https://huszonegy.world',
        // Opcionális: kizárhatsz oldalakat, ha szükséges
        exclude: ['/404'] 
      })
    }
  }
} as any)