import "./App.css";

function App() {
  const ws = new WebSocket("ws://localhost:8080");
  ws.addEventListener("open", () => {
    console.log("Connection established");
  });

  ws.addEventListener("message", (e) => {
    window.alert(e.data);
  });

  const submit = () => {
    const message = document.getElementById("msg").value;
    ws.send(message);
  };
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" id="msg" className="message-box" />
        <br />
        <button onClick={submit}>Send</button>
      </header>
    </div>
  );
}

export default App;
