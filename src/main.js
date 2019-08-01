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
  Search,
  Lazyload,
  CellSwipe,
  Switch,
  Loadmore,
  Spinner
} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Search.name, Search);
Vue.use(Lazyload)
Vue.component(CellSwipe.name, CellSwipe);
Vue.component(Switch.name, Switch);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Spinner.name, Spinner);

import bootstrap from 'bootstrap'
Vue.use(bootstrap)

new Vue({
  el: '#app',
  render: h => h(App),
  router
});