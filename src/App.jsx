import React from "react";
import FullTree from "./components/timelineTree/fullTree";
import AboutUs from "./components/aboutUs";
import RakshatechHeader from "./components/RakshatechHeading";
import Navbar from "./components/navbar";
import Faq from "./components/faq";
import Footer from "./components/footer";
import ThemeGrid from "./components/ThemeGrid";
import GlowingEllipse from "./components/comp/GlowingEllipse";
import NewThemeGrid from "./components/NewThemeGrid"; 

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

      <Footer/>
    </div>
  );
}
