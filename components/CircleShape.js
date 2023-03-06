import React from "react";

function CircleShape() {
  return (
    <div className="absolute left-0 bottom-0" aria-label="shape" name="shape">
      <span className="sr-only">shape</span>
      <svg
        width="143"
        height="138"
        viewBox="0 0 143 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="118"
          r="101"
          stroke="url(#paint0_linear_52:83)"
          strokeWidth="34"
        ></circle>
        <defs>
          <linearGradient
            id="paint0_linear_52:83"
            x1="-12.7969"
            y1="-37.3359"
            x2="99.2109"
            y2="173.773"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14b8a6"></stop>
            <stop offset="1" stopColor="#14b8a6" stopOpacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default CircleShape;
