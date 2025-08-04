"use client";

import { useLocale } from "next-intl";
import { Book } from "@/src/common/types";
import BookCard from "./BookCard/BookCard";
import Pagination from "./Pagination/Pagination";
import { useSearchParams } from "next/navigation";
import { useGetBooksQuery } from "@/src/common/api";
import { usePathname, useRouter } from "@/i18n/navigation";
import React, { useEffect, useMemo, useState } from "react";
import BooksListSkeleton from "./BooksListSkeleton/BooksListSkeleton";

import "./BooksList.scss";

export default function BooksList() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const searchParams = useSearchParams();
  
  const query = useMemo(
    () => Object.fromEntries(searchParams.entries()),
    [searchParams]
  );
  const [currentPage, setCurrentPage] = useState<number>(Number(query.page || 1));
  
  const queryParams = {
    limit: 10,
    offset: currentPage - 1,
  };
  
  const { data, isLoading, isFetching, /*isError*/ } = useGetBooksQuery(queryParams);
  const booksResults: Book[] = data?.data || [];
  const booksCount: number = data?.count || 10;
  
  const totalPages = Math.ceil(booksCount / 10);

  const books = {
    author: (book: Book) => book.book_contributors?.filter(
      (author) => author.contributor_roles.name === "author"
    ).map((author) => author.contributors.name),
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    if (page > 1) {
      router.replace({
        pathname: pathname,
        query: { ...query, page: page },
      }, {
        locale: currentLocale,
        scroll: false,
      });
    } else {
      const { page, ...restQuery } = query;

      router.replace({
        pathname: pathname,
        query: restQuery,
      }, {
        locale: currentLocale,
        scroll: false,
      });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <>
      <section className={"books-list"}>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        {(isLoading || isFetching) ? (
          <div className={"books-list__card-container"}>
            <BooksListSkeleton skeletonCount={10} />
          </div>
        ) : (
          <div className={"books-list__card-container"}>
            {booksResults.map((book) => {
              return (
                <BookCard
                  key={book.id}
                  bookId={book.id}
                  title={book.title}
                  icon={book.cover_url ?? ""}
                  author={books.author(book)}
                />
              )
            })}
          </div>
        )}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
};
