"use client";
import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { HeaderMenu } from "@/components/header/HeaderMenu";
import { TMenu } from "@/api";
import { MainMenu } from "@/components/header/MainMenu";

type Props = {
  menuItemsHeader?: TMenu[];
  loadingHeader: boolean;
  classNameHeader?: string;
  className?: string;
  mainMenuItems?: TMenu[];
  mainMenuLoading: boolean;
};
function MobileMenu(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${props.className}`}>
      <Button
        className={`relative z-40 px-1 ml-4 block w-8 bg-transparent shadow-none`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <span
          className={`rounded h-0.5 w-6 bg-white block absolute  transition-all
          ${isOpen ? "rotate-45 top-2" : "top-0 "}`}
        ></span>
        <span
          className={`rounded h-0.5 w-6 bg-white block absolute transition-all  ${
            isOpen ? "opacity-0" : "top-2"
          }`}
        ></span>
        <span
          className={`rounded h-0.5 w-6 bg-white block absolute transition-all ${
            isOpen ? "-rotate-45 top-2" : "top-4 "
          }`}
        ></span>
      </Button>
      <div
        className={`fixed p-16 top-0 transition-all ${
          isOpen ? "right-0" : "-right-full"
        } bg-gray-900 bg-opacity-90 z-20 `}
      >
        <nav>
          <HeaderMenu
            loading={props.loadingHeader}
            menuItems={props.menuItemsHeader}
            className={`${
              props.classNameHeader || ""
            } flex-col text-white text-xl`}
            classNameItem={`mb-4`}
          />
          <hr className={`mb-5`} />
          <MainMenu
            menuItems={props.mainMenuItems}
            loading={props.mainMenuLoading}
            classNameWrap={`flex-col text-lg text-white`}
            itemClassName={`text-lg text-white mb-4`}
          />
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
