import React from "react";

export default function RakshatechHeader() {
  return (
    <div className="flex flex-col min-h-[35vh] w-auto justify-between items-center">
      <div className=" flex flex-col justify-between items-center">
        <h1 className=" text-8xl font-quantico tracking-widest bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF] to-[#04362A] bg-clip-text text-transparent">
          Raksha Tech
        </h1>
        <h1 className=" text-5xl font-quantico tracking-wide bg-gradient-to-b from-[#02F6B3] via-[#007A58] to-[#007A58] bg-clip-text text-transparent">
          Hackathon
        </h1>
      </div>

      <button className="bg-[#007A58] text-white py-3 px-8 mt-8 rounded-[20px] shadow-lg font-text">
        Register now
      </button>
    </div>
  );
}
