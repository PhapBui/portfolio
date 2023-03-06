import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams, PaginationParams } from 'models/common';
import { ProductDetails } from 'models/product';

export interface ProductState {
  loading: boolean;
  list: ProductDetails[];
  filter: ListParams;
  pagination: PaginationParams;
}

const initialState: ProductState = {
  loading: false,
  list: [],
  filter: {
    page: 1,
    limit: 15,
  },
  pagination: {
    page: 1,
    limit: 15,
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    fetchProductList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchProductListSuccess(state, action: PayloadAction<ProductDetails[]>) {
      state.loading = false;

      state.list = action.payload;
    },
    fetchProductListFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const productActions = productSlice.actions;

// Selectors
export const loadingProduct = (state: RootState) => state.products.loading;
export const productFilter = (state: RootState) => state.products.filter;

export const selectProductList = (state: RootState) => state.products.list;

// Reducers
const productReducer = productSlice.reducer;
export default productReducer;
