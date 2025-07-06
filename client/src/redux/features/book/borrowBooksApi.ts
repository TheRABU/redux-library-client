import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { BorrowRecord, BorrowSummary } from "@/types";

// You can adjust the base URL if needed
export const borrowBooksApi = createApi({
  reducerPath: "borrowBooksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["Borrows", "Summary"],
  endpoints: (builder) => ({
    // 1. POST /borrow — Borrow a book
    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["Borrows", "Summary"],
    }),

    // 2. GET /borrow — View all borrow records
    getAllBorrows: builder.query({
      query: () => "/borrows",
      providesTags: ["Borrows"],
    }),

    // 3. GET /borrow-summary — Aggregated borrow stats
    getBorrowSummary: builder.query({
      query: () => "/borrow-summary",
      providesTags: ["Summary"],
    }),
  }),
});

export const {
  useBorrowBookMutation,
  useGetAllBorrowsQuery,
  useGetBorrowSummaryQuery,
} = borrowBooksApi;
