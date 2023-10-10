import { configureStore } from "@reduxjs/toolkit";
import dbReducer from "./features/dbData/dbSlice";
import emailsReducer from "./features/dbData/emailsSlice";
import miscSlice from "./features/misc/miscSlice";

export const store = configureStore({
  reducer: {
    dbData: dbReducer,
    emails: emailsReducer,
    misc: miscSlice,
  },
});
