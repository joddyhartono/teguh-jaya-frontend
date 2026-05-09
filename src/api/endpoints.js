const CATEGORIES_ENDPOINTS = {
  CATEGORIES: "/categories",
  CATEGORY: (categoryId) => {
    return `/categories/${categoryId}`;
  },
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
  LOGIN: "/auth/login",
};

const DASHBOARD_ENDPOINTS = {
  STATS: "/dashboard/stats",
};

export {
  CATEGORIES_ENDPOINTS,
  PRODUCTS_ENDPOINTS,
  AUTH_ENDPOINTS,
  DASHBOARD_ENDPOINTS,
};
