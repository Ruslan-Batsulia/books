import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  BooksResponse,
  BookResponse,
  ContributorRolesResponse,
  ContributorRoleResponse,
  ContributorsResponse,
  ContributorResponse,
  LanguagesResponse,
  LanguageResponse,
  LocationsResponse,
  LocationResponse,
  PublishersResponse,
  PublisherResponse,
  SubjectsResponse,
  SubjectResponse,
  SubsubjectsResponse,
  SubsubjectResponse,
  TagsResponse,
  TagResponse,
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

export const getLanguagesQuery = createApi({
  reducerPath: "getLanguages",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getLanguages: builder.query<LanguagesResponse, Record<string, string | number | undefined>>({
      query: (paramsObject) => {
        const params = new URLSearchParams();

        Object.entries(paramsObject).forEach(([key, value]) => {
          if (value !== undefined && value !== "") {
            params.append(key, value.toString());
          }
        });

        return `/languages?${params.toString()}`;
      },
    }),
    getLanguage: builder.query<LanguageResponse, string>({
      query: (id) => `/languages/${id}`,
    }),
  }),
  refetchOnMountOrArgChange: false,
});

export const getLocationsQuery = createApi({
  reducerPath: "getLocations",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getLocations: builder.query<LocationsResponse, Record<string, string | number | undefined>>({
      query: (paramsObject) => {
        const params = new URLSearchParams();

        Object.entries(paramsObject).forEach(([key, value]) => {
          if (value !== undefined && value !== "") {
            params.append(key, value.toString());
          }
        });

        return `/locations?${params.toString()}`;
      },
    }),
    getLocation: builder.query<LocationResponse, string>({
      query: (id) => `/locations/${id}`,
    }),
  }),
  refetchOnMountOrArgChange: false,
});

export const getPublishersQuery = createApi({
  reducerPath: "getPublishers",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getPublishers: builder.query<PublishersResponse, Record<string, string | number | undefined>>({
      query: (paramsObject) => {
        const params = new URLSearchParams();

        Object.entries(paramsObject).forEach(([key, value]) => {
          if (value !== undefined && value !== "") {
            params.append(key, value.toString());
          }
        });

        return `/publishers?${params.toString()}`;
      },
    }),
    getPublisher: builder.query<PublisherResponse, string>({
      query: (id) => `/publishers/${id}`,
    }),
  }),
  refetchOnMountOrArgChange: false,
});

export const getSubjectsQuery = createApi({
  reducerPath: "getSubjects",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getSubjects: builder.query<SubjectsResponse, Record<string, string | number | undefined>>({
      query: (paramsObject) => {
        const params = new URLSearchParams();

        Object.entries(paramsObject).forEach(([key, value]) => {
          if (value !== undefined && value !== "") {
            params.append(key, value.toString());
          }
        });

        return `/subjects?${params.toString()}`;
      },
    }),
    getSubject: builder.query<SubjectResponse, string>({
      query: (id) => `/subjects/${id}`,
    }),
  }),
  refetchOnMountOrArgChange: false,
});

export const getSubsubjectsQuery = createApi({
  reducerPath: "getSubsubjects",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getSubsubjects: builder.query<SubsubjectsResponse, Record<string, string | number | undefined>>({
      query: (paramsObject) => {
        const params = new URLSearchParams();

        Object.entries(paramsObject).forEach(([key, value]) => {
          if (value !== undefined && value !== "") {
            params.append(key, value.toString());
          }
        });

        return `/subsubjects?${params.toString()}`;
      },
    }),
    getSubsubject: builder.query<SubsubjectResponse, string>({
      query: (id) => `/subsubjects/${id}`,
    }),
  }),
  refetchOnMountOrArgChange: false,
});

export const getTagsQuery = createApi({
  reducerPath: "getTags",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTags: builder.query<TagsResponse, Record<string, string | number | undefined>>({
      query: (paramsObject) => {
        const params = new URLSearchParams();

        Object.entries(paramsObject).forEach(([key, value]) => {
          if (value !== undefined && value !== "") {
            params.append(key, value.toString());
          }
        });

        return `/tags?${params.toString()}`;
      },
    }),
    getTag: builder.query<TagResponse, string>({
      query: (id) => `/tags/${id}`,
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

export const {
  useGetLanguagesQuery,
  useGetLanguageQuery,
} = getLanguagesQuery;

export const {
  useGetLocationsQuery,
  useGetLocationQuery,
} = getLocationsQuery;

export const {
  useGetPublishersQuery,
  useGetPublisherQuery,
} = getPublishersQuery;

export const {
  useGetSubjectsQuery,
  useGetSubjectQuery,
} = getSubjectsQuery;

export const {
  useGetSubsubjectsQuery,
  useGetSubsubjectQuery,
} = getSubsubjectsQuery;

export const {
  useGetTagsQuery,
  useGetTagQuery,
} = getTagsQuery;
