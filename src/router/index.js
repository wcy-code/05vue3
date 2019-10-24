import Vue from 'vue'
import VueRouter from 'vue-router'
import sex from '../views/sex.vue'
import aihao from '../views/aihao.vue'
import all from '../views/all.vue'
import xingxi from '../views/xingxi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'sex',
    component: sex
  },
  {
    path: '/xingxi',
    name: 'xingxi',
      component: xingxi
  },
    {
        path: '/all',
        name: 'all',
        component: all
    },
    {
        path: '/aihao',
        name: 'aihao',
        component: aihao
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
  routes
})

export default router
