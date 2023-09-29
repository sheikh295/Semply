import { createSlice } from "@reduxjs/toolkit";
import {
  doc,
  getDocs,
  getDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import { FBDataBase } from "../../../shared/Firebase";

let emails = [];

const querySnapshot = await getDocs(collection(FBDataBase, "users"));
querySnapshot.forEach((doc) => {
  emails.push(doc.data().email);
});

const initialState = {
  value: emails,
};

export const emailsSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    getPass: (state, action) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().email == action.payload) {
          state.value = doc.data().password;
        } else {
          return "";
        }
      });
    },
  },
});

export const { getPass } = emailsSlice.actions;

export default emailsSlice.reducer;
