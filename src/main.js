import Vue from 'vue'
import App from './App.vue'
import List from './List.vue'
import Modal from './Modal'
import Api from './Api'

Vue.component('app-list', List);
Vue.component('modal', Modal);

new Vue({
  el: '#app',
  render: h => h(App)
});

var b = new Api();
