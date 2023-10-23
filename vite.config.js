import {
  fileURLToPath,
  URL
} from 'node:url'

import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url)),
      "three": "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.157.0/three.module.js"
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})