/** @format */

import React from "react";
import { BsFillTrophyFill, BsFillSuitHeartFill } from "react-icons/bs";
import { BiDish, BiGlasses } from "react-icons/bi";
import { Link } from "react-router-dom";

const FeaturedChef = ({ chefs }) => {
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
  } = chefs;
  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <div className="avatar flex justify-center">
          <div className="w-64 rounded-full">
            <img src={picture} />
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
                <p>{recipes.length} recipes</p>
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
            Meet Chef{" "}
            <span className="text-[1rem] text-yellow-500 font-semibold">
              {chefName}
            </span>
            , a renowned chef and restaurateur who has been a driving force in
            the culinary world for over two decades. Born in Madrid, Spain,
            Maria developed a passion for cooking at a young age, inspired by
            her grandmother's traditional Spanish recipes. After completing
            culinary school in Madrid, Maria honed her skills working in some of
            the city's top restaurants...
          </p>
        </div>
        <div>
          <Link to={`/recipes/${_id}`} className="button justify-center gap-2">
            View recipes
            <span className="text-2xl">
              <BiGlasses />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedChef;
