import React from "react";

type Props = {
  className?: string;
};
function SearchInput({ className }: Props) {
  return (
    <label
      className={` flex items-center border border-solid border-gray-400 rounded py-3 px-4 ${className}`}
    >
      <input
        type={"text"}
        className={`w-full focus-visible:outline-0 text-sm leading-normal placeholder-gray-600 text-gray-800`}
        placeholder={"Search for products..."}
      />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={"ml-1"}
      >
        <g clipPath="url(#clip0_34055_4702)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.25065 2.16634C4.4432 2.16634 2.16732 4.44223 2.16732 7.24967C2.16732 10.0571 4.4432 12.333 7.25065 12.333C8.65324 12.333 9.92209 11.7658 10.8425 10.8467C11.7647 9.92589 12.334 8.6549 12.334 7.24967C12.334 4.44223 10.0581 2.16634 7.25065 2.16634ZM0.833984 7.24967C0.833984 3.70585 3.70682 0.833008 7.25065 0.833008C10.7945 0.833008 13.6673 3.70585 13.6673 7.24967C13.6673 8.78248 13.1292 10.1905 12.2326 11.2939L14.9716 14.0278C15.2322 14.2879 15.2326 14.7101 14.9725 14.9706C14.7124 15.2312 14.2903 15.2316 14.0297 14.9715L11.2893 12.2362C10.1868 13.13 8.78088 13.6663 7.25065 13.6663C3.70682 13.6663 0.833984 10.7935 0.833984 7.24967Z"
            fill="#424551"
          />
        </g>
        <defs>
          <clipPath id="clip0_34055_4702">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </label>
  );
}

export default SearchInput;
