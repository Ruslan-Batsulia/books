import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  readingGoalReducer,
  changeThemeReducer,
  favoriteBooksReducer,
  readingProgressReducer,
} from "./slices";
import {
  getTagsQuery,
  getBooksQuery,
  getSubjectsQuery,
  getLanguagesQuery,
  getLocationsQuery,
  getPublishersQuery,
  getSubsubjectsQuery,
  getContributorsQuery,
  getContributorRolesQuery,
} from "@/src/common/api";

const rootReducer = combineReducers({
  readingGoal: readingGoalReducer,
  changeTheme: changeThemeReducer,
  favoriteBooks: favoriteBooksReducer,
  readingProgress: readingProgressReducer,

  [getTagsQuery.reducerPath]: getTagsQuery.reducer,
  [getBooksQuery.reducerPath]: getBooksQuery.reducer,
  [getSubjectsQuery.reducerPath]: getSubjectsQuery.reducer,
  [getLanguagesQuery.reducerPath]: getLanguagesQuery.reducer,
  [getLocationsQuery.reducerPath]: getLocationsQuery.reducer,
  [getPublishersQuery.reducerPath]: getPublishersQuery.reducer,
  [getSubsubjectsQuery.reducerPath]: getSubsubjectsQuery.reducer,
  [getContributorsQuery.reducerPath]: getContributorsQuery.reducer,
  [getContributorRolesQuery.reducerPath]: getContributorRolesQuery.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      getTagsQuery.middleware,
      getBooksQuery.middleware,
      getSubjectsQuery.middleware,
      getLanguagesQuery.middleware,
      getLocationsQuery.middleware,
      getPublishersQuery.middleware,
      getSubsubjectsQuery.middleware,
      getContributorsQuery.middleware,
      getContributorRolesQuery.middleware
    ),
});

export type StoreType = ReturnType<typeof store.getState>;
