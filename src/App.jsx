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
      <div className="mt-72">
        <Navbar />
      </div>

      <div className="mb-[5rem]">
        <RakshatechHeader />
      </div>
      <div className="flex max-w-full justify-center">
        <img src="./assets/image 5.png" alt="company" className="h-16 w-16"/>
        <img src="./assets/image 6.png" alt="company" />
        <img src="./assets/image 7.png" alt="company" />
        <img src="./assets/image 8.png" alt="company" />
      </div>
      <div className="mb-[5rem]">
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
