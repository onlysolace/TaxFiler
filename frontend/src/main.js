import Vue from 'vue'

import App from './App.vue'
import store from './store'
import router from './router'
import {mapState, mapGetters} from 'vuex'


Vue.config.productionTip = false;

Vue.prototype.$resource = function(file_name){
  return require('./assets/'+file_name);
};

Vue.mixin({
  mounted(){
    this.$el.classList.add(this.$store.state.theme)
  }
});




require('jquery');
require('popper.js/dist/umd/popper');
require('bootstrap/dist/js/bootstrap');
require('bootstrap/dist/css/bootstrap-grid.css');
require('bootstrap/dist/css/bootstrap-reboot.css');
require('bootstrap/dist/css/bootstrap.css');


new Vue({
  render: h => h(App),
  store,
  router,
  computed:{
    ...mapState(['theme','active_panel_index']),
    ...mapGetters(['active_panel_name','active_panels'])
  },
  watch:{

  }
}).$mount('#app')
