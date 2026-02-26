import React from "react";
import { Link } from "react-router-dom";
import FreshFruits from "../../assets/Grocery Website Assets/fresh-fruits.png";

function Discount() {
  return (
    <section
      className="relative bg-zinc-100 bg-no-repeat bg-right bg-contain"
      style={{
        backgroundImage: `url(${FreshFruits})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">

        {/* Content Section */}
        <div className="max-w-[750px]">

          {/* 20% + Heading */}
          <div className="flex items-center gap-6 mb-6">
            <span className="text-6xl lg:text-7xl font-extrabold text-orange-500">
              20%
            </span>

            <h3 className="text-3xl lg:text-5xl font-bold text-zinc-800 leading-tight">
              First Order Discount!
            </h3>
          </div>

          <p className="text-zinc-600 mb-8 text-lg leading-relaxed">
            Enjoy an exclusive first order discount on our grocery website!
            Shop fresh essentials and save big on your first purchase.
            Fast delivery and quality guaranteed.
          </p>

          <Link
            to="/shopnow"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Get a Discount
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Discount;