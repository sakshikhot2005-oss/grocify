import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const Cards = ({ id, image, name, price }) => {

  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useCart();

  const product = {
    id,
    name,
    price: Number(price),
    image,
  };

  const isLiked = wishlist.some((item) => item.id === id);

  return (
    <div className="p-4 bg-white shadow-md rounded-xl text-center hover:shadow-lg transition duration-300">

      {/* Icons */}
      <div className="flex justify-between items-center mb-3">

        {/* ❤️ Wishlist */}
        <button
          onClick={() =>
            isLiked
              ? removeFromWishlist(id)
              : addToWishlist(product)
          }
          className={`text-xl ${
            isLiked ? "text-red-500" : "text-zinc-300 hover:text-red-400"
          }`}
        >
          <FaHeart />
        </button>

        {/* ➕ Cart */}
        <button
          onClick={() => addToCart(product)}
          className="bg-gradient-to-b from-orange-400 to-orange-500 text-white p-2 rounded-lg text-sm hover:scale-105 transition"
        >
          <FaPlus />
        </button>
      </div>

      {/* Image */}
      <div className="w-full h-40 flex items-center justify-center">
        <img src={image} alt={name} className="h-full object-contain" />
      </div>

      <h3 className="text-lg font-bold mt-3">{name}</h3>

      <p className="text-orange-500 font-semibold mt-1 mb-3 text-lg">
        ₹{price}
      </p>

      <button className="bg-orange-500 text-white px-3 py-1 text-sm rounded-md hover:bg-orange-600 transition">
        Shop Now
      </button>
    </div>
  );
};

export default Cards;