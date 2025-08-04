type Option = {
  label: string;
  value: "en" | "uk";
};

export const options: Option[] = [
  { label: "English", value: "en" },
  { label: "Українська", value: "uk" },
] as const;
