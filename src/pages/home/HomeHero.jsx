import MarketplaceButton from "../../components/buttons/MarketplaceButton";

const HomeHero = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 border-b">
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Toko Plastik & Kebutuhan Usaha Lengkap
        </h1>
        <h2 className="mt-4">
          Tersedia berbagai jenis plastik, rencengan, dan bahan makanan.
        </h2>

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
      <div className="flex flex-col items-center gap-4 w-full md:w-auto">
        {/* image */}
      </div>
    </div>
  );
};

export default HomeHero;
