import React from "react";
export default function Footer() {
  return (
    <div
      id="contactus"
      className="flex flex-row max-md:flex-col-reverse min-h-[27rem] w-auto  border-white items-center "
    >
      <div className="flex flex-col max-md:w-screen max-md:flex-row min-h-auto min-w-screen  p-10 max-md:p-0 max-md:p-4">
        <div className="flex flex-row md:flex-col max-md:gap-11 justify-between">
          <div className="mb-10">
            <h1 className="text-white font-quantico text-xl">Phone</h1>
            <h3 className="text-white font-thin max-md:text-nowrap">+91 8195912848</h3>
            <h3 className="text-white font-thin">+91 8217336608</h3>
          </div>
          <div className=" mb-10 max-md:text-right">
            <h1 className="text-white font-quantico text-xl">Address</h1>
            <h3 className="text-white font-thin max-md:text-nowrap">Chennai, Tamil Nadu-600127</h3>
            {/* <h3 className="text-white font-thin">1332412321321</h3> */}
          </div>
        </div>
        <div className=" flex flex-row md:flex-col  max-md:gap-11 justify-between">
          <div className=" mb-10">
            <h1 className="text-white font-quantico text-xl">Email</h1>
            <h3 className="text-white font-thin">jashandangjjsd@gmail.com</h3>
            <h3 className="text-white font-thin">arya2004nyadav@gmail.com</h3>
          </div>
          <div className="max-md:text-right">
            <h1 className="text-white font-quantico text-xl">Social</h1>
            <h3 className="text-white font-thin">Jashan_Dang</h3>
            {/* <h3 className="text-white font-thin">1332412321321</h3> */}
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-[27rem] w-[80%] backdrop-blur-sm inset-0 bg-black/50 rounded-lg pl-9 max-md:pl-0 max-md:flex-col gap-6">
        <div className="h-[5rem] w-[19rem]  flex justify-start">
          <h1 className="text-gray-100 text-3xl font-quantico font-extralight">
            Drop us a Line
          </h1>
        </div>
        <div className="h-[15rem] w-full  pt-10 gap-10 pl-8 max-md:pl-0 pr-8 max-md:p-0">
          <div className="flex flex-col items-center gap-14 w-full p-4 ">
            <div className="flex w-full gap-4 max-md:flex-col">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 bg-transparent border-b text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="flex-1 bg-transparent border-b text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
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
        <div className="flex flex-grow  pl-10 max-md:p-0">
          <button className="h-[2rem] w-[7rem] shadow-lg  bg-gradient-to-r from-[#376641] via-[#0e5d3b] to-[#53F69E] rounded-lg text-white font-semibold font-text">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
