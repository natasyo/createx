"use client";
import React from "react";
import { TextBox } from "@/components/ui/TextBox";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import CheckBox from "@/components/ui/CheckBox";
import { Modal } from "@/components/ui/Modal";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { modalToggle } from "@/store/Modals/UserModalSlice";
import AuthSocials from "@/components/auth/AuthSocials";

type LoginFormData = {
  email: string;
  password: string;
  keepMySigned: boolean;
};
export function Login() {
  const isShow = useAppSelector(
    (state1) => state1.userModalSlice.modalState.loginModal,
  );
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>();
  const sendForm: SubmitHandler<FieldValues> = (dataInput) => {
    console.log(dataInput);
  };
  const dispatch = useAppDispatch();
  return (
    <Modal open={isShow}>
      <div className={`px-12 py-6 border-b border-b-gray-300 border-solid`}>
        <div className={`flex justify-end`}>
          <button onClick={() => dispatch(modalToggle({ loginModal: false }))}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L12 10.5858L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.4142 12L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12 13.4142L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.5858 12L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z"
                fill="#787A80"
              />
            </svg>
          </button>
        </div>
        <h3 className={`text-center mb-12`}>Sign up</h3>
        <p className={`text-sm text-center text-gray-700 leading-normal mb-6`}>
          Registration takes less than a minute but gives you full control over
          your orders.
        </p>
        <form onSubmit={handleSubmit(sendForm)}>
          <TextBox
            label={"Email"}
            type={"text"}
            placeholder={"Your working email"}
            {...register("email", {
              required: {
                value: true,
                message: "Email should be required.",
              },
            })}
            errorMessages={errors.email?.message}
          />
          <TextBox
            label={`Password`}
            type={"password"}
            placeholder={"Your password"}
            {...register("password", {
              required: {
                value: true,
                message: "Password should be required. ",
              },
            })}
            errorMessages={errors.password?.message}
          />

          <CheckBox
            label={"Keep me signed in"}
            value={"keepMySigned"}
            onChange={(event) => setValue("keepMySigned", event.target.checked)}
          />
          <Button type={"submit"} className={"w-full"}>
            Register
          </Button>
          <p className={`text-gray-800`}>
            Do not have an account?{" "}
            <button
              type={"button"}
              className={`text-green-800 text-sm`}
              onClick={() => {
                dispatch(
                  modalToggle({ loginModal: false, registerModal: true }),
                );
              }}
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
      <AuthSocials />
    </Modal>
  );
}
