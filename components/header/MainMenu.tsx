// @flow
import * as React from "react";
import { TMenu } from "@/api";
import Link from "next/link";
type Props = {
  menuItems?: TMenu[];
  loading?: boolean;
  className?: string;
  classNameWrap?: string;
  itemClassName?: string;
};

export function MainMenu({
  menuItems,
  className,
  itemClassName,
  classNameWrap,
}: Props) {
  if (!menuItems?.length) return <p>Error</p>;
  return (
    <nav className={`${className}`}>
      <ul className={`flex ${classNameWrap}`}>
        {menuItems?.map((item) => (
          <li
            key={item.node.path}
            className={`2xl:mx-5 xl:mx-3 mx-3 text-gray-800 leading-1.6 ${
              itemClassName || ""
            }`}
          >
            <Link href={item.node.path!}>{item.node.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
