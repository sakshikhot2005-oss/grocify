import React from "react";
import Banner from "../Banner/Banner.jsx"; // extension add keli
import Bg from "../../assets/Grocery Website Assets/all-banner.jpg";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* Banner */}
      <Banner title="Contact Us" bgImage={Bg} />

      <section className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-zinc-600 mb-8">
            Have questions about our fresh products? We'd love to hear from you!
            Reach out to us using the information below.
          </p>

          <div className="space-y-6">
            
            <div className="flex items-center gap-4">
              <div className="bg-orange-500 text-white p-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-zinc-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-orange-500 text-white p-3 rounded-full">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-zinc-600">support@grocify.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-orange-500 text-white p-3 rounded-full">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-zinc-600">Pune, Maharashtra, India</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6">Send Message</h3>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();   // page reload stop
              alert("Message Sent Successfully!");
            }}
          >

            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border border-zinc-300 p-3 rounded-lg focus:outline-none focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border border-zinc-300 p-3 rounded-lg focus:outline-none focus:border-orange-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              required
              className="w-full border border-zinc-300 p-3 rounded-lg focus:outline-none focus:border-orange-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
            >
              Send Message
            </button>

          </form>
        </div>

      </section>
    </>
  );
};

export default Contact;