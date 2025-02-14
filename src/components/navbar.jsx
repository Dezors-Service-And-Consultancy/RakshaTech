import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full pr-4 md:pr-8 lg:pr-16 text-white flex items-center justify-between z-40">
      {/* Clickable Logo */}
      <div className="flex items-center">
        <Link
          to="/"
          className="h-[80px] w-[80px] md:h-[100px] md:w-[100px] lg:h-[120px] lg:w-[120px] z-50 rounded-full flex justify-center items-center"
        >
          <img
            src="/Logo.png"
            alt="Logo"
            className="h-full w-full backdrop-blur-sm cursor-pointer"
          />
        </Link>
      </div>
      {/* Menu + Buttons Container */}
      <div className="backdrop-blur-lg fixed top-0 left-0 w-full px-4 md:px-8 lg:pr-16 flex items-center justify-end bg-black bg-opacity-55 space-x-4 md:space-x-8">
        {/* Inline Links for Large Screens */}
        <ul className="hidden lg:flex space-x-4 lg:space-x-8 p-4">
          {["About", "Schedule", "FAQ", "Sponsor", "ContactUs"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-md transition hover:bg-gradient-to-r from-[#044127] via-[#0c5636] to-[#044127] hover:font-semibold hover:text-white  hover:duration-1000"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Submissions and Login Buttons (Always on the Right) */}
        <Link
          to="/submissions"
          className="px-4 py-2 lg:px-6 lg:py-3 rounded-md bg-gradient-to-r from-[#36543df9] via-[#0c5636] to-[#0AAF56] hover:font-semibold"
        >
          Submissions
        </Link>
        <Link
          to="/users/register"
          className="px-4 py-2 lg:px-6 lg:py-3 rounded-[.5rem] border-2 border-[#007A58] bg-black text-[#007A58] hover:border-gradient-to-br hover:from-[#02F6B3] hover:to-[#007A58] transition duration-300 xs:mt-[.07rem] md:mt-[0rem] whitespace-nowrap hover:font-semibold overflow-hidden"
        >
          Log in
        </Link>

        {/* Mobile Menu Button (visible for screens <= 767px) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Collapsible Menu for Small and Medium Screens */}
      {isOpen && (
        <ul className="absolute  min-h-[20.5vh] top-[6vh] md:top-[6vh] xs:top-[6vh] left-0  flex flex-col lg:hidden">
          {["About", "Schedule", "FAQ", "Sponsor", "Contact Us"].map((link) => (
            <li key={link} className="w-full text-center ">
              <a
                href={`#${link.toLowerCase()}`}
                className="block text-slate-300 w-[100vw] bg-black hover:bg-gradient-to-r from-black via-[#0c5636] to-black  backdrop-blur-lg bg-opacity-85 px-4 py-1 hover:font-semibold hover:text-white rounded-md "
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
