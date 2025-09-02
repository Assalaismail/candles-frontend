import React, { useState } from "react";
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaRegHeart,
  FaOpencart,
  FaSearch,
  FaRegUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../assets/images/candle-logo.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#AF6A53] text-white text-lg flex justify-between items-center px-4 md:px-20 py-2">
        <div className="flex space-x-3 text-lg">
          <FaFacebookF />
          <FaPinterestP />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
        <p className="hidden md:block text-center text-lg">
          FREE Delivery* on orders of <span className="font-bold">$50</span> or more.{" "}
          <span className="underline cursor-pointer">Carrier surcharge</span> may apply.
        </p>
        <div className="flex space-x-4 text-xs">
          {/* <span className="cursor-pointer">ENGLISH ▾</span>
          <span className="cursor-pointer">GBP ▾</span> */}
        </div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 md:px-20 py-4 bg-white relative">
        {/* Logo */}
        <div className="text-2xl font-serif">
          <img src={logo}/>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg text-gray-800">
          <li className="cursor-pointer border-b-2 border-[#AF6A53] pb-1">Home ▾</li>
          <li className="cursor-pointer">Shop ▾</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Pages ▾</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-xl">
          <FaRegUser className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <FaRegHeart className="cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-[#AF6A53] text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
          <div className="relative cursor-pointer">
            <FaOpencart />
            <span className="absolute -top-2 -right-2 bg-[#AF6A53] text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
          <FaSearch className="cursor-pointer" />

          {/* Burger Menu Icon (Mobile) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden">
            <ul className="flex flex-col space-y-4 p-4 text-gray-800 text-sm">
              <li className="cursor-pointer border-b border-[#AF6A53] pb-1">Home ▾</li>
              <li className="cursor-pointer">Shop ▾</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Pages ▾</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
