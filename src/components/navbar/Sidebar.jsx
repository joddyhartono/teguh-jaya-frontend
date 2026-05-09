import { useState } from "react";
import { getUser } from "../../utils/auth";
import { X, LogOut, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../../features/auth/authSlice";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = getUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logout());
    navigate("/admin/login");
  };

  return (
    <>
      {isOpen ? (
        <div className="w-72 min-h-screen bg-(--color-secondary) py-6 px-4 flex flex-col border-r">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-lg font-semibold leading-tight">
              Hi, {user.username}!
            </h1>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-8 flex-1">
            <Link to="/admin/dashboard">Dashboard</Link>
            <Link to="/admin/categories">Kategori</Link>
          </div>
          <button
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleLogout}
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      ) : (
        <div className="w-13 min-h-screen bg-(--color-secondary) py-6 px-4 border-r">
          <button onClick={() => setIsOpen(true)} className="cursor-pointer">
            <Menu size={20} />
          </button>
        </div>
      )}
    </>
  );
};

export default Sidebar;
