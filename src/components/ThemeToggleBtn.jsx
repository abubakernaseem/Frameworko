import React, { useEffect } from "react";
import assets from "../assets/assets.js";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  // Sync theme with <html> and localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 border border-gray-500 rounded-full"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <img
          src={assets.sun_icon}
          alt="Light mode"
          className="w-6 h-6"
        />
      ) : (
        <img
          src={assets.moon_icon}
          alt="Dark mode"
          className="w-6 h-6"
        />
      )}
    </button>
  );
};

export default ThemeToggleBtn;