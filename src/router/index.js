import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/benefits',
    name: 'Benefits',
    component: () => import('../views/Benefits.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/patent',
    name: 'Patent',
    component: () => import('../views/Patent.vue')
  },
  {
    path: '/usage',
    name: 'Usage',
    component: () => import('../views/Usage.vue')
  },
  {
    path: '/worldwide',
    name: 'Worldwide',
    component: () => import('../views/Worldwide.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
