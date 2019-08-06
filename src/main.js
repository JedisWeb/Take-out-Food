import Vue from 'vue'
import router from './router/router.js'
import App from './App.vue'
import '../static/css/style.css'
import '../static/css/reset.css'
import '../static/css/mui.icons-extra.css'
import '../static/js/mui.zoom.js'
import '../static/js/mui.previewimage.js'

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
  Actionsheet,
  Cell,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem,
  Badge,
} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.use(Lazyload)
Vue.component(Switch.name, Switch);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Cell.name, Cell);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Badge.name, Badge);

// import bootstrap from 'bootstrap'
// Vue.use(bootstrap)

Vue.filter('handleDiscount', value => {
  return Math.floor(value[0] / value[1] * 100)
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
});