import { getToken } from "../utils/helper";

const baseUrl = "http://localhost:8000/api";

export const getConnection = async () => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/connection/get-connections`, {
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

export const getPendingConnection = async () => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(
      `${baseUrl}/connection/get-pending-connections`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const requestConnection = async (userId) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/connection/request-connection`, {
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

export const responseConnection = async (connectionInfo) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/connection/response-connection`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(connectionInfo),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const removeConnection = async (connectionId) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/connection/remove-connection`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(connectionId),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
