/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper";
import { useLoaderData } from "react-router-dom";

const Banner = () => {
  const chef = useLoaderData();
  console.log(chef);
  return (
    <div className="my-10 mx-10 h-full">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        loop={true}
        autoplay
        navigation
        className="h-1/3"
      >
        {chef &&
          chef.map((ch) => (
            <SwiperSlide>
              <div className="shadow-2xl rounded-md bg-yellow-200">
                <img
                  className="w-full h-full rounded-md border-yellow-400 border-2"
                  src={ch.picture}
                  alt="img"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;
