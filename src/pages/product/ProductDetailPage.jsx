import { useParams } from "react-router";
import useProductDetail from "../../hooks/useProductDetail";
import { useNavigate } from "react-router";
import drink from "../../assets/drink.png";
import MarketplaceButton from "../../components/buttons/MarketplaceButton";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { product } = useProductDetail(productId);
  let navigate = useNavigate();
  return (
    <div className="relative container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 border-b">
      <button
        className="absolute top-6 left-6 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <svg
          className="w-5 h-5"
          viewBox="0 0 1024 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            fill="currentColor"
          />
          <path
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            fill="currentColor"
          />
        </svg>
      </button>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={drink}
          alt={product?.name}
          className="w-full max-w-sm object-contain"
        />
      </div>
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-600">
          {product?.name}
        </h1>
        <h2 className="mt-4 text-lg font-semibold">Rp {product?.price}</h2>
        <h3 className="mt-4 text-gray-500">{product?.description}</h3>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 md:gap-6">
          <MarketplaceButton
            link="https://shopee.co.id"
            color="bg-[#EE4D2D] text-white"
            text="Shopee"
          />
          <MarketplaceButton
            link="https://tokopedia.com"
            color="bg-[#03AC0E] text-white"
            text="Tokopedia"
          />
          <MarketplaceButton
            link="https://lazada.co.id"
            color="bg-[#5F2EEA] text-white"
            text="Lazada"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
