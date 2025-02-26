import React from "react";

export default function AboutUs({ left, image }) {
  return (
    <section
      id="about"
      className={`flex ${
        left ? "flex-row" : "flex-row-reverse"
      } max-md:flex-col max-md: justify-between items-center w-[90vw] min-h-[40vh] pl-[7rem] max-md:pl-0 max-md:ml-8 max-md:h-[65vh]`}
    >
      <img src={image} alt="About Us - Image showcasing our core values and mission" className="w-1/4 max-md:w-auto max-md:mr-5" />

      <section className="flex flex-col items-center mr-5 ">
        <h1 className={`${left ? 'text-right' : 'text left'} font-quantico text-xl text-gray-50 max-md:text-center max-md:text-lg`}>
          About Us - Learn About Our Commitment to Innovation and Excellence
        </h1>
        <p className={`${left ? 'text-right' : 'text left'} font-quantico text-lg text-[#02F6B3] max-md:text-center max-md:text-md`}>
          Learn more about our commitment to innovation and excellence.
        </p>
      </section>
    </section>
  );
}
