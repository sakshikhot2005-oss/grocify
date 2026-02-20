import { useState } from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-white shadow-md relative">
      <nav className="max-w-[1400px] mx-auto px-6 flex justify-between items-center h-[12vh]">

        {/* Logo */}
        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-8">
          <li>
            <a href="#" className="font-semibold text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-zinc-800 hover:text-orange-500">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-zinc-800 hover:text-orange-500">
              Process
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold text-zinc-800 hover:text-orange-500">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-x-5">

          {/* Desktop Search */}
          <div className="hidden md:flex items-center border-2 border-orange-500 rounded-full px-2">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 focus:outline-none"
            />
            <button className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
              <FaSearch />
            </button>
          </div>

          <a href="#" className="text-2xl text-zinc-800">
            <FaHeart />
          </a>

          <a href="#" className="text-2xl text-zinc-800">
            <HiMiniShoppingBag />
          </a>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="text-3xl md:hidden"
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
            

          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {showMenu && (
        <ul className="md:hidden bg-orange-100 flex flex-col items-center gap-6 py-6">
          <li><a href="#" className="font-semibold">Home</a></li>
          <li><a href="#" className="font-semibold">About Us</a></li>
          <li><a href="#" className="font-semibold">Process</a></li>
          <li><a href="#" className="font-semibold">Contact Us</a></li>

          {/* Mobile Search */}
          <li className="flex border-2 border-orange-500 rounded-full px-2">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 focus:outline-none"
            />
            <button className="bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
              <FaSearch />
            </button>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;