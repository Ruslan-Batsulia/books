import {
  addReadBook,
  removeReadBook,
  addFavoriteBook,
  removeFavoriteBook,
} from "@/src/common/redux/slices";
import { Link } from "@/i18n/navigation";
import { StoreType } from "@/src/common/redux";
import Image, { StaticImageData } from "next/image";
import { useDispatch, useSelector } from "react-redux";

import favoriteBookTrue from "@/public/images/favoriteBook/favoriteBookTrue.svg";
import favoriteBookFalse from "@/public/images/favoriteBook/favoriteBookFalse.svg";
import readBookTrue from "@/public/images/readBook/readBookTrue.svg";
import readBookFalse from "@/public/images/readBook/readBookFalse.svg";

import "./BookCard.scss";

type BookCardProps = {
  icon: StaticImageData | string;
  title: string;
  author: string[];
  bookId: string;
};

export default function BookCard({
  icon,
  title,
  author,
  bookId,
}: BookCardProps) {
  const dispatch = useDispatch();

  const isFavoriteBook = useSelector(
    (state: StoreType) => state.favoriteBooks.favoriteBooks.includes(bookId)
  );
  const isReadBook = useSelector(
    (state: StoreType) => state.readBooks.readBooks.includes(bookId)
  );

  const toggleFavoriteBook = () =>
    dispatch(isFavoriteBook ? removeFavoriteBook(bookId) : addFavoriteBook(bookId));

  const toggleReadBook = () =>
    dispatch(isReadBook ? removeReadBook(bookId) : addReadBook(bookId));

  return (
    <div className={"book-card"}>
      <Link href={"/book/" + (bookId)} className={"book-card__icon-container"}>
        <Image
          src={icon}
          alt={"Icon Book"}
          className={"book-card__icon"}
          fill={true}
          sizes={"100px"}
          priority={true}
        />
      </Link>

      <div className={"book-card__info-container"}>
        <span className={"book-card__info-title"}>
          {title}
        </span>

        <ul className={"book-card__info-author-list"}>
          {author.map((name, i) => {
            return (
              <li key={i} className={"book-card__info-author"}>
                {name}
              </li>
            )
          })}
        </ul>
      </div>

      <button
        className={"book-card__book-button book-card__book-button--favorite"}
        onClick={toggleFavoriteBook}
      >
        <Image
          src={isFavoriteBook ? favoriteBookTrue : favoriteBookFalse}
          alt={"Favorite book button"}
          loading={"eager"}
          className={"book-card__book-button-img book-card__book-button-img--favorite"}
        />
      </button>

      <button
        className={"book-card__book-button book-card__book-button--read"}
        onClick={toggleReadBook}
      >
        <Image
          src={isReadBook ? readBookTrue : readBookFalse}
          alt={"Read book button"}
          loading={"eager"}
          className={"book-card__book-button-img book-card__book-button-img--read"}
        />
      </button>
    </div>
  );
};
