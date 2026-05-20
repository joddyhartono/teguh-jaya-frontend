import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import Button from "../../components/buttons/Button";
import useCategory from "../../hooks/useCategory";
import useCategoryForm from "../../hooks/useCategoryForm";

const UpdateCategoryPage = () => {
  const { editCategory } = useCategoryForm();
  const { categoryId } = useParams();
  const { category } = useCategory(categoryId);
  const [formData, setFormData] = useState({
    name: "",
    imageBase64: "",
    description: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (category) {
      setFormData({
        name: category.name,
        imageBase64: category.imageBase64,
        description: category.description,
      });
    }
  }, [category]);

  const handleChange = (event) => {
    if (event.target.type === "file") {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result.split(",")[1];
        setFormData({ ...formData, [event.target.name]: base64 });
      };
    } else {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await editCategory(categoryId, formData);
      if (data) {
        navigate("/admin/categories");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-6 border rounded">
        <h1 className="text-2xl md:text-3xl text-center font-bold leading-tight">
          Update Category
        </h1>
        <form className="flex flex-col gap-6 mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <Label>Nama Kategori</Label>
            <Input
              type="text"
              name="name"
              placeholder="Nama Kategori"
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label>Gambar Kategori</Label>
            <Input
              type="file"
              name="imageBase64"
              onChange={handleChange}
              multiple={false}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label>Deskripsi Kategori</Label>
            <Input
              type="text"
              name="description"
              placeholder="Deskripsi Kategori"
              onChange={handleChange}
              value={formData.description}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-500 text-white"
            onSubmit={handleSubmit}
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategoryPage;
