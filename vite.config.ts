import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue2'
import UnheadVite from '@unhead/addons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    UnheadVite(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  css: {
    devSourcemap: true,
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "src/assets/stylesheets/variables";
          @import "src/assets/stylesheets/helpers/bootstrap-overrides/variables";
        `,
        sourceMap: true,
      },
    },
  },
})
