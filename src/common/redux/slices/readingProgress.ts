import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const readingProgressSlice = createSlice({
  name: "readingProgress",
  initialState: {
    readingProgress: (typeof window !== "undefined")
      ? (Number(localStorage.getItem("savedReadingProgress")) || 0) as number
      : 0 as number
  },
  reducers: {
    incrementReadingProgress: (state) => {
      state.readingProgress += 1;
      if (typeof window !== "undefined") {
        localStorage.setItem("savedReadingProgress", String(state.readingProgress));
      }
    },
    decrementReadingProgress: (state) => {
      if (state.readingProgress > 0) {
        state.readingProgress -= 1;
        if (typeof window !== "undefined") {
          localStorage.setItem("savedReadingProgress", String(state.readingProgress));
        }
      }
    },
    setReadingProgress: (state, action: PayloadAction<number>) => {
      state.readingProgress = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("savedReadingProgress", String(state.readingProgress));
      }
    },
  },
});

export const {
  setReadingProgress,
  incrementReadingProgress,
  decrementReadingProgress,
} = readingProgressSlice.actions;
export default readingProgressSlice.reducer;
