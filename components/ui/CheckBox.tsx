import React, { ChangeEventHandler, useState } from "react";

type Props = {
  label: string;
  value?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
};
function CheckBox({ label, value, onBlur, onChange }: Props) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <label className={`flex items-center mb-6 text-gray-800`}>
      <input
        type={"checkbox"}
        checked={isChecked}
        value={value}
        onChange={(event) => {
          setIsChecked(event.target.checked);
          console.log(event.target.value);
          onChange && onChange(event);
        }}
        onBlur={onBlur}
        className={"hidden"}
      />
      <span
        className={`w-4 h-4 box-content border border-solid  rounded flex items-center justify-center ${
          !isChecked ? "border-gray-400" : "border-green-800 bg-green-800"
        }`}
      >
        {isChecked && (
          <svg
            width="10"
            height="9"
            viewBox="0 0 10 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.82771 0.695262C10.0574 0.955612 10.0574 1.37772 9.82771 1.63807L3.94536 8.30474C3.71564 8.56509 3.34319 8.56509 3.11347 8.30474L0.17229 4.9714C-0.05743 4.71105 -0.05743 4.28894 0.17229 4.0286C0.40201 3.76825 0.77446 3.76825 1.00418 4.0286L3.52941 6.89052L8.99582 0.695262C9.22554 0.434913 9.59799 0.434913 9.82771 0.695262Z"
              fill="white"
            />
          </svg>
        )}
      </span>
      <span className={`text-sm ml-3`}>{label}</span>
    </label>
  );
}

export default CheckBox;
