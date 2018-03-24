import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Layout/Header'
import Home from '@/container/home/Home'
import Login from '@/container/login/Login'
import Cart from '@/container/cart/Cart'
import Detail from '@/container/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Header,
      children: [{
        path: 'home',
        component: Home
      }, {
        path: 'cart',
        component: Cart
      }, {
        path: 'detail/:id',
        component: Detail
      }]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
