export { supabase } from "./lib/supabase";
// export { supabaseAdmin } from "./lib/supabase";

export {
  booksApi,
  useGetBookQuery,
  useGetBooksQuery,
} from "./api/booksApi";

export {
  contributorRolesApi,
  useGetContributorRoleQuery,
  useGetContributorRolesQuery,
} from "./api/contributorRolesApi";

export {
  contributorsApi,
  useGetContributorQuery,
  useGetContributorsQuery,
} from "./api/contributorsApi";

export {
  languagesApi,
  useGetLanguageQuery,
  useGetLanguagesQuery,
} from "./api/languagesApi";

export {
  locationsApi,
  useGetLocationQuery,
  useGetLocationsQuery,
} from "./api/locationsApi";

export {
  publishersApi,
  useGetPublisherQuery,
  useGetPublishersQuery,
} from "./api/publishersApi";

export {
  subjectsApi,
  useGetSubjectQuery,
  useGetSubjectsQuery,
} from "./api/subjectsApi";

export {
  subsubjectsApi,
  useGetSubsubjectQuery,
  useGetSubsubjectsQuery,
} from "./api/subsubjectsApi";

export {
  tagsApi,
  useGetTagQuery,
  useGetTagsQuery,
} from "./api/tagsApi";
