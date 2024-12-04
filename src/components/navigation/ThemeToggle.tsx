import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      // Check for saved theme preference or system preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    // Default to light theme if not in browser
    return 'light';
  });

  useEffect(() => {
    // Apply theme to document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-lg dark:bg-secondary-dark bg-white transition-all duration-300 border-[1px] dark:border-secondary-dark border-white lg:ml-4 hover:scale-90 active:scale-95 shadow-md dark:shadow-md dark:shadow-primary/30  backdrop-blur-md"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-primary" />
      ) : (
        <Moon className="w-6 h-6 text-secondary-white" />
      )}
    </button>
  );
};

export default ThemeToggle;