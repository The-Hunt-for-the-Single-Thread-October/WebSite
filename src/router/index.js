import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import Rules from "../views/Rules";
import Main from "../views/Main";

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/home',
    name: 'home',
    alias: '/',
    component: Home
  },
  {
    path: '/rules',
    name: 'rules',
    component: Rules
  },
  {
  path: '/game',
  name: 'main',
  component: Main
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
