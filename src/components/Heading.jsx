import React from "react";

function Heading({ highlight, heading }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="text-green-600">{highlight} </span>
        {heading}
      </h2>
    </div>
  );
}

export default Heading;