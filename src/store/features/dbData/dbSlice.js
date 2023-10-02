import { createSlice } from "@reduxjs/toolkit";
import {
  doc,
  getDocs,
  getDoc,
  collection,
  query,
  where,
  onSnapshot,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { FBDataBase } from "../../../shared/Firebase";

let id = "";

const querySnapshot = await getDocs(collection(FBDataBase, "users"));

const initialState = {
  value: null,
  disclaimer: true,
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
    createUser: (state, action) => {
      addDoc(collection(FBDataBase, "users"), {
        fName: action.payload[0],
        lName: action.payload[1],
        email: action.payload[2],
        password: action.payload[3],
      });
    },
    setDisclaimerfalse: (state) => {
      state.disclaimer = false;
    },
  },
});

export const { getData, getId, createUser, setDisclaimerfalse } =
  dbSlice.actions;

export default dbSlice.reducer;
