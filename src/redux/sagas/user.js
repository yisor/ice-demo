import { call, put, take, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from "@/utils/request";
import { user } from '../actions';

function* login(act) {
  try {
    const response = yield call(request, '/api/login', act, 'post');
    yield put(user.loginSuccess(act));
    yield put(push('/'));
    console.log('登录', response);
  } catch (err) {
    console.log('登录失败', err.errorMsg)
  }
}

function* watchLogin() {
  while (true) {
    const actions = yield take(user.LOGIN);
    yield call(login, actions.payload);
  }
}

export default function* root() {
  yield fork(watchLogin);
}
