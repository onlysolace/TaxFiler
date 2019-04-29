import Vue from 'vue'
import App from './App.vue'
import store from './store'
require('bootstrap/dist/js/bootstrap')
require('bootstrap/dist/css/bootstrap-grid.css')
require('bootstrap/dist/css/bootstrap-reboot.css')
require('bootstrap/dist/css/bootstrap.css')
require('jquery')


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
