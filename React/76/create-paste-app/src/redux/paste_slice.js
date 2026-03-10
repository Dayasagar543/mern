import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : [],
};

export const pasteSlice = createSlice({
  name: "paste",
  initialState,
  reducers: {
    add_paste: (state, action) => {},
    update_paste: (state, action) => {},
    delete_paste: (state, action) => {},
    reset_pastes: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { add_paste, update_paste, delete_paste, copy_paste } =
  pasteSlice.actions;

export default pasteSlice.reducer;
