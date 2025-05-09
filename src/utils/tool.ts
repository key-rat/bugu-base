import type { RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob('@/views/**/**/index.vue')
const _import = (path: string): Array<RouteRecordRaw> =>
  modules['/src/views/' + path + '/index.vue'] as unknown as Array<RouteRecordRaw>

export { _import }
