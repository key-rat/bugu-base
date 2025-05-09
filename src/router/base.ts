// import type { AppRouteRecordRaw } from './types'
import { NotFound, Login, RedirectName, Layout } from './constant'
import type { RouteRecordRaw } from 'vue-router'

// 404 on a page
export const ErrorPageRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*', // 捕获所有未匹配的路径
  name: 'NotFound',
  component: NotFound, // 404 页面组件
}

export const RedirectRoute: RouteRecordRaw = {
  path: '/redirect',
  name: RedirectName,
  component: Layout,
  meta: {
    title: RedirectName,
    hideBreadcrumb: true,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      component: () => import('@/views/redirect/index.tsx'),
    },
  ],
}

export const LoginPageRoute: RouteRecordRaw = {
  path: '/login', // 捕获所有未匹配的路径
  name: 'Login',
  component: Login, // 404 页面组件
}
