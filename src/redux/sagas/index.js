import { fork } from 'redux-saga/effects';
import userSaga from './user';
import cateSaga from './category';
import tagSaga from './tag';
import postSaga from './post';

const sagas = [
  ...userSaga,
  ...cateSaga,
  ...tagSaga,
  ...postSaga,
]

export default function* rootSaga() {
  yield sagas.map(saga => fork(saga));
}