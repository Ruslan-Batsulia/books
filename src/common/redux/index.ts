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
  tagsApi,
  booksApi,
  subjectsApi,
  languagesApi,
  locationsApi,
  publishersApi,
  subsubjectsApi,
  contributorsApi,
  contributorRolesApi,
} from "../services";

const rootReducer = combineReducers({
  readingGoal: readingGoalReducer,
  changeTheme: changeThemeReducer,
  favoriteBooks: favoriteBooksReducer,
  readingProgress: readingProgressReducer,

  [tagsApi.reducerPath]: tagsApi.reducer,
  [booksApi.reducerPath]: booksApi.reducer,
  [subjectsApi.reducerPath]: subjectsApi.reducer,
  [languagesApi.reducerPath]: languagesApi.reducer,
  [locationsApi.reducerPath]: locationsApi.reducer,
  [publishersApi.reducerPath]: publishersApi.reducer,
  [subsubjectsApi.reducerPath]: subsubjectsApi.reducer,
  [contributorsApi.reducerPath]: contributorsApi.reducer,
  [contributorRolesApi.reducerPath]: contributorRolesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      booksApi.middleware,
      tagsApi.middleware,
      subjectsApi.middleware,
      languagesApi.middleware,
      locationsApi.middleware,
      publishersApi.middleware,
      subsubjectsApi.middleware,
      contributorsApi.middleware,
      contributorRolesApi.middleware
    ),
});

export type StoreType = ReturnType<typeof store.getState>;
