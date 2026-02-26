import React from "react";
import { Link } from "react-router-dom";
import Grocery from "../../assets/Grocery Website Assets/grocery.png";

function Hero() {
  return (
    <section>
      <div className="min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-25 pt-10">

        {/* Hero Content */}
        <div className="flex-1">
          <span className="bg-orange-200 text-lg px-5 py-2 rounded-full">
            Export Best Quality...
          </span>

          <h1 className="md:text-7xl/20 text-5xl/14 mt-4 font-bold">
            Tasty Organic{" "}
            <span className="text-orange-500">Fruits</span> &{" "}
            <span className="text-orange-500">Veggies</span>
            <br /> In Your City
          </h1>

          <p className="text-zinc-600 text-lg max-w-[530px] mt-5 mb-10">
            Bred for a high content of beneficial substance. Our products are
            all fresh and healthy.
          </p>

          {/* Shop Now Button */}
          <Link
            to="/shopnow"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Hero Image */}
        <div className="flex-1 mt-10 md:mt-0">
          <img
            src={Grocery}
            alt="Grocery"
            className="w-full max-w-[500px] mx-auto"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;