import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/weChat',
      name: 'weChat',
      component: () => import('./components/WeChatComponents/weixin.vue'),
    },
    {
      path: '/txl',
      name: 'txl',
      component: () => import('./components/txlComponents/txl.vue'),
    },
    {
      path: '/fj',
      name: 'fj',
      component: () => import('./components/fjComponents/fj.vue'),
    },
    {
      path: '/pay',
      name: 'pay',
      query: {'title':'支付'},
      component: () => import('./components/MineComponents/pay.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
