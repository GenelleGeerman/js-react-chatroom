import "./App.css";
import MessagePage from "./MessagePage.js";

function App() {
  const ws = new WebSocket("ws://localhost:8080");
  ws.addEventListener("open", () => {
    console.log("Connected");
  });
  return (
    <div className="App">
      <MessagePage ws={ws} />
    </div>
  );
}

export default App;
