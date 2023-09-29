import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import dbReducer from "./features/dbData/dbSlice";
import emailsReducer from "./features/dbData/emailsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dbData: dbReducer,
    emails: emailsReducer,
  },
});
