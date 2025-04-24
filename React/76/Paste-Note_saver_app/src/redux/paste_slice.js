import { createSlice } from "@reduxjs/toolkit";

import toast from "react-hot-toast";
const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("paste created successfully");
    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => {
        item.id === paste.id;
      });

      if (index >= 0) {
        state.pastes[index] = paste;
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
      }

      toast.success("paste updated successfully");
    },
    resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast("paste reseted all successfully");
    },
    removeFrompastes: (state, action) => {
      const paste = action.payload;
      console.log(paste)
      console.log(paste);
      const index = state.pastes.findIndex((item) => {
        item.id == paste.id;
      });
      console.log(index);
      if (index >= 0) {
        state.pastes.Splice(index, 1);
      }
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("paste removed successfully");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFrompastes } =
  pasteSlice.actions;

export default pasteSlice.reducer;
