import useCategoryList from "../../hooks/useCategoryList";
import { getUser } from "../../utils/auth";
import ItemCard from "../../components/cards/ItemCard";
import { Link } from "react-router";
import useDeleteCategory from "../../hooks/useDeleteCategory";

const CategoryPage = () => {
  const { categories, fetchCategories } = useCategoryList();
  const { removeCategory } = useDeleteCategory();
  const user = getUser();
  const isLoggedIn = Boolean(user);

  const handleDeleteCategory = async (id) => {
    try {
      const data = await removeCategory(id);
      if (data) {
        fetchCategories();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Kategori
        </h1>

        {isLoggedIn && (
          <Link
            className="bg-green-500 text-white px-3 md:px-4 py-2 text-sm md:text-base rounded cursor-pointer"
            to="/admin/categories/create"
          >
            Create
          </Link>
        )}
      </div>

      {categories && (
        <div className="mt-3 md:mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => {
            return (
              <ItemCard
                key={category.id}
                link={
                  isLoggedIn
                    ? `/admin/categories/${category.id}/products`
                    : `/categories/${category.id}/products`
                }
                image={`data:image/*;base64,${category.imageBase64}`}
                title={category.name}
                isLoggedIn={isLoggedIn}
                onDelete={() => {
                  handleDeleteCategory(category.id);
                }}
                updateLink={`/admin/categories/${category.id}/update`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
