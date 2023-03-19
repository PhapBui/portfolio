import { put, takeLatest } from 'redux-saga/effects';
import { cartActions } from './cartSlice';
import { PayloadAction } from '@reduxjs/toolkit';

function* addCart(action: PayloadAction<any>) {
  try {
    yield put(cartActions.addToCartSuccess(action.payload));
  } catch (error) {
    console.log('Failed to addtocart: ', error);
  }
}
function* updateCart(action: PayloadAction<any>) {
  try {
    yield put(cartActions.updateItemQtySuccess(action.payload));
  } catch (error) {
    console.log('Failed to addtocart: ', error);
  }
}

export default function* cartSaga() {
  yield takeLatest(cartActions.addToCart, addCart);
  yield takeLatest(cartActions.updateItemQty, updateCart);
}
