/** @format */

import React from "react";
import Navbar from "../components/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="md:min-h-[calc(100vh-150px)] h-auto bg-transparent">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
