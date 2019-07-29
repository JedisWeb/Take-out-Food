import Vue from 'vue'
import router from './router/router.js'
import App from './App.vue'

import '../static/css/reset.css'

// import {
//   Search
// } from 'mint-ui';
// Vue.component(Search.name, Search);

new Vue({
  el: '#app',
  render: c => c(App),
  router
});