import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams } from 'models/common';
import { CategoryDetails } from 'models/product';

export interface CategoryState {
  loading: boolean;
  list: CategoryDetails[];
}

const initialState: CategoryState = {
  loading: false,
  list: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    fetchAllCategory(state) {
      state.loading = true;
    },
    fetchAllCategorySuccess(state, action: PayloadAction<CategoryDetails[]>) {
      state.loading = false;

      state.list = action.payload;
    },

    fetchGroupCategory(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchGroupCategorySuccess(state, action: PayloadAction<CategoryDetails[]>) {
      state.loading = false;

      state.list = action.payload;
    },

    fetchCategoryListFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const categoryActions = categorySlice.actions;

// Selectors
export const loadingCategory = (state: RootState) => state.category.loading;

export const selectCategoryList = (state: RootState) => state.category.list;

// Reducers
const categoryReducer = categorySlice.reducer;
export default categoryReducer;
