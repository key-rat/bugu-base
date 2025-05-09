import type { IBuguRoutesData } from '@/dao'
import { _import } from '@/utils/tool'
import type { App } from 'vue'
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { ErrorPageRoute, LoginPageRoute, RedirectRoute } from './base'
import { Layout, rootChildren } from './constant'
import { createRouterGuards } from './routerGuards'

// 根据路由数据生成路由
const generateRoutes = (routesData: Array<IBuguRoutesData>): Array<RouteRecordRaw> => {
  const res = routesData
    .map((item) => {
      const { sort, name, path, label, icon, redirect, children } = item
      const meta = { sort, label, icon }
      const component = _import(item.component)
      let routeDate = { name, path, component, meta }
      if (redirect) {
        routeDate = Object.assign(routeDate, redirect)
      }
      if (children) {
        routeDate = Object.assign(routeDate, { children: generateRoutes(children) })
      }
      return routeDate
    })
    .sort((a, b) => {
      return a.meta.sort - b.meta.sort
    })
  return res
}

// 根路由数据
export const RootRoute: RouteRecordRaw = {
  path: '',
  name: 'Layout',
  redirect: { name: 'Home' },
  component: Layout,
  meta: {
    title: 'Layout',
  },
  children: [...generateRoutes(rootChildren), LoginPageRoute, RedirectRoute, ErrorPageRoute],
}

//需要验证权限
// export const asyncRoutes = [...routeModuleList];

//普通路由 无需验证权限
export const constantRouter: RouteRecordRaw[] = [RootRoute]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouter,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app: App): void {
  app.use(router)

  // 创建路由守卫
  createRouterGuards(router)
}

export default router
