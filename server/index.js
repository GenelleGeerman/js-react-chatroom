const WebS = require("ws");

const wss = new WebS.Server({ port: 8080 });
const connections = new Set();

wss.on("connection", (ws) => {
  connections.add(ws);
  console.log(`New Client Connected!`);
  ws.on("message", (message) => {
    if (typeof message.data !== "string") {
      message.data = String(message); // Coerce to string
    }
    console.log(`Client has Sent: ${message}`);
    SendToAllListeners(message.data, ws);
  });

  ws.on("close", () => {
    connections.delete(ws);
    console.log("Client has Disconnected");
  });
});

function SendToAllListeners(message, ws) {
  connections.forEach((c) => {
    if (c !== ws) {
      c.send(JSON.stringify(message));
    }
  });
}
