import React from "react";
export default function Footer() {
  return (
    <div className="flex flex-row min-h-[27rem] w-auto  border-white items-center ">
      <div className="flex flex-col h-full w-[20%]   justify-center items-center p-10">
        <div className="mb-10">
          <h1 className="text-white font-quantico text-xl">Phone</h1>
          <h3 className="text-white font-thin">1332412321321</h3>
          <h3 className="text-white font-thin">1332412321321</h3>
        </div>
        <div className=" mb-10">
          <h1 className="text-white font-quantico text-xl">Address</h1>
          <h3 className="text-white font-thin">1332412321321</h3>
          <h3 className="text-white font-thin">1332412321321</h3>
        </div>
        <div className=" mb-10">
          <h1 className="text-white font-quantico text-xl">Email</h1>
          <h3 className="text-white font-thin">1332412321321</h3>
          <h3 className="text-white font-thin">1332412321321</h3>
        </div>
        <div className="">
          <h1 className="text-white font-quantico text-xl">Social</h1>
          <h3 className="text-white font-thin">1332412321321</h3>
          <h3 className="text-white font-thin">1332412321321</h3>
        </div>
      </div>

      <div className="flex flex-col min-h-[27rem] w-[80%] backdrop-blur-sm inset-0 bg-black/50 rounded-lg pl-9">
        <div className="h-[5rem] w-[19rem]  flex justify-start">
          <h1 className="text-gray-100 text-3xl font-quantico font-extralight">
            Drop us a Line
          </h1>
        </div>
        <div className="h-[15rem] w-full   pt-10 gap-10 pl-8">
          <div className="flex flex-col items-center gap-14 w-full p-4 ">
            <div className="flex w-full gap-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 bg-transparent border-b text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Name"
                className="flex-1 bg-transparent border-b text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Name"
                className="flex-1 bg-transparent border-b text-white focus:outline-none"
              />
            </div>

            <input
              type="text"
              placeholder="Message"
              className="w-full flex-1 bg-transparent border-b text-white focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-grow  pl-10">
          <button className="h-[2rem] w-[7rem] shadow-lg  bg-[#53F69E] rounded-lg text-black font-semibold font-text">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
