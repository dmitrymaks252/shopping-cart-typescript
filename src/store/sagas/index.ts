import { takeLatest, call, put, all } from "redux-saga/effects";
import { actionTypes } from "../types";
import axios, { AxiosResponse } from "axios";

function* workerSaga() {
  try {
    const response: AxiosResponse = yield call(axios, "https://my-json-server.typicode.com/dmitrymaks252/dmitrymaks252/products");
    console.log(response); //todo: delete before production
    yield put({type: actionTypes.LOAD_PRODUCTS_SUCCESS, payload: response.data});
  } catch (e) {
    alert(e);
    yield put({type: actionTypes.LOAD_PRODUCTS_FAILURE, payload: e});
  }

}

function* watcherSaga() {
  yield takeLatest(actionTypes.LOAD_PRODUCTS, workerSaga);
}

export default function* rootSaga() {
  yield all([watcherSaga()]);
}