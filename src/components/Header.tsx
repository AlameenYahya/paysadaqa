
import React from "react";
import { Link,} from "react-router-dom";
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md Sticky top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/src/images/Paysadaqa.png" // Replace with your logo path
            alt="Logo"
            className="h-20 w-40"
          />
         <span className="text-lg font-bold bg-secondary"></span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-lg">
            
        <Link to="/Home" className="px-4 py-2 rounded text-primary hover:bg-primary hover:text-tertiary">
            Home
          </Link>
          <Link to="/About" className="px-4 py-2 rounded text-primary hover:bg-primary hover:text-tertiary">
            About
            </Link>
            <Link to="/Admin" className="px-4 py-2 rounded text-primary hover:bg-primary hover:text-tertiary">
            Admin
          </Link>

         
          <Link to="/login" className="px-4 py-2 rounded text-primary hover:text-blue-60 hover:bg-primary hover:text-tertiary">Login</Link>
          <Link to="/register-masjid" className="px-4 py-2 rounded text-primary hover:text-blue-600 hover:bg-primary hover:text-tertiary">Register Masjid</Link>
                <Link
            to="/donate"
            className="text-primary bg-secondary px-4 py-2 rounded hover:bg-primary hover:text-tertiary">
            Donate Now
          </Link>
            


        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-secondary focus:outline-none"
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
