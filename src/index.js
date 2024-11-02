import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("A client connected");

  // When a client sends a message, broadcast it to all connected clients
  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        const dataString = message.toString();
        client.send(dataString);
      }
    });
  });

  ws.on("close", () => {
    console.log("A client disconnected");
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
