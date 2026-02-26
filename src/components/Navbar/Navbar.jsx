import { useState } from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-[1400px] mx-auto px-6 flex justify-between items-center h-[12vh]">

        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-x-8">
          <li><Link to="/" className="font-semibold hover:text-orange-500">Home</Link></li>
          <li><Link to="/about" className="font-semibold hover:text-orange-500">About Us</Link></li>
          <li><Link to="/allproducts" className="font-semibold hover:text-orange-500">Products</Link></li>
          <li><Link to="/contact" className="font-semibold hover:text-orange-500">Contact Us</Link></li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-x-5">

          {/* Search */}
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

          {/* Wishlist */}
          <FaHeart className="text-2xl text-zinc-800 hover:text-orange-500 cursor-pointer" />

          {/* Cart */}
          <Link
            to="/cart"
            className="text-2xl text-zinc-800 hover:text-orange-500"
          >
            <HiMiniShoppingBag />
          </Link>

          {/* Mobile Toggle */}
          <button onClick={toggleMenu} className="text-3xl md:hidden">
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {showMenu && (
        <ul className="md:hidden bg-orange-100 flex flex-col items-center gap-6 py-6">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/allproducts" onClick={toggleMenu}>Products</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
          <li><Link to="/cart" onClick={toggleMenu}>Cart</Link></li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;