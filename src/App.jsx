import React from "react";
import FullTree from "./components/timelineTree/fullTree";
import AboutUs from "./components/aboutUs";
import RakshatechHeader from "./components/RakshatechHeading";
import Navbar from "./components/navbar";
export default function App() {
  return (
    <div className="min-h-screen w-auto bg-black flex justify-center flex-col">
      <div className="mt-72">
        <Navbar />
      </div>
      <div className="mb-20">
        <RakshatechHeader />
      </div>
      <div>
        <FullTree />
      </div>
    </div>
  );
}
