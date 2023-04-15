// const socket = io();
// document.querySelector("#chat form").addEventListener("submit", function (e) {
//   e.preventDefault();
//   var message = {
//     text: document.querySelector("#m").value,
//   };
//   document.querySelector("#m").value = "";
//   if (message.text.trim().length !== 0) {
//     socket.emit("chat-message", message);
//   }
//   document.querySelector("#chat input").focus();
// });
// const messagesBox = document.querySelector("#messages");
// socket.on("chat-message", function (message) {
//   if (message.text.toLowerCase() == "merde") {
//     messagesBox.innerHTML += `<li>*****</li>`;
//   } else {
//     messagesBox.innerHTML += `<li>${message.text}</li>`;
//   }
// });
