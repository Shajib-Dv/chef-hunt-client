/** @format */

import React, { useEffect, useRef, useState } from "react";
import FeaturedChef from "./FeaturedChef";
import Loader from "./Shared/Loader";

const ShowChefs = () => {
  const [chefs, setChef] = useState([]);
  const [slice, setSlice] = useState(false);

  useEffect(() => {
    fetch("https://chef-hunt-server-shajib-dv.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChef(data.data))
      .catch((error) => console.log(error));
  }, []);
  // console.log(chefs);
  return (
    <>
      {chefs.length === 0 && (
        <div className="m-10">
          <Loader />
        </div>
      )}
      <div className="my-10 md:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {chefs.length !== 0 &&
          chefs
            ?.slice(0, slice ? chefs.length : 12)
            .map((ch) => <FeaturedChef key={ch._id} chefs={ch} />)}
      </div>
      <div className="flex justify-center w-full mb-10">
        {slice ? (
          ""
        ) : (
          <button
            onClick={() => setSlice(!slice)}
            className="btn button justify-center"
          >
            See More
          </button>
        )}
      </div>
    </>
  );
};

export default ShowChefs;
