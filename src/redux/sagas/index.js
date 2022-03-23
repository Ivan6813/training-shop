import {takeEvery, call, put} from "redux-saga/effects";
import {API} from "../../api";
import {ACTION_TYPES} from "../../constants/action-types";
import {setProducts, errorRequest} from "../actions";
import axios from "axios";

export default function* rootSaga() {
    yield productsRequestWatcher();
}

export function* productsRequestWatcher() {
    yield takeEvery(ACTION_TYPES.GET_PRODUCTS, productsRequestWorker);
}

  export function* productsRequestWorker() {
    try {
      const {data} = yield call(axios.get, API.products);
      yield put(setProducts(data));
    } catch (err) {
      yield put(errorRequest());
    }
  }

  