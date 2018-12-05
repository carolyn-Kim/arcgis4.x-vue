import Vue from 'vue'
import Router from 'vue-router'
import GMap from '@/components/GMap'
import TMap from '@/components/TMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/gd'
    }, {
      path: '/gd',
      name: '高德地图',
      component: GMap
    },
    {
      path: '/tian',
      name: '天地图',
      component: TMap
    }
  ]
})
