import { configureStore } from "@reduxjs/toolkit";

import {
  readingGoalReducer,
  changeThemeReducer,
  favoriteBooksReducer,
  readingProgressReducer,
} from "./slices";

import {
  getBooksQuery,
  getContributorRolesQuery,
  getContributorsQuery,
} from "@/src/common/api";

const store = configureStore({
  reducer: {
    readingGoal: readingGoalReducer,
    changeTheme: changeThemeReducer,
    readingProgress: readingProgressReducer,
    favoriteBooks: favoriteBooksReducer,
    
    [getBooksQuery.reducerPath]: getBooksQuery.reducer,
    [getContributorRolesQuery.reducerPath]: getContributorRolesQuery.reducer,
    [getContributorsQuery.reducerPath]: getContributorsQuery.reducer,
  },
  middleware: (
    getDefaultMiddleware
  ) => getDefaultMiddleware().concat(
    getBooksQuery.middleware,
    getContributorRolesQuery.middleware,
    getContributorsQuery.middleware,
  ),
});

export type StoreType = ReturnType<typeof store.getState>;

export { store };
