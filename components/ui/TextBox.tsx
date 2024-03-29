import React, { ChangeEventHandler, forwardRef, useState } from "react";

type Props = {
  label?: string;
  type: "text" | "password" | "email";
  defaultValue?: string;
  placeholder?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  errorMessages?: string;
  className?: string;
  classNameInput?: string;
  disabled?: boolean;
};

export const TextBox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <label className={`block  mb-6 ${props.className}`}>
      {props.label && (
        <span className={`block text-gray-800 text-sm leading-normal mb-2`}>
          {props.label}
        </span>
      )}

      {props.type === "password" ? (
        <span className={`block relative password`}>
          <input
            type={`${showPassword ? "text" : "password"}`}
            className={`placeholder-gray-600 text-sm py-3 pl-4 pr-8 w-full border border-gray-400 border-solid 
             ${
               props.errorMessages && props.errorMessages.length > 0
                 ? "border-red-400"
                 : "border-gray-400 focus-visible:border-green-800"
             }
            rounded text-gray-800 focus-visible:outline-0 focus-visible:shadow-md ${
              props.classNameInput
            }`}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            onBlur={props.onBlur}
            name={props.name}
            ref={ref}
            disabled={props.disabled}
          />
          <button
            className={`absolute top-4 right-4 cursor-pointer`}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            type={"button"}
          >
            <svg
              width="15"
              height="13"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75978 3.67857C3.56252 2.17458 5.63791 1.33333 7.8327 1.33333C10.0275 1.33333 12.1029 2.17458 13.9056 3.67857C14.1883 3.91444 14.6087 3.87646 14.8446 3.59374C15.0805 3.31102 15.0425 2.89063 14.7598 2.65476C12.7552 0.982371 10.3857 0 7.8327 0C5.27974 0 2.9102 0.982371 0.905623 2.65476C0.622903 2.89063 0.584923 3.31102 0.82079 3.59374C1.05666 3.87646 1.47706 3.91444 1.75978 3.67857Z"
                fill="#424551"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.7332 4.45935C3.93222 3.44709 5.64231 2.5 7.58268 2.5C9.52306 2.5 11.2331 3.44709 12.4322 4.45935C13.0366 4.96963 13.5321 5.51363 13.8824 5.99952C14.0571 6.24199 14.2029 6.47992 14.3078 6.70052C14.4041 6.90315 14.4993 7.15887 14.4993 7.41667C14.4993 7.67447 14.4041 7.93019 14.3078 8.13282C14.2029 8.35342 14.0571 8.59134 13.8824 8.83381C13.5321 9.3197 13.0366 9.8637 12.4322 10.374C11.2331 11.3862 9.52306 12.3333 7.58268 12.3333C5.64231 12.3333 3.93222 11.3862 2.7332 10.374C2.12878 9.8637 1.63322 9.3197 1.28301 8.83381C1.10825 8.59134 0.962506 8.35342 0.857602 8.13282C0.761243 7.93019 0.666016 7.67447 0.666016 7.41667C0.666016 7.15887 0.761243 6.90315 0.857602 6.70052C0.962506 6.47992 1.10825 6.24199 1.28301 5.99952C1.63322 5.51363 2.12878 4.96963 2.7332 4.45935ZM2.00408 7.41667C2.01082 7.43924 2.02638 7.4859 2.06172 7.56021C2.12333 7.68976 2.22316 7.85786 2.36467 8.0542C2.64699 8.44591 3.06672 8.91059 3.59333 9.35517C4.65637 10.2526 6.07128 11 7.58268 11C9.09409 11 10.509 10.2526 11.572 9.35517C12.0986 8.91059 12.5184 8.44591 12.8007 8.0542C12.9422 7.85786 13.042 7.68976 13.1036 7.56021C13.139 7.4859 13.1545 7.43924 13.1613 7.41666C13.1545 7.39409 13.139 7.34743 13.1036 7.27312C13.042 7.14357 12.9422 6.97547 12.8007 6.77913C12.5184 6.38742 12.0986 5.92274 11.572 5.47816C11.3484 5.28939 11.1093 5.10726 10.8569 4.93733C10.9496 5.24756 10.9993 5.5763 10.9993 5.91667C10.9993 7.80364 9.46966 9.33333 7.58268 9.33333C5.69571 9.33333 4.16602 7.80364 4.16602 5.91667C4.16602 5.5763 4.21578 5.24756 4.30844 4.93733C4.05609 5.10726 3.81692 5.28939 3.59333 5.47816C3.06672 5.92274 2.64699 6.38742 2.36467 6.77913C2.22316 6.97547 2.12333 7.14357 2.06172 7.27312C2.02638 7.34743 2.01082 7.39409 2.00408 7.41667ZM5.49935 5.91667C5.49935 4.76607 6.43209 3.83333 7.58268 3.83333C8.73328 3.83333 9.66602 4.76607 9.66602 5.91667C9.66602 7.06726 8.73328 8 7.58268 8C6.43209 8 5.49935 7.06726 5.49935 5.91667Z"
                fill="#424551"
              />
            </svg>
          </button>
        </span>
      ) : (
        <input
          type={props.type}
          defaultValue={props.defaultValue}
          className={`disabled:opacity-40 placeholder-gray-600 text-sm py-3 px-4 w-full  border border-solid 
           ${
             props.errorMessages && props.errorMessages.length > 0
               ? "border-red-400"
               : "border-gray-400  focus-visible:border-green-800"
           }
           rounded text-gray-800  focus-visible:outline-0 focus-visible:shadow-md invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 ${
             props.classNameInput
           }`}
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={ref}
          disabled={props.disabled}
        />
      )}
      {props.errorMessages && (
        <span className={`text-sm text-red-400 mt-1 `}>
          {props.errorMessages}
        </span>
      )}
    </label>
  );
});
