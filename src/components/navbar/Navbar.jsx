import { Link } from "react-router";
import logo from "../../assets/teguhjayalogo.png";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

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
          <button className="p-2">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
