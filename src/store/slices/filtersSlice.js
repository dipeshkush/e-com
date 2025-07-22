import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: 'all',
  priceRange: {
    min: 0,
    max: 200,
  },
  sortBy: 'name',
  searchQuery: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    resetFilters: (state) => {
      state.category = 'all';
      state.priceRange = { min: 0, max: 200 };
      state.sortBy = 'name';
      state.searchQuery = '';
    },
  },
});

export const { setCategory, setPriceRange, setSortBy, setSearchQuery, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
