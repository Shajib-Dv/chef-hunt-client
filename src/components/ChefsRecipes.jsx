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

const cooking = [
  "Sautéing is a cooking method that involves quickly cooking food in a small amount of oil or fat over high heat. This method is often used for vegetables, meats, and seafood and is a great way to add flavor and texture to your dishes.To sauté, start by heating a small amount of oil or fat in a pan over high heat. Once the oil is hot, add your ingredients to the pan and stir or toss them continuously. The high heat will cause the food to brown quickly and develop a rich flavor.When sautéing vegetables, it's important to cut them into uniform pieces so that they cook evenly. For meats and seafood, it's best to pat them dry with a paper   towel before adding them to the pan to ensure that they sear properly.Sautéing is a versatile cooking method that can be used for a variety of dishes,from stir-fries to pan-seared steaks. With a little practice, you can master this technique and elevate your cooking to the next level",
];

const ingredients = [
  "chicken breast",
  "garlic",
  "onion",
  "bell pepper",
  "carrots",
  "celery",
  "tomatoes",
  "olive oil",
  "salt",
  "pepper",
  "paprika",
  "cumin",
  "dried oregano",
  "lemon",
  "parsley",
  "basil",
  "parmesan cheese",
  "butter",
  "flour",
  "milk",
  "eggs",
  "sugar",
  "vanilla extract",
  "baking powder",
  "baking soda",
  "all-purpose flour",
  "chocolate chips",
  "honey",
  "soy sauce",
  "rice vinegar",
  "sesame oil",
  "sriracha sauce",
];

const ChefsRecipes = ({ recipes }) => {
  const { id, img, name } = recipes;
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
            {ingredients
              ?.slice(Math.round(Math.random() * 5), 10)
              .map((ingr, idx) => (
                <li key={idx}>{ingr}</li>
              ))}
          </div>
          <div>
            <span className="text-yellow-500 font-bold">Cooking method: </span>
            The
            {cooking[0].slice(
              Math.round(Math.random() * 30),
              seeMore ? 400 : 100
            )}
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
