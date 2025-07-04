import type { BookInterface } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface BookState {
  books: BookInterface[];
  filter:
    | "FICTION"
    | "NON_FICTION"
    | "SCIENCE"
    | "HISTORY"
    | "BIOGRAPHY"
    | "FANTASY"
    | "ALL";
}

const initialState: BookState = {
  books: [],
  filter: "ALL",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookInterface>) => {
      const bookId = uuidv4();
      const bookData = {
        ...action.payload,
        bookId,
      };
      state.books.push(bookData);
    },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice;
