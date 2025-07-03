import type { BookInterface } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface BookState {
  books: BookInterface[];
}

const initialState: BookState = {
  books: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookInterface>) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice;
