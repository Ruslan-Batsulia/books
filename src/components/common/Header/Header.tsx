"use client";

import Link from "next/link";
import Search from "./Search/Search";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import ReadingProgress from "./ReadingProgress/ReadingProgress";
import { useChangeTheme } from "@/src/common/hooks/useChangeTheme";

import logo from "@/public/images/logo.svg";
import catalog from "@/public/images/catalog.svg";
import readBooks from "@/public/images/readBooks.svg";
import favoriteList from "@/public/images/favoriteList/favoriteList.svg";
import burgerMenuDark from "@/public/images/burger-menu/burgerMenuDark.svg";
import burgerMenuLight from "@/public/images/burger-menu/burgerMenuLight.svg";
import burgerMenuCloseDark from "@/public/images/burger-menu/burgerMenuCloseDark.svg";
import burgerMenuCloseLight from "@/public/images/burger-menu/burgerMenuCloseLight.svg";

import "./Header.scss";

export default function Header() {
  const translate = useTranslations("Header");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { resolvedTheme } = useChangeTheme();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1439.9px)");

    const handleResize = () => {
      if (mediaQuery.matches) { setIsOpen(false); }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => { mediaQuery.removeEventListener("change", handleResize); };
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const burgerMenuIcon = (): StaticImageData => {
    const openMenu = resolvedTheme === "dark"
      ? burgerMenuDark
      : burgerMenuLight;

    const closeMenu = resolvedTheme === "dark"
      ? burgerMenuCloseDark
      : burgerMenuCloseLight;

    return isOpen ? closeMenu : openMenu;
  };

  return (
    <header className={"header"}>
      <div className={"container"}>
        <Link href={"/"} className={"header__logo"}>
          <Image src={logo} alt={"Logo"} className={"header__logo-img"} priority={true} />
          <h1 className={"header__logo-title"}>{"Books Catalog"}</h1>
        </Link>

        <div className={"header__burger-menu"}>
          <button
            className={"header__burger-menu-btn"}
            onClick={() => { setIsOpen((prev) => !prev) }}
          >
            <Image
              src={burgerMenuIcon()}
              alt={""}
              className={"header__burger-menu-icon"}
            />
          </button>
        </div>

        <div
          className={
            "header__menu-container " +
            (!isOpen ? "header__menu-container--close" : null)
          }
        >
          <div className={"header__menu"}>
            <div className={"header__catalog"}>
              <button
                className={"header__catalog-btn"}
              >
                <Image src={catalog} alt={"Catalog"} className={"header__catalog-icon"} />
                {translate("button")}
              </button>
            </div>

            <Search />

            <div className={"header__interactive"}>
              <ReadingProgress />

              <div className={"header__favorite"}>
                <button className={"header__favorite-btn"}>
                  <Image src={favoriteList} alt={"Favorite List"} className={"header__favorite-icon"} />
                </button>
              </div>

              <div className={"header__reading"}>
                <button className={"header__reading-btn"}>
                  <Image src={readBooks} alt={"Reading List"} className={"header__reading-icon"} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
