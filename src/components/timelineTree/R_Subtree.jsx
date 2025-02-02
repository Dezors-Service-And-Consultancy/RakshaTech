import React from "react";

export default function R_SubTree() {
  return ( 
    <div className="flex flex-row min-h-[60vh] min-w-[0vw]">
      <div className="flex items-stretch min-w-[20vw]  items-center flex-row-reverse">
        <div className="h-[.8rem] w-[.8rem] rounded-full bg-[#1B804E]"></div>
        <div className="h-[.2rem] w-[20vw] bg-[#1B804E]"></div>
        <button className="bg-[#1B804E] text-white font-bold py-2 px-4 rounded w-[12rem] overflow-hidden">
          Registeration start
        </button>
      </div>
      <div className="items-stretch w-[.2rem] bg-[#1B804E]"></div>
      <div className="flex items-stretch min-w-[20vw]  flex-col justify-between py-3">
        <div className="min-h-[0vh] justify-stretch flex flex-row items-center">
          <div className="h-[.8rem] w-[.8rem] rounded-full bg-[#1B804E]"></div>
          <div className="h-[.2rem] w-[20vw] bg-[#1B804E]"></div>
          <button className="bg-[#1B804E] text-white font-bold py-2 px-4 rounded w-[12rem] overflow-hidden">
            Information session
          </button>
        </div>
        <div className="min-h-[0vh] justify-stretch flex flex-row items-center">
          <div className="h-[.8rem] w-[.8rem] rounded-full bg-[#1B804E]"></div>
          <div className="h-[.2rem] w-[20vw] bg-[#1B804E]"></div>
          <button className="bg-[#1B804E] text-white font-bold py-2 px-4 rounded w-[12rem] overflow-hidden">
            Registration closed
          </button>
        </div>
      </div>
    </div>
  );
}
