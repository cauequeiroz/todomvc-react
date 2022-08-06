import { createSlice } from "@reduxjs/toolkit";

export enum Filters {
  ALL,
  ACTIVE,
  COMPLETED
};

const initialState = {
  current: Filters.ALL
};

export const filtersReducer = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeToAll: state => {
      state.current = Filters.ALL
    },

    changeToActive: state => {
      state.current = Filters.ACTIVE
    },

    changeToCompleted: state => {
      state.current = Filters.COMPLETED
    }
  }
});
