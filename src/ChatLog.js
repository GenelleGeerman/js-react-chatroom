import React, { useRef, useEffect } from "react";

function ChatLog({ logs }) {
  console.log("Chat");
  console.log(logs);
  const messagesEnd = useRef(null);
  const scrollToBottom = () => {
    messagesEnd.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [logs]);

  return (
    <>
      <div className="message-area">
        {logs.map((message, index) => (
          <div className="message-container" key={index}>
            <p className="message-name">{message.name}</p>
            <p className="message-content">{message.content}</p>
          </div>
        ))}
      </div>
      <div ref={messagesEnd} />
    </>
  );
}
export default ChatLog;
