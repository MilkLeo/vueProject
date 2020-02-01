import Vue from 'vue'
import Router from 'vue-router'

// 主入口
import Main from '@/components/Main'
/*import App from '@/App'*/

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Main,
      children: [{
        path: 'GoodsInsert',
        name: 'GoodsInsert',
        component: () => import('@/components/pages/GoodsInsert')
      }, {
        path: 'GoodsSearch',
        name: 'GoodsSearch',
        component: () => import('@/components/pages/GoodsSearch')
      }, {
        path: 'GoodsStatistics',
        name: 'GoodsStatistics',
        component: () => import('@/components/pages/GoodsStatistics')
      }, {
        path: 'Thanks',
        name: 'Thanks',
        component: () => import('@/components/pages/Thanks')
      }]
    }
  ]
})
