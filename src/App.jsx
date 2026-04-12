import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "./features/category/categoryThunk";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => {
    return state.category;
  });

  useEffect(() => {
    if (items.length === 0 && loading === "idle") {
      dispatch(fetchCategories());
    }
  }, [items.length, loading, dispatch]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
