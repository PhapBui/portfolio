import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams, PaginationParams } from 'models/common';
import { ProductDetails } from 'models/product';

export interface ProductState {
  loading: boolean;
  list: ProductDetails[];
  searchList: ProductDetails[];
  hotDealList: ProductDetails[];
  galleyList: ProductDetails[];
  product: ProductDetails;
  filter: ListParams;
  pagination: PaginationParams;
  error: any;
}

const initialState: ProductState = {
  loading: false,
  list: [],
  galleyList: [],

  searchList: [],
  hotDealList: [],

  product: {
    id: 0,
    price: 0,
    quantity: 0,
    discount: 0,
    currentPrice: 0,
    name: '',
    thumbnailUrl: '',
  },
  filter: {
    page: 1,
    limit: 10,
    sortBy: 'createdAt',
    order: 'asc',
  },
  pagination: {
    page: 1,
    limit: 10,
    count: 1,
  },
  error: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState: initialState,
  reducers: {
    fetchAllProduct(state) {
      state.loading = true;
    },
    fetchAllProductSuccess(state, action: PayloadAction<ProductDetails[]>) {
      state.loading = false;

      state.list = action.payload;
      state.pagination.count = Math.ceil(action.payload.length / 10);
    },

    fetchHotDeal(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchHotDealSuccess(state, action: PayloadAction<ProductDetails[]>) {
      state.loading = false;

      state.hotDealList = action.payload;
    },

    fetchGalley(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchGalleySuccess(state, action: PayloadAction<ProductDetails[]>) {
      state.loading = false;

      state.galleyList = action.payload;
    },

    fetchProductListFailed(state) {
      state.loading = false;
    },

    fetchSingleProduct(state, action: PayloadAction<string | number>) {
      state.loading = true;
    },
    fetchSingleProductSuccess(state, action: PayloadAction<ProductDetails>) {
      state.loading = false;
      state.product = action.payload;
    },

    searchProductByName(state, action: PayloadAction<string>) {
      state.loading = true;
    },
    searchProductByNameSuccess(state, action: PayloadAction<ProductDetails[]>) {
      state.loading = false;
      state.searchList = action.payload;
    },

    setFilter(state, action) {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
});

// Actions
export const productActions = productSlice.actions;

// Selectors
export const loadingProduct = (state: RootState) => state.products.loading;
export const productFilter = (state: RootState) => state.products.filter;

export const selectProductList = (state: RootState) => state.products.list;
export const selectHotdeal = (state: RootState) => state.products.hotDealList;
export const selectGalleyList = (state: RootState) => state.products.galleyList;

export const selectProduct = (state: RootState) => state.products.product;
export const searchList = (state: RootState) => state.products.searchList;

export const selectPagination = (state: RootState) => state.products.pagination;

// Reducers
const productReducer = productSlice.reducer;
export default productReducer;
