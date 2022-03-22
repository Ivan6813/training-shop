import {takeEvery, call, put} from "redux-saga/effects";
import {getProduct, getProductsCategory, API} from "../../api";
import { ACTION_TYPES } from "../../constants/action-types";
import { setAllProducts, setProduct, errorRequest, setProductsCategory } from "../actions";
import axios from "axios";

export default function* rootSaga() {
    yield productsRequestWatcher();
}

export function* productsRequestWatcher() {
    yield takeEvery(ACTION_TYPES.GET_PRODUCTS, productsRequestWorker);
    yield takeEvery(ACTION_TYPES.GET_PRODUCT, productRequestWorker);
    yield takeEvery(ACTION_TYPES.GET_PRODUCTS_CATEGORY, productsCategoryRequestWorker);
}

  export function* productsRequestWorker() {
    try {
      const {data} = yield call(axios.get, API.products);
      yield put(setAllProducts(data));
    } catch (err) {
      yield put(errorRequest());
    }
  }

export function* productRequestWorker({payload: {id}}) {
    try {
      const data = yield call(getProduct, id);
      yield put(setProduct(data));
    } catch (err) {
      yield put(errorRequest());
    }
  }

export function* productsCategoryRequestWorker({payload: {category}}) {
  try {
    const data = yield call(getProductsCategory, category);
    yield put(setProductsCategory(data));
  } catch (err) {
    yield put(errorRequest());
  }
}
  