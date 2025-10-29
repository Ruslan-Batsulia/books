import { Pagination } from "..";
import { useLocale } from "next-intl";
import { Book } from "@/src/common/types";
import { useMemo, useState } from "react";
import BookCard from "../BookCard/BookCard";
import { useSearchParams } from "next/navigation";
import { useGetBooksQuery } from "@/src/common/services";
import { usePathname, useRouter } from "@/i18n/navigation";

import IconNone from "@/public/images/avatar_book.png";

import "./BookList.scss";

export default function BookList() {
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

  const { data, isLoading, isFetching } = useGetBooksQuery(queryParams);
  
  const booksResults: Book[] = data?.data || [];
  const booksCount: number = data?.count || 10;
  const totalPages = Math.ceil(booksCount / 10);

  const bookResult = (book: Book) => ({
    id: book.id,
    title: book.title,
    author: book.book_contributors?.filter(
      (item) => item.contributor_roles.name === "author"
    ).map((item) => item.contributors.name) ?? [],
    icon: book.cover_url ?? IconNone,
  });

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
      const { ...restQuery } = query;

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
    <section className="book-list">
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {(isLoading || isFetching) ? (
        <div className={"book-list__card-container"}>
          {"Waiting"}
        </div>
      ) : (
        <div className={"book-list__card-container"}>
          {booksResults.map((item) => {
            const book = bookResult(item);

            return (
              <BookCard
                key={book.id}
                icon={book.icon}
                title={book.title}
                author={book.author}
                bookId={book.id}
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
  );
};
