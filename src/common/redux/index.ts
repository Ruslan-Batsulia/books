import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  readBooksReducer,
  readingGoalReducer,
  changeThemeReducer,
  favoriteBooksReducer,
  readingProgressReducer,
} from "./slices";
import {
  booksApi,
} from "../services";

const rootReducer = combineReducers({
  readBooks: readBooksReducer,
  readingGoal: readingGoalReducer,
  changeTheme: changeThemeReducer,
  favoriteBooks: favoriteBooksReducer,
  readingProgress: readingProgressReducer,

  [booksApi.reducerPath]: booksApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      booksApi.middleware,
    )
  }
});

export type StoreType = ReturnType<typeof store.getState>;
