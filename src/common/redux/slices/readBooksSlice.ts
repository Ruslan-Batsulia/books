import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const syncToLocalStorage = (books: string[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("readBooks", JSON.stringify(books));
  }
};

const readBooksSlice = createSlice({
  name: "readBooks",
  initialState: {
    readBooks: (typeof window !== "undefined")
      ? JSON.parse(localStorage.getItem("readBooks") as string) || []
      : [] as string[]
  },
  reducers: {
    setReadBooks: (state, action: PayloadAction<string[]>) => {
      state.readBooks = action.payload;
      syncToLocalStorage(state.readBooks);
    },
    addReadBook: (state, action: PayloadAction<string>) => {
      state.readBooks.push(action.payload);
      syncToLocalStorage(state.readBooks);
    },
    removeReadBook: (state, action: PayloadAction<string>) => {
      state.readBooks = state.readBooks.filter((book: string) => book !== action.payload);
      syncToLocalStorage(state.readBooks);
    },
  },
});

export const {
  addReadBook,
  setReadBooks,
  removeReadBook,
} = readBooksSlice.actions;
export default readBooksSlice.reducer;
