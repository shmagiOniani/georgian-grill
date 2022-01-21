import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import "./ChatBot.scss";

export default function ChatBot() {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <div className="chat-bot">
      <div
        className="chat-triggerer"
        onClick={() => setChatOpen((prev) => !prev)}
      />
      <ChatBot
        // userAvatar={avatar}
        // botAvatar={avatar}
        headerTitle={"ონლაინ კონსულტაცია"}
        placeholder={"დაწერეთ..."}
        opened={chatOpen}
        toggleFloating={chatOpen}
        steps={[
          {
            id: "1",
            message: "What is your name?",
            trigger: "2"
          },
          {
            id: "2",
            user: true,
            trigger: "3"
          },
          {
            id: "3",
            message: "Hi {previousValue}, nice to meet you!",
            end: true
          }
        ]}
      />
    </div>
  );
}
