import React from "react";
import Login from "./components/Login";
import "./Registration.css";

function Registration() {
  return (
      <div className="main bg-black h-screen overflow-y-hidden overflow-x-hidden">
        <Login />

        <div className="ellipse opacity-50 blur-[400px] translate-y-[-10rem]"></div>
      </div>
  );
}

export default Registration;