/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";
import { getChats } from "../apis/chat";

export const ChatContext = createContext();

export default function ChatProvider({ children }) {
  const [selectedChat, setSelectedChat] = useState({});
  const [chats, setChats] = useState([]);

  const fetchChats = async function () {
    const { error, chat } = await getChats();
    if (error) return;

    setChats(chat);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <ChatContext.Provider
      value={{ chats, fetchChats, selectedChat, setSelectedChat }}
    >
      {children}
    </ChatContext.Provider>
  );
}
