"use client";

import DropdownSelect from "./../Dropdown";
import { options as themeOptions } from "./data";
import { useChangeTheme } from "@/src/common/hooks/useChangeTheme";
import { useTranslations } from "next-intl";

import ThemeIcon from "@/public/images/dropdown/theme/theme.svg";

export default function ChangeTheme() {
  const { theme, setTheme } = useChangeTheme();
  const translate = useTranslations("Dropdown.theme");

  return (
    <DropdownSelect
      options={themeOptions(translate)}
      currentValue={theme}
      onChange={setTheme}
      icon={ThemeIcon}
    />
  );
};
