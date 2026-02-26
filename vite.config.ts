import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// JAVÍTÁS 1: Vedd le a .ts kiterjesztést az import végéről!
import { podcasts, slugify } from './src/data/podcasts'

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
  // JAVÍTÁS 2: Típusok (any) hozzáadása és az el nem használt 'routes' elé alulvonás (_)
  ssgOptions: {
    includedRoutes(paths: any, _routes: any) {
      const staticPaths = paths;
      const podcastPaths = podcasts.map(p => `/podcast/${slugify(p.name)}`);
      return [...staticPaths, ...podcastPaths];
    }
  }
} as any) // JAVÍTÁS 3: Az 'as any' megoldja az ssgOptions ismeretlen tulajdonság hibáját