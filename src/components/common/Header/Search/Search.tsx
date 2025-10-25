"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

import search from "@/public/images/search.svg";

import "./Search.scss";

export default function Search() {
  const translate = useTranslations("Header");
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className={"search"}>
      <input
        type="text"
        className={"search__input"}
        placeholder={translate("placeholder")}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className={"search__btn"}>
        <Image src={search} alt={"Search"} className={"search__icon"} />
      </button>
    </div>
  );
};
