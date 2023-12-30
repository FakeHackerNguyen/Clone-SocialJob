const baseUrl = "http://localhost:8000/api";

export const searchCompany = async (query) => {
  try {
    const response = await fetch(`${baseUrl}/company/search?name=${query}`, {
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

export const getSingleCompany = async (companyId) => {
  try {
    const response = await fetch(`${baseUrl}/company/single-company`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(companyId),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
