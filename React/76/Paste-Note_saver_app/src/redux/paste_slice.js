import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "pastes",
  initialState,
  reducers: {
    addToPastes: (state, action) => {},
    updateToPastes: (state, action) => {},
    resetAllPastes: (state, action) => {},
    removeFrompastes: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFrompastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
