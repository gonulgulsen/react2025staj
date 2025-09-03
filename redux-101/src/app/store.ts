import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//Hooks
//Store'a action'lar dispatch edilir. (gönderilir)
export const useAppDispatch: () => AppDispatch = useDispatch;
//Store'dan veriler seçilir(select edilir)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
//dispatch store'a paslancak olan metotları belirtiyor
//selector da store dan gelecek veriyi nasıl alacağımız belirtiyor

//Selectors
export const selectValue = (state: RootState) => state.counter.value;
