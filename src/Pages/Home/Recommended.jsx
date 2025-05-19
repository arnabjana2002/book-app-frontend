import React, { useEffect, useState } from "react";
import BookCard from "../Books/BookCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { useFetchAllBooksQuery } from "../../Redux/Features/Book/bookApi";

const Recommended = () => {
  // Fetching books from the API
  const { data: response } = useFetchAllBooksQuery();
  const books = response?.data || []; // data is the array

  return (
    <div className="py-16">
      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>

      {/* Displaying the Books */}
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
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
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {books.length > 0 &&
          books.slice(8, 15).map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Recommended;
