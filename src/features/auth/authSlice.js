import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authThunk";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    user: null,
    loading: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = "";
      state.user = null;
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
      state.user = {
        id: action.payload.id,
        username: action.payload.username,
      };
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: action.payload.id,
          username: action.payload.username,
        }),
      );
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
