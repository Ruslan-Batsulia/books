"use client";

import { Provider } from "react-redux";
import { store } from "@/src/common/redux";
import { Main } from "@/src/components";
import { useHasMounted } from "@/src/common/hooks/useHasMounted";

export default function Home() {
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <>
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  );
};
