import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import { borrowBooksApi } from "./features/book/borrowBooksApi";
// import bookSlice from "./features/book/bookSlice";

import { setupListeners } from "@reduxjs/toolkit/query";
import booksApi from "./features/book/booksApi";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // allbooks: bookSlice.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
    [borrowBooksApi.reducerPath]: borrowBooksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(booksApi.middleware)
      .concat(borrowBooksApi.middleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
