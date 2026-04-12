import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useProducts from "../../hooks/useProducts";
import Card from "../../components/cards/Card";
import drink from "../../assets/drink.png";

const ProductPage = () => {
  const { items } = useSelector((state) => {
    return state.category;
  });
  const { categoryId } = useParams();
  const category = items.find((item) => item.id === Number(categoryId));
  const { products } = useProducts(categoryId);

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl text-center font-bold leading-tight">
        {category?.name}
      </h1>
      {products && (
        <div className="mt-3 md:mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                link={`/products/${product.id}`}
                image={drink}
                title={product.name}
                price={product.price}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
