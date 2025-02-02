import React from "react";
export default function AboutUs({ left, image }) {
  return (
    <div
    id = "about"
      className={`flex ${
        left ? "flex-row" : "flex-row-reverse"
      } max-md:flex-col max-md: justify-between items-center w-[90vw] min-h-[40vh] pl-[7rem] max-md:pl-0 max-md:ml-8 max-md:h-[65vh]`}
    >
      <img src={image} alt="Image" className="w-1/4 max-md:w-auto max-md:mr-5" />
      <div className="flex flex-col items-center mr-5 ">
        <h2 className={`${left?'text-right' : 'text left'} font-quantico text-2xl text-gray-50 max-md:text-center max-md:text-4xl`}>
          About Us
        </h2>
        <p className={`${left?'text-right' : 'text left'} font-quantico text-4xl text-[#02F6B3] max-md:text-center max-md:text-3xl`}>
          know more about us
        </p>
      </div>
    </div>
  );
}