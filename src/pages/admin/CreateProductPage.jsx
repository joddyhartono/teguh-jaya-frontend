import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import Button from "../../components/buttons/Button";
import { useEffect, useState } from "react";
import useProductForm from "../../hooks/useProductForm";
import { useNavigate, useParams } from "react-router";

const CreateProductPage = () => {
  const { addProduct } = useProductForm();
  const { categoryId } = useParams();
  const [formData, setFormData] = useState({
    categoryId,
    name: "",
    price: "",
    description: "",
    imageBase64: "",
  });
  const navigate = useNavigate();

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
      const data = await addProduct(formData);
      if (data) {
        navigate(`/admin/categories/${categoryId}/products`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-6 border rounded">
        <h1 className="text-2xl md:text-3xl text-center font-bold leading-tight">
          Create Product
        </h1>
        <form className="flex flex-col gap-6 mt-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <Label>Nama Produk</Label>
            <Input
              type="text"
              name="name"
              placeholder="Nama Produk"
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label>Gambar Produk</Label>
            <Input
              type="file"
              name="imageBase64"
              onChange={handleChange}
              multiple={false}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label>Deskripsi Produk</Label>
            <Input
              type="text"
              name="description"
              placeholder="Deskripsi Produk"
              onChange={handleChange}
              value={formData.description}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label>Harga Produk</Label>
            <Input
              type="text"
              name="price"
              placeholder="Harga Produk"
              onChange={handleChange}
              value={formData.price}
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

export default CreateProductPage;
