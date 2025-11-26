import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import financeReducer from "./financeSlice";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    user: userReducer,
    finance: financeReducer,
  },
});

//for typescript compatibility
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
