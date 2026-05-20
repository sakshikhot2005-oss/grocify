import React from "react";
import { useCart } from "../../context/CartContext";
import { FaTrash, FaCartPlus } from "react-icons/fa";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart } = useCart();

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold text-center mb-8">
        ❤️ My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">
          No items in wishlist 😢
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">

          {wishlist.map((item) => (
            <div key={item.id} className="shadow p-4 rounded-xl">

              <img
                src={item.image}
                alt={item.title}
                className="h-40 mx-auto"
              />

              <h2 className="font-bold mt-2">
                {item.title}
              </h2>

              <p className="text-orange-500">
                ₹{item.price}
              </p>

              <div className="flex justify-between mt-3">

                <button
                  onClick={() => addToCart(item)}
                  className="bg-orange-500 text-white px-3 py-1 rounded"
                >
                  <FaCartPlus /> Add
                </button>

                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>

              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Wishlist;