import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;
import type {
  Params,
  Contributor,
  ContributorResponse,
  ContributorsResponse,
} from "../../types";

export const contributorsApi = createApi({
  reducerPath: "contributorsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["ContributorsList", "Contributor"],
  endpoints: (builder) => ({
    getContributors: builder.query<ContributorsResponse, Params>({
      query: (params) => {
        const qs = new URLSearchParams();
        Object.entries(params).forEach(
          ([k, v]) => v != null && qs.append(k, v.toString())
        );
        return `/contributors?${qs.toString()}`;
      },
      providesTags: ["ContributorsList"],
    }),
    getContributor: builder.query<ContributorResponse, string>({
      query: (id) => `/contributors/${id}`,
      providesTags: (result, error, id) => [{ type: "Contributor", id }],
    }),
    addContributor: builder.mutation<ContributorResponse, Partial<Contributor>>({
      query: (newContributor) => ({
        url: "/contributors",
        method: "POST",
        body: newContributor,
      }),
      invalidatesTags: ["ContributorsList"],
    }),
    updateContributor: builder.mutation<ContributorResponse, { id: string; data: Partial<Contributor> }>({
      query: ({ id, data }) => ({
        url: `/contributors/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        "ContributorsList",
        { type: "Contributor" as const, id },
      ],
    }),
    deleteContributor: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/contributors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ContributorsList"],
    }),
  }),
});

export const {
  useGetContributorsQuery,
  useGetContributorQuery,
  useAddContributorMutation,
  useUpdateContributorMutation,
  useDeleteContributorMutation,
} = contributorsApi;
