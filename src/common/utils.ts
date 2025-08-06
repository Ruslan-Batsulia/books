import type { Params } from "./types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;

export const makeApi = (name: string) => {
  return createApi({
    reducerPath: name,
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: () => ({}),
    refetchOnMountOrArgChange: false,
  });
};

export const withParams = (path: string) => (params: Params = {}) => {
  const qs = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== "") qs.append(k, v.toString());
  });
  return `${path}?${qs.toString()}`;
};
