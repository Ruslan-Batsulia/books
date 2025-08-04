import type { ThemeStateType } from "@/src/common/redux/slices/changeThemeSlice";

type Option = {
  label: string;
  value: ThemeStateType;
};

export const options = (locale: (key: string) => string): Option[] => [
  { label: locale("dark"), value: "dark" },
  { label: locale("light"), value: "light" },
  { label: locale("system"), value: "system" },
] as const;
