import React, { useState } from "react";

const ThemeContext = React.createContext();

const themes = {
  light: {
    name: "light",
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    name: "dark",
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (theme == themes.light) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
