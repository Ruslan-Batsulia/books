"use client";

import { useState, useEffect } from "react";

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasMounted(true);
  }, []);
  
  return hasMounted;
};
