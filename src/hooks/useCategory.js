import { useEffect, useState } from "react";
import { getCategory } from "../services/categoryService";

const useCategory = (categoryId) => {
  const [category, setCategory] = useState(null);

  const fetchCategory = async () => {
    try {
      const data = await getCategory(categoryId);
      setCategory(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [categoryId]);

  return {
    category,
  };
};

export default useCategory;
