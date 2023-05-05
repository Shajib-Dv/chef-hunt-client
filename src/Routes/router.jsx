/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Home from "../layout/Home";
import Banner from "../layout/Banner";
import Recipes from "../components/Recipes";
import NotFoundPage from "../components/NotFoundPage";
import ShowChefs from "../components/ShowChefs";
import OriginChefs from "../components/OriginChefs";
import PrivateRoute from "./PrivateRoute";
import SignIn from "../components/Shared/SignIn";
import SignUp from "../components/Shared/SignUp";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import UserDetails from "../components/UserDetails";

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
            "https://chef-hunt-server-shajib-dv.vercel.app/origins/Srilankan"
          ),
      },
      {
        path: "/origin/chefs/:country",
        element: <OriginChefs />,
        loader: ({ params }) =>
          fetch(
            `https://chef-hunt-server-shajib-dv.vercel.app/origins/${params.country}`
          ),
      },
      {
        path: "/chefs",
        element: <ShowChefs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/user",
        element: (
          <PrivateRoute>
            <UserDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/recipes/:id",
    element: (
      <PrivateRoute>
        <Recipes />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://chef-hunt-server-shajib-dv.vercel.app/chefs/${params.id}`),
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
