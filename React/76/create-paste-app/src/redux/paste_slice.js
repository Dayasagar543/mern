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
    add_paste: (state, action) => {
      const paste = action.payload;
      const exist=state.pastes.findIndex((item)=>{
        item.id==paste.id
      })
      if (!exist) {
        state.pastes.push(paste);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("paste created successfully.");
      }
    },
    update_paste: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => {
        item.id == paste.id;
      });
      if (index >= 0) {
        state.pastes[index] = paste;
      }

      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("paste updated successfully.");
    },
    delete_paste: (state, action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item) => {
        item.id == pasteId;
      });

      if (index >= 0) {
        state.pastes.splice(index, 1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));
        toast.success("item deleted");
      }
    },
    reset_pastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
    },
  },
});

// Action creators are generated for each case reducer function
export const { add_paste, update_paste, delete_paste } = pasteSlice.actions;

export default pasteSlice.reducer;
