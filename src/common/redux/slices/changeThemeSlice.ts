import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeStateType = "dark" | "light" | "system";

const changeThemeSlice = createSlice({
  name: "changeTheme",
  initialState: {
    theme: (typeof window !== "undefined")
      ? (localStorage.getItem("theme") as ThemeStateType) || "system" as ThemeStateType
      : "system" as ThemeStateType
  },
  reducers: {
    setChangeTheme: (state, action: PayloadAction<ThemeStateType>) => {
      state.theme = action.payload;

      if (typeof window !== "undefined") {
        localStorage.setItem("theme", action.payload);

        if (action.payload === "system") {
          document.documentElement.removeAttribute("data-theme");
        } else {
          document.documentElement.setAttribute("data-theme", action.payload);
        }
      }
    },
  },
});

export const { setChangeTheme } = changeThemeSlice.actions;
export default changeThemeSlice.reducer;
