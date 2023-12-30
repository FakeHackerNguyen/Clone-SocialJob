import { getToken } from "../utils/helper";

const baseUrl = "http://localhost:8000/api";

export const accessChat = async (userId) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/chat/access-chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(userId),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getChats = async () => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/chat/get-chats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMessages = async (chatId) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/message/get-messages/${chatId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const sendMessage = async (chatInfo) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/message/send-message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(chatInfo),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
