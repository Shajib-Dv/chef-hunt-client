/** @format */

import React from "react";
import Navbar from "./Shared/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Shared/Footer";
import ChefDetails from "./ChefDetails";
import ChefsRecipes from "./ChefsRecipes";

const Recipes = () => {
  const chef = useLoaderData();
  // console.log(chef);
  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 md:mx-10 my-10 md:min-h-[calc(100vh-150px)] h-auto bg-transparent">
        <div>{chef && <ChefDetails chef={chef} />}</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {chef &&
            chef?.recipes?.map((cf) => (
              <ChefsRecipes key={cf.id} recipes={cf} cooking={chef.bio} />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipes;
