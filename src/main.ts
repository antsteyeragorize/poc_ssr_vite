import Vue from 'vue'

import App from './App.vue'
import { createRouter } from './router'

import './assets/main.css'
import { createHead, HeadVuePlugin, VueHeadMixin } from '@vueuse/head'

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const router = createRouter()

  const head = createHead()

  Vue.mixin(VueHeadMixin)
  Vue.use(HeadVuePlugin, head)
  Vue.use(head)

  const app = new Vue({
    router,
    render: h => h(App),
  })

  return {
    app,
    router,
    head,
  }
}
