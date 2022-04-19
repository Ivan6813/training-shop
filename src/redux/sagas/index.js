import {takeLatest, call, put} from "redux-saga/effects";
import axios from "axios";
import API from "../../api";
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

export default function* rootSaga() {
  yield requestsWatcher();
}

export function* requestsWatcher() {
  yield takeLatest(ACTION_TYPES.GET_PRODUCTS, productsRequestWorker);
  yield takeLatest(ACTION_TYPES.SEND_EMAIL, subscribeRequestWorker);
  yield takeLatest(ACTION_TYPES.SEND_REVIEW, reviewRequestWorker);
  yield takeLatest(ACTION_TYPES.SEND_ORDER, orderRequestWorker);
  yield takeLatest(ACTION_TYPES.GET_COUNTRIES, countriesRequestWorker);
  yield takeLatest(ACTION_TYPES.GET_CITIES, citiesRequestWorker);
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

  