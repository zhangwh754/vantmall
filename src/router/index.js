import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'views/Home.vue'
const Detail = () => import('views/Detail.vue')
const Cart = () => import('views/Cart.vue')
const Category = () => import('views/Category.vue')
const Profile = () => import('views/Profile.vue')

Vue.use(VueRouter)

//解决按下两次相同路由跳转逻辑报错的问题
const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '',
    redirect: 'home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
