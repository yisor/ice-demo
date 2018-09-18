import { call, put, take, fork } from 'redux-saga/effects';
import request from "@/utils/request";
import { post } from '../actions';

function* fetchPostList(payload) {
  try {
    const response = yield call(request, '/api/post/list');
    console.log('查询文章：', response);
    yield put(post.fetchPostListSuccess(response.data));
  } catch (err) {
    console.log('查询失败', err.errorMsg)
  }
}

function* createPost(post) {
  try {
    const response = yield call(request, '/api/post', post, 'post');
    console.log('新建文章', response);
  } catch (err) {
    console.log('新建失败', err.errorMsg)
  }
}

function* deletePost(post) {
  try {
    const response = yield call(request, '/api/post', post, 'post');
    console.log('删除文章', response);
  } catch (err) {
    console.log('删除失败', err.errorMsg)
  }
}

function* editPost(post) {
  try {
    const response = yield call(request, '/api/post', post, 'post');
    console.log('编辑文章', response);
  } catch (err) {
    console.log('编辑失败', err.errorMsg)
  }
}

function* watchFetchPost() {
  while (true) {
    const actions = yield take(post.FETCH_POSTLIST);
    yield call(fetchPostList, actions.payload);
  }
}

function* watchCreatePost() {
  while (true) {
    const actions = yield take(post.CREATE_POST);
    yield call(createPost, actions.payload);
  }
}

function* watchDeletePost() {
  while (true) {
    const actions = yield take(post.DELETE_POST);
    yield call(deletePost, actions.payload);
  }
}


function* watchEditPost() {
  while (true) {
    const actions = yield take(post.EDIT_POST);
    yield call(editPost, actions.payload);
  }
}

const sagas = [
  watchFetchPost,
  watchCreatePost,
  watchDeletePost,
  watchEditPost
]

export default sagas;

