export default {
  data: function () {
    return {
      newMessage: '',
      messages: [{ time: this.currentTime(), text: 'Lets me think ...' }],
    }
  },

  methods: {
    currentTime: function () {
      return new Date().toLocaleTimeString()
    },
    addMessage: function () {
      if (this.newMessage.length) {
        this.messages.push({ time: this.currentTime(), text: this.newMessage })
        this.newMessage = ''
      }
    },
  },

  updated: function () {
    this.$nextTick(function () {
      this.$refs.bottom.scrollIntoView(false)
    })
  }
}


