import React from "react";
import { useCart } from "../../context/CartContext";

function Cart() {

  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeItem
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold text-center mb-12">
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-zinc-600">
          Your cart is empty.
        </p>
      ) : (

        <div className="grid md:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-6">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-5 bg-white shadow-md p-4 rounded-xl"
              >

                {/* ✅ PRODUCT IMAGE */}
                <div className="w-[80px] h-[80px] bg-zinc-100 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-orange-500 font-bold">
                    ₹{item.price}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-zinc-200 px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="bg-zinc-200 px-3 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white shadow-md rounded-xl p-6 h-fit">

            <h3 className="text-2xl font-bold mb-6">
              Order Summary
            </h3>

            <div className="flex justify-between mb-3">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="flex justify-between mb-3">
              <span>Delivery</span>
              <span>₹0</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>

            <button className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition">
              Proceed to Checkout
            </button>

          </div>

        </div>
      )}

    </section>
  );
}

export default Cart;