import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

import { news } from "../../../public/news.js";
import { Link } from "react-router";

const News = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">News</h2>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
      >
        {news.map((newsItem, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row sm:justify-between items-center gap-12">
              {/* Content */}
              <div className="py-4">
                <Link to={"/"}>
                  <h3 className="text-lg font-medium hover:text-blue-500 mb-4">{newsItem.title}</h3>
                </Link>
                <div className="w-15 h-[4px] bg-primary"></div>
                <p className="text-sm text-gray-600">{newsItem.description}</p>
              </div>
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={newsItem.image}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default News;
