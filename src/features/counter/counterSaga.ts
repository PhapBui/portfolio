import { delay, put, takeEvery } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { increment, incrementByAmount } from './counterSlice';

// export function* log(action: PayloadAction) {
//   console.log('Log', action);
// }

function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('Waiting 1s');
  // Wait 1s
  yield delay(5000);

  console.log('Waiting done, dispatch action');

  // Dispatch action success
  yield put(incrementByAmount(action.payload));
}

export default function* counterSaga() {
  yield takeEvery(increment.toString(), handleIncrementSaga);
}
