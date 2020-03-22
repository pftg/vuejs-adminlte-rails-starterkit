import TurbolinksAdapter from 'vue-turbolinks'

import Vue from 'vue/dist/vue.common'

Vue.use(TurbolinksAdapter)

import SingleChat from '../components/chat-without-compiler'

document.addEventListener('turbolinks:load', () => {
  new Vue({
    el: '#single-chat',
    render: h => h(SingleChat),
  }).$mount('#single-chat')
})
