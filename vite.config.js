import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // alias: {
    //   '@': fileURLToPath(new URL('./src', import.meta.url)),
    //   // three: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.157.0/three.module.js'
    //   three: fileURLToPath(
    //     new URL('./THREEJS/three.js-r157/build/three.module.js', import.meta.url)
    //   ),
    //   'three/addons/*': fileURLToPath(new URL('./THREEJS/examples/jsm', import.meta.url))
    // }
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
      // {
      //   find: 'three',
      //   replacement: fileURLToPath(
      //     new URL('./THREEJS/three.js-r157/build/three.module.js', import.meta.url)
      //   )
      // },
      // {
      //   find: 'OrbitControls',
      //   replacement: fileURLToPath(
      //     new URL('./THREEJS/examples/jsm/controls/OrbitControls.js', import.meta.url)
      //   )
      // },
      // {
      //   find: 'GLTFLoader',
      //   replacement: fileURLToPath(
      //     new URL('./THREEJS/examples/jsm/loaders/GLTFLoader.js', import.meta.url)
      //   )
      // }
    ]
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
