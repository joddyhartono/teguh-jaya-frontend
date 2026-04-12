import { instance, setAuthHeader } from "../api/api";
import { CATEGORIES_ENDPOINTS } from "../api/endpoints";
import { getToken } from "../utils/auth";

const getCategories = async () => {
  const token = getToken();
  setAuthHeader(token);

  const response = await instance.get(CATEGORIES_ENDPOINTS.CATEGORIES);
  return response.data;
};

export { getCategories };
