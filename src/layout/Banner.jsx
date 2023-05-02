/** @format */

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper";
import { useLoaderData } from "react-router-dom";
import FeaturedChef from "../components/FeaturedChef";

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
      <div>
        <h1 className="text-4xl text-yellow-500 text-center font-bold py-10 backdrop-blur-sm">
          Meet Our Best Chefs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-10 mx-4 mb-10">
          {chef &&
            chef
              .slice(4, 10)
              .map((ch) => <FeaturedChef key={ch.index} chefs={ch} />)}
        </div>
      </div>
      {/* bonus section */}
      <div className="mx-10 my-10 grid grid-cols-1 md:grid-cols-2  ">
        <div className="md:p-10 backdrop-blur-sm rounded-sm">
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
        <div className="md:p-10 backdrop-blur-sm rounded-sm">
          <h1 className="text-3xl text-yellow-500 font-bold pb-4">
            Please Visit Our Home
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3359041.068157855!2d87.35911380870367!3d22.652762925866078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1683052613812!5m2!1sen!2sbd"
            width="100%"
            height="480"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Banner;
