import { Routes, Route } from "react-router";
import PublicLayout from "../layout/PublicLayout";
import HomePage from "../pages/home/HomePage";
import CategoryPage from "../pages/category/CategoryPage";
import ProductPage from "../pages/product/ProductPage";
import ProductDetailPage from "../pages/product/ProductDetailPage";
import LoginPage from "../pages/admin/LoginPage";
import PrivateRoute from "./PrivateRoute";
import DashboardPage from "../pages/admin/DashboardPage";
import PublicRoute from "./PublicRoute";
import PrivateLayout from "../layout/PrivateLayout";
import CreateCategoryPage from "../pages/admin/CreateCategoryPage";
import UpdateCategoryPage from "../pages/admin/UpdateCategoryPage";
import CreateProductPage from "../pages/admin/CreateProductPage";
import UpdateProductPage from "../pages/admin/UpdateProductPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route
          path="/categories/:categoryId/products"
          element={<ProductPage />}
        />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
      </Route>

      <Route
        path="/admin/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route element={<PrivateLayout />}>
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/categories"
          element={
            <PrivateRoute>
              <CategoryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/categories/create"
          element={
            <PrivateRoute>
              <CreateCategoryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/categories/:categoryId/update"
          element={
            <PrivateRoute>
              <UpdateCategoryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/categories/:categoryId/products"
          element={
            <PrivateRoute>
              <ProductPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/categories/:categoryId/products/create"
          element={
            <PrivateRoute>
              <CreateProductPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/products/:productId/update"
          element={
            <PrivateRoute>
              <UpdateProductPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
