import { instance, setAuthHeader } from "../api/api";
import { DASHBOARD_ENDPOINTS } from "../api/endpoints";
import { getToken } from "../utils/auth";

const getStats = async () => {
  const token = getToken();
  setAuthHeader(token);

  const response = await instance.get(DASHBOARD_ENDPOINTS.STATS);
  return response.data;
};

export { getStats };
