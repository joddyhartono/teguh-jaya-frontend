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

export { getProductsByCategory, getProduct };
