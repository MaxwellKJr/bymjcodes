// src/components/ThemeToggler.jsx
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark"; // Default for SSR
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="dark:bg-secondary-dark bg-background-light dark:border-secondary-dark dark:shadow-primary rounded-xl border-[1px] border-white p-2 shadow-md transition-all duration-400 hover:scale-90 hover:cursor-pointer active:scale-90 lg:ml-4 dark:shadow-md"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="text-primary h-6 w-6" />
      ) : (
        <Moon className="text-secondary-white h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggler;
