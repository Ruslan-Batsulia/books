type BaseEntity = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string | null;
};
type ApiResponse<T> = {
  success: boolean;
  data: T;
};
type ApiListResponse<T> = ApiResponse<T[]> & {
  count: number;
  limit: number;
  offset: number;
};

export type Book = {
  id: string;
  title: string;
  description: string | null;
  cover_url: string | null;
  book_contributors: {
    contributors: {
      id: string;
      name: string;
      info: string | null;
    };
    contributor_roles: {
      id: string;
      name: string;
    };
  }[];
  book_publishers: {
    locations: {
      id: string;
      city: string | null;
      country: string | null;
    };
    publishers: {
      id: string;
      name: string;
    };
    published_at: number | null;
  }[];
  book_languages: {
    languages: {
      id: string;
      name: string;
    };
  }[];
  book_subsubjects: {
    subsubjects: {
      id: string;
      name: string;
    };
  }[];
  book_tags: {
    tags: {
      id: string;
      name: string;
    };
  }[];
  created_at: string;
  updated_at: string | null;
};

export type Tag = BaseEntity;
export type Subject = BaseEntity;
export type Language = BaseEntity;
export type Publisher = BaseEntity;
export type ContributorRole = BaseEntity;
export type Contributor = BaseEntity & {
  photo_url: string | null;
  info: string | null;
};
export type Location = {
  id: string;
  city: string | null;
  country: string | null;
  created_at: string;
  updated_at: string | null;
};
export type Subsubject = BaseEntity & {
  subjects_id: string | null;
};

export type BooksResponse = ApiListResponse<Book>;
export type BookResponse = ApiResponse<Book>;
export type ContributorRolesResponse = ApiListResponse<ContributorRole>;
export type ContributorRoleResponse = ApiResponse<ContributorRole>;
export type ContributorsResponse = ApiListResponse<Contributor>;
export type ContributorResponse = ApiResponse<Contributor>;
export type LanguagesResponse = ApiListResponse<Language>;
export type LanguageResponse = ApiResponse<Language>;
export type LocationsResponse = ApiListResponse<Location>;
export type LocationResponse = ApiResponse<Location>;
export type PublishersResponse = ApiListResponse<Publisher>;
export type PublisherResponse = ApiResponse<Publisher>;
export type SubjectsResponse = ApiListResponse<Subject>;
export type SubjectResponse = ApiResponse<Subject>;
export type SubsubjectsResponse = ApiListResponse<Subsubject>;
export type SubsubjectResponse = ApiResponse<Subsubject>;
export type TagsResponse = ApiListResponse<Tag>;
export type TagResponse = ApiResponse<Tag>;

export type Params = Record<string, string | number | undefined>;
