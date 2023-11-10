import React, { MouseEventHandler, ReactNode } from "react";
import Link from "next/link";

type Props = {
  type?: "submit" | "button";
  children: ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
  typeColor?: "basicOutline" | "basic";
  href?: string;
};
export function Button(props: Props) {
  if (props.href) {
    return (
      <Link
        href={props.href}
        type={props.type}
        onClick={props.onClick}
        className={`${
          props.className
        } font-body inline-flex items-center justify-center items-center ${
          (!props.typeColor || props.typeColor === "basic") &&
          " bg-green-800 text-white hover:bg-green-900 active:bg-green-900"
        } ${
          props.typeColor === "basicOutline" &&
          "bg-transparent text-green-800 hover:bg-green-800 active:bg-green-800 hover:text-white"
        } rounded mb-6 capitalize px-8 text-sm font-bold  border border-solid border-green-800 h-13`}
      >
        {props.children}
      </Link>
    );
  } else {
    return (
      <button
        type={props.type}
        onClick={props.onClick}
        className={`${props.className} font-body ${
          (!props.typeColor || props.typeColor === "basic") &&
          " bg-green-800 text-white hover:bg-green-900 active:bg-green-900"
        } ${
          props.typeColor === "basicOutline" &&
          "bg-transparent text-green-800 hover:bg-green-800 active:bg-green-800 hover:text-white active:text-white"
        } rounded mb-6 capitalize px-8 text-sm font-bold  border border-solid border-green-800 h-13 inline-flex items-center justify-center`}
      >
        {props.children}
      </button>
    );
  }
}
