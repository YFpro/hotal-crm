import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "u-reset.css";
import axios from 'axios';
import 'lib-flexible';
import { HappyScroll } from 'vue-happy-scroll'
Vue.component('happy-scroll', HappyScroll)
import 'vue-happy-scroll/docs/happy-scroll.css'
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http=axios;
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
import filter from '../src/filter/index';
Object.keys(filter).forEach(ele=>{
  Vue.filter(ele,filter[ele]);
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
