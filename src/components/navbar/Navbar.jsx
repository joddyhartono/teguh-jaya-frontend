import { Link } from "react-router";
import logo from "../../assets/teguhjayalogo.png";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { items } = useSelector((state) => {
    return state.category;
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="border-b">
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Teguh Jaya" className="h-10 w-auto" />
        </Link>
        <div className="flex items-center gap-8">
          <Link to="/">Home</Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer"
            >
              Kategori
            </button>
            {isOpen && (
              <div className="absolute top-full mt-2 px-2 py-1 w-40 bg-white border rounded shadow">
                {items.map((item) => (
                  <Link
                    key={item.id}
                    to={`/categories/${item.id}/products`}
                    className="block py-1"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
