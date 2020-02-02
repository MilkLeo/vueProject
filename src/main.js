// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './mock/mock'
import VueECharts from 'vue-echarts' // 在 webpack 环境下指向 components/ECharts.vue
Vue.component('v-chart', VueECharts)
//使用mock模拟传输数据
Vue.use(VueAxios,axios);

Vue.use(ElementUI, {
  size: 'medium'
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
