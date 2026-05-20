import Sidebar from "../../components/navbar/Sidebar";
import SummaryCard from "../../components/cards/SummaryCard";
import { getUser } from "../../utils/auth";
import useDashboard from "../../hooks/useDashboard";

const DashboardPage = () => {
  const user = getUser();
  const { stats } = useDashboard();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
      <h1 className="text-3xl md:text-4xl text-center font-bold leading-tight">
        Selamat Datang, {user.username}!
      </h1>
      <div className="mt-3 md:mt-4 flex justify-center gap-4">
        <SummaryCard count={stats.totalCategories} title={"Kategori"} />
        <SummaryCard count={stats.totalProducts} title={"Produk"} />
      </div>
    </div>
  );
};

export default DashboardPage;
