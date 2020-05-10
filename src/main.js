import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//window.$ = window.jQuery = require('jquery')

//import ('./files/theme/plugins.js')
//import ('./files/theme/custom.js')

Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
  //el: 'body',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
