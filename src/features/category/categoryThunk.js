import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories } from "../../services/categoryService";

const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (_, thunkAPI) => {
    return await getCategories();
  },
);

export { fetchCategories };
