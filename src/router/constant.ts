import type { IBuguRoutesData } from '@/dao'

export const RedirectName = 'Redirect'
export const NotFound = (): object => import('@/views/error/404/index.vue')
export const Login = (): object => import('@/views/login/index.vue')
export const Layout = (): object => import('@/layout/index.vue')

export const rootChildren: Array<IBuguRoutesData> = [
  {
    sort: 1,
    name: 'Home',
    path: '/',
    component: 'home', //   src/views/' + component + '/index.vue
    label: '首页',
    icon: 'House',
  },
]
