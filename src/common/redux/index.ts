import { configureStore } from "@reduxjs/toolkit";

import changeThemeReducer, {
  setChangeTheme,
} from "./slices/changeThemeSlice";

import readingProgressReducer, {
  setReadingProgress,
  incrementReadingProgress,
  decrementReadingProgress,
} from "./slices/readingProgress";

import readingGoalReducer, {
  setReadingGoal,
  incrementReadingGoal,
  decrementReadingGoal,
} from "./slices/readingGoal";

import {
  getBooksQuery,
} from "@/src/common/api";

const store = configureStore({
  reducer: {
    readingGoal: readingGoalReducer,
    changeTheme: changeThemeReducer,
    readingProgress: readingProgressReducer,
    
    [getBooksQuery.reducerPath]: getBooksQuery.reducer,
  },
  middleware: (
    getDefaultMiddleware
  ) => getDefaultMiddleware().concat(
    getBooksQuery.middleware
  ),
});

export type StoreType = ReturnType<typeof store.getState>;

export {
  store,
  setChangeTheme,
  setReadingGoal,
  setReadingProgress,
  incrementReadingGoal,
  decrementReadingGoal,
  incrementReadingProgress,
  decrementReadingProgress,
};
