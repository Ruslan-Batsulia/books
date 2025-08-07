import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;
import type {
  Params,
  ContributorRole,
  ContributorRoleResponse,
  ContributorRolesResponse,
} from "../../types";

export const contributorRolesApi = createApi({
  reducerPath: "contributorRolesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["ContributorRolesList", "ContributorRole"],
  endpoints: (builder) => ({
    getContributorRoles: builder.query<ContributorRolesResponse, Params>({
      query: (params) => {
        const qs = new URLSearchParams();
        Object.entries(params).forEach(
          ([k, v]) => v != null && qs.append(k, v.toString())
        );
        return `/contributor_roles?${qs.toString()}`;
      },
      providesTags: ["ContributorRolesList"],
    }),
    getContributorRole: builder.query<ContributorRoleResponse, string>({
      query: (id) => `/contributor_roles/${id}`,
      providesTags: (result, error, id) => [{ type: "ContributorRole", id }],
    }),
    addContributorRole: builder.mutation<ContributorRoleResponse, Partial<ContributorRole>>({
      query: (newContributorRole) => ({
        url: "/contributor_roles",
        method: "POST",
        body: newContributorRole,
      }),
      invalidatesTags: ["ContributorRolesList"],
    }),
    updateContributorRole: builder.mutation<ContributorRoleResponse, { id: string; data: Partial<ContributorRole> }>({
      query: ({ id, data }) => ({
        url: `/contributor_roles/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        "ContributorRolesList",
        { type: "ContributorRole" as const, id },
      ],
    }),
    deleteContributorRole: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/contributor_roles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ContributorRolesList"],
    }),
  }),
});

export const {
  useGetContributorRolesQuery,
  useGetContributorRoleQuery,
  useAddContributorRoleMutation,
  useUpdateContributorRoleMutation,
  useDeleteContributorRoleMutation,
} = contributorRolesApi;
