import { put, takeLatest } from 'redux-saga/effects';
import { cartActions } from './cartSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
function* addCart(action: PayloadAction<any>) {
  try {
    yield put(cartActions.addToCartSuccess(action.payload));
    toast.success('Successfully! Thanks for order!');
  } catch (error) {
    toast.error('Cannot add to cart please try again!');
    console.log('Failed to addtocart: ', error);
  }
}
function* updateCart(action: PayloadAction<any>) {
  try {
    yield put(cartActions.updateItemQtySuccess(action.payload));
    toast.success('Update successfully!');
  } catch (error) {
    toast.error('Cannot update cart please try again!');
    console.log('Failed to update cart: ', error);
  }
}

export default function* cartSaga() {
  yield takeLatest(cartActions.addToCart, addCart);
  yield takeLatest(cartActions.updateItemQty, updateCart);
}
