const { io } = require("socket.io-client");

const socket = io("http://localhost:3001"); // Cambia el puerto/host si hace falta

socket.on("connect", () => {
  console.log("✅ Conectado al websocket, id:", socket.id);
});

socket.on("new_message", (data) => {
  console.log("📩 Mensaje nuevo recibido:");
  console.log(data);
});

socket.on("disconnect", () => {
  console.log("❌ Desconectado del websocket");
});
