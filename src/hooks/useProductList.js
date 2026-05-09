import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/productService";

const useProductList = (categoryId) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await getProductsByCategory(categoryId);
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [categoryId]);

  return {
    products,
    fetchProducts,
  };
};

export default useProductList;
