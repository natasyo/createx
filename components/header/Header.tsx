// @flow
import * as React from "react";

export default function Header() {
  return (
    <header className={"text-white opacity-60 text-sm bg-gray-900"}>
      <div className="container flex py-3 px-1">
        <p>
          Available 24/7 at
          <a href={"tel:4055550128"} className={"font-black"}>
            {" "}
            (405) 555-0128
          </a>
        </p>
      </div>
    </header>
  );
}
