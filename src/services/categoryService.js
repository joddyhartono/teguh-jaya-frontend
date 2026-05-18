import { instance, setAuthHeader } from "../api/api";
import { CATEGORIES_ENDPOINTS } from "../api/endpoints";
import { getToken } from "../utils/auth";

const getCategories = async () => {
  const response = await instance.get(CATEGORIES_ENDPOINTS.CATEGORIES);
  return response.data;
};

const getCategory = async (categoryId) => {
  const response = await instance.get(
    CATEGORIES_ENDPOINTS.CATEGORY(categoryId),
  );
  return response.data;
};

const createCategory = async (formData) => {
  const response = await instance.post(
    CATEGORIES_ENDPOINTS.CATEGORIES,
    formData,
  );
  return response.data;
};

const updateCategory = async (categoryId, formData) => {
  const response = await instance.patch(
    CATEGORIES_ENDPOINTS.CATEGORY(categoryId),
    formData,
  );
  return true;
};

const deleteCategory = async (id) => {
  const response = await instance.patch(
    CATEGORIES_ENDPOINTS.CATEGORY_DELETE(id),
  );
  return true;
};

export {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
