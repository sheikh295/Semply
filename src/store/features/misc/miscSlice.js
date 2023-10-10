import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  education: [],
  workHistory: [],
  disclaimer: true,
};

export const miscSlice = createSlice({
  name: "misc",
  initialState,
  reducers: {
    setDisclaimerfalse: (state) => {
      state.disclaimer = false;
    },
  },
});

export const { setDisclaimerfalse } = miscSlice.actions;

export default miscSlice.reducer;
