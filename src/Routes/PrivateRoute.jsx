/** @format */

import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loader from "../components/Shared/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  console.log(user);
  if (loader) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signin" replace />;
};

export default PrivateRoute;
