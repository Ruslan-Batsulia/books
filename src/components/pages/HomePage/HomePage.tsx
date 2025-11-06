import { BookList } from "../../common";
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
