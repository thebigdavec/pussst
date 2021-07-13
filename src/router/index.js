import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Friends from '../views/Friends/index.vue'
import SignOut from '../views/SignOut/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
  {
    path: '/signout',
    name: 'Sign Out',
    component: SignOut
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
