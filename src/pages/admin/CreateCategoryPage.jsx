import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import Button from "../../components/buttons/Button";
import { useState } from "react";
import { useNavigate } from "react-router";
import useCategoryForm from "../../hooks/useCategoryForm";

const CreateCategoryPage = () => {
  const { addCategory } = useCategoryForm();
  const [formData, setFormData] = useState({
    name: "",
    imageBase64: "",
    description: "",
  });
  const navigate = useNavigate();

  /* 
  
  Input type file akan mengembalikan FileList (array)
  FileReader object digunakan untuk membaca content dari file
  FileReader punya async method readAsDataURL() untuk mengembalikan data URL yang berisi data:[<media-type>][;base64],<data>
  
  */

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
      const data = await addCategory(formData);
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
          Create Category
        </h1>
        <form className="flex flex-col gap-6 mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <Label>Nama Kategori</Label>
            <Input
              type="text"
              name="name"
              placeholder="Nama Kategori"
              onChange={handleChange}
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
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-green-500 text-white"
            onSubmit={handleSubmit}
          >
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategoryPage;
