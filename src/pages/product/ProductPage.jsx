import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useProductList from "../../hooks/useProductList";
import ItemCard from "../../components/cards/ItemCard";
import drink from "../../assets/drink.png";
import { getUser } from "../../utils/auth";
import Button from "../../components/buttons/Button";
import { Link } from "react-router";
import useDeleteProduct from "../../hooks/useDeleteProduct";

const ProductPage = () => {
  const { items } = useSelector((state) => {
    return state.category;
  });
  const { categoryId } = useParams();
  const category = items.find((item) => item.id === Number(categoryId));
  const { removeProduct } = useDeleteProduct();
  const { products, fetchProducts } = useProductList(categoryId);

  const user = getUser();
  const isLoggedIn = Boolean(user);

  const handleDeleteProduct = async (id) => {
    try {
      const data = await removeProduct(id);
      if (data) {
        fetchProducts();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          {category?.name}
        </h1>

        {isLoggedIn && (
          <Link
            className="bg-green-500 text-white px-3 md:px-4 py-2 text-sm md:text-base rounded cursor-pointer"
            to={`/admin/categories/${categoryId}/products/create`}
          >
            Create
          </Link>
        )}
      </div>

      {products && (
        <div className="mt-3 md:mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => {
            return (
              <ItemCard
                key={product.id}
                link={`/products/${product.id}`}
                image={drink}
                title={product.name}
                price={product.price}
                isLoggedIn={isLoggedIn}
                onDelete={() => {
                  handleDeleteProduct(product.id);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
