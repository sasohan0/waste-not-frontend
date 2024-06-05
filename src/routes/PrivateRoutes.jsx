import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading, logout } = useAuth();
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (loading) {
    return <LoadingSpinner />;
  }

  // if (!token && user) {
  //   <LoadingSpinner />;
  //   logout();

  //   // If not authenticated, redirect to the login page
  // }

  if (token && user) {
    return children;
  } else {
    logout();
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoutes;
