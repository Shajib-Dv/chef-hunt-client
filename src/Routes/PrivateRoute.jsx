/** @format */

import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Shared/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  // console.log(user);
  if (loader) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/signin" replace />;
};

export default PrivateRoute;
