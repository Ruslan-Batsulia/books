"use client";

import React, {
  useMemo,
  useState,
  ReactNode,
  useEffect,
  useContext,
  createContext,
} from "react";

type ThemeStateType = "dark" | "light" | "system";

type ThemeContextType = {
  theme: ThemeStateType;
  setTheme: (theme: ThemeStateType) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeStateType>("system");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const savedTheme = localStorage.getItem("theme") as ThemeStateType;
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, [mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", theme);
      
      if (theme === "system") {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", theme);
      }
    }
  }, [theme, mounted]);

  const providerValue = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeContextProvider");
  }
  return context;
};
