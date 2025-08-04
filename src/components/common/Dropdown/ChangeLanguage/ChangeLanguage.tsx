"use client";

import { useMemo } from "react";
import { useLocale } from "next-intl";
import DropdownSelect from "./../Dropdown";
import { useSearchParams } from "next/navigation";
import { options as languageOptions } from "./data";
import { usePathname, useRouter } from "@/i18n/navigation";

import changeLanguageIcon from "@/public/images/dropdown/language/ChangeLanguage.svg";

export default function ChangeLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const searchParams = useSearchParams();
  const query = useMemo(
    () => Object.fromEntries(searchParams.entries()),
    [searchParams]
  );

  const changeLanguage = (value: "en" | "uk") => {
    try {
      router.replace({
        pathname: pathname,
        query: query,
      }, {
        locale: value,
        scroll: false,
      });
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  return (
    <DropdownSelect
      options={languageOptions}
      currentValue={currentLocale as "en" | "uk"}
      onChange={changeLanguage}
      icon={changeLanguageIcon}
    />
  );
};
