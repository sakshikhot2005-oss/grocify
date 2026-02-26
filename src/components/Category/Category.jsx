import React from "react";
import Heading from "../Heading";

import FruitsCat from "../../assets/Grocery Website Assets/fruits-and-veggies.png";
import SeaFoodCat from "../../assets/Grocery Website Assets/meat-and-seafood.png";
import DairyCat from "../../assets/Grocery Website Assets/dairy-and-eggs.png";
import { Link } from "react-router-dom";
const categories = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily. Explore seasonal fruits and vegetables.",
    image: FruitsCat,
    path: '/fruits'
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Farm-fresh dairy products and eggs delivered daily.",
    image: DairyCat,
    path: '/dairy'
  },
  {
    id: 3,
    title: "Meat & Seafood",
    description: "High-quality, responsibly sourced meat and seafood.",
    image: SeaFoodCat,
    path: "/seafood",  // FIXED
  }

]
function Category() {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Shop" heading="by Category" />

        <div className="flex flex-wrap gap-10">
          {categories.map((card) => (
            <div
              key={card.id}
              className="flex-1 basis-[300px] bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full rounded-md"
              />

              <div className="mt-4">
                <h3 className="text-xl font-semibold">
                  {card.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {card.description}
                </p>

                <Link
                  to={card.path}
                  className="inline-block mt-6 bg-gradient-to-b from-orange-400 to-orange-500
  text-white px-8 py-3 rounded-lg md:text-lg text-md
  hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer"
                >
                  See All
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;