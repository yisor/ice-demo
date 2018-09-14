import { call, put, take, fork } from 'redux-saga/effects';
import request from "@/utils/request";
import { category } from '../actions';

function* fetchCateList(payload) {
  try {
    const response = yield call(request, '/api/category/list');
    console.log('查询分类：', response);
    yield put(category.fetchCateListSuccess(response.data));
  } catch (err) {
    console.log('查询失败', err.errorMsg)
  }
}

function* createCate(category) {
  try {
    const response = yield call(request, '/api/category', category, 'post');
    console.log('新建分类', response);
  } catch (err) {
    console.log('新建失败', err.errorMsg)
  }
}

function* watchFetchCates() {
  while (true) {
    const actions = yield take(category.FETCH_CATELIST);
    yield call(fetchCateList, actions.payload);
  }
}

function* watchCreateCate() {
  while (true) {
    const actions = yield take(category.CREATE_CATE);
    yield call(createCate, actions.payload);
  }
}

const sagas = [
  watchFetchCates,
  watchCreateCate
]

export default sagas;

