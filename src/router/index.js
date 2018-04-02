import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import merchantCenter from '@/components/merchantCenter'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/merchantCenter',
      name: '商户中心',
      component: merchantCenter
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
