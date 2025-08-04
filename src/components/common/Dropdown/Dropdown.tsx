"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";

import arrowDark from "@/public/images/dropdown/theme/ArrowDark.svg";

import "./Dropdown.scss";

type Option<T> = {
  label: string;
  value: T;
};

type DropdownProps<T> = {
  options: Option<T>[];
  currentValue: T;
  onChange: (value: T) => void;
  icon: StaticImageData;
};

export default function Dropdown<T>({
  options,
  currentValue,
  onChange,
  icon,
}: DropdownProps<T>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: Option<T>) => {
    if (option.value !== currentValue) {
      onChange(option.value);
    }
    setIsOpen(false);
  };

  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
  
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);

  const currentLabel = options.find(
    (item) => item.value === currentValue
  )?.label ?? "Not found";

  return (
    <div ref={dropdownRef} className="dropdown">
      <div onClick={() => setIsOpen(!isOpen)} className={"dropdown__toggle"}>
        {(icon) && (
          <Image
            src={icon}
            alt="Icon"
            height={24}
            className={"dropdown__icon"}
          />
        )}

        <span className={"dropdown__title"}>{currentLabel}</span>

        <Image
          src={arrowDark}
          alt="Arrow Icon"
          height={10}
          className={
            "dropdown__arrow" +
            (isOpen ? " dropdown__arrow--up" : "")
          }
        />
      </div>

      {(isOpen) && (
        <ul className={"dropdown__option-list"}>
          {options.map((item) => (
            <li
              key={String(item.value)}
              onClick={() => handleSelect(item)}
              className={"dropdown__option-item"}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
