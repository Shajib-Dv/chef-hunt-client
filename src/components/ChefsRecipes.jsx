/** @format */

import React, { useState } from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import {
  FaStar,
  FaRegGrinStars,
  FaStarHalfAlt,
  FaBookmark,
} from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ChefsRecipes = ({ recipes, cooking }) => {
  const { id, img, name, ingredients } = recipes;
  const [seeMore, setSeeMore] = useState(false);
  const rate = (Math.random() * 5).toFixed(2);
  const [favorite, setFavorite] = useState(false);
  const MySwal = withReactContent(Swal);
  // handle favorite
  const handleFavorite = (id) => {
    if (!favorite) {
      MySwal.fire({
        title: <strong>Congratulations</strong>,
        html: <i>Recipe successfully added to favorite</i>,
        icon: "success",
      });
    }
    setFavorite(true);
  };
  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-64 object-cover" src={img} />
        </figure>
        <div className="card-body p-0">
          <h2 className="card-title text-yellow-500">{name}</h2>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 font-semibold ">
              <span className="text-yellow-500">
                <FaRegGrinStars />
              </span>
              <p>{Math.round(Math.random() * 200)} Favorite</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <span className="text-yellow-500">
                  {rate < 4.5 ? <FaStarHalfAlt /> : <FaStar />}
                </span>
                <p>{rate}</p>
              </span>
              <span className="flex items-center gap-2">
                <span className="text-red-500">
                  <BsFillSuitHeartFill />
                </span>
                <p>{Math.round(Math.random() * 100)} Likes</p>
              </span>
            </div>
          </div>
          <div className="list-disc">
            <p className="text-sm text-yellow-500 font-bold">Ingredients:</p>
            {ingredients?.map((ingr, idx) => (
              <li key={idx}>{ingr}</li>
            ))}
          </div>
          <div>
            <span className="text-yellow-500 font-bold">Cooking method: </span>
            {cooking.slice(0, seeMore ? cooking.length : 50)}
            <span
              onClick={() => setSeeMore(!seeMore)}
              className="cursor-pointer text-xs btn-link"
            >
              {seeMore ? "See less" : "See more"}
            </span>
          </div>
        </div>
        <button
          disabled={favorite}
          onClick={() => handleFavorite(id)}
          className="button w-full disabled:bg-gray-500 cursor-pointer items-center justify-between"
        >
          <p className="">Add To favorite</p> <FaBookmark />
        </button>
      </div>
    </>
  );
};

export default ChefsRecipes;
