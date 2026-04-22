import { useEffect, useState } from "react";
import { getProduct } from "../services/productService";

const useProductDetail = (productId) => {
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const data = await getProduct(productId);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return {
    product,
  };
};

export default useProductDetail;
