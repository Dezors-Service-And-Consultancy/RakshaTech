import React from "react";

export default function RakshatechHeader() {
    return (
        <div className="flex flex-col h-[20vh] w-[80vw] items-center justify-between">
            <h1 className="text-white text-6xl font-quantico tracking-wide bg-gradient-to-b from-[#FFFFFF] to-[#04362A] bg-clip-text text-transparent">
                Raksha Tech
            </h1>
            <h1 className="text-white text-5xl font-quantico tracking-wide bg-gradient-to-b from-[#007A58] to-[#02F6B3] bg-clip-text text-transparent">
                Hackathon
            </h1>
            <button className="bg-[#007A58] text-white py-2 px-4 mt-8 rounded-[20px] shadow-lg font-text">
                Register now
            </button>
        </div>
    );
}
