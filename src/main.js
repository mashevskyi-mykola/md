import Vue from 'vue'
import App from './App.vue'
import List from './List.vue'
import VModal from 'vue-js-modal'

Vue.use(VModal);

Vue.component('app-list', List);
Vue.component('modal', {
  template: '#modal-template'
});

new Vue({
  el: '#app',
  render: h => h(App)
})
