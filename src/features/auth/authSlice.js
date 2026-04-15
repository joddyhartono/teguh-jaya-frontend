import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
