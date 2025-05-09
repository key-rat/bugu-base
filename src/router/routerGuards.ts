import type { Router } from 'vue-router'

// const whiteList = ['/', '/404']
// const store = useStore()

//
export function createRouterGuards(router: Router) {
  router.beforeEach((to, form, next) => {

    // let token = localStorage.getItem("token")
    // if (token) {
    //   // console.log(store.state.user.routes.length)
    //   if (!store.state.user.routes.length) {
    //     // 拉取useinfo信息
    //     store.dispatch('GetInfo')
    //     store.dispatch("GenerateRoutes").then((res) => {
    //       const layout = routes.find((item: any) => item.name == 'sysjindex')!
    //       layout.children = [...res]
    //       router.addRoute(layout)
    //       // res.map((item: any) => router.addRoute("sysjindex", item))
    //       next({ ...to, replace: true })
    //     })
    //   } else {
    //     next()
    //   }
    // } else {
    // 没有token
    // if (whiteList.indexOf(to.path) !== -1) {
    //   // 在免登录白名单，直接进入
    next()
    // } else {
    //   next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
    // }
    // }
  })
}
