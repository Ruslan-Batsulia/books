import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  BooksResponse,
  BookResponse,
  ContributorRolesResponse,
  ContributorRoleResponse,
  ContributorsResponse,
  ContributorResponse,
} from "./types";

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
    getBook: builder.query<BookResponse, string>({
      query: (id) => `/books/${id}`,
    }),
  }),
  refetchOnMountOrArgChange: false,
});

export const getContributorRolesQuery = createApi({
  reducerPath: "getContributorRoles",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getContributorRoles: builder.query<ContributorRolesResponse, Record<string, string | number | undefined>>({
      query: (paramsObject) => {
        const params = new URLSearchParams();

        Object.entries(paramsObject).forEach(([key, value]) => {
          if (value !== undefined && value !== "") {
            params.append(key, value.toString());
          }
        });

        return `/contributor_roles?${params.toString()}`;
      },
    }),
    getContributorRole: builder.query<ContributorRoleResponse, string>({
      query: (id) => `/contributor_roles/${id}`,
    }),
  }),
  refetchOnMountOrArgChange: false,
});

export const getContributorsQuery = createApi({
  reducerPath: "getContributors",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getContributors: builder.query<ContributorsResponse, Record<string, string | number | undefined>>({
      query: (paramsObject) => {
        const params = new URLSearchParams();

        Object.entries(paramsObject).forEach(([key, value]) => {
          if (value !== undefined && value !== "") {
            params.append(key, value.toString());
          }
        });

        return `/contributors?${params.toString()}`;
      },
    }),
    getContributor: builder.query<ContributorResponse, string>({
      query: (id) => `/contributors/${id}`,
    }),
  }),
  refetchOnMountOrArgChange: false,
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
} = getBooksQuery;

export const {
  useGetContributorRolesQuery,
  useGetContributorRoleQuery,
} = getContributorRolesQuery;

export const {
  useGetContributorsQuery,
  useGetContributorQuery,
} = getContributorsQuery;
