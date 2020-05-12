export default function() {
  const messageBody = document.getElementById("message_body");
  const submitButton = document.getElementById("submit-button");

  messageBody.addEventListener('keydown', function(event) { 
    if (event.keyCode === 13) {
      submitButton.click();
      event.target.value = "";
    }
  });
}