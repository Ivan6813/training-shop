import {takeEvery, call, put} from "redux-saga/effects";
import {API} from "../../api";
import {ACTION_TYPES} from "../../constants/action-types";
import {setProducts, errorRequest, sendEmailResponse, errorSendEmail, sendReviewResponse, errorSendReview} from "../actions";
import axios from "axios";

export default function* rootSaga() {
    yield requestsWatcher();
}

export function* requestsWatcher() {
    yield takeEvery(ACTION_TYPES.GET_PRODUCTS, productsRequestWorker);
    yield takeEvery(ACTION_TYPES.SEND_EMAIL, subscribeRequestWorker);
    yield takeEvery(ACTION_TYPES.SEND_REVIEW, reviewRequestWorker);
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
    yield call(axios.post, API.sendReview, payload);
    yield put(sendReviewResponse());
  } catch (err) {
    yield put(errorSendReview());
  }
}

  