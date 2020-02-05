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
        path: 'GoodsSell',
        name: 'GoodsSell',
        component: () => import('@/components/pages/GoodsSell')
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
