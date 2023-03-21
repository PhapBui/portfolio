import { call, debounce, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import productApi from 'api/productApi';
import { ListParams } from 'models/common';
import { ProductDetails } from 'models/product';
import { productActions } from './productSlice';

function* fetchAllProduct() {
  try {
    const res: ProductDetails[] = yield call(productApi.getAll);

    yield put(productActions.fetchAllProductSuccess(res));
  } catch (error) {
    console.log('Failed to fetchProductList: ', error);
    yield put(productActions.fetchProductListFailed());
  }
}
function* fetchHotDeal(action: PayloadAction<ListParams>) {
  try {
    const res: ProductDetails[] = yield call(productApi.getGroupProduct, action.payload);

    yield put(productActions.fetchHotDealSuccess(res));
  } catch (error) {
    console.log('Failed to fetchProductList: ', error);
    yield put(productActions.fetchProductListFailed());
  }
}
function* fetchGalley(action: PayloadAction<ListParams>) {
  try {
    const res: ProductDetails[] = yield call(productApi.getGroupProduct, action.payload);

    yield put(productActions.fetchGalleySuccess(res));
  } catch (error) {
    console.log('Failed to fetchProductList: ', error);
    yield put(productActions.fetchProductListFailed());
  }
}
function* fetchSingleProduct(action: PayloadAction<string | number>) {
  try {
    const res: ProductDetails = yield call(productApi.getById, action.payload);

    yield put(productActions.fetchSingleProductSuccess(res));
  } catch (error) {
    console.log('Failed to fetchProductList: ', error);
    yield put(productActions.fetchProductListFailed());
  }
}
function* searchProduct(action: PayloadAction<string>) {
  try {
    const res: ProductDetails[] = yield call(productApi.searchProductByName, action.payload);

    yield put(productActions.searchProductByNameSuccess(res));
  } catch (error) {
    console.log('Failed to fetchProductList: ', error);
    yield put(productActions.fetchProductListFailed());
  }
}

export default function* productSaga() {
  yield takeLatest(productActions.fetchAllProduct, fetchAllProduct);
  yield takeLatest(productActions.fetchHotDeal, fetchHotDeal);
  yield takeLatest(productActions.fetchGalley, fetchGalley);
  yield takeLatest(productActions.fetchSingleProduct, fetchSingleProduct);
  yield debounce(500, productActions.searchProductByName, searchProduct);
}
