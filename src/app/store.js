import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/category/categorySlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    auth: authReducer,
  },
});

export default store;
