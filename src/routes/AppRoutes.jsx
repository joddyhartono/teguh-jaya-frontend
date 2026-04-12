import { Routes, Route } from "react-router";
import Layout from "../layout/Layout";
import HomePage from "../pages/home/HomePage";
import CategoryPage from "../pages/category/CategoryPage";
import ProductPage from "../pages/product/ProductPage";
import ProductDetailPage from "../pages/product/ProductDetailPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route
          path="/categories/:categoryId/products"
          element={<ProductPage />}
        />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
