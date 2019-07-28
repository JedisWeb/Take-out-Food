import Vue from 'vue'
import App from './App.vue'

import router from './router/router.js'
import {
  Tabbar,
  TabItem,
  Header
} from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Header.name, Header)

new Vue({
  el: '#app',
  render: c => c(App),
  router
});