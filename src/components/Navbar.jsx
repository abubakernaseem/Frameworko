import React from "react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import assets from "../assets/assets.js";
import { motion } from "motion/react";

function Navbar({ theme, setTheme, sidebarOpen, setSidebarOpen }) {
  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#our-work", label: "Our Work" },
    { href: "#contact-us", label: "Contact Us" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4
                 sticky top-0 z-20 backdrop-blur-xl font-medium 
                 bg-white/50 dark:bg-gray-900/70"
    >
      {/* Logo */}
      {/* <img
        src={theme === "dark" ? assets.frameworkologo : assets.frameworkologo}
        className="w-8 sm:w-16"
        alt="logo"
      /> */}
      <img
        src={theme === "dark" ? assets.logo : assets.logo_dark}
        className="w-32 sm:w-40"
        alt="logo"
      />

      {/* Navbar links (collapsible on mobile) */}
      <div
        className={`
          relative text-gray-700 dark:text-white sm:text-sm
          ${
            !sidebarOpen
              ? "max-sm:w-0 overflow-hidden"
              : "max-sm:w-60 max-sm:pl-10"
          }
          max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full 
          max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 
          flex sm:items-center gap-5 transition-all duration-300 ease-in-out
        `}
      >
        {/* Close button (mobile only) */}
        <button
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          <img src={assets.close_icon} alt="close menu" />
        </button>

        {/* Nav Links */}
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setSidebarOpen(false)}
            className="sm:hover:border-b-2 sm:hover:border-gray-700 dark:sm:hover:border-white"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right Section (Theme Toggle + Hamburger + Connect Button) */}
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        {/* Hamburger menu (mobile only) */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="sm:hidden cursor-pointer"
          aria-label="Open menu"
        >
          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt="menu"
            className="w-8"
          />
        </button>

        {/* Connect Button */}
        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2 
                     bg-primary text-white px-6 py-2 rounded-full cursor-pointer 
                     hover:scale-105 transition-all"
        >
          Connect
          <img src={assets.arrow_icon} width={14} alt="arrow icon" />
        </a>
      </div>
    </motion.div>
  );
}

export default Navbar;