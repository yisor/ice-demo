import { fork } from 'redux-saga/effects';
import userSaga from './user';
import cateSaga from './category';
import tagSaga from './tag';

const sagas = [
  ...userSaga,
  ...cateSaga,
  ...tagSaga,
]

export default function* rootSaga() {
  yield sagas.map(saga => fork(saga));
}