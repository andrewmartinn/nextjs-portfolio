"use client";

import {
  SiteThemeContextType,
  SiteThemeProviderProps,
  ThemeType,
} from "@/lib/types";
import { createContext, useEffect, useState } from "react";

export const SiteThemeContext = createContext<SiteThemeContextType | undefined>(
  undefined,
);

export default function SiteThemeContextProvider({
  children,
}: SiteThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as ThemeType;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <SiteThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </SiteThemeContext.Provider>
  );
}
