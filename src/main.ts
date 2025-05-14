import { createApp } from 'vue'
import { setupStore } from './stores'
import { setupDirectives } from './plugins'
import App from './App.vue'
import router, { setupRouter } from './router'
import { setupI18n } from './locales'
import { setupIcon } from './plugins'

async function bootstrap(): Promise<void> {
  const app = createApp(App)
  //全局注册element-plus icon
  setupIcon(app)

  // 注册全局自定义指令
  setupDirectives(app)

  // 国际化 i18n 配置
  await setupI18n(app)

  // 挂载路由
  setupRouter(app)

  // 挂载状态管理
  setupStore(app)

  // 路由准备就绪后挂载APP实例
  await router.isReady()

  app.mount('#app')
}

void bootstrap()
