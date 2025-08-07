import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;
import type {
  Params,
  Location,
  LocationResponse,
  LocationsResponse,
} from "../../types";

export const locationsApi = createApi({
  reducerPath: "locationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["LocationsList", "Location"],
  endpoints: (builder) => ({
    getLocations: builder.query<LocationsResponse, Params>({
      query: (params) => {
        const qs = new URLSearchParams();
        Object.entries(params).forEach(
          ([k, v]) => v != null && qs.append(k, v.toString())
        );
        return `/locations?${qs.toString()}`;
      },
      providesTags: ["LocationsList"],
    }),
    getLocation: builder.query<LocationResponse, string>({
      query: (id) => `/locations/${id}`,
      providesTags: (result, error, id) => [{ type: "Location", id }],
    }),
    addLocation: builder.mutation<LocationResponse, Partial<Location>>({
      query: (newLocation) => ({
        url: "/locations",
        method: "POST",
        body: newLocation,
      }),
      invalidatesTags: ["LocationsList"],
    }),
    updateLocation: builder.mutation<LocationResponse, { id: string; data: Partial<Location> }>({
      query: ({ id, data }) => ({
        url: `/locations/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        "LocationsList",
        { type: "Location" as const, id },
      ],
    }),
    deleteLocation: builder.mutation<{ message: string }, string>({
      query: (id) => ({
        url: `/locations/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["LocationsList"],
    }),
  }),
});

export const {
  useGetLocationsQuery,
  useGetLocationQuery,
  useAddLocationMutation,
  useUpdateLocationMutation,
  useDeleteLocationMutation,
} = locationsApi;
