const baseUrl = "http://localhost:8000/api";

export const searchUniversity = async (query) => {
  try {
    const response = await fetch(`${baseUrl}/university/search?name=${query}`, {
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

export const getSingleUniversity = async (universityId) => {
  try {
    const response = await fetch(`${baseUrl}/university/single-university`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(universityId),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
