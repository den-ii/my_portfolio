import { useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [burger, setBurger] = useState(false);
  const text = darkMode ? "text-gray-100" : "bg-primary-100";
  const bg = darkMode ? "bg-primary-100" : "gray";

  const toggleMode = () => {
    setDarkMode((darkMode) => !darkMode);
  };
  console.log(darkMode);
  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleMode, text, bg, burger, setBurger }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
