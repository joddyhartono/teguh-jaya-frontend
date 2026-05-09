import useCategoryList from "../../hooks/useCategoryList";
import { useState } from "react";
import drink from "../../assets/drink.png";

const HomeCategories = () => {
  const { categories } = useCategoryList();
  const [category, setCategory] = useState(null);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-sm">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Kategori
        </h1>
        <h2 className="mt-3 md:mt-4">Koleksi Kami</h2>
      </div>

      {categories && (
        <div className="mt-6 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3">
            {categories.map((category) => {
              return (
                <div
                  key={category.id}
                  className="p-4 md:p-6 border-t border-b cursor-pointer hover:bg-(--color-secondary)"
                  onMouseEnter={() => setCategory(category)}
                  onMouseLeave={() => setCategory(null)}
                  onClick={() => setCategory(category)}
                >
                  {category.name}
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center text-center md:items-start md:text-left">
            {category && (
              <>
                <img
                  src={drink}
                  alt={category.name}
                  className="w-full h-28 md:h-32 object-contain mb-3"
                />
                {/* <img src={decode(category.imageBase64)} alt={category.name} className="w-full h-32 object-contain mb-3"/> */}
                <h2 className="font-semibold">{category.name}</h2>
                <p className="text-sm mt-1">{category.description}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeCategories;
