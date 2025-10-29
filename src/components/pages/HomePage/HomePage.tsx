import { BookCard, BookList } from "../../common";

import IconNone from "@/public/images/avatar_book.png";

import "./HomePage.scss";

export default function HomePage() {
  return (
    <main className={"home-page"}>
      <div className={"container"}>
        <BookList />
      </div>
    </main>
  );
};
