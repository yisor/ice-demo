import { call, put, take, fork } from 'redux-saga/effects';
import request from "@/utils/request";
import { tag } from '../actions';

function* fetchTagList(payload) {
  try {
    const response = yield call(request, '/api/tag/list');
    console.log('查询标签：', response);
    yield put(tag.fetchTagListSuccess(response.data));
  } catch (err) {
    console.log('查询失败', err.errorMsg)
  }
}

function* createTag(tag) {
  try {
    const response = yield call(request, '/api/tag', tag, 'post');
    console.log('新建标签', response);
  } catch (err) {
    console.log('新建失败', err.errorMsg)
  }
}

function* deleteTag(tag) {
  try {
    const response = yield call(request, '/api/tag', tag, 'post');
    console.log('删除标签', response);
  } catch (err) {
    console.log('删除失败', err.errorMsg)
  }
}

function* editTag(tag) {
  try {
    const response = yield call(request, '/api/tag', tag, 'post');
    console.log('编辑标签', response);
  } catch (err) {
    console.log('编辑失败', err.errorMsg)
  }
}

function* watchFetchTags() {
  while (true) {
    const actions = yield take(tag.FETCH_TAGLIST);
    yield call(fetchTagList, actions.payload);
  }
}

function* watchCreateTag() {
  while (true) {
    const actions = yield take(tag.CREATE_TAG);
    yield call(createTag, actions.payload);
  }
}

function* watchDeleteTag() {
  while (true) {
    const actions = yield take(tag.DELETE_TAG);
    yield call(deleteTag, actions.payload);
  }
}


function* watchEditTag() {
  while (true) {
    const actions = yield take(tag.EDIT_TAG);
    yield call(editTag, actions.payload);
  }
}

const sagas = [
  watchFetchTags,
  watchCreateTag,
  watchDeleteTag,
  watchEditTag
]

export default sagas;

