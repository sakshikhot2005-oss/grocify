import React from "react";
import Heading from "../Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiPlant, PiFactory } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "It is a long established fact that a reader.",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "It is a long established fact that a reader.",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "It is a long established fact that a reader.",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "It is a long established fact that a reader.",
    icon: <BsTruck />,
  },
];

const Process = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="w-fit mr-auto">
          <Heading highlight="Our" heading="Process" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 mt-20">
          {steps.map((item) => (
            <div
              key={item.id}
              className={`flex-1 basis-[300px] ${
                item.id % 2 === 0 ? "lg:-mt-10" : ""
              }`}
            >
              {/* Number Circle */}
              <span className="flex justify-center items-center w-16 h-16 mx-auto rounded-full text-4xl bg-zinc-800 text-white">
                {item.number}
              </span>

              {/* Content */}
              <div className="flex items-center gap-x-5 mt-10">
                <span className="flex justify-center items-center text-2xl bg-gradient-to-b from-orange-500 to-orange-600 text-white w-14 h-14 rounded-full">
                  {item.icon}
                </span>

                <div className="flex-1">
                  <h4 className="text-zinc-800 text-xl font-bold">
                    {item.title}
                  </h4>
                  <p className="text-zinc-600 mt-2 text-sm">
                    {item.para}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;