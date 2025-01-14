import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full px-[2rem] bg-black text-white flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <div className="h-full w-full rounded-full flex justify-center items-center">
          <img src="/Logo.png" alt="Logo" className="h-full w-full" />
        </div>
      </div>

      {/* Links */}
      <ul className="flex space-x-8"> {/* Increased gap using space-x-8 */}
        {[
          'About',
          'Schedule',
          'FAQ',
          'Sponsor',
          'Contact Us',
          'Submissions',
        ].map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="px-[2rem] py-[1rem] rounded-md hover:bg-gradient-to-r from-[#36543df9]  via-[#0c5636] to-[#0AAF56] active:bg-gradient-to-br from-[#02F6B3] to-[#007A58] transition duration-300"
            >
              {link}
            </a>
          </li>
        ))}
        {/* Login Button */}
        <li>
          <a
            href="#login"
            className="px-[2rem] py-[1rem] rounded-[.5rem] border-2 border-[#007A58] bg-black text-white hover:border-gradient-to-br hover:from-[#02F6B3] hover:to-[#007A58] active:border-gradient-to-br active:from-[#02F6B3] active:to-[#007A58] transition duration-300 text-[#007A58]"
          >
            Log in
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
