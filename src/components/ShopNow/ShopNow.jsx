import React from "react";

const products = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 120,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
  },
  {
    id: 2,
    name: "Banana",
    price: 60,
    image: "/src/assets/Grocery Website Assets/grapes.png",
  },
  {
    id: 3,
    name: "Milk",
    price: 55,
    image: "src/assets/Grocery Website Assets/milk.png",
  },
  {
    id: 4,
    name: "Butter",
    price: 320,
    image: "src/assets/Grocery Website Assets/butter.png",
  },
  {
    id: 5,
    name: "Cheese",
    price: 240,
    image: "/src/assets/Grocery Website Assets/ricotta-cheese.png",
  
  },
  {
    id: 6,
    name: "Strawberry",
    price: 40,
    image: "/src/assets/Grocery Website Assets/strawberry.png",
  },
];

const ShopNow = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold text-center mb-12">
        Shop Now
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[200px] object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold mb-2">
                {product.name}
              </h3>

              <p className="text-orange-500 font-bold mb-4">
                ₹{product.price}
              </p>

              <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ShopNow;