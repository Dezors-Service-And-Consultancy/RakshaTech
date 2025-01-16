import React from "react";

export default function L_SubTree() {
  return (
    <div className="flex flex-row justify-center h-[60vh]">
      <div className=" flex-col flex justify-center gap-64">
        <div className="flex flex-row-reverse justify-center items-center">
          <div className="h-[.8rem] w-[.8rem] rounded-full bg-[#1B804E]"></div>
          <div className="h-[.2rem] w-[20vw] bg-[#1B804E]"></div>
          <button className="bg-[#1B804E] text-white font-bold py-2 px-4 rounded">
            Event Commencement
          </button>
        </div>
        <div className="flex flex-row-reverse justify-center items-center">
          <div className="h-[.8rem] w-[.8rem] rounded-full bg-[#1B804E]"></div>
          <div className="h-[.2rem] w-[20vw] bg-[#1B804E]"></div>
          <button className="bg-[#1B804E] text-white font-bold py-2 px-4 rounded">
            First Evaluation Round
          </button>
        </div>
      </div>


      <div className="flex">
        <div className="h-[100%] w-[.2rem] bg-[#1B804E]"></div>
      </div>

      <div className=" flex-col flex justify-center gap-20">
        <div className="flex flex-row justify-center items-center">
          <div className="h-[.8rem] w-[.8rem] rounded-full bg-[#1B804E]"></div>
          <div className="h-[.2rem] w-[20vw] bg-[#1B804E]"></div>
          <button className="bg-[#1B804E] text-white font-bold py-2 px-4 rounded">
            Second Evaluation Round
          </button>
        </div>
      </div>
    </div>
  );
}
