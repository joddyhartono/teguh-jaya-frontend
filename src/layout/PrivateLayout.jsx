import { Outlet } from "react-router";
import Sidebar from "../components/navbar/Sidebar";

const PrivateLayout = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <div className="flex-1 flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default PrivateLayout;
