"use client";

import AddBook from "./AddBook/AddBook";

import "./AdminPage.scss";

export default function AdminPage() {
  return (
    <main className={"admin-page"}>
      <div className="container">
        <AddBook />
      </div>
    </main>
  );
};
