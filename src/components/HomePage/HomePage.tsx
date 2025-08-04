import BooksList from "./BooksList/BooksList";

import "./HomePage.scss";

export default function HomePage() {
  return (
    <main className={"home-page"}>
      <div className="container">
        <BooksList />
      </div>
    </main>
  );
};
