import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full px-4 md:px-8 lg:px-16 bg-black text-white flex items-center justify-between z-50">
      {/* Logo */}
      <div className="flex items-center">
        <div className="h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 rounded-full flex justify-center items-center">
          <img src="/Logo.png" alt="Logo" className="h-full w-full" />
        </div>
      </div>

      {/* Menu + Buttons Container */}
      <div className="flex items-center justify-end space-x-8">
        {/* Inline Links for Large Screens */}
        <ul className="hidden lg:flex space-x-4 lg:space-x-8 p-4">
          {["About", "Schedule", "FAQ", "Sponsor", "Contact Us"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="px-2 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-md hover:bg-gradient-to-r from-[#36543df9] via-[#0c5636] to-[#0AAF56] active:bg-gradient-to-br from-[#02F6B3] to-[#007A58] transition-all duration-1000 delay-300 ease-in-out"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Submissions and Login Buttons (Always on the Right) */}
        <a
          href="#submissions"
          className="px-4 py-2 lg:px-6 lg:py-3 rounded-md hover:bg-gradient-to-r from-[#36543df9] via-[#0c5636] to-[#0AAF56] active:bg-gradient-to-br from-[#02F6B3] to-[#007A58] transition duration-300"
        >
          Submissions
        </a>
        <a
          href="#login"
          className="px-4 py-2 rounded-[.5rem] border-2 border-[#007A58] bg-black text-[#007A58] hover:border-gradient-to-br hover:from-[#02F6B3] hover:to-[#007A58] transition duration-300 xs:mt-[.07rem] md:mt-[0rem] whitespace-nowrap overflow-hidden"
        >
          Log in
        </a>

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
        <ul className="absolute min-h-[20.5vh] top-[5.6vh] md:top-[6vh] xs:top-[5.8vh] left-0 w-full bg-black text-white flex flex-col items-center s lg:hidden gap-2">
          {["About", "Schedule", "FAQ", "Sponsor", "Contact Us"].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="px-4 py-1  rounded-md hover:bg-gradient-to-r from-[#36543df9] via-[#0c5636] to-[#0AAF56] active:bg-gradient-to-br from-[#02F6B3] to-[#007A58] transition duration-300"
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
