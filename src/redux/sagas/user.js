import { call, put, take, fork } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from "@/utils/request";
import { user } from '../actions';
import { setAuthority } from '@/utils/authority';

function* login(act) {
  try {
    const response = yield call(request, '/api/login', act, 'post');
    console.log('登录', response);
    yield put(user.loginSuccess(response.data));
    yield call(setAuthority, response.data);
    yield put(push('/'));
  } catch (err) {
    console.log('登录失败', err.errorMsg)
  }
}

function* fetchUsers(payload) {
  try {
    const response = yield call(request, '/api/user/list');
    console.log('查询用户：', response);
    yield put(user.fetchUserListSuccess(response.data));
  } catch (err) {
    console.log('查询失败', err.errorMsg)
  }
}

function* watchLogin() {
  while (true) {
    const actions = yield take(user.LOGIN);
    yield call(login, actions.payload);
  }
}

function* watchFetchUsers() {
  while (true) {
    const actions = yield take(user.FETCH_USERLIST);
    yield call(fetchUsers, actions.payload);
  }
}

const sagas = [
  watchLogin,
  watchFetchUsers
]

export default sagas;

