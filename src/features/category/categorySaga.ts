import { call, put, takeLatest } from '@redux-saga/core/effects';
import categoryApi from 'api/categoryApi';
import { CategoryDetails } from 'models/product';
import { categoryActions } from './categorySlice';

function* fetchAllCategory() {
  try {
    const res: CategoryDetails[] = yield call(categoryApi.getAllCategory);

    yield put(categoryActions.fetchAllCategorySuccess(res));
  } catch (error) {
    console.log('Failed to fetchProductList: ', error);
    yield put(categoryActions.fetchCategoryListFailed());
  }
}

export default function* categorySaga() {
  yield takeLatest(categoryActions.fetchAllCategory, fetchAllCategory);
}
