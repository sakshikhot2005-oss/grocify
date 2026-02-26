import React from "react";
import Heading from "../Heading";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from "../../assets/Grocery Website assets/basket-full-vegetables.png";
const value = [
  {
    id: 1,
    title: "Trust",
    para: "It is a long established fact that a reader will be distracted",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "It is a long established fact that a reader will be distracted",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "Learn is simply dummy text of the printing industry",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "Learn is simply dummy text of the printing industry",
    icon: <FaSeedling />,
  },
];

function Value() {
  const leftValues = value.slice(0, 2).map((item) => (
    <div
      key={item.id}
      className="flex flex-row-reverse items-center gap-7"
    >
      <span className="flex justify-center items-center w-14 h-14 rounded-full text-2xl text-white bg-orange-500">
        {item.icon}
      </span>

      <div className="text-right">
        <h3 className="text-2xl font-bold text-zinc-800">
          {item.title}
        </h3>
        <p className="text-zinc-600 mt-2">
          {item.para}
        </p>
      </div>
    </div>
  ));

  const rightValues = value.slice(2).map((item) => (
    <div
      key={item.id}
      className="flex items-center gap-7"
    >
      <span className="flex justify-center items-center w-14 h-14 rounded-full text-2xl text-white bg-orange-500">
        {item.icon}
      </span>

      <div>
        <h3 className="text-2xl font-bold text-zinc-800">
          {item.title}
        </h3>
        <p className="text-zinc-600 mt-2">
          {item.para}
        </p>
      </div>
    </div>
  ));

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Value" />

        <div className="flex gap-10 mt-16 items-center">
          {/* Left */}
          <div className="w-1/3 flex flex-col gap-10">
            {leftValues}
          </div>

          {/* Center Image */}
          <div className="w-1/3">
            <img src={Basket} alt="Basket" />
          </div>

          {/* Right */}
          <div className="w-1/3 flex flex-col gap-10">
            {rightValues}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Value;