/** @format */

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
import { useLoaderData } from "react-router-dom";

const Banner = () => {
  const [deviceWith, setDeviceWith] = useState(3);
  const chef = useLoaderData();
  console.log(chef);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setDeviceWith(1);
    }
  }, [window.innerWidth]);
  return (
    <div id="swiper" className="my-10 md:mx-10 md:h-1/2">
      <Swiper
        slidesPerView={deviceWith}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        loop={true}
        autoplay
        navigation
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={(e) => console.log(e)}
      >
        {chef &&
          chef.map((ch, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative shadow-2xl md:h-full h-96 rounded-md bg-yellow-200">
                <img
                  className="w-full h-full md:h-96 rounded-md border-yellow-400 border-2"
                  src={ch.picture}
                  alt="img"
                />
                <div className="p-4 backdrop-blur-sm bg-transparent absolute bottom-0 text-center w-full">
                  <h2 className="text-3xl text-yellow-600  font-bold ">
                    {ch.chefName}
                  </h2>
                  <p className="text-black font-semibold">{ch.origin}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;
