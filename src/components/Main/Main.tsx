"use client";

import Image from "next/image";
import { Book } from "@/src/common/types";
import { useGetBooksQuery } from "@/src/common/api";

import "./Main.scss";

export default function Main() {
  const { data, error, isLoading } = useGetBooksQuery({ limit: 10, offset: 0 });

  const books: Book[] | undefined = data?.data;
  const book_cover: string | null = books ? books[0]?.cover_url ?? null : null;

  if (isLoading) return <p>📚 Завантаження книг...</p>;
  if (error) return <p>❌ Помилка при завантаженні</p>;

  return (
    <main className={"main"}>
      <div className={"container"}>
        <Image src={book_cover || ""} alt="" width={180} height={254} />
        {"Two-minute Garfield stories"}
        <pre>
          {JSON.stringify(books, null, 2)}
        </pre>
      </div>
    </main>
  );
};
