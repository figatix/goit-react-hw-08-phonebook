import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterState(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilterState } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const getFilterState = state => state.filter.filter;
