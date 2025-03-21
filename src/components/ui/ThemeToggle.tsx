
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Check for stored theme preference or use system preference
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      
      if (storedTheme) {
        return storedTheme;
      }
      
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    return 'light'; // Default fallback
  });

  useEffect(() => {
    // On mount and theme change, update document class and localStorage
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-muted transition-colors duration-200 relative overflow-hidden"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative z-10">
        {theme === 'dark' ? (
          <Sun className="h-5 w-5 transition-transform animate-fade-in" />
        ) : (
          <Moon className="h-5 w-5 transition-transform animate-fade-in" />
        )}
      </div>
      
      <span 
        className="absolute inset-0 bg-conecte-100 dark:bg-conecte-900 rounded-full transform origin-center transition-all duration-300 ease-in-out"
        style={{
          transform: theme === 'dark' ? 'scale(1)' : 'scale(0)',
          opacity: theme === 'dark' ? 0.15 : 0
        }}
      />
    </button>
  );
};

export default ThemeToggle;
