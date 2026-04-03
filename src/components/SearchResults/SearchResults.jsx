import { useLocation } from "react-router-dom";
import ProductList from "../components/ProductList/ProductList";
import { useCart } from "../context/CartContext";

function SearchResults() {
  const { addToCart } = useCart();
  const query = new URLSearchParams(useLocation().search).get("q");

  const filtered = ProductList.filter((item) =>
    item.name.toLowerCase().includes(query?.toLowerCase())
  );

  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        Results for "{query}"
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="shadow p-4 rounded">
            <img src={item.image} className="h-32 mx-auto" />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button
              onClick={() => addToCart(item)}
              className="bg-orange-500 text-white px-3 py-1 mt-2"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;




