"use client";

import { Provider } from "react-redux";
import { store } from "@/src/common/redux";
import { HomePage } from "@/src/components/pages";
import { Footer, Header } from "@/src/components/common";
import { useHasMounted } from "@/src/common/hooks/useHasMounted";

export default function Home() {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <Provider store={store}>
      <Header />
      <HomePage />
      <Footer />
    </Provider>
  );
}
