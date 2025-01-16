import React from "react";
export default function AboutUs({ left, image }) {
  return (
    <div
      className={`flex ${
        left ? "flex-row" : "flex-row-reverse"
      } justify-between items-center w-[90vw] h-[40vh] pl-[7rem]`}
    >
      <img src={image} alt="Image" className="w-1/4" />
      <div className="flex flex-col">
        <h2 className={`${left?'text-right' : 'text left'} font-quantico text-2xl text-gray-50`}>
          About Us
        </h2>
        <p className={`${left?'text-right' : 'text left'} font-quantico text-4xl text-[#02F6B3]`}>
          know more about us
        </p>
      </div>
    </div>
  );
}