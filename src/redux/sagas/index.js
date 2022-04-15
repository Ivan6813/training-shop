import {takeEvery, call, put} from "redux-saga/effects";
import {API} from "../../api";
import {ACTION_TYPES} from "../../constants/action-types";
import {
  setProducts,
  errorRequest,
  sendEmailResponse,
  errorSendEmail,
  sendReviewResponse,
  errorSendReview,
  orderResponse,
  setCountries,
  setCities,
  countriesRequestError,
  citiesRequestError
} from "../actions";
import axios from "axios";

export default function* rootSaga() {
  yield requestsWatcher();
}

export function* requestsWatcher() {
  yield takeEvery(ACTION_TYPES.GET_PRODUCTS, productsRequestWorker);
  yield takeEvery(ACTION_TYPES.SEND_EMAIL, subscribeRequestWorker);
  yield takeEvery(ACTION_TYPES.SEND_REVIEW, reviewRequestWorker);
  yield takeEvery(ACTION_TYPES.SEND_ORDER, orderRequestWorker);
  yield takeEvery(ACTION_TYPES.GET_COUNTRIES, countriesRequestWorker);
  yield takeEvery(ACTION_TYPES.GET_CITIES, citiesRequestWorker);
}

export function* productsRequestWorker() {
  try {
    const {data} = yield call(axios.get, API.products);
    yield put(setProducts(data));
  } catch (err) {
    yield put(errorRequest());
  }
}

export function* subscribeRequestWorker({payload}) {
  try {
    const {data} = yield call(axios.post, API.sendEmail, payload);
    yield put(sendEmailResponse(data));
  } catch (err) {
    yield put(errorSendEmail(err.message));
  }
}

export function* reviewRequestWorker({payload}) {
  try {
    const {data} = yield call(axios.post, API.sendReview, payload);
    yield put(sendReviewResponse(data));
  } catch (err) {
    yield put(errorSendReview());
  }
}

export function* orderRequestWorker({payload}) {
  try {
    const {data} = yield call(axios.post, API.sendOrder, payload);
    yield put(orderResponse(data.message));
  } catch (err) {
    yield put(orderResponse(err.message));
  }
}

export function* countriesRequestWorker() {
  try {
    const {data} = yield call(axios.get, API.getCountries);
    yield put(setCountries(data));
  } catch (err) {
    yield put(countriesRequestError(err.message));
  }
}

export function* citiesRequestWorker({payload}) {
  try {
    const {data} = yield call(axios.post, API.getCities, payload);
    yield put(setCities(data));
  } catch (err) {
    yield put(citiesRequestError(err.message));
  }
}

  