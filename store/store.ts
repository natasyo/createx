import { configureStore } from "@reduxjs/toolkit";
import userModalSlice from "./Modals/UserModalSlice";

export const store = configureStore({
  reducer: {
    userModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
