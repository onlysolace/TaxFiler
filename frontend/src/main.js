import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import {mapState, mapGetters} from 'vuex'

require('bootstrap/dist/js/bootstrap');
require('bootstrap/dist/css/bootstrap-grid.css');
require('bootstrap/dist/css/bootstrap-reboot.css');
require('bootstrap/dist/css/bootstrap.css');
require('jquery');


Vue.config.productionTip = false;

Vue.prototype.$resource = function(file_name){
  return require('./assets/'+file_name);
};

Vue.mixin({
  mounted(){
    this.$el.classList.add(this.$store.state.theme)
  }
});

new Vue({
  render: h => h(App),
  store,
  router,
  computed:{
    ...mapState(['theme','active_panel_index','panels']),
    ...mapGetters(['active_panel_name'])
  },
  watch:{

  }
}).$mount('#app')
