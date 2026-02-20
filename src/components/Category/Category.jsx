import React from "react";
import Heading from "../Heading";

import FruitsCat from "../../assets/Grocery Website Assets/fruits-and-veggies.png";
import SeaFoodCat from "../../assets/Grocery Website Assets/meat-and-seafood.png";
import DairyCat from "../../assets/Grocery Website Assets/dairy-and-eggs.png";

const categories = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description:
      "Fresh, organic produce sourced daily. Explore seasonal fruits and vegetables.",
    image: FruitsCat,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Farm-fresh dairy products and eggs delivered daily.",
    image: DairyCat,
  },
  {
    id: 3,
    title: "Meat & Seafood",
    description:
      "High-quality, responsibly sourced meat and seafood.",
    image: SeaFoodCat,
  },
];

function Category() {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Shop" heading="by category" />

        <div className="flex gap-10">
          {categories.map((card) => (
            <div
              key={card.id}
              className="flex-1 bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full rounded-md"
              />

              <div className="mt-4">
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-gray-600 mt-2">{card.description}</p>

                <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                  See All
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;