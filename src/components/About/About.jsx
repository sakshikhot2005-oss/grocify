import React from "react";
import Banner from "../Banner/Banner";
import Heading from "../Heading";
import AboutImage from "../../assets/Grocery Website Assets/fresh-fruits.png";
import BgAbout from "../../assets/Grocery Website Assets/all-banner.jpg";

function About() {
  return (
    <>
      {/* Top Banner */}
      <Banner title="About Us" bgImage={BgAbout} />

      {/* About Section */}
      <section>
        <div className="max-w-[1400px] mx-auto px-10 py-20">

          <Heading highlight="Who" heading="We Are" />

          <div className="flex flex-col lg:flex-row items-center gap-16 mt-16">

            {/* Left Image */}
            <div className="flex-1">
              <img
                src={AboutImage}
                alt="About Grocery"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Right Content */}
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-zinc-800 mb-6">
                Fresh & Organic Groceries Delivered to Your Door
              </h3>

              <p className="text-zinc-600 mb-4 leading-relaxed">
                At Grocify, we believe healthy living starts with fresh,
                high-quality ingredients. Our mission is to provide farm-fresh
                fruits, vegetables, dairy, and seafood directly to your home.
              </p>

              <p className="text-zinc-600 mb-4 leading-relaxed">
                We partner with trusted local farmers and suppliers to ensure
                every product meets our strict quality standards.
              </p>

              <p className="text-zinc-600 leading-relaxed">
                Fast delivery, affordable pricing, and guaranteed freshness —
                that’s our promise to you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-zinc-100">
        <div className="max-w-[1400px] mx-auto px-10 py-20">

          <Heading highlight="Our" heading="Mission & Vision" />

          <div className="grid md:grid-cols-2 gap-12 mt-16">

            <div className="bg-white p-10 rounded-xl shadow-md">
              <h4 className="text-2xl font-bold text-orange-500 mb-4">
                Our Mission
              </h4>
              <p className="text-zinc-600">
                To make fresh, organic groceries accessible and affordable
                for everyone while supporting local farmers and sustainable
                agriculture.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-md">
              <h4 className="text-2xl font-bold text-orange-500 mb-4">
                Our Vision
              </h4>
              <p className="text-zinc-600">
                To become the most trusted online grocery platform by
                delivering freshness, quality, and happiness to every home.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;