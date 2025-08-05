"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";

import IconNone from "@/public/images/avatar_book.png";

import "./BookCard.scss";

type BookCardProps = {
  icon?: string | undefined;
  title?: string | undefined;
  author?: string[] | undefined;
  bookId?: string | undefined;
};

export default function BookCard({
  icon,
  title,
  author,
  bookId,
}: BookCardProps) {
  return (
    <>
      <div className={"book-card"}>
        <div className={"book-card__wrapper"}>
          <Link
            className={"book-card__icon-container"}
            href={"/book/" + (bookId)}
          >
            {(icon) ? (
              <Image
                src={icon === "IconNone" ? IconNone : icon }
                alt={"Icon Book"}
                className={"book-card__icon"}
                fill={true}
                sizes={"100px"}
                priority={true}
              />
            ) : (
              <div className={"book-card__icon-skeleton-container skeleton-container"}>
                <div className={"book-card__icon-skeleton skeleton"} />
              </div>
            )}
          </Link>

          <div className={"book-card__info-container"}>
            {(title) ? (
              <span className={"book-card__info-title"}>
                {title}
              </span>
            ) : (
              <div className={"book-card__info-title-skeleton-container skeleton-container"}>
                <div className={"book-card__info-title-skeleton skeleton"} />
              </div>
            )}
            
            {(author) ? (
              <ul className={"book-card__info-author-list"}>
                {author.map((name, i) => {
                  return (
                    <li key={i} className={"book-card__info-author"}>
                      {name}
                    </li>
                  )
                })}
              </ul>
            ) : (
              <div className={"book-card__info-author-skeleton-container skeleton-container"}>
                <div className={"book-card__info-author-skeleton skeleton"} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
