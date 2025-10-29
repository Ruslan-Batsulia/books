import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;

import type {
  Params,
  // Subsubject,
  SubsubjectResponse,
  SubsubjectsResponse,
} from "../../types";

export const subsubjectsApi = createApi({
  reducerPath: "subsubjectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["SubsubjectsList", "Subsubject"],
  endpoints: (builder) => ({
    getSubsubjects: builder.query<SubsubjectsResponse, Params>({
      query: (params) => {
        const qs = new URLSearchParams();
        Object.entries(params).forEach(
          ([k, v]) => v != null && qs.append(k, v.toString())
        );
        return `/subsubjects?${qs.toString()}`;
      },
      providesTags: ["SubsubjectsList"],
    }),
    getSubsubject: builder.query<SubsubjectResponse, string>({
      query: (id) => `/subsubjects/${id}`,
      providesTags: (result, error, id) => [{ type: "Subsubject", id }],
    }),
    // addSubsubject: builder.mutation<SubsubjectResponse, Partial<Subsubject>>({
    //   query: (newSubsubject) => ({
    //     url: "/subsubjects",
    //     method: "POST",
    //     body: newSubsubject,
    //   }),
    //   invalidatesTags: ["SubsubjectsList"],
    // }),
    // updateSubsubject: builder.mutation<SubsubjectResponse, { id: string; data: Partial<Subsubject> }>({
    //   query: ({ id, data }) => ({
    //     url: `/subsubjects/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: (result, error, { id }) => [
    //     "SubsubjectsList",
    //     { type: "Subsubject" as const, id },
    //   ],
    // }),
    // deleteSubsubject: builder.mutation<{ message: string }, string>({
    //   query: (id) => ({
    //     url: `/subsubjects/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["SubsubjectsList"],
    // }),
  }),
});

export const {
  useGetSubsubjectsQuery,
  useGetSubsubjectQuery,
  // useAddSubsubjectMutation,
  // useUpdateSubsubjectMutation,
  // useDeleteSubsubjectMutation,
} = subsubjectsApi;
