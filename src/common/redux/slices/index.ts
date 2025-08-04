export {
  default as changeThemeReducer,
  setChangeTheme,
} from "./changeThemeSlice";

export {
  default as readingProgressReducer,
  setReadingProgress,
  incrementReadingProgress,
  decrementReadingProgress,
} from "./readingProgress";

export {
  default as readingGoalReducer,
  setReadingGoal,
  incrementReadingGoal,
  decrementReadingGoal,
} from "./readingGoal";

export {
  default as favoriteBooksReducer,
  addFavoriteBook,
  setFavoriteBooks,
  removeFavoriteBook,
} from "./favoriteBooksSlice";
