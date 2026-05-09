import { instance, setAuthHeader } from "../api/api";
import { CATEGORIES_ENDPOINTS } from "../api/endpoints";
import { getToken } from "../utils/auth";

const getCategories = async () => {
  const response = await instance.get(CATEGORIES_ENDPOINTS.CATEGORIES);
  return response.data;
};

const createCategory = async (formData) => {
  const response = await instance.post(
    CATEGORIES_ENDPOINTS.CATEGORIES,
    formData,
  );
  return response.data;
};

const deleteCategory = async (id) => {
  const response = await instance.patch(CATEGORIES_ENDPOINTS.CATEGORY(id));
  return true;
};

export { getCategories, createCategory, deleteCategory };
