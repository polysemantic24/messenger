import consumer from "./consumer"
import submitMessage from "./../functions/submit-message"
import scrollBottom from "./../functions/scroll-bottom"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#message-container').append(data.mod_message);
    submitMessage();
    scrollBottom();
  }
});
