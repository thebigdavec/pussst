import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Friends from '../views/Friends/index.vue'
import SignIn from '../views/SignIn/index.vue'
import SignUp from '../views/SignUp/index.vue'
import Welcome from '../views/Welcome/index.vue'
import RequestPasswordReset from '../views/RequestPasswordReset/index.vue'

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
  },
  {
    path: '/requestpasswordreset',
    name: 'request-password-reset',
    component: RequestPasswordReset,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
