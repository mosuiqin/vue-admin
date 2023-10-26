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
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src',
        import.meta.url)),

    }
    // alias: [{
    //     find: '@',
    //     replacement: fileURLToPath(new URL('./src',
    //       import.meta.url))
    //   },
    //   {
    //     find: 'three',
    //     replacement: 'https://unpkg.com/three@0.138.0/build/three.module.js'
    //   },
    //   {
    //     find: 'orbitControls',
    //     replacement: 'https://unpkg.com/three@0.138.0/examples/jsm/controls/OrbitControls.js'
    //   },
    //   // {
    //   //   find: 'GLTFLoader',
    //   //   replacement: fileURLToPath(
    //   //     new URL('./THREEJS/examples/jsm/loaders/GLTFLoader.js',
    //   //       import.meta.url)
    //   //   )
    //   // }
    // ]
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