import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const address = location.state;

  const [method, setMethod] = useState("cod");

  const handlePayment = () => {
    alert("Order Placed Successfully 🎉");
  };

  return (
    <section className="max-w-[800px] mx-auto px-6 py-16">

      <h2 className="text-3xl font-bold text-center mb-10">
        Payment Details
      </h2>

      {/* Address Preview */}
      <div className="bg-zinc-100 p-5 rounded-lg mb-8">
        <h3 className="font-semibold mb-2">Deliver To:</h3>
        <p>{address?.name}</p>
        <p>{address?.phone}</p>
        <p>{address?.city} - {address?.pincode}</p>
        <p>{address?.addressLine}</p>
      </div>

      {/* Payment Options */}
      <div className="space-y-4">

        <label className="flex items-center gap-3">
          <input
            type="radio"
            checked={method === "cod"}
            onChange={() => setMethod("cod")}
          />
          Cash on Delivery
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            checked={method === "upi"}
            onChange={() => setMethod("upi")}
          />
          UPI Payment
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            checked={method === "card"}
            onChange={() => setMethod("card")}
          />
          Credit / Debit Card
        </label>

      </div>

      <button
        onClick={handlePayment}
        className="mt-10 w-full bg-green-500 text-white py-3 rounded-lg"
      >
        Place Order
      </button>

    </section>
  );
}

export default Payment;