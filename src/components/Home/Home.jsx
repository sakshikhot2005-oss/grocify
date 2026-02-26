import React from "react";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Value from "../Values/Value";
import Product from "../Product/Product";
import Process from "../Process/Process";
import Testimonials from "../Testimonials/Testimonials";
import Discount from "../Discount/Discount";

function Home() {
  return (
    <>
      <Hero />
      <Category />
      <Value />
      <Product />
      <Process />
      <Testimonials />
      <Discount />
    </>
  );
}

export default Home;