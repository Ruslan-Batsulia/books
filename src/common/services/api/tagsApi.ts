import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;

import type {
  // Tag,
  Params,
  TagResponse,
  TagsResponse,
} from "../../types";

export const tagsApi = createApi({
  reducerPath: "tagsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["TagsList", "Tag"],
  endpoints: (builder) => ({
    getTags: builder.query<TagsResponse, Params>({
      query: (params) => {
        const qs = new URLSearchParams();
        Object.entries(params).forEach(
          ([k, v]) => v != null && qs.append(k, v.toString())
        );
        return `/tags?${qs.toString()}`;
      },
      providesTags: ["TagsList"],
    }),
    getTag: builder.query<TagResponse, string>({
      query: (id) => `/tags/${id}`,
      providesTags: (result, error, id) => [{ type: "Tag", id }],
    }),
    // addTag: builder.mutation<TagResponse, Partial<Tag>>({
    //   query: (newTag) => ({
    //     url: "/tags",
    //     method: "POST",
    //     body: newTag,
    //   }),
    //   invalidatesTags: ["TagsList"],
    // }),
    // updateTag: builder.mutation<TagResponse, { id: string; data: Partial<Tag> }>({
    //   query: ({ id, data }) => ({
    //     url: `/tags/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: (result, error, { id }) => [
    //     "TagsList",
    //     { type: "Tag" as const, id },
    //   ],
    // }),
    // deleteTag: builder.mutation<{ message: string }, string>({
    //   query: (id) => ({
    //     url: `/tags/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["TagsList"],
    // }),
  }),
});

export const {
  useGetTagsQuery,
  useGetTagQuery,
  // useAddTagMutation,
  // useUpdateTagMutation,
  // useDeleteTagMutation,
} = tagsApi;
