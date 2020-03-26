import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

window.$ = window.jQuery = require('jquery')

import '@/files/main_style.css?1500119234'
//import ('./files/theme/plugins.js')
import ('./files/theme/custom.js')

Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
