import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
import { GET_CLIENT, GET_CLIENT_SUCCESS, GET_CLIENT_FAILURE } from '../constants/Client';
import axios from 'axios';

const getClientApi = () => {
  console.log("dsadsa")
  return axios.get('https://jsonplaceholder.typicode.com/users');
}
function* fetchClientList() {

  try {
    const response = yield call(getClientApi);
    console.log("22222")
    yield put({ type: GET_CLIENT_SUCCESS, payload: response.data });
  } catch (error) {
    console.error("Error fetching client data:", error);
    yield put({ type: GET_CLIENT_FAILURE, error: error.message || 'Failed to fetch data' });
  }
}

export function* watchGetClient() {
  yield takeEvery(GET_CLIENT, fetchClientList);
}

export default function* rootSaga() {
  yield all([fork(watchGetClient)]);
}
