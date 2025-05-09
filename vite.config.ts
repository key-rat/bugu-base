import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // or 'modern'
        additionalData: '@use "@/style/mixin.scss" as *;',
      },
    },
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 替换为你的后端地址
        changeOrigin: true, // 是否修改请求源
        // rewrite: (path) => path.replace(/^\/api/, ''), // 可选：移除 /api 前缀
      },
      // proxy: {
      //   '/api': {
      //     target: 'http://127.0.0.1:3000',
      //     changeOrigin: true,
      //     rewrite: function (path): string {
      //       return path.replace(/\/api/, '') //正则匹配替换
      //     }
      //   },
      // '/uploads': {
      //   target: 'http://127.0.0.1:4523/m1/2779888-0-default',
      //   changeOrigin: true,
      //   rewrite: function (path): string {
      //     return path.replace(/\/uploads/, '') //正则匹配替换
      //   }
      // }
    },
    hmr: true, // 热更新是否开启
  },
})
