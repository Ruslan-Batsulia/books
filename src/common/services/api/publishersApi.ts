import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;

import type {
  Params,
  // Publisher,
  PublisherResponse,
  PublishersResponse,
} from "../../types";

export const publishersApi = createApi({
  reducerPath: "publishersApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["PublishersList", "Publisher"],
  endpoints: (builder) => ({
    getPublishers: builder.query<PublishersResponse, Params>({
      query: (params) => {
        const qs = new URLSearchParams();
        Object.entries(params).forEach(
          ([k, v]) => v != null && qs.append(k, v.toString())
        );
        return `/publishers?${qs.toString()}`;
      },
      providesTags: ["PublishersList"],
    }),
    getPublisher: builder.query<PublisherResponse, string>({
      query: (id) => `/publishers/${id}`,
      providesTags: (result, error, id) => [{ type: "Publisher", id }],
    }),
    // addPublisher: builder.mutation<PublisherResponse, Partial<Publisher>>({
    //   query: (newPublisher) => ({
    //     url: "/publishers",
    //     method: "POST",
    //     body: newPublisher,
    //   }),
    //   invalidatesTags: ["PublishersList"],
    // }),
    // updatePublisher: builder.mutation<PublisherResponse, { id: string; data: Partial<Publisher> }>({
    //   query: ({ id, data }) => ({
    //     url: `/publishers/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: (result, error, { id }) => [
    //     "PublishersList",
    //     { type: "Publisher" as const, id },
    //   ],
    // }),
    // deletePublisher: builder.mutation<{ message: string }, string>({
    //   query: (id) => ({
    //     url: `/publishers/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["PublishersList"],
    // }),
  }),
});

export const {
  useGetPublishersQuery,
  useGetPublisherQuery,
  // useAddPublisherMutation,
  // useUpdatePublisherMutation,
  // useDeletePublisherMutation,
} = publishersApi;
