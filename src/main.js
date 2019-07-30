import Vue from 'vue'
import router from './router/router.js'
import App from './App.vue'
import '../static/css/style.css'
import '../static/css/reset.css'

import {
  Header,
  Button,
  Search
} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Search.name, Search);

new Vue({
  el: '#app',
  render: h => h(App),
  router
});