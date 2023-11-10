// @flow
import * as React from "react";
import { Loading } from "@/components/Loading/Loading";
import Link from "next/link";
import { TMenu } from "@/api";

type Props = {
  menuItems?: TMenu[];
  loading: boolean;
  className?: string;
  classNameItem?: string;
};

export function HeaderMenu({
  menuItems,
  loading,
  className,
  classNameItem,
}: Props) {
  if (loading) return <Loading />;
  if (!menuItems?.length) return <p>Error</p>;
  return (
    <nav>
      <ul className={`flex ${className}`}>
        {menuItems?.map((item) => {
          return (
            <li className={`mx-4 ${classNameItem}`} key={item.node.path}>
              <Link href={item.node.path!}>{item.node.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
