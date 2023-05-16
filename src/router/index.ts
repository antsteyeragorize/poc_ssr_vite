import Vue from 'vue'
import Router, { RouterOptions } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(Router)

export const routerObject = (): RouterOptions => {
  return {
    mode: 'history',
    base: import.meta.env.BASE_URL,
    routes: [
      {
        path: '/web',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/web/about',
        name: 'about',
        component: AboutView,
      },
    ],
  }
}

export function createRouter(): Router {
  const routerOptions = routerObject()
  return new Router(routerOptions)
}
