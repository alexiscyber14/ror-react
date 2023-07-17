import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./messages/messageSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    messages: messageSlice,
  },
  middleware: [thunk]
});

export default store;
