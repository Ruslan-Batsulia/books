import type {
  TagResponse,
  TagsResponse,
  BookResponse,
  BooksResponse,
  SubjectResponse,
  SubjectsResponse,
  LanguageResponse,
  LanguagesResponse,
  LocationResponse,
  LocationsResponse,
  PublisherResponse,
  PublishersResponse,
  SubsubjectResponse,
  SubsubjectsResponse,
  ContributorResponse,
  ContributorsResponse,
  ContributorRoleResponse,
  ContributorRolesResponse,
} from "./types";
import { makeApi, withParams } from "./utils";

export const getBooksQuery = makeApi("getBooks").injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<BooksResponse, Record<string, string | number | undefined>>({
      query: withParams("/books"),
    }),
    getBook: builder.query<BookResponse, string>({
      query: (id) => `/books/${id}`
    }),
  }),
  overrideExisting: false,
});

export const getContributorRolesQuery = makeApi("getContributorRoles").injectEndpoints({
  endpoints: (builder) => ({
    getContributorRoles: builder.query<ContributorRolesResponse, Record<string, string | number | undefined>>({
      query: withParams("/contributor_roles"),
    }),
    getContributorRole: builder.query<ContributorRoleResponse, string>({
      query: (id) => `/contributor_roles/${id}`
    }),
  }),
  overrideExisting: false,
});

export const getContributorsQuery = makeApi("getContributors").injectEndpoints({
  endpoints: (builder) => ({
    getContributors: builder.query<ContributorsResponse, Record<string, string | number | undefined>>({
      query: withParams("/contributors"),
    }),
    getContributor: builder.query<ContributorResponse, string>({
      query: (id) => `/contributors/${id}`
    }),
  }),
  overrideExisting: false,
});

export const getLanguagesQuery = makeApi("getLanguages").injectEndpoints({
  endpoints: (builder) => ({
    getLanguages: builder.query<LanguagesResponse, Record<string, string | number | undefined>>({
      query: withParams("/languages"),
    }),
    getLanguage: builder.query<LanguageResponse, string>({
      query: (id) => `/languages/${id}`
    }),
  }),
  overrideExisting: false,
});

export const getLocationsQuery = makeApi("getLocations").injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query<LocationsResponse, Record<string, string | number | undefined>>({
      query: withParams("/locations"),
    }),
    getLocation: builder.query<LocationResponse, string>({
      query: (id) => `/locations/${id}`
    }),
  }),
  overrideExisting: false,
});

export const getPublishersQuery = makeApi("getPublishers").injectEndpoints({
  endpoints: (builder) => ({
    getPublishers: builder.query<PublishersResponse, Record<string, string | number | undefined>>({
      query: withParams("/publishers"),
    }),
    getPublisher: builder.query<PublisherResponse, string>({
      query: (id) => `/publishers/${id}`
    }),
  }),
  overrideExisting: false,
});

export const getSubjectsQuery = makeApi("getSubjects").injectEndpoints({
  endpoints: (builder) => ({
    getSubjects: builder.query<SubjectsResponse, Record<string, string | number | undefined>>({
      query: withParams("/subjects"),
    }),
    getSubject: builder.query<SubjectResponse, string>({
      query: (id) => `/subjects/${id}`
    }),
  }),
  overrideExisting: false,
});

export const getSubsubjectsQuery = makeApi("getSubsubjects").injectEndpoints({
  endpoints: (builder) => ({
    getSubsubjects: builder.query<SubsubjectsResponse, Record<string, string | number | undefined>>({
      query: withParams("/subsubjects"),
    }),
    getSubsubject: builder.query<SubsubjectResponse, string>({
      query: (id) => `/subsubjects/${id}`
    }),
  }),
  overrideExisting: false,
});

export const getTagsQuery = makeApi("getTags").injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<TagsResponse, Record<string, string | number | undefined>>({
      query: withParams("/tags"),
    }),
    getTag: builder.query<TagResponse, string>({
      query: (id) => `/tags/${id}`
    }),
  }),
  overrideExisting: false,
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
