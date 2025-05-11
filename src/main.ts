import { createApp } from 'vue'
import { setupStore } from './stores'
import { setupDirectives } from './plugins'
import App from './App.vue'
import router, { setupRouter } from './router'

async function bootstrap(): Promise<void> {
  const app = createApp(App)

  // 注册全局自定义指令，如：v-permission权限指令
  setupDirectives(app)

  // 挂载路由
  setupRouter(app)

  // 挂载状态管理
  setupStore(app)

  // 路由准备就绪后挂载APP实例
  await router.isReady()

  app.mount('#app')
}

void bootstrap()
