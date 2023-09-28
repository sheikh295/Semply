import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB6IQZktpl0rP_bZV9vpah2KDn7D0cOyDg",
    authDomain: "semply-b8193.firebaseapp.com",
    projectId: "semply-b8193",
    storageBucket: "semply-b8193.appspot.com",
    messagingSenderId: "588477361563",
    appId: "1:588477361563:web:5b9599f21fec9a8f69853e"
  };
  
export const FireBaseApp = initializeApp(firebaseConfig);
export const FBDataBase = getFirestore(app);