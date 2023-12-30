import { getToken } from "../utils/helper";

const baseUrl = "http://localhost:8000/api";

export const createPostWithVideo = async (formData) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/post/create-with-video`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPostOfConnections = async () => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/post/posts`, {
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

export const checkLikedPost = async (postId) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/post/liked-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(postId),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createPostWithImage = async (formData) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/post/create-with-image`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const reportPost = async (postId) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/post/report-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(postId),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
