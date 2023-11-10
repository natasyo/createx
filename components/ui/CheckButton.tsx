"use client";
import React, { ChangeEventHandler, useState } from "react";

export type Props = {
  label: string;
  name?: string;
  value?: string;
  className?: string;
  onChange?: ChangeEventHandler;
};

function CheckButton({ label, name, value, className, onChange }: Props) {
  const [checked, setChecked] = useState(false);
  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setChecked(!checked);
    onChange && onChange(event);
  };
  return (
    <label
      className={`${className} h-8 px-4 border rounded  inline-flex items-center
      ${
        checked
          ? "bg-green-800 border-green-800"
          : "border-solid border-gray-400"
      }`}
    >
      <input
        type={"checkbox"}
        name={name}
        value={value}
        className={`hidden`}
        checked={checked}
        onChange={changeHandler}
      />
      <span
        className={`text-sm  font-bold ${
          checked ? "text-white" : "text-gray-700"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

export default CheckButton;
