import { useState } from "react";
import { Link } from "@/i18n/navigation";
import Image, { StaticImageData } from "next/image";

import favoriteBookTrue from "@/public/images/favoriteBook/favoriteBookTrue.svg";
import favoriteBookFalse from "@/public/images/favoriteBook/favoriteBookFalse.svg";

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
  const [isFavoriteBook, setIsFavoriteBook] = useState<boolean>(false);

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
        className={"book-card__favorite-book-button"}
        onClick={() => { setIsFavoriteBook((prev) => !prev) }}
      >
        <Image
          src={isFavoriteBook ? favoriteBookTrue : favoriteBookFalse}
          alt={"Favorite book button"}
          loading={"eager"}
          className={"book-card__favorite-book-img"}
        />
      </button>
    </div>
  );
};
