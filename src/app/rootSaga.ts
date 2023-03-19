import { authSaga } from 'features/auth/authSaga';
import cartSaga from 'features/cart/cartSaga';
import categorySaga from 'features/category/categorySaga';
import counterSaga from 'features/counter/counterSaga';
import directorySaga from 'features/directory/directorySaga';
import productSaga from 'features/product/productSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    counterSaga(),
    productSaga(),
    authSaga(),
    categorySaga(),
    cartSaga(),
    directorySaga(),
  ]);
}
