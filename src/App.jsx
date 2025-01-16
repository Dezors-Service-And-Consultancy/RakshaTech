import React from "react";
import FullTree from "./components/timelineTree/fullTree";
import AboutUs from "./components/aboutUs";
import RakshatechHeader from "./components/RakshatechHeading";
import Navbar from "./components/navbar";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Catch from "./components/catch";

import NewThemeGrid from "./components/NewThemeGrid"; 
import NameCard from "./components/namecard";


export default function App() {
  return (
    <div className="min-h-screen w-auto bg-black flex justify-center flex-col">
      <div className="mt-56">
        <Navbar />
      </div>

      <div className="mb-[5rem]">
        <RakshatechHeader />
      </div>
      <div className="flex flex-row max-w-full justify-center items-center min-h-[7rem] gap-[2rem] mb-[4rem]">
        <img src="/image 5.png" alt="company" />
        <img src="/image 6.png" alt="company" />
        <img src="./image 7.png" alt="company" />
        <img src="./image 8.png" alt="company" />
      </div>
      <div className="mb-[5rem] mr-[.5rem]">
        <Catch />
      </div>

      <div className="mb-[5rem]">
        <AboutUs image='/code-dar.png' left='left'/>
        <AboutUs image='/coder.png' />
      </div>

      <div className="mb-[5rem]">
        <FullTree />
      </div>
      
      <div className="flex flex-col items-center justify-center p-4 m-4 mb-[5rem]">
        <NewThemeGrid/>
      </div>
      <div className="mb-[5rem]">
        <Catch />
      </div>
      <div className="mb-[5rem]">
        <Faq/>
      </div>
      <div className="mb-[5rem]">
        <NameCard />
      </div>
      <div>
        <Footer/>
      </div>
      
    </div>
  );
}
