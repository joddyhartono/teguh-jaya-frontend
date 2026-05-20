import { deleteProduct } from "../services/productService";

const useDeleteProduct = () => {
  const removeProduct = async (id) => {
    try {
      const data = await deleteProduct(id);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    removeProduct,
  };
};

export default useDeleteProduct;
