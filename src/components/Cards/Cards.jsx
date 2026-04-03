import React, { useState } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";

const Cards = ({ image, name, price }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="p-4 bg-white shadow-md rounded-xl text-center hover:shadow-lg transition duration-300">

      {/* Card Icons */}
      <div className="flex justify-between items-center mb-3">
        
        {/* ❤️ Like Button */}
        <button
          type="button"
          onClick={() => setLiked(!liked)}
          className={`text-xl transition ${
            liked ? "text-red-500" : "text-zinc-300 hover:text-red-400"
          }`}
        >
          <FaHeart />
        </button>

        {/* ➕ Add Button */}
        <button
          type="button"
          className="bg-gradient-to-b from-orange-400 to-orange-500 text-white p-2 rounded-lg text-sm hover:scale-105 transition"
        >
          <FaPlus />
        </button>
      </div>

      {/* Card Image */}
      <div className="w-full h-40 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="h-full object-contain"
        />
      </div>

      {/* Card Content */}
      <h3 className="text-lg font-bold mt-3">
        {name}
      </h3>

      <p className="text-orange-500 font-semibold mt-1 mb-3 text-lg">
        ${price}
      </p>

      {/* Shop Now Button */}
      <button
        type="button"
        className="bg-orange-500 text-white px-3 py-1 text-sm rounded-md hover:bg-orange-600 transition duration-300"
      >
        Shop Now
      </button>

    </div>
  );
};

export default Cards;

