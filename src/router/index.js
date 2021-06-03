import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import("../views/home/Home.vue")
const Detail = () => import("../views/detail/Detail.vue")
const Category = () => import("../views/category/Category.vue")
const ShopCart = () => import("../views/shopcart/ShopCart.vue")
const Profile = () => import("../views/profile/Profile.vue")

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/shopcart",
    component: ShopCart,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/detail",
    component: Detail,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




// 解决重复点击报错为题
const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
