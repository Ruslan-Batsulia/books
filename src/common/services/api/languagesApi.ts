import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;

import type {
  Params,
  // Language,
  LanguageResponse,
  LanguagesResponse,
} from "../../types";

export const languagesApi = createApi({
  reducerPath: "languagesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["LanguagesList", "Language"],
  endpoints: (builder) => ({
    getLanguages: builder.query<LanguagesResponse, Params>({
      query: (params) => {
        const qs = new URLSearchParams();
        Object.entries(params).forEach(
          ([k, v]) => v != null && qs.append(k, v.toString())
        );
        return `/languages?${qs.toString()}`;
      },
      providesTags: ["LanguagesList"],
    }),
    getLanguage: builder.query<LanguageResponse, string>({
      query: (id) => `/languages/${id}`,
      providesTags: (result, error, id) => [{ type: "Language", id }],
    }),
    // addLanguage: builder.mutation<LanguageResponse, Partial<Language>>({
    //   query: (newLanguage) => ({
    //     url: "/languages",
    //     method: "POST",
    //     body: newLanguage,
    //   }),
    //   invalidatesTags: ["LanguagesList"],
    // }),
    // updateLanguage: builder.mutation<LanguageResponse, { id: string; data: Partial<Language> }>({
    //   query: ({ id, data }) => ({
    //     url: `/languages/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: (result, error, { id }) => [
    //     "LanguagesList",
    //     { type: "Language" as const, id },
    //   ],
    // }),
    // deleteLanguage: builder.mutation<{ message: string }, string>({
    //   query: (id) => ({
    //     url: `/languages/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["LanguagesList"],
    // }),
  }),
});

export const {
  useGetLanguagesQuery,
  useGetLanguageQuery,
  // useAddLanguageMutation,
  // useUpdateLanguageMutation,
  // useDeleteLanguageMutation,
} = languagesApi;
