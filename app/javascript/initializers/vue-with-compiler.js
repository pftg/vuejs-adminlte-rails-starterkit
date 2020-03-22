import TurbolinksAdapter from 'vue-turbolinks'

import Vue from 'vue/dist/vue.esm'

Vue.use(TurbolinksAdapter)

// Lazy loading of the component
Vue.component('chat', () => import('../components/chat-with-compiler'))

document.addEventListener('turbolinks:load', () => {
  new Vue({ el: '[data-behavior=vue]' })
})
