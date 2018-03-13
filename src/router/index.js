import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    // 重定向
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

router.afterEach((to, from, next) => {
  document.title = to.name
})

export default router
