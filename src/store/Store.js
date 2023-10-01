import { configureStore } from "@reduxjs/toolkit";
import dbReducer from "./features/dbData/dbSlice";
import emailsReducer from "./features/dbData/emailsSlice";

export const store = configureStore({
  reducer: {
    dbData: dbReducer,
    emails: emailsReducer,
  },
});
