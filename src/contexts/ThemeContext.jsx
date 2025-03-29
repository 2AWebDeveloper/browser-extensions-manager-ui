import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(checkTheme);
  useEffect(
    function () {
      if (isDark) {
        window.localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      } else {
        window.localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }
    },
    [isDark],
  );

  function checkTheme() {
    if (!window.localStorage.getItem("theme")) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return true;
      } else {
        return false;
      }
    }

    if (window.localStorage.getItem("theme") === "light") {
      return false;
    } else {
      return true;
    }
  }

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useTheme };
