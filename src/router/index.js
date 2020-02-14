import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import Rules from "../views/Rules";
import DeroulementPartie from "../views/DeroulementPartie";

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
    path: '/DeroulementPartie',
    name: 'DeroulementPartie',
    component: DeroulementPartie
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
