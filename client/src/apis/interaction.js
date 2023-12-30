import { getToken } from "../utils/helper";

const baseUrl = "http://localhost:8000/api";

export const getLikesOfPost = async (idInfo) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/interaction/likes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(idInfo),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getCommentsOfPost = async (postId) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/interaction/comments`, {
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

export const getRepliesOfComment = async (commentId) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/interaction/replies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(commentId),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const commentPost = async (postId) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/interaction/comment`, {
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

export const replyComment = async (commentInfo) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/interaction/reply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(commentInfo),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const doLike = async (postInfo) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/interaction/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(postInfo),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const removeLike = async (idInfo) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/interaction/remove-like`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(idInfo),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const checkLikedComment = async (commentId) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/interaction/liked-comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(commentId),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
