import { instance } from "../api/api";
import { AUTH_ENDPOINTS } from "../api/endpoints";

const login = async ({ username, password }) => {
  const response = await instance.post(AUTH_ENDPOINTS.LOGIN, {
    username,
    password,
  });
  return response.data;
};

export { login };
