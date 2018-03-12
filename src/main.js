// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import vuexI18n from 'vuex-i18n'
import Vuex from 'vuex'
import App from './App'
import Text from './components/myTest'
import axios from 'axios'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.$http=axios
const store = new Vuex.Store({
  modules: { i18n: vuexI18n.store }
})
Vue.use(vuexI18n.plugin, store)

const routes = [{
  path: '/',
  component: Text
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
