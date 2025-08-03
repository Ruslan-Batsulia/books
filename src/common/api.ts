import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BooksResponse } from "./types";

const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;

export const getBooksQuery = createApi({
  reducerPath: "getBooks",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getBooks: builder.query<BooksResponse, Record<string, string | number | undefined>>({
      query: (paramsObject) => {
        const params = new URLSearchParams();

        Object.entries(paramsObject).forEach(([key, value]) => {
          if (value !== undefined && value !== "") {
            params.append(key, value.toString());
          }
        });

        return `/books?${params.toString()}`;
      },
    }),
  }),
  refetchOnMountOrArgChange: false,
});

export const { useGetBooksQuery } = getBooksQuery;
