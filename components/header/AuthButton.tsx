"use client";
import React from "react";
import { modalToggle } from "@/store/Modals/UserModalSlice";
import { useAppDispatch } from "@/store/hooks";

function AuthButton() {
  const dispatch = useAppDispatch();
  const handleShowModal = () => {
    dispatch(modalToggle({ registerModal: true }));
  };
  return (
    <button
      className={`flex items-center`}
      data-modal-target="registerModal"
      data-modal-show="registertModal"
      onClick={handleShowModal}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-5 h-5 mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
      Log in / Register
    </button>
  );
}

export default AuthButton;
