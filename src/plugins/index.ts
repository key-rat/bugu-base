import type { App } from 'vue'
import { Resize } from './resizeObserver'

/**
 * 注册全局自定义指令
 * @param app
 */
export function setupDirectives(app: App): void {
  // 监听元素尺寸变化指令
  app.directive('resize', Resize)
}
