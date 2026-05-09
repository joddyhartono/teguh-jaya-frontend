import { deleteCategory } from "../services/categoryService";

const useDeleteCategory = () => {
  const removeCategory = async (id) => {
    try {
      const data = await deleteCategory(id);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return { removeCategory };
};

export default useDeleteCategory;
