import React from "react";
import FullTree from "./components/timelineTree/fullTree";
import AboutUs from "./components/aboutUs";
import RakshatechHeader from "./components/RakshatechHeading";
import Navbar from "./components/navbar";
import Faq from "./components/faq";
import Footer from "./components/footer";
import ThemeGrid from "./components/ThemeGrid";

export default function App() {
  return (
    <div className="min-h-screen w-auto bg-black flex justify-center flex-col">
      <div className="mt-72">
        <Navbar />
      </div>

      <div className="mb-[5rem]">
        <RakshatechHeader />
      </div>

      <div className="mb-[5rem]">
        <AboutUs image='/code-dar.png' left='left'/>
        <AboutUs image='/coder.png' />
      </div>

      <div className="mb-[5rem]">
        <FullTree />
      </div>
      <div>
        <Faq/>
      </div>
      <div className="flex flex-col items-center justify-center p-4 m-4">
        <ThemeGrid/>
      </div>

      <Footer/>
    </div>
  );
}
