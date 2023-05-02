/** @format */

import React from "react";
import { BsFillTrophyFill, BsFillSuitHeartFill } from "react-icons/bs";
import { BiDish, BiGlasses } from "react-icons/bi";

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
      {chef && (
        <div className="card card-compact h-1/2 w-full bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-64 object-cover" src={picture} />
          </figure>
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
                  <p>{like} likes</p>
                </span>
              </div>
            </div>
            <p>
              <span className="text-2xl text-yellow-500 font-semibold">
                Bio :{" "}
              </span>{" "}
              {bio}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChefDetails;
