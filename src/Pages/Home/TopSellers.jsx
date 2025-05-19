import { useEffect, useState } from "react";
import BookCard from "../Books/BookCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { useFetchAllBooksQuery } from "../../Redux/Features/Book/bookApi.js";

const categories = [
  "Choose a Genre",
  "Business",
  "Marketing",
  "Fiction",
  "Horror",
  "Adventure",
];

const TopSellers = () => {
  // const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a Genre");

  // Fetching books from the API
  const { data: response } = useFetchAllBooksQuery();
  const books = response?.data || []; // data is the array

  const filteredBooks =
    selectedCategory === "Choose a Genre"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );

  // console.log(filteredBooks);

  return (
    <div className="py-10">
      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>

      {/* Category Filtering */}
      <div className="mb-8 flex items-center">
        <select
          name="category"
          id="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

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
        {filteredBooks.map((book) => (
          <SwiperSlide key={book._id}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSellers;
