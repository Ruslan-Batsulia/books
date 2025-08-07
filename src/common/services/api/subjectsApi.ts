import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;
import type {
  Params,
  Subject,
  SubjectResponse,
  SubjectsResponse,
} from "../../types";

export const subjectsApi = createApi({
  reducerPath: "subjectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["SubjectsList", "Subject"],
  endpoints: (builder) => ({
    getSubjects: builder.query<SubjectsResponse, Params>({
      query: (params) => {
        const qs = new URLSearchParams();
        Object.entries(params).forEach(
          ([k, v]) => v != null && qs.append(k, v.toString())
        );
        return `/subjects?${qs.toString()}`;
      },
      providesTags: ["SubjectsList"],
    }),
    getSubject: builder.query<SubjectResponse, string>({
      query: (id) => `/subjects/${id}`,
      providesTags: (result, error, id) => [{ type: "Subject", id }],
    }),
    addSubject: builder.mutation<SubjectResponse, Partial<Subject>>({
      query: (newSubject) => ({
        url: "/subjects",
        method: "POST",
        body: newSubject,
      }),
      invalidatesTags: ["SubjectsList"],
    }),
    updateSubject: builder.mutation<SubjectResponse, { id: string; data: Partial<Subject> }>({
      query: ({ id, data }) => ({
        url: `/subjects/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        "SubjectsList",
        { type: "Subject" as const, id },
      ],
    }),
    deleteSubject: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/subjects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SubjectsList"],
    }),
  }),
});

export const {
  useGetSubjectsQuery,
  useGetSubjectQuery,
  useAddSubjectMutation,
  useUpdateSubjectMutation,
  useDeleteSubjectMutation,
} = subjectsApi;
