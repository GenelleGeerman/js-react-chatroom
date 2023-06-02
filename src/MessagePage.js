import React, { useEffect, useState } from "react";
import ChatLog from "./ChatLog.js";

function MessagePage({ ws }) {
  const [name, setName] = useState("Anonymous");
  const [logs, setLogs] = useState([]);

  function callBackEvent(e) {
    let messageObject = JSON.parse(e.data);
    messageObject = messageObject.map((obj) => JSON.parse(obj));
    setLogs(messageObject);
  }
  //Add a single listener until we refresh the page
  useEffect(() => {
    ws.addEventListener("message", (e) => callBackEvent(e));
    return ws.removeEventListener("message", (e) => callBackEvent(e));
  });

  const handleSendMessage = () => {
    const message = document.getElementById("msg").value;
    if (message === "") return;
    const messageObject = { name, content: message };
    ws.send(JSON.stringify(messageObject));
  };

  const handleChangeName = () => {
    const nameInput = document.getElementById("name").value;
    setName(nameInput);
  };

  return (
    <>
      <ChatLog logs={logs} />
      <div className="input-container">
        <div className="input-name-field">
          <input
            type="text"
            id="name"
            className="input-name-text"
            placeholder="Your Name"
          />{" "}
          <button className="input-name-button" onClick={handleChangeName}>
            Change
          </button>
        </div>
        <div className="input-message-field">
          <input
            type="text"
            id="msg"
            className="input-text-area"
            placeholder="Your Message"
          />
          <button className="input-button-area" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}
export default MessagePage;
