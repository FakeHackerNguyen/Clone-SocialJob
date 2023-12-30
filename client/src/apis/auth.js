import { getToken } from "../utils/helper";

const baseUrl = "http://localhost:8000/api";

export const createUser = async (userInfo) => {
  try {
    const response = await fetch(`${baseUrl}/user/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error);

    return data;
  } catch (error) {
    return { error: error.message || error };
  }
};

export const verifyUserEmail = async (userInfo) => {
  try {
    const response = await fetch(`${baseUrl}/user/verify-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error);

    return data;
  } catch (error) {
    return { error: error.message || error };
  }
};

export const signInUser = async (userInfo) => {
  try {
    const response = await fetch(`${baseUrl}/user/sign-in`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error);
    return data;
  } catch (error) {
    return { error: error.message || error };
  }
};

export const getIsAuth = async (token) => {
  try {
    const response = await fetch(`${baseUrl}/user/is-auth`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error);
    return data;
  } catch (error) {
    return { error: error.message || error };
  }
};

export const forgetPassword = async (email) => {
  try {
    const response = await fetch(`${baseUrl}/user/forget-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error);

    return data;
  } catch (error) {
    return { error: error.message || error };
  }
};

export const verifyPasswordResetToken = async (token, userId) => {
  try {
    const response = await fetch(`${baseUrl}/user/verify-pass-reset-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, userId }),
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error);

    return data;
  } catch (error) {
    return { error: error.message || error };
  }
};

export const resetPassword = async (passwordInfo) => {
  try {
    const response = await fetch(`${baseUrl}/user/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(passwordInfo),
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error);

    return data;
  } catch (error) {
    return { error: error.message || error };
  }
};

export const resendEmailVerificationToken = async (userId) => {
  try {
    const response = await fetch(
      `${baseUrl}/user/resend-email-verification-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userId),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const editProfile = async (editInfo) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/user/edit-profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(editInfo),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addExperience = async (experienceInfo) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/user/add-experience`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(experienceInfo),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const addEducation = async (educationInfo) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/user/add-education`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(educationInfo),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const searchUser = async (query) => {
  try {
    const response = await fetch(`${baseUrl}/user/search?name=${query}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const uploadAvatar = async (formData) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/user/upload-avatar`, {
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
