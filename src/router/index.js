import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Friends from '../views/Friends/index.vue'
import SignOut from '../views/SignOut/index.vue'
import SignIn from '../views/SignIn/index.vue'
import SignUp from '../views/SignUp/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signout',
    name: 'Sign Out',
    component: SignOut,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: SignIn,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    name: 'Sign Up',
    component: SignUp,
    meta: {
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
