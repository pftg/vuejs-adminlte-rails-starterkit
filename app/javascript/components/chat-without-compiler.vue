<script>
export default {
  name: 'single-chat',
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
</script>

<template>
  <div class="card card-prirary cardutline direct-chat direct-chat-primary">
    <div class="card-header">
      <h3 class="card-title">Chat without Compiler</h3>

      <div class="card-tools">
        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
        </button>
        <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    <!-- /.card-header -->
    <div class="card-body">
      <!-- Conversations are loaded here -->
      <div class="direct-chat-messages">
        <!-- Message. Default to the left -->
        <div class="direct-chat-msg">
          <div class="direct-chat-infos clearfix">
            <span class="direct-chat-timestamp float-right">{{ currentTime() }}</span>
          </div>
          <!-- /.direct-chat-infos -->
          <img class="direct-chat-img"
               src="https://en.gravatar.com/userimage/9923380/136ee7664eb6f9a5e9a408290090a343.jpeg"
               alt="Message User Image">
          <!-- /.direct-chat-img -->
          <div class="direct-chat-text">
            How could I help you today?
          </div>
          <!-- /.direct-chat-text -->
        </div>
        <!-- /.direct-chat-msg -->

        <!-- Message to the right -->
        <div class="direct-chat-msg right" v-for="message in messages">
          <div class="direct-chat-infos clearfix">
            <span class="direct-chat-timestamp float-left">{{ message.time }}</span>
          </div>
          <!-- /.direct-chat-infos -->
          <img class="direct-chat-img"
               src="https://en.gravatar.com/userimage/9923380/0fc16a82ac7453155454124befd56ea4.jpeg"
               alt="Message User Image">
          <!-- /.direct-chat-img -->
          <div class="direct-chat-text">
            {{ message.text }}
          </div>
          <!-- /.direct-chat-text -->
        </div>
        <!-- /.direct-chat-msg -->
        <div ref="bottom"></div>
      </div>
      <!--/.direct-chat-messages-->

      <!-- /.direct-chat-pane -->
    </div>

    <!-- /.card-body -->
    <div class="card-footer">
      <form @submit.prevent="addMessage" id="chat">
        <div class="input-group">
          <input v-model.trim="newMessage" type="text" placeholder="Type Message ..." class="form-control">
          <span class="input-group-append">
              <button type="submit" class="btn btn-primary">Send</button>
            </span>
        </div>
      </form>
    </div>
    <!-- /.card-footer-->
  </div>
</template>
