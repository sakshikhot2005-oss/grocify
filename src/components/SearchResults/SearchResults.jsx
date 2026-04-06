import React from "react";
import { useLocation } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import { useCart } from "../../context/CartContext";

function SearchResults() {
  const location = useLocation();
  const { addToCart } = useCart();

  // URL मधून search query घेण्यासाठी
  const query = new URLSearchParams(location.search).get("q");

  // Sample products (तू ह्याला API / data file ने replace करू शकतो)
  const products = [
    { id: 1, name: "Apple", price: 100, image: "/images/apple.jpg" },
    { id: 2, name: "Banana", price: 40, image: "/images/banana.jpg" },
    { id: 3, name: "Milk", price: 60, image: "/images/milk.jpg" },
    { id: 4, name: "Bread", price: 30, image: "/images/bread.jpg" },
  ];

  // Search filter
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query?.toLowerCase() || "")
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Results for "{query}"</h2>

      {filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} addToCart={addToCart} />
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}

export default SearchResults;