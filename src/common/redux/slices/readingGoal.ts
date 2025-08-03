import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const readingGoalSlice = createSlice({
  name: "readingGoal",
  initialState: {
    readingGoal: (typeof window !== "undefined")
      ? (Number(localStorage.getItem("savedReadingGoal")) || 10) as number
      : 10 as number
  },
  reducers: {
    incrementReadingGoal: (state) => {
      state.readingGoal += 1;
      if (typeof window !== "undefined") {
        localStorage.setItem("savedReadingGoal", String(state.readingGoal));
      }
    },
    decrementReadingGoal: (state) => {
      if (state.readingGoal > 0) {
        state.readingGoal -= 1;
        if (typeof window !== "undefined") {
          localStorage.setItem("savedReadingGoal", String(state.readingGoal));
        }
      }
    },
    setReadingGoal: (state, action: PayloadAction<number>) => {
      state.readingGoal = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("savedReadingGoal", String(state.readingGoal));
      }
    },
  },
});

export const {
  setReadingGoal,
  incrementReadingGoal,
  decrementReadingGoal,
} = readingGoalSlice.actions;
export default readingGoalSlice.reducer;
