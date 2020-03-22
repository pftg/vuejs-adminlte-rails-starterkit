import TurbolinksAdapter from 'vue-turbolinks'

import Vue from 'vue/dist/vue.common'

Vue.use(TurbolinksAdapter)

// Lazy loading of the component
const SingleChat =() => import('../components/chat-without-compiler')

document.addEventListener('turbolinks:load', () => {
  if (document.getElementById('single-chat')) {
    new Vue({ render: h => h(SingleChat) })
      .$mount('#single-chat')
  }
})
