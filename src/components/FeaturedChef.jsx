/** @format */

import React from "react";

const FeaturedChef = ({ chefs }) => {
  const { _id, picture, chefName, bio } = chefs;
  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-64 object-cover" src={picture} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-yellow-500">{chefName}!</h2>
          <p>{bio}</p>
        </div>
      </div>
    </>
  );
};

export default FeaturedChef;
