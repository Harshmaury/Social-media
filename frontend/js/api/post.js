import { socket } from "../utils.js";

const postMessage = (message) => {
  socket.emit("sendMessage", { text: message, timestamp: new Date() });
};

socket.on("receiveMessage", (data) => {
  console.log("New message:", data);
  const messagesContainer = document.getElementById("messages");
  const newMessage = document.createElement("div");
  newMessage.textContent = `${data.text} (${new Date(
    data.timestamp
  ).toLocaleTimeString()})`;
  messagesContainer.appendChild(newMessage);
});

// Example usage
document.getElementById("sendButton").addEventListener("click", () => {
  const messageInput = document.getElementById("messageInput");
  postMessage(messageInput.value);
  messageInput.value = ""; // Clear input
});
