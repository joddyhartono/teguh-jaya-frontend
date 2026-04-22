import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/input/Input";
import Button from "../../components/buttons/Button";
import { loginUser } from "../../features/auth/authThunk";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await dispatch(loginUser(formData)).unwrap();
      navigate("/admin/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-6 border rounded">
        <h1 className="text-2xl md:text-3xl text-center font-bold leading-tight">
          Toko Teguh Jaya
        </h1>
        <form className="flex flex-col gap-8 mt-8" onSubmit={handleSubmit}>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="••••••••"
            onChange={handleChange}
          />
          <Button type="submit" className="w-full bg-blue-500 text-white">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
