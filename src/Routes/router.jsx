/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Home from "../layout/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
