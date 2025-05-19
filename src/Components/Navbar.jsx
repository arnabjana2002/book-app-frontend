import { Link } from "react-router";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { GoSearch } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

import avatarIcon from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { currentUser, logoutUser } = useAuth();

  const handleLogout = async () => {
    await logoutUser();
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(cartItems);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // console.log(isDropdownOpen);
  const dropDownItems = [
    { name: "Dashbord", href: "/dashbord" },
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
  ];

  return (
    <>
      <header className="max-w-screen-2xl mx-auto px-4 pt-6">
        <nav className="flex justify-between items-center">
          {/* Logo & Search Bar */}
          <div className="flex items-center md:gap-16 gap-4">
            <Link to="/">
              <HiMiniBars3CenterLeft className="size-6" />
            </Link>

            {/* Search Input */}
            <div className="relative sm:w-72 w-40 space-x-2">
              <div>
                <GoSearch className="absolute inline-block left-1.5 md:left-3 inset-y-2" />
              </div>
              <input
                type="text"
                placeholder="Search Here"
                className="bg-[#EAEAEA] w-full py-1 md:px-8 px-7 rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* User Profile, Favourite & Cart */}
          <div className="relative flex items-center md:space-x-3 space-x-2">
            {/* User Profile */}
            <div>
              {currentUser ? (
                <>
                  <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <img
                      src={avatarIcon}
                      alt=""
                      className={`size-7 rounded-full ${
                        currentUser ? "ring-2 ring-blue-500" : ""
                      }`}
                    />
                  </button>
                  {/* Show Dropdown Menu Here */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                      <ul className="py-2">
                        {dropDownItems.map((item) => (
                          <li
                            key={item.name}
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <Link
                              to={item.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-300"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <button
                            className="block px-4 py-2 text-sm hover:bg-gray-300 w-full text-left"
                            onClick={handleLogout}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login">
                  <FaRegCircleUser className="size-6" />
                </Link>
              )}
            </div>

            {/* Favourite Button */}
            <button className="hidden sm:block">
              <FaRegHeart className="size-6" />
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md"
            >
              <LuShoppingCart className="size-6 mr-1" />
              {cartItems.length > 0 ? (
                <span className="text-lg font-semibold sm:ml-1">
                  {cartItems.length}
                </span>
              ) : (
                <span className="text-lg font-semibold sm:ml-1">0</span>
              )}
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
