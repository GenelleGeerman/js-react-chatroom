const WebS = require("ws");

const wss = new WebS.Server({ port: 8080 });
const listeners = new Set();
const messages = [];

wss.on("connection", (ws) => {
  listeners.add(ws);
  ws.on("close", () => {
    listeners.delete(ws);
  });

  ws.on("message", (message) => {
    messages.push(message.toLocaleString());
    SendToAllListeners();
  });
  SendToAllListeners();
});

function SendToAllListeners() {
  const messageString = JSON.stringify(messages);
  listeners.forEach((ws) => ws.send(messageString));
}
