import React from 'react'
import Login from './components/Login'
import './Registration.css'
import logo from "../public/Logo.png"


function Registration() {
  return (
    <>
      <div className="main bg-black h-screen overflow-y-hidden">
        <div className="absolute left-0 top-0">
         <img src={logo} alt="logo" />
        </div>
        
        <Login/>
          <h2 className="hackathon-text text-white rotate-90 translate-x-[20rem] translate-y-[17rem]">
           HACKATHON
          </h2>
        <div className="ellipse opacity-50 blur-[400px] translate-y-[-10rem]"></div>
      </div>
      
    </>
  )
}

export default Registration
