import React from 'react';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <nav className="bg-[#030f2e] text-white px-8 py-4 fixed top-0 w-full shadow-md z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1 className="text-lg font-bold">Portfolio</h1>

        {/* Nav Links */}
        <ul className="flex gap-6 text-sm font-medium">
          {['home', 'about', 'service', 'skill', 'project', 'contact'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-blue-400"
                className="cursor-pointer capitalize"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
