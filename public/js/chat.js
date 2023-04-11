//Envoi d'un message
export function sendChat() {
  const chatForm = document.querySelector("#chat form");
  chatForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const messageInput = document.querySelector("#m");
    const messageText = messageInput.value.trim();
    const message = {
      text: messageText,
      date: new Date(),
    };
    messageInput.value = "";
    if (messageText.length !== 0) {
      socket.emit("chat-message", message);
    }
    document.querySelector("#chat input").focus();
  });
}
//Réception d'un message
export function receptMessage() {
  socket.on("chat-message", function (message) {
    const date = new Date(message.date);
    const formattedDate = date.toLocaleString();
    const messageElement = document.createElement("li");
    messageElement.innerHTML = `<span class="username"> ${message.username}</span>
         <span class="chat-date">(${formattedDate})</span> : 
         <span class="chat-message">${message.text}</span>`;
    document.querySelector("#messages").appendChild(messageElement);
    scrollToBottom();
  });
}
//Réception d'un message de service
export function receptMessageService() {
  socket.on("service-message", function (message) {
    let li = document.createElement("li");
    li.classList.add(message.type);
    let span = document.createElement("span");
    span.classList.add("info");
    span.innerHTML = "<strong>SERVER</strong>";
    li.appendChild(span);
    li.innerHTML += " " + message.text;
    document.getElementById("messages").appendChild(li);
    scrollToBottom();
  });
}
