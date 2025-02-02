import React from "react";

export default function L_SubTree() {
  return (
    <div className="flex flex-row-reverse min-h-[60vh] min-w-[20vw]">
      <div className="flex items-stretch min-w-[20vw]  items-center flex-row">
        <div className="h-[.8rem] w-[.8rem] rounded-full bg-[#1B804E]"></div>
        <div className="h-[.2rem] w-[20vw] bg-[#1B804E]"></div>
        <button className="bg-[#1B804E] text-white font-bold py-2 px-4 rounded w-[12rem] overflow-hidden">
          Event Commencement
        </button>
      </div>
      <div className="items-stretch w-[.2rem] bg-[#1B804E]"></div>
      <div className="flex items-stretch min-w-[20vw]  flex-col justify-between py-3">
        <div className="min-h-[0vh] justify-stretch flex flex-row-reverse items-center">
          <div className="h-[.8rem] w-[.8rem] rounded-full bg-[#1B804E]"></div>
          <div className="h-[.2rem] w-[20vw] bg-[#1B804E]"></div>
          <button className="bg-[#1B804E] text-white font-bold py-2 px-4 rounded w-[12rem] overflow-hidden">
            First Evaluation Round
          </button>
        </div>
        <div className="min-h-[0vh] justify-stretch flex flex-row-reverse items-center">
          <div className="h-[.8rem] w-[.8rem] rounded-full bg-[#1B804E]"></div>
          <div className="h-[.2rem] w-[20vw] bg-[#1B804E]"></div>
          <button className="bg-[#1B804E] text-white font-bold py-2 px-4 rounded w-[12rem] overflow-hidden">
            Second Evaluation round
          </button>
        </div>
      </div>
    </div>
  );
}
