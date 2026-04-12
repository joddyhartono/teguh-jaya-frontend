import { instance, setAuthHeader } from "../api/api";
import { PRODUCTS_ENDPOINTS } from "../api/endpoints";
import { getToken } from "../utils/auth";

const getProductsByCategory = async (categoryId) => {
  const token = getToken();
  setAuthHeader(token);

  const response = await instance.get(
    PRODUCTS_ENDPOINTS.PRODUCTS_BY_CATEGORY(categoryId),
  );
  return response.data;
};

const getProduct = async (productId) => {
  const token = getToken();
  setAuthHeader(token);

  const response = await instance.get(PRODUCTS_ENDPOINTS.PRODUCT(productId));
  return response.data;
};

export { getProductsByCategory, getProduct };
