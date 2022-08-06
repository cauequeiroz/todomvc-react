import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/reducer";
import { tasksReducer } from "./tasks/reducer";

export const store = configureStore({
  reducer: {
    filter: filtersReducer.reducer,
    tasks: tasksReducer.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
