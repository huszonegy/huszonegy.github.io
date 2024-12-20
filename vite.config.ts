import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isSSR = mode === 'ssr'; // Use the `mode` to distinguish SSR builds

  return {
    plugins: [
      vue(),
      createHtmlPlugin({
        minify: { removeComments: false }
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Ensure '@' resolves to the 'src' folder
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: [path.resolve(__dirname, 'node_modules')], // Add node_modules to load paths
        },
      },
    },
    build: {
      cssCodeSplit: true, // Extract CSS into standalone files
      ssr: isSSR ? 'src/server-entry.ts' : false, // Use server entry for SSR
      outDir: isSSR ? 'dist/server' : 'dist/client', // Separate output directories
      rollupOptions: {
        input: isSSR ? 'src/server-entry.ts' : 'index.html', // Use appropriate entry points
        output: {
          entryFileNames: '[name].js', // Ensure consistent output filenames
        },
        external: ['@/assets/logo/github-mark-white.svg'], // Mark asset as external
      },
    },
  };
});

