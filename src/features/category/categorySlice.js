import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./categoryThunk";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    items: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.items = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export default categorySlice.reducer;
