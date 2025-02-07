import React from "react";
import L_SubTree from "./L_SubTree";
import R_SubTree from "./R_Subtree";

export default function FullTree() {
  return (
    <div id="schedule">
      //! above 768px
      <div className="max-md:hidden">
        <R_SubTree />
        <L_SubTree />
      </div>
      //! below 768px
      <div className="relative md:hidden  min-h-[130vh] w-screen ">
        <div className="h-[2rem] w-[2rem] rounded-full bg-[#1B804E] absolute left-[48.2%]"></div>
        <div className="bg-[#1B804E] absolute h-[100%] rounded-sm w-[.5rem] left-[50%]"></div>
        <div className="h-[100%] absolute items-center min-w-[60vw] left-[19%] flex flex-col justify-around">
          <button className="bg-[#1B804E] text-white font-bold py-2 px-4 rounded w-[100%] overflow-hidden">
            Information Session
          </button>
          <button className="bg-[#1B804E]  text-white font-bold py-2 px-4 rounded w-[100%] overflow-hidden">
            Registeration Start
          </button>
          <button className="bg-[#1B804E]  text-white font-bold py-2 px-4 rounded w-[100%] overflow-hidden">
            Registeration Closed
          </button>
          <button className="bg-[#1B804E] text-white font-bold py-2 px-4 rounded w-[100%] overflow-hidden">
            First Evaluation Round
          </button>
          <button className="bg-[#1B804E] text-white font-bold py-2 px-4 rounded w-[100%] overflow-hidden">
            Event Commencement
          </button>
          <button className="bg-[#1B804E] text-white font-bold py-2 px-4 rounded w-[100%] overflow-hidden">
            Second Evaluation Round
          </button> 
        </div>
        <div className="h-[2rem] w-[2rem] rounded-full bg-[#1B804E] absolute left-[48.2%] top-[98%]"></div>
      </div>
    </div>
  );
}
