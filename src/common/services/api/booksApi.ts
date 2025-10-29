import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;

import type {
  // Book,
  Params,
  BookResponse,
  BooksResponse,
} from "../../types";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["BooksList", "Book"],
  endpoints: (builder) => ({
    getBooks: builder.query<BooksResponse, Params>({
      query: (params) => {
        const qs = new URLSearchParams();
        Object.entries(params).forEach(
          ([k, v]) => v != null && qs.append(k, v.toString())
        );
        return `/books?${qs.toString()}`;
      },
      providesTags: ["BooksList"],
    }),
    getBook: builder.query<BookResponse, string>({
      query: (id) => `/books/${id}`,
      providesTags: (result, error, id) => [{ type: "Book", id }],
    }),
    // addBook: builder.mutation<BookResponse, Partial<Book>>({
    //   query: (newBook) => ({
    //     url: "/books",
    //     method: "POST",
    //     body: newBook,
    //   }),
    //   invalidatesTags: ["BooksList"],
    // }),
    // updateBook: builder.mutation<BookResponse, { id: string; data: Partial<Book> }>({
    //   query: ({ id, data }) => ({
    //     url: `/books/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: (result, error, { id }) => [
    //     "BooksList",
    //     { type: "Book" as const, id },
    //   ],
    // }),
    // deleteBook: builder.mutation<{ message: string }, string>({
    //   query: (id) => ({
    //     url: `/books/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["BooksList"],
    // }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  // useAddBookMutation,
  // useUpdateBookMutation,
  // useDeleteBookMutation,
} = booksApi;
