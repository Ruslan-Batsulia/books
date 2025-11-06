import {
  addReadBook,
  removeReadBook,
  addFavoriteBook,
  removeFavoriteBook,
} from "@/src/common/redux/slices";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
import type { Book } from "@/src/common/types";
import type { StoreType } from "@/src/common/redux";
import { useDispatch, useSelector } from "react-redux";
import { useGetBookQuery } from "@/src/common/services";

import shareBook from "@/public/images/share.svg";
import IconNone from "@/public/images/avatar_book.png";
import favoriteBookTrue from "@/public/images/favoriteBook/favoriteBookTrue.svg";
import favoriteBookFalse from "@/public/images/favoriteBook/favoriteBookFalse.svg";
import readBookTrue from "@/public/images/readBook/readBookTrue.svg";
import readBookFalse from "@/public/images/readBook/readBookFalse.svg";

import "./BookPage.scss";

type BookPageProps = {
  idBook: string;
};

export default function BookPage({ idBook }: BookPageProps) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { data, isLoading, isFetching, isError } = useGetBookQuery(idBook);

  const isFavoriteBook = useSelector(
    (state: StoreType) => state.favoriteBooks.favoriteBooks.includes(idBook)
  );
  const isReadBook = useSelector(
    (state: StoreType) => state.readBooks.readBooks.includes(idBook)
  );

  useEffect(() => {
    if (isError) {
      router.replace("/not-found");
    }
  }, [isError, router]);

  const bookResult: Book | undefined = data?.data;

  return (
    <main className={"book-page"}>
      <div className={"container"}>
        {(isLoading || isFetching || !bookResult) ? (
          <div>{"Book ID: " + idBook}</div>
        ) : (
          <>
            <div className={"book-page__block-icon"}>
              <div className={"book-page__icon-container"}>
                <Image
                  src={bookResult.cover_url ? bookResult.cover_url : IconNone}
                  alt={"Icon Book"}
                  className={"book-page__icon"}
                  fill={true}
                  sizes={"100px"}
                  priority={true}
                />
              </div>
            </div>

            <div className={"book-page__block-title"}>
              <h1 className={"book-page__title"}>{bookResult.title}</h1>
            </div>

            <div className={"book-page__block-description"}>
              <h2 className={"book-page__description-title"}>{"Опис:"}</h2>
              <p className={"book-page__description"}>
                {bookResult.description ? bookResult.description : "¯\\_(ツ)_/¯"}
              </p>
            </div>

            <div className={"book-page__block-action"}>
              <button
                className={"book-page__action-btn"}
                onClick={() => {dispatch(isFavoriteBook ? removeFavoriteBook(idBook) : addFavoriteBook(idBook))}}
              >
                <Image
                  src={isFavoriteBook ? favoriteBookTrue : favoriteBookFalse}
                  alt={"Favorite book button"}
                  loading={"eager"}
                  className={"book-page__favorite-icon"}
                />
              </button>

              <button
                className={"book-page__action-btn"}
                onClick={() => {dispatch(isReadBook ? removeReadBook(idBook) : addReadBook(idBook))}}
              >
                <Image
                  src={isReadBook ? readBookTrue : readBookFalse}
                  alt={"Read book button"}
                  loading={"eager"}
                  className={"book-page__reading-icon"}
                />
              </button>

              <button
                className={"book-page__action-btn"}
              >
                <Image
                  src={shareBook}
                  alt={"Share book button"}
                  loading={"eager"}
                  className={"book-page__share-icon"}
                />
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};
