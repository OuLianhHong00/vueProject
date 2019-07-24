import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import config from '@/config'
import Vuex from 'vuex'


import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Validator, ValidatorInstaller } from '@progress/kendo-validator-vue-wrapper'
import { Dialog, DialogInstaller} from '@progress/kendo-dialog-vue-wrapper'
import { TreeView,TreeViewItem,TreeViewInstaller } from '@progress/kendo-treeview-vue-wrapper'
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import {Chart,ChartSeriesItem,Sparkline,SparklineSeriesItem,StockChart,ChartInstaller} from '@progress/kendo-charts-vue-wrapper'


import {home} from '../src/views/Home.vue'
import { login } from '../src/views/login.vue'


Vue.use(Vuex)
Vue.use(ValidatorInstaller)
Vue.use(DialogInstaller)
Vue.use(TreeViewInstaller)
Vue.use(ChartInstaller)
Vue.config.productionTip = false;

// 全局注册应用配置
Vue.prototype.$config = config

Vue.component('Grid', Grid);
Vue.component('GridToolbar', GridToolbar);
Vue.component('GridNoRecords', GridNoRecords);

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  },
components:{
  home,
  login,
  Validator,
  Dialog,
  TreeView, 
  TreeViewItem,
  Grid,
  GridToolbar, 
  GridNoRecords,
  process,
  Chart,
  Sparkline,
  StockChart
}
}).$mount("#app");
