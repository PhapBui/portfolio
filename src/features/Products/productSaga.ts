import { call, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import productApi from 'api/productApi';
import { ListParams } from 'models/common';
import { ProductDetails } from 'models/product';
import { productActions } from './productSlice';

function* fetchStudentList(action: PayloadAction<ListParams>) {
  try {
    const res: ProductDetails[] = yield call(productApi.getAll, action.payload);

    yield put(productActions.fetchProductListSuccess(res));
  } catch (error) {
    console.log('Failed to fetchStudentList: ', error);
    yield put(productActions.fetchProductListFailed());
  }
}

export default function* productSaga() {
  yield takeLatest(productActions.fetchProductList, fetchStudentList);
}
