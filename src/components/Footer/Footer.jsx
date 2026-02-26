import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap gap-10 max-w-[1400px] mx-auto px-10">

        {/* Logo Section */}
        <div className="flex-1 basis-[300px]">
          <h2 className="text-3xl font-bold cursor-pointer">
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </h2>

          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Bred for a high content of beneficial substances. Our products are
            fresh, organic, and delivered with care.
          </p>

          <p className="text-zinc-800 mt-4">
            {new Date().getFullYear()} &copy; All Rights Reserved
          </p>
        </div>

        {/* Company Links */}
        <div className="flex-1 basis-[200px] space-y-3">
          <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
          <a href="#" className="block text-zinc-600 hover:text-orange-500">
            About
          </a>
          <a href="#" className="block text-zinc-600 hover:text-orange-500">
            FAQs
          </a>
        </div>

        {/* Support Links */}
        <div className="flex-1 basis-[200px] space-y-3">
          <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
          <a href="#" className="block text-zinc-600 hover:text-orange-500">
            Support Center
          </a>
          <a href="#" className="block text-zinc-600 hover:text-orange-500">
            Contact Us
          </a>
        </div>

        {/* Newsletter Section */}
        <div className="flex-1 basis-[300px]">
          <h5 className="text-zinc-800 text-2xl font-bold">
            Stay Connected
          </h5>

          <p className="mt-6 text-zinc-600">
            Questions or Feedback? <br />
            We'd love to hear from you.
          </p>

          <div className="flex bg-white shadow-md p-1 rounded-lg mt-6">
            <input
              type="email"
              placeholder="Email Address"
              className="h-[45px] pl-4 flex-1 outline-none"
            />

            <button
              type="button"
              className="bg-gradient-to-b from-orange-400 to-orange-500 px-4 rounded-lg text-white text-xl hover:to-orange-600 flex items-center justify-center"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;