import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import bookSlice from "./features/book/bookSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    allbooks: bookSlice.reducer,
  },
});

export default store;
