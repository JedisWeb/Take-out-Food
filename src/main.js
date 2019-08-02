import Vue from 'vue'
import router from './router/router.js'
import App from './App.vue'
import '../static/css/style.css'
import '../static/css/reset.css'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import axios from 'axios'
Vue.prototype.axios = axios

import {
  Header,
  Button,
  Lazyload,
  Switch,
  Loadmore,
} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.use(Lazyload)
Vue.component(Switch.name, Switch);
Vue.component(Loadmore.name, Loadmore);

import bootstrap from 'bootstrap'
Vue.use(bootstrap)

new Vue({
  el: '#app',
  render: h => h(App),
  router
});