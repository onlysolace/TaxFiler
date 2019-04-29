import Vue from 'vue'
import App from './App.vue'
import store from './store'
import {mapState} from 'vuex'

require('bootstrap/dist/js/bootstrap')
require('bootstrap/dist/css/bootstrap-grid.css')
require('bootstrap/dist/css/bootstrap-reboot.css')
require('bootstrap/dist/css/bootstrap.css')
require('jquery')


Vue.config.productionTip = false

Vue.prototype.$resource = function(file_name){
  return require('./assets/'+file_name);
}
new Vue({
  render: h => h(App),
  store,
  computed: mapState(['theme','active_panel'])
}).$mount('#app')
