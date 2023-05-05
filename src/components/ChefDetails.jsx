/** @format */

import React from "react";
import { BsFillTrophyFill, BsFillSuitHeartFill } from "react-icons/bs";
import { BiDish, BiGlasses } from "react-icons/bi";
import LazyLoad from "react-lazy-load";
import RelaxLotti from "../../public/relax.json";
import Lottie from "lottie-react";

const ChefDetails = ({ chef }) => {
  const {
    _id,
    like,
    picture,
    chefName,
    bio,
    experience,
    numRecipes,
    origin,
    recipes,
  } = chef;
  return (
    <>
      {chef._id ? (
        <div className="card  card-compact md:h-1/2 lg:h-[600px] md:w-1/2 mx-auto bg-base-100 shadow-xl">
          <div className="avatar flex justify-center">
            <div className="w-64 mt-4 rounded-full">
              <LazyLoad>
                <img src={picture} />
              </LazyLoad>
            </div>
          </div>
          <div className="card-body p-0">
            <h2 className="card-title text-yellow-500">
              {chefName} ({origin})
            </h2>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 font-semibold ">
                <span className="text-yellow-500">
                  <BsFillTrophyFill />
                </span>
                <p>{experience} years of experience</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-2">
                  <span className="text-yellow-500">
                    <BiDish />
                  </span>
                  <p>{recipes?.length} recipes</p>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-red-500">
                    <BsFillSuitHeartFill />
                  </span>
                  <p>{Math.round(Math.random() * 300)} likes</p>
                </span>
              </div>
            </div>
            <p>
              <span className="text-2xl text-yellow-500 font-semibold">
                Bio :
              </span>
              Meet Chef {chefName} , a talented and creative chef who has made a
              name for himself in the culinary world. Alex grew up in a family
              of foodies, and his passion for cooking started at a young age.
              After completing culinary school, Alex began his career at a
              popular restaurant in Los Angeles, where he quickly rose through
              the ranks to become head chef. He has since worked at some of the
              most prestigious restaurants in the country, earning accolades and
              recognition for his innovative and delicious dishes. Alex is known
              for his use of fresh, locally sourced ingredients, and his ability
              to combine flavors and textures in unique and unexpected ways. He
              is constantly experimenting with new ingredients and techniques,
              and his dishes are a reflection of his creativity and passion for
              cooking.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-center text-red-600 font-bold py-0">
            There is no data for this route
          </h1>
          <Lottie animationData={RelaxLotti} loop={true} />
        </div>
      )}
    </>
  );
};

export default ChefDetails;
