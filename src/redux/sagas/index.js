import { fork } from 'redux-saga/effects';
import userSaga from './user';
import cateSaga from './category';

const sagas = [
  ...userSaga,
  ...cateSaga
]

export default function* rootSaga() {
  yield sagas.map(saga => fork(saga));
}