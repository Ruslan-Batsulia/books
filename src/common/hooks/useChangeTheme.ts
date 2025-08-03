"use client";

import {
  setChangeTheme,
  ThemeStateType,
} from "../redux/slices/changeThemeSlice";
import { StoreType } from "../redux";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useChangeTheme() {
  const dispatch = useDispatch();
  const theme = useSelector((state: StoreType) => state.changeTheme.theme);
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme") as ThemeStateType | null;
    if (savedTheme) {
      dispatch(setChangeTheme(savedTheme));
    }
  }, [dispatch]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const getSystemTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    const updateTheme = () => {
      setResolvedTheme(theme === "system" ? getSystemTheme() : theme);
    };

    updateTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateTheme);
    
    return () => mediaQuery.removeEventListener("change", updateTheme);
  }, [theme]);

  const setTheme = (newTheme: ThemeStateType) => {
    dispatch(setChangeTheme(newTheme));
  };

  return { theme, resolvedTheme, setTheme };
};
