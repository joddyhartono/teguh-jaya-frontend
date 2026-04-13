import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../services/authService";

const loginUser = createAsyncThunk("auth/login", async (formData) => {
  return await login(formData);
});

export { loginUser };
