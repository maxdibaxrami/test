import { all } from 'redux-saga/effects';
import Auth from './Auth';
import Client from './Client';

export default function* rootSaga(getState) {
  yield all([
    Auth(),
    Client()
  ]);
}
