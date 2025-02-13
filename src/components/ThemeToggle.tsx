import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-6 h-6 text-gray-800 dark:text-white" />
      ) : (
        <Sun className="w-6 h-6 text-gray-800 dark:text-white" />
      )}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </button>
  );
};

export default ThemeToggle;