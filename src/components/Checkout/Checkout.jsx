import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    phone: "",
    city: "",
    pincode: "",
    addressLine: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple validation
    if (!address.name || !address.phone || !address.city) {
      alert("Please fill all fields");
      return;
    }

    navigate("/payment", { state: address });
  };

  return (
    <section className="max-w-[600px] mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Delivery Address
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="addressLine"
          placeholder="Full Address"
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button className="w-full bg-orange-500 text-white py-3 rounded-lg">
          Continue to Payment
        </button>

      </form>
    </section>
  );
}

export default Checkout;