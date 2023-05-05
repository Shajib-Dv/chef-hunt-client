/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedChef from "./FeaturedChef";
import RelaxLotti from "../../public/relax.json";
import Lottie from "lottie-react";

const OriginChefs = () => {
  const chefs = useLoaderData();
  //   console.log(chefs);
  return (
    <>
      {chefs.length === 0 && (
        <div>
          <h1 className="text-3xl text-center text-red-600 font-bold py-0">
            There is no chefs for this country !
          </h1>
          <Lottie animationData={RelaxLotti} loop={true} />
        </div>
      )}
      <div className="my-10 md:mx-10 2xl:w-4/5 2xl:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {chefs && chefs.map((ch) => <FeaturedChef key={ch._id} chefs={ch} />)}
      </div>
    </>
  );
};

export default OriginChefs;
