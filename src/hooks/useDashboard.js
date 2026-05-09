import { useEffect, useState } from "react";
import { getStats } from "../services/dashboardService";

const useDashboard = () => {
  const [stats, setStats] = useState({
    totalCategories: 0,
    totalProducts: 0,
  });

  const fetchStats = async () => {
    try {
      const data = await getStats();
      setStats(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return {
    stats,
  };
};

export default useDashboard;
