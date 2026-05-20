import { useState } from "react";
import { createProduct, updateProduct } from "../services/productService";

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

  const editProduct = async (productId, formData) => {
    try {
      const data = await updateProduct(productId, formData);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    product,
    addProduct,
    editProduct,
  };
};

export default useProductForm;
