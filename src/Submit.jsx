import React from "react";
import Submissions from "./components/submissions";
import "./Registration.css"

function Submit() {
  return (
    <>
      <div className="main bg-black h-screen overflow-y-hidden overflow-x-hidden">
        <Submissions />

        <div className="ellipse opacity-50 blur-[400px] translate-y-[-10rem]"></div>
      </div>
    </>
  );
}

export default Submit;