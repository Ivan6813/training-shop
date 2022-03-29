import { ACTION_TYPES } from "../../constants/action-types";

export function addOrder(payload) {
    return { type: ACTION_TYPES.ADD_ORDER , payload};
};

export function removeOrder(payload) {
    return { type: ACTION_TYPES.REMOVE_ORDER , payload};
};

export function increaseQauntity(payload) {
    return { type: ACTION_TYPES.INCREASE_QUANTITY , payload};
};

export function decreaseQauntity(payload) {
    return { type: ACTION_TYPES.DECREASE_QUANTITY , payload};
};

export function getProducts() {
    return { type: ACTION_TYPES.GET_PRODUCTS};
};

export function setProducts(payload) {
    return { type: ACTION_TYPES.SET_PRODUCTS, payload};
};

export function errorRequest() {
    return { type: ACTION_TYPES.ERROR_REQUEST};
};

export function sendEmail(payload) {
    return { type: ACTION_TYPES.SEND_EMAIL, payload};
};

export function sendEmailResponse(payload) {
    return { type: ACTION_TYPES.SEND_EMAIL_RESPONSE, payload};
};

export function errorSendEmail(payload) {
    return { type: ACTION_TYPES.ERROR_SEND_EMAIL, payload};
};

export function openReviewWindow() {
    return { type: ACTION_TYPES.OPEN_REVIEW_WINDOW};
};

export function closeReviewWindow() {
    return { type: ACTION_TYPES.CLOSE_REVIEW_WINDOW};
};

export function sendReview(payload) {
    return { type: ACTION_TYPES.SEND_REVIEW, payload};
};

export function sendReviewResponse(payload) {
    return { type: ACTION_TYPES.SEND_REVIEW_SUCCESS, payload};
};

export function errorSendReview() {
    return { type: ACTION_TYPES.SEND_REVIEW_ERROR};
};
