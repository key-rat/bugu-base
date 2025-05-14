import * as ElIcons from '@element-plus/icons-vue'
import type { App } from 'vue'
const setupIcon = (app: App<Element>): void => {
  Object.keys(ElIcons).forEach((key) => {
    app.component(key, ElIcons[key as keyof typeof ElIcons])
  })
}
export { setupIcon }
