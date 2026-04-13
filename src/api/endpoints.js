const CATEGORIES_ENDPOINTS = {
  CATEGORIES: "/categories",
};

const PRODUCTS_ENDPOINTS = {
  PRODUCTS_BY_CATEGORY: (categoryId) => {
    return `/categories/${categoryId}/products`;
  },
  PRODUCT: (productId) => {
    return `/products/${productId}`;
  },
};

const AUTH_ENDPOINTS = {
  LOGIN: "/login",
};

export { CATEGORIES_ENDPOINTS, PRODUCTS_ENDPOINTS, AUTH_ENDPOINTS };
