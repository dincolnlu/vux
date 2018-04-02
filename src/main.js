// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router/index'
import App from './App'
import store from './vuex/index'
import axiosPlugin from './util/request'
// import 'lib-flexible'
import './util/rem.js'

Vue.use(axiosPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
