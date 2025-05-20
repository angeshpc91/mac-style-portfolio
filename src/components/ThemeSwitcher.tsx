import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Monitor } from "lucide-react";

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <button
        className={`btn ${theme === "light" ? "btn-primary" : "btn-secondary"}`}
        onClick={() => setTheme("light")}
        aria-label="Light theme"
      >
        <Sun className="w-4 h-4" />
      </button>
      {/*  TODO: Fix dark theme  */}
      {/* <button
        className={`btn ${theme === "dark" ? "btn-primary" : "btn-secondary"}`}
        onClick={() => setTheme("dark")}
        aria-label="Dark theme"
      >
        <Moon className="w-4 h-4" />
      </button>
      <button
        className={`btn ${
          theme === "system" ? "btn-primary" : "btn-secondary"
        }`}
        onClick={() => setTheme("system")}
        aria-label="System theme"
      >
        <Monitor className="w-4 h-4" />
      </button> */}
    </div>
  );
};

export default ThemeSwitcher;
