import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { call, delay, fork, put, take } from 'redux-saga/effects';
import { authAction, LoginPayLoad } from './authSlice';

function* handleLogin(payload: LoginPayLoad) {
  try {
    yield delay(600);
    localStorage.setItem('access_token', 'fake_token');
    yield put(
      authAction.loginSuccess({
        id: 1,
        name: 'Phap',
        email: 'bvphap.tk@gmail.com',
        photoUrl: '',
      })
    );
    yield put(push('/admin/dashboard'));
  } catch (error: any) {
    yield put(authAction.loginFailed(error.message));
  }
}
function* handleLogout() {
  yield delay(500);
  localStorage.removeItem('access_token');
  console.log('Handle logout: ');
  yield put(push('/login'));
}
function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayLoad> = yield take(authAction.login.type);
      yield fork(handleLogin, action.payload);
    }

    yield take(authAction.logout.type);
    yield call(handleLogout);
  }
}

export function* authSaga() {
  yield fork(watchLoginFlow);
}
