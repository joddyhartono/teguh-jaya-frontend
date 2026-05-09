import { createCategory } from "../services/categoryService";

const useCategoryForm = () => {
  const addCategory = async (formData) => {
    try {
      const data = await createCategory(formData);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return { addCategory };
};

export default useCategoryForm;
