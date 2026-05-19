import { useState } from "react";
import { createProduct } from "../services/productService";

const useProductForm = () => {
  const [product, setProduct] = useState(null);

  const addProduct = async (formData) => {
    try {
      const data = await createProduct(formData);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    product,
    addProduct,
  };
};

export default useProductForm;
