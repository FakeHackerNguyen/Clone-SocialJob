export const isValidEmail = (email) => {
  //eslint-disable-next-line
  const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return isValid.test(email);
};

export const getToken = () => localStorage.getItem("auth-token");

export const catchError = (error) => {
  const { response } = error;
  if (response?.data) return response.data;

  return { error: error.message || error };
};

export const calculateTime = (date) => {
  const diff = Math.abs(new Date(date) - new Date());
  let distance = Math.abs(diff / 1000);
  let result = `${Math.floor(distance)} seconds ago`;
  if (distance > 60) {
    distance = Math.abs(diff / (1000 * 60));
    result = `${Math.floor(distance)} minutes ago`;
    if (distance > 60) {
      distance = Math.abs(diff / (1000 * 60 * 60));
      result = `${Math.floor(distance)} hours ago`;
      if (distance > 24) {
        distance = Math.abs(diff / (1000 * 60 * 60 * 24));
        result = `${Math.floor(distance)} days ago`;
        if (distance > 7) {
          distance = Math.abs(diff / (1000 * 60 * 60 * 24 * 7));
          result = `${Math.floor(distance)} weeks ago`;
          if (distance > 4) {
            distance = Math.abs(diff / (1000 * 60 * 60 * 24 * 7 * 4));
            result = `${Math.floor(distance)} months ago`;
          }
          if (distance > 12) {
            distance = Math.abs(diff / (1000 * 60 * 60 * 24 * 365));
            result = `${Math.floor(distance)} years ago`;
          }
        }
      }
    }
  }
  return result;
};
