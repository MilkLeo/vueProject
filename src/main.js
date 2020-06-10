// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue

//import './mock/mock'

axios.defaults.baseURL = '/test'
axios.defaults.withCredentials = true
Vue.prototype.axios = axios;
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



Vue.component('v-chart', VueECharts)
//使用mock模拟传输数据
//Vue.use(axios,axios);

Vue.use(ElementUI, {
  size: 'medium'
})


Vue.config.productionTip = false
//axios.defaults.baseURL = "http://localhost:8011";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
