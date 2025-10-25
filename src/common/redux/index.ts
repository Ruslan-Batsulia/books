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

const rootReducer = combineReducers({
  readingGoal: readingGoalReducer,
  changeTheme: changeThemeReducer,
  favoriteBooks: favoriteBooksReducer,
  readingProgress: readingProgressReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type StoreType = ReturnType<typeof store.getState>;
