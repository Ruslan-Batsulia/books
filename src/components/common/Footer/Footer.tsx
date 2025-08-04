"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ChangeLanguage, ChangeTheme } from "./../Dropdown";

import logo from "@/public/images/logo.svg";

import "./Footer.scss";

export default function Footer() {
  const translate = useTranslations("Footer");
  
  return (
    <footer className="footer">
      <div className="container">
        <div className={"footer__logo"}>
          <Image src={logo} alt={"Logo"} className={"footer__logo-img"} />
          <span className={"footer__logo-title"}>{"Books Catalog"}</span>
        </div>

        <div className={"footer__settings"}>
          <div className={"footer__language"}>
            <span className={"footer__language-title"}>{translate("language")}</span>
            <ChangeLanguage />
          </div>
          
          <div className={"footer__theme"}>
            <span className={"footer__theme-title"}>{translate("theme")}</span>
            <ChangeTheme />
          </div>
        </div>
      </div>
    </footer>
  );
};
