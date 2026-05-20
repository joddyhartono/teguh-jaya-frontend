import { createCategory, updateCategory } from "../services/categoryService";

const useCategoryForm = () => {
  const addCategory = async (formData) => {
    try {
      const data = await createCategory(formData);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const editCategory = async (categoryId, formData) => {
    try {
      const data = await updateCategory(categoryId, formData);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return { addCategory, editCategory };
};

export default useCategoryForm;
