"use client";

import { Provider } from "react-redux";
import { store } from "@/src/common/redux";
import { useParams } from "next/navigation";
import { Footer, Header } from "@/src/components";
import { useHasMounted } from "@/src/common/hooks/useHasMounted";

export default function Book() {
  const params = useParams<{ id: string }>();
  const id = params.id;
  const hasMounted = useHasMounted();

  if (!hasMounted || !id) return null;

  return (
    <Provider store={store}>
      <Header />
      {id}
      <Footer />
    </Provider>
  );
};
