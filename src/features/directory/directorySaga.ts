import { put, takeLatest, call } from '@redux-saga/core/effects';
import { directoryActions } from './directorySlice';
import directoryApi from 'api/directoryApi';
import { Provice, District } from 'models/directory';
import { PayloadAction } from '@reduxjs/toolkit';

function* getAllProvice() {
  try {
    const res: Provice[] = yield call(directoryApi.getAllProvice);
    yield put(directoryActions.getProviceSuccess(res));
  } catch (error) {
    console.log('Failed to fetchProductList: ', error);
    yield put(directoryActions.getDirectoryFailed());
  }
}
function* getDistrictByProviceId(action: PayloadAction<number | string>) {
  try {
    const res: Provice = yield call(directoryApi.getDistrictsByProviceId, action.payload);

    yield put(directoryActions.getDistrictSuccess(res));
  } catch (error) {
    console.log('Failed to fetchProductList: ', error);
    yield put(directoryActions.getDirectoryFailed());
  }
}
function* getWardByDistrictId(action: PayloadAction<number | string>) {
  try {
    const res: District = yield call(directoryApi.getWardsByDistrictId, action.payload);
    yield put(directoryActions.getWardSuccess(res));
  } catch (error) {
    console.log('Failed to fetchProductList: ', error);
    yield put(directoryActions.getDirectoryFailed());
  }
}

export default function* directorySaga() {
  yield takeLatest(directoryActions.getProvice, getAllProvice);
  yield takeLatest(directoryActions.getDistrict, getDistrictByProviceId);
  yield takeLatest(directoryActions.getWard, getWardByDistrictId);
}
