import { getToken } from "../utils/helper";

const baseUrl = "http://localhost:8000/api";

export const searchJobs = async ({ jobTitle, jobLocation }) => {
  try {
    const response = await fetch(
      `${baseUrl}/job/search?jobTitle=${jobTitle}&jobLocation=${jobLocation}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getSingleJob = async (jobId) => {
  try {
    const response = await fetch(`${baseUrl}/job/single-job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jobId),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllJobs = async () => {
  try {
    const response = await fetch(`${baseUrl}/job/jobs`, {
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

export const postJob = async (postInfo) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/job/create`, {
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

export const applyJob = async (formData) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/job/apply-job`, {
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

export const reportJob = async (jobId) => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch(`${baseUrl}/job/report-job`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(jobId),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
