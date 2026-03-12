import { configureStore } from "@reduxjs/toolkit";
import  pasteReducer  from "../src/redux/paste_slice";
export const store = configureStore({
  reducer: {
    paste: pasteReducer,
  },
});
