"use client";

import { Link } from "@/i18n/navigation";

import "./AdminPage.scss";

export default function AdminPage() {
  return (
    <main className={"admin-page"}>
      <div className="container">
        <div className={"admin-page__link-container"}>
          <Link
            href={"/admin/add-book"}
            className={"admin-page__link"}
          >
              {"Додати книгу"}
          </Link>
        </div>
      </div>
    </main>
  );
};
