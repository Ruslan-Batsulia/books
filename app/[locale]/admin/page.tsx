"use client";

import { Provider } from "react-redux";
import { store } from "@/src/common/redux";
import { AdminPage, Footer, Header } from "@/src/components";
import { useHasMounted } from "@/src/common/hooks/useHasMounted";

export default function Admin() {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <Provider store={store}>
      <Header />
      <AdminPage />
      <Footer />
    </Provider>
  );
};
