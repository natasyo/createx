"use client";
import { createSlice } from "@reduxjs/toolkit";

export type ModalsState = {
  registerModal: boolean;
  loginModal: boolean;
};

export type InitialState = {
  modalState: ModalsState;
};
const initialState: InitialState = {
  modalState: {
    registerModal: false,
    loginModal: false,
  },
};
export const UserModalSlice = createSlice({
  name: "userModal",
  initialState,
  reducers: {
    modalToggle: (state, action: { payload: Partial<ModalsState> }) => {
      state.modalState = { ...state.modalState, ...action.payload };
    },
    closeModals: (state) => {
      state.modalState.registerModal = false;
      state.modalState.loginModal = false;
    },
  },
});

export const { modalToggle, closeModals } = UserModalSlice.actions;
export default UserModalSlice.reducer;
