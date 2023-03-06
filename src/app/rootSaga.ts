import { authSaga } from 'features/auth/authSaga';
import counterSaga from 'features/counter/counterSaga';
import productSaga from 'features/Products/productSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([counterSaga(), productSaga(), authSaga()]);
}
