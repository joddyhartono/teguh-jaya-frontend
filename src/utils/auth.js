const getToken = () => {
  return localStorage.getItem("token");
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export { getToken, getUser };
