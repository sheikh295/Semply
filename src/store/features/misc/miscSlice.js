import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  education: [
    // {
    //   Title: "Software Engineering",
    //   Institution: "COMSATS",
    //   Description: "Skills, achievments, leadership roles etc",
    //   From: "2019",
    //   To: "2023",
    // },
  ],
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
    setEducationHist: (state) => {
      "";
    },
  },
});

export const { setDisclaimerfalse, setEducationHist } = miscSlice.actions;

export default miscSlice.reducer;
