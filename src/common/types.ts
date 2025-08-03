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
