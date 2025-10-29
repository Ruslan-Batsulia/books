import "./BookPage.scss";

type BookPageProps = {
  id: string;
};

export default function BookPage({ id }: BookPageProps) {
  return (
    <main className={"book-page"}>
      <div className={"container"}>
        {"Book ID: " + id}
      </div>
    </main>
  );
};
