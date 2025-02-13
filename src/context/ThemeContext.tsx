import { createContext, useContext, useEffect, useState } from 'react';

// Define the possible theme types
type Theme = 'light' | 'dark';

// Define the context type, including the theme and the toggle function
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create the ThemeContext with an initial undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component to manage the theme state and provide it to the app
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Set the theme state, defaulting to the system preference or the stored value
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  // Update the root class and localStorage whenever the theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
