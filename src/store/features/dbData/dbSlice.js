import { createSlice } from "@reduxjs/toolkit";
import {
  doc,
  getDocs,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { FBDataBase } from "../../../shared/Firebase";

let id = "";

const querySnapshot = await getDocs(collection(FBDataBase, "users"));

const initialState = {
  value: null,
};

export const dbSlice = createSlice({
  name: "dbData",
  initialState,
  reducers: {
    getId: (state, action) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().email == action.payload) {
          id = doc.id;
          state.value = doc.id;
        } else {
          return "";
        }
      });
    },
    getData: (state) => {
      querySnapshot.forEach((doc) => {
        if (doc.id == id) {
          state.value = doc.data();
        } else {
          return "";
        }
      });
    },
  },
});

export const { getData, getId } = dbSlice.actions;

export default dbSlice.reducer;
