import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgSeaFood from "../../assets/Grocery Website Assets/seafood-banner.jpg";

function SeaFood() {
  return (
    <CategoryPage
      title="Meat & Seafood"
      bgImage={BgSeaFood}
      categories={["Seafood"]}   // ✅ exact match with ProductList
    />
  );
}

export default SeaFood;