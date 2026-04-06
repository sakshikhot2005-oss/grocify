import React, { useState } from "react";
import Heading from "../Heading";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";

function Product() {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "Seafood"];
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  // Category Filter
  const filteredProducts =
    activeTab === "All"
      ? ProductList
      : ProductList.filter((item) => item.category === activeTab);

  // Show only 8 products initially
  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Category Tabs */}
        <div className="flex gap-3 justify-center mt-10 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveTab(category);
                setShowAll(false);
              }}
              className={`px-5 py-2 text-lg rounded-lg transition ${
                activeTab === category
                  ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                  : "bg-zinc-100 hover:bg-zinc-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 pb-10">
        {displayedProducts.map((product) => (
          <Cards
            key={product.id}
            id={product.id}              // ✅ IMPORTANT
            image={product.image}
            name={product.title}        // ✅ FIX (title → name)
            price={product.price}
          />
        ))}
      </div>

      {/* View All Button */}
      {!showAll && filteredProducts.length > 8 && (
        <div className="mt-5 mb-20 mx-auto w-fit">
          <button
            onClick={() => setShowAll(true)}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            View All
          </button>
        </div>
      )}
    </section>
  );
}

export default Product;