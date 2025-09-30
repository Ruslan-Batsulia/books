"use client";

import { Provider } from "react-redux";
import { store } from "@/src/common/redux";
import { AddBook, Footer, Header } from "@/src/components";
import { useHasMounted } from "@/src/common/hooks/useHasMounted";
import { notFound } from "next/navigation";

export default function Admin() {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;
  notFound();

  return (
    <Provider store={store}>
      <Header />
      <AddBook />
      <Footer />
    </Provider>
  );
};
