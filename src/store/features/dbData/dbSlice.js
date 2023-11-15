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

const querySnapshot = await getDocs(collection(FBDataBase, "users"));

let emails = [];
querySnapshot.forEach((doc) => {
  emails.push(doc.data().email);
});

const initialState = {
  value: null,
  emails: emails,
  userData: null,
  isOnboarded: null,
  id: "",
};

export const dbSlice = createSlice({
  name: "dbData",
  initialState,
  reducers: {
    getData: (state, action) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().email == action.payload) {
          state.emails = doc.data().password;
          state.id = doc.id;
          state.userData = doc.data();
          state.isOnboarded = doc.data().isOnboarded;
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
        isOnboarded: false,
      });
    },
  },
});

export const { getData, createUser } = dbSlice.actions;

export default dbSlice.reducer;
