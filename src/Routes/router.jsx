/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Home from "../layout/Home";
import Banner from "../layout/Banner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Banner />,
        loader: () =>
          fetch(
            "https://chef-hunt-server-shajib-dv.vercel.app/chefs/filter/10"
          ),
      },
    ],
  },
]);

export default router;
