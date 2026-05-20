import { instance, setAuthHeader } from "../api/api";
import { PRODUCTS_ENDPOINTS } from "../api/endpoints";
import { getToken } from "../utils/auth";

const getProductsByCategory = async (categoryId) => {
  const response = await instance.get(
    PRODUCTS_ENDPOINTS.PRODUCTS_BY_CATEGORY(categoryId),
  );
  return response.data;
};

const getProduct = async (productId) => {
  const response = await instance.get(PRODUCTS_ENDPOINTS.PRODUCT(productId));
  return response.data;
};

const createProduct = async (formData) => {
  const token = getToken();
  setAuthHeader(token);

  const response = await instance.post(PRODUCTS_ENDPOINTS.PRODUCTS, formData);
  return response.data;
};

const updateProduct = async (productId, formData) => {
  const token = getToken();
  setAuthHeader(token);

  const response = await instance.patch(
    PRODUCTS_ENDPOINTS.PRODUCT(productId),
    formData,
  );
  return true;
};

const deleteProduct = async (productId) => {
  const token = getToken();
  setAuthHeader(token);

  const response = await instance.patch(
    PRODUCTS_ENDPOINTS.PRODUCT_DELETE(productId),
  );
  return true;
};

export {
  getProductsByCategory,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
