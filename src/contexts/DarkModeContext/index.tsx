import light from "../../styles/light";
import dark from "../../styles/dark";
import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { iChildren } from "../types";
import { usePersistedStateDM } from "./peristedState";

interface ThemeContextData {
  toggleTheme(): void;
  theme: any;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: iChildren) => {
  const [theme, setTheme] = usePersistedStateDM("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
