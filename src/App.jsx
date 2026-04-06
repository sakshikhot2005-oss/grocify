import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import SeaFood from "./components/SeaFood/SeaFood";
import AllProducts from "./components/AllProducts/AllProducts";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ShopNow from "./components/ShopNow/ShopNow";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Payment from "./components/Payment/Payment";
import SearchResults from "./components/SearchResults/SearchResults";


// Layout Component
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "fruits", element: <Fruits /> },
      { path: "dairy", element: <Dairy /> },
      { path: "seafood", element: <SeaFood /> },
      { path: "allproducts", element: <AllProducts /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "shopnow", element: <ShopNow /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "payment", element: <Payment /> },
      { path: "searchresults", element: <SearchResults />},
    ],
  },
]);

// App Component
function App() {
  return <RouterProvider router={router} />;
}

export default App;