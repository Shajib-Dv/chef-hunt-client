/** @format */

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";
import { useLoaderData } from "react-router-dom";
import FeaturedChef from "../components/FeaturedChef";
import SubscribeSection from "../components/SubscribeSection";
import LazyLoad from "react-lazy-load";

const Banner = () => {
  const [deviceWith, setDeviceWith] = useState(3);
  const chef = useLoaderData();
  // console.log(chef);
  useEffect(() => {
    let width = window.innerWidth;
    if (width < 600) {
      setDeviceWith(1);
    }
  }, [window.innerWidth]);
  return (
    <>
      <div id="swiper" className="my-10 md:mx-10 md:h-1/2">
        <Swiper
          slidesPerView={deviceWith}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation, Autoplay]}
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
                  <LazyLoad>
                    <img
                      className="w-full h-full md:h-96 rounded-md border-yellow-400 border-2"
                      src={ch.picture}
                      alt="img"
                    />
                  </LazyLoad>
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
      <div>
        <h1 className="text-4xl text-yellow-500 text-center font-bold py-10 backdrop-blur-sm">
          Meet Our Best Chefs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-10 mx-4 mb-10">
          {chef &&
            chef
              .slice(0, 6)
              .map((ch) => <FeaturedChef key={ch.index} chefs={ch} />)}
        </div>
      </div>
      {/* bonus section */}
      <div className="md:mx-10 my-10 grid grid-cols-1 ">
        <div className="p-2 backdrop-blur-sm rounded-sm">
          <h1 className="text-3xl text-yellow-500 font-bold pb-4">
            Connected With Youtube
          </h1>
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/4aZr5hZXP_s"
            title="Chicken Teriyaki Casserole"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="overflow-hidden p-2 backdrop-blur-sm rounded-sm">
          <h1 className="text-3xl text-yellow-500 font-bold pb-4">
            Don't miss the latest updates
          </h1>
          <SubscribeSection />
        </div>
      </div>
    </>
  );
};

export default Banner;
