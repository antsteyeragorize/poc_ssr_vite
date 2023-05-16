import Vue from 'vue'
import Router, { RouterOptions } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ErrorView from '@/components/ErrorView.vue'

Vue.use(Router)

export const routerObject = (): RouterOptions => {
  return {
    mode: 'history',
    base: '/web/',
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView,
      },
      {
        path: '/*',
        name: 'error',
        component: ErrorView,
      },
    ],
  }
}

export function createRouter(): Router {
  const routerOptions = routerObject()
  return new Router(routerOptions)
}
