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
    return { type: ACTION_TYPES.SEND_EMAIL_ERROR, payload};
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

export function saveDeliveryFormData(payload) {
    return { type: ACTION_TYPES.SAVE_DELIVERY_FORM, payload};
};

export function savePaymentFormData(payload) {
    return { type: ACTION_TYPES.SAVE_PAYMENT_FORM, payload};
};

export function clearFormData() {
    return { type: ACTION_TYPES.CLEAR_FORM_DATA};
};

export function clearCartItems() {
    return { type: ACTION_TYPES.CLEAR_CART_ITEMS};
};

export function addOrderFormData(payload) {
    return { type: ACTION_TYPES.ADD_ORDER_FORM_DATA, payload};
};

export function sendOrder(payload) {
    return { type: ACTION_TYPES.SEND_ORDER, payload};
};

export function orderResponse(payload) {
    return { type: ACTION_TYPES.ORDER_RESPONSE, payload};
};
