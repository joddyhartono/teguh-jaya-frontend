import { useEffect, useState } from "react";
import { getCategories } from "../services/categoryService";

const useCategoryList = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    fetchCategories,
  };
};

export default useCategoryList;
