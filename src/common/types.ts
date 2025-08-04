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

export type BooksResponse = {
  success: boolean;
  data: Book[];
  count: number;
  limit: number;
  offset: number;
};

export type BookResponse = {
  success: boolean;
  data: Book;
};

export type ContributorRole = {
  id: string;
  name: string;
  created_at: string;
  updated_at: string | null;
};

export type ContributorRolesResponse = {
  success: boolean;
  data: ContributorRole[];
  count: number;
  limit: number;
  offset: number;
};

export type ContributorRoleResponse = {
  success: boolean;
  data: ContributorRole;
};

export type Contributor = {
  id: string;
  name: string;
  photo_url: string | null;
  info: string | null;
  created_at: string;
  updated_at: string | null;
};

export type ContributorsResponse = {
  success: boolean;
  data: Contributor[];
  count: number;
  limit: number;
  offset: number;
};

export type ContributorResponse = {
  success: boolean;
  data: Contributor;
};
