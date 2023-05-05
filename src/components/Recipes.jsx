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
      <div className="grid  grid-cols-1 gap-5 md:mx-10 my-10 md:min-h-[calc(100vh-150px)] 2xl:mx-auto 2xl:w-4/5 h-auto bg-transparent">
        <div>{chef && <ChefDetails chef={chef} />}</div>
        <div>
          {chef.recipes && (
            <h1 className="text-5xl bg-[rgb(0,0,0,0.5)] text-center text-yellow-500 font-bold py-6">
              Recipes Form {chef.chefName}
            </h1>
          )}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {chef &&
              chef?.recipes?.map((cf) => (
                <ChefsRecipes key={cf.id} recipes={cf} cooking={chef.bio} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Recipes;
