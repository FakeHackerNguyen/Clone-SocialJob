const baseUrl = "http://localhost:8000/api";

export const searchCountry = async (name) => {
  try {
    const response = await fetch(`${baseUrl}/user/search-country`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(name),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const searchCity = async (name) => {
  try {
    const response = await fetch(`${baseUrl}/user/search-city`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(name),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
