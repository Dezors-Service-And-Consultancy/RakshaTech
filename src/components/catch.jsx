import React from "react";

export default function Catch() {
  return (
    <div id="sponsor" className="flex flex-col min-h-[5vh] md:min-h-[6vh] w-full justify-between items-center">
      {/* Title Section */}
      <div className="flex flex-col justify-between items-center space-y-2 md:space-y-4">
        <h1 className="text-xl md:text-2xl lg:text-4xl max-xs:text-3xl font-quantico tracking-widest bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#04362A] bg-clip-text text-transparent text-center">
          Your Problems 
        </h1>
        <h1 className="text-0.5xl md:text-1xl max-xs:text-2xl lg:text-2xl font-quantico tracking-wide bg-gradient-to-b from-[#02F6B3] via-[#007A58] to-[#007A58] bg-clip-text text-transparent text-center">
          Our Sollution
        </h1>
      </div>

      {/* Register Button */}
      <button className="bg-gradient-to-br from-[#02F6B3] to-[#007A58] text-white py-[.7rem] px-[2rem] mt-[2rem] rounded-[1rem] shadow-lg font-text transition-transform hover:scale-105">
        Register now
      </button>
    </div>
  );
}
