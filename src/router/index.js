import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import Rules from "../views/Rules";
import Game from "../views/Game";

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
    name: 'game',
    component: Game
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
