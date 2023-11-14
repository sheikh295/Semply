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
let user = null;

const querySnapshot = await getDocs(collection(FBDataBase, "users"));

let emails = [];
querySnapshot.forEach((doc) => {
  emails.push(doc.data().email);
});

const initialState = {
  value: null,
  emails: emails,
  userData: null,
};

export const dbSlice = createSlice({
  name: "dbData",
  initialState,
  reducers: {
    getPass: (state, action) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().email == action.payload) {
          state.emails = doc.data().password;
        } else {
          return "";
        }
      });
    },
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
    createUser: (state, action) => {
      addDoc(collection(FBDataBase, "users"), {
        fName: action.payload[0],
        lName: action.payload[1],
        email: action.payload[2],
        password: action.payload[3],
      });
    },
    getData: (state, action) => {
      const docRef = doc(FBDataBase, "users", `${id}`);
      const docSnap = getDoc(docRef);
      if (docSnap != null / undefined) {
        docSnap
          .then((response) => {
            state.userData = response.data();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
});

export const { getData, getId, createUser, getPass } = dbSlice.actions;

export default dbSlice.reducer;
