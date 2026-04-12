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

export { CATEGORIES_ENDPOINTS, PRODUCTS_ENDPOINTS };
