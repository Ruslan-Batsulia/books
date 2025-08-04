import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const syncToLocalStorage = (books: string[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("favoriteBooks", JSON.stringify(books));
  }
};

const favoriteBooksSlice = createSlice({
  name: "favoriteBooks",
  initialState: {
    favoriteBooks: (typeof window !== "undefined")
      ? JSON.parse(localStorage.getItem("favoriteBooks") as string) || []
      : [] as string[]
  },
  reducers: {
    setFavoriteBooks: (state, action: PayloadAction<string[]>) => {
      state.favoriteBooks = action.payload;
      syncToLocalStorage(state.favoriteBooks);
    },
    addFavoriteBook: (state, action: PayloadAction<string>) => {
      state.favoriteBooks.push(action.payload);
      syncToLocalStorage(state.favoriteBooks);
    },
    removeFavoriteBook: (state, action: PayloadAction<string>) => {
      state.favoriteBooks = state.favoriteBooks.filter((book: string) => book !== action.payload);
      syncToLocalStorage(state.favoriteBooks);
    },
  },
})

export const {
  addFavoriteBook,
  setFavoriteBooks,
  removeFavoriteBook,
} = favoriteBooksSlice.actions;
export default favoriteBooksSlice.reducer;
