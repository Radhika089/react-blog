import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blogs", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div
      className={
        "fixed top-0 left-0 w-full flex justify-between items-center h-12 md:h-16 lg:h-20 px-8 backdrop-blur-lg border-b border-white/20 shadow-lg rounded-b-lg bg-black text-white"
      }
    >
      <h1 className="font-bold uppercase tracking-wider text-xl md:text-2xl lg:text-3xl text-orange-400 drop-shadow-lg">
        Blog App
      </h1>

      {/* items */}

      <ul
        className={"md:flex space-x-6  text-lg md:text-xl font-medium hidden"}
      >
        {navLinks.map((link, idx) => (
          <li key={idx} className="relative group">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `px-2 py-1 relative transition duration-300 ${
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "hover:text-orange-700"
                }`
              }
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* login button */}
      <button
        className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in hidden lg:flex"
        onClick={() => setShowLogin(true)}
      >
        LogIn
      </button>

      {/* mobile menu btn */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden fixed top-2 right-6 z-50 p-2 bg-black rounded-md"
        >
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            size="xl"
            className="text-white"
          />
        </button>
      </div>

      {/* items for Mobile Menu */}
      <div
        className={`md:hidden py-6 px-4 gap-14 text-lg block space-y-6 fixed top-0 left-0 w-full h-screen bg-black text-white transform ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } transition-transform ease-in-out duration-200 flex flex-col items-center justify-center`}
      >
        <ul className="text-lg space-y-4">
          {navLinks.map((link, idx) => (
            <li key={idx} onClick={() => setIsOpen(false)}>
              <NavLink
                to={link.path}
                className="block px-4 py-2 text-center text-white hover:text-orange-500 transition"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {showLogin && <LoginModal setShowLogin={setShowLogin} />}
    </div>
  );
};

export default Navbar;
