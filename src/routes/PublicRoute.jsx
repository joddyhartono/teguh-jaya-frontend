import { getToken } from "../utils/auth";
import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {
  const token = getToken();
  if (token) {
    return <Navigate to="/admin/dashboard" />;
  }
  return children;
};

export default PublicRoute;
