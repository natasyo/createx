// @flow
import React from "react";
import { ReactNode } from "react";
import { useAppDispatch } from "@/store/hooks";
import { closeModals } from "@/store/Modals/UserModalSlice";
import {
  Dialog,
  DialogStylesType,
  ThemeProvider,
} from "@material-tailwind/react";

type Props = {
  children: ReactNode;
  open: boolean;
};

export function Modal({ children, open }: Props) {
  const dialogTheme: { dialog: DialogStylesType } = {
    dialog: {
      defaultProps: {
        size: "sm",
      },
      styles: {
        base: {
          backdrop: {
            backgroundColor: "bg-gray-900",
            backgroundOpacity: "bg-opacity-75",
            overflow: "overflow-y-auto",
            backdropFilter: "backdrop-blur-none",
          },
          container: {
            color: "text-gray-900",
          },
        },
      },
    },
  };
  const dispatch = useAppDispatch();

  return (
    <ThemeProvider value={dialogTheme}>
      <Dialog
        open={open}
        handler={() => {
          dispatch(closeModals());
        }}
      >
        {children}
      </Dialog>
    </ThemeProvider>
  );
}
