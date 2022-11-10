import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Form from "@/components/Form";
import Main from "@/components/Main";
import Product from "@/components/Product";
import EditProduct from "@/components/EditProduct";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'iMain',
    component: Main
  },
  {
    path: '/form',
    name: 'Form',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Form
  },
  {
    path: '/product/:id?',
    name: 'Id',
    component: Product,
    props: true,
    children: [
      {
        path: 'edit',
        name: 'Edit',
        component: EditProduct,
        props: true
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
