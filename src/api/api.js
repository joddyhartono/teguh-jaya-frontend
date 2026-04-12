import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5216",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

const setAuthHeader = (token) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export { instance, setAuthHeader };
