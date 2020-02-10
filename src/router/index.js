import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import Rules from "../views/Rules";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    alias: '/',
    component: Home
  },
  {
    path: '*',
    //redirect: '/'
  },
  {
    path: '/rules',
    name: 'rules',
    component: Rules
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
