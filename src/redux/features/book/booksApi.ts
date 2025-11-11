import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BookInterface } from "@/types";

const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-backend-pi.vercel.app/api",
  }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query<BookInterface[], void>({
      query: () => "/books",
      transformResponse: (response: { data: BookInterface[] }) => response.data,
      providesTags: ["Books"],
    }),
    getBookById: builder.query({
      query: (id) => `/books/${id}`,
    }),
    addBook: builder.mutation({
      query: (newBook) => ({
        url: "/books",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation<
      BookInterface,
      { id: string; data: Partial<BookInterface> }
    >({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;

export default booksApi;
