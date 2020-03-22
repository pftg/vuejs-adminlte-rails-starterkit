// NOTE: This code requires to setup csp as :unsafe_eval.
//       Please check related code in `app/controllers/landing_controller.rb`

import TurbolinksAdapter from 'vue-turbolinks'

import Vue from 'vue/dist/vue.esm'

Vue.use(TurbolinksAdapter)

// Lazy loading of the component
Vue.component('chat', () => import('../components/chat-with-compiler'))

document.addEventListener('turbolinks:load', () => {
  if (document.querySelector('[data-behavior=vue]')) {
    new Vue({ el: '[data-behavior=vue]' })
  }
})
