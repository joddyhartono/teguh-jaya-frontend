import photo from "../../assets/tokoteguhjaya.jpeg";
import { MapPin } from "lucide-react";

const HomeLocation = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Lokasi Kami
        </h1>
        <h2 className="mt-3 md:mt-4">Toko Teguh Jaya</h2>
        <h2 className="mt-3">
          Kunjungi Toko Teguh Jaya secara langsung untuk membeli berbagai
          kebutuhan Anda dengan mudah dan praktis.
        </h2>
      </div>
      <div className="w-full md:w-1/3 flex flex-col items-center text-center md:items-start md:text-left">
        <img
          src={photo}
          alt="Toko Teguh Jaya"
          className="w-full max-w-sm object-contain mb-3"
        />
        <div className="flex items-center gap-2">
          <MapPin size={20} />

          <span>Toko Teguh Jaya</span>
        </div>
        <h2 className="mt-3">
          Jl. Jend. Ahmad Yani No.47, RT.001/RW.004, Pasar Anyar, Kec.
          Tangerang, Kota Tangerang, Banten 15111
        </h2>
      </div>
    </div>
  );
};

export default HomeLocation;
