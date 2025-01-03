import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "../Components/Loader";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};

export default PrivateRoute;
