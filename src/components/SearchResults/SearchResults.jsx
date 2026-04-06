import React from "react";
import { useLocation, Link } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";

function SearchResults() {
  const location = useLocation();

  // 🔍 Get query from URL
  const query = new URLSearchParams(location.search).get("q") || "";

  // 🧠 Filter logic (name + category)
  const filteredProducts = ProductList.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">

      {/* 🔙 Back Button */}
      <Link
        to="/"
        className="text-orange-500 font-semibold hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      {/* 🔍 Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Search Results for "<span className="text-orange-500">{query}</span>"
      </h2>

      {/* ❌ If no results */}
      {filteredProducts.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-xl text-zinc-600 mb-4">
            No products found 😢
          </p>
          <Link
            to="/allproducts"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Browse All Products
          </Link>
        </div>
      ) : (
        <>
          {/* ✅ Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Cards
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.title}
                price={product.price}
              />
            ))}
          </div>

          {/* 🔢 Result Count */}
          <p className="text-center text-sm text-zinc-500 mt-10">
            Showing {filteredProducts.length} result(s)
          </p>
        </>
      )}
    </section>
  );
}

export default SearchResults;