/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Home from "../layout/Home";
import Banner from "../layout/Banner";
import Recipes from "../components/Recipes";

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
  {
    path: "/recipes/:id",
    element: <Recipes />,
    loader: ({ params }) =>
      fetch(`https://chef-hunt-server-shajib-dv.vercel.app/chefs/${params.id}`),
  },
]);

export default router;
