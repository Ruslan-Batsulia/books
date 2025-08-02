import { configureStore } from "@reduxjs/toolkit";

import changeThemeReducer, {
  setChangeTheme,
} from "./slices/changeThemeSlice";

const store = configureStore({
  reducer: {
    changeTheme: changeThemeReducer,
  },
});

export type StoreType = ReturnType<typeof store.getState>;

export {
  store,
  setChangeTheme,
};
